import UnitAction from './unit-action';
import { Vector, Body } from 'matter-js';
import Unit from '../unit';
import Flatten from '@flatten-js/core';
import Ticker from '../../../util/ticker';

export default class FollowPath extends UnitAction {

    public path: Vector[];
    public index: number;
    
    private _ticker: Ticker = new Ticker(60);

    constructor(public unit: Unit, public target:Vector | Unit) {
        super(unit); 
    }

    update(dt: number) {
        this._ticker.update();

        if (!this.path || this.isPathInvalid()) {
            this.regenPath();
        }

        if (this.path == null) {
            // TODO show to user that unit cant reach this target            
            return;
        }

        let { body, config } = this.unit;
        let { line, point } = Flatten;

        let vel = body.velocity;
        let pos = body.position;

        // Calculate forces to keep body on path segment        
        let pathSegment = this.index > 0
            ? [this.path[this.index], this.path[this.index - 1]]
            : [this.path[this.index], body.position];        
        let posForce = { x: 0, y: 0 };
        if (pathSegment[0].x !== pathSegment[1].x || pathSegment[0].y != pathSegment[1].y) {                
            let pathline = line(point(pathSegment[0].x, pathSegment[0].y), point(pathSegment[1].x, pathSegment[1].y))       
            let distToPathLine = (<any>pathline).distanceTo(point(pos.x, pos.y))[1]; 
            let dx = distToPathLine.pe.x - distToPathLine.ps.x;
            let dy = distToPathLine.pe.y - distToPathLine.ps.y;
           
            let k = 1.75;
            posForce.x = -dx * k;
            posForce.y = -dy * k;

        }       
              
        // Calculate forces to maintain needed speed in needed direction
        let dist = Vector.sub(this.path[this.index], body.position);
        let dirT = Vector.normalise(dist);
        let dirN = Vector.perp(dirT);        
        let velT = Vector.dot(vel, dirT);
        let velN = Vector.dot(vel, dirN);
        let errT = config.moveSpeed - <number>velT;
        let errN = -velN;
        let kT = 1.5;
        let kN = 2.5;
        let forceT = Vector.mult(dirT, errT * kT);
        let forceN = Vector.mult(dirN, errN * kN);

        let velForce = Vector.add(forceT, forceN);        
        
        // apply resulting force
        Body.applyForce(body, body.position, { x: velForce.x + posForce.x, y: velForce.y + posForce.y })
        
        // TODO also apply force perpendicular to current path segment (to compensate overfly on corners)


        let rad = config.bodyRadius * 2;
        rad *= rad;
        if (Vector.magnitudeSquared(Vector.sub(this.path[this.index], body.position))
            < rad) {
            this.index++;

            if (this.index >= this.path.length) {
                this.finish();
            }
        }


        // body.force = force;
        
    }

    regenPath() {
        this.path = this.unit.world.navmesh.findPath(this.unit.body.position,
            this.target instanceof Unit ? this.target.body.position : this.target);        
        this.index = 0;
    }

    isPathInvalid() {
        if (this.path && this.target instanceof Unit) {
            if (this._ticker.tick == 0) {
                let dist = Vector.magnitude(Vector.sub(this.target.body.position, this.path[this.path.length - 1]));
                if (dist > 20) {
                    return true;
                }
            }
        }

        return false;
    }
}