import UnitAction from './unit-action';
import { Vector, Body } from 'matter-js';
import Unit from '../unit';

export default class FollowPath extends UnitAction {

    public path: Vector[];
    public index: number;

    constructor(public unit: Unit, public target:Vector) {
        super(unit); 
    }

    update(dt:number) {
        if (!this.path || this.isPathInvalid()) {
            this.regenPath();
        }

        if (this.path == null) {
            // TODO show to user that unit cant reach this target            
            return;
        }

        let { body, config } = this.unit;
        let force = Vector.normalise(Vector.sub(this.path[this.index], body.position));
        force = Vector.mult(force, this.unit.config.moveSpeed);
        Body.applyForce(body, body.position, { x: force.x, y: force.y })
        
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
        this.path = this.unit.world.navmesh.findPath(this.unit.body.position, this.target);        
        this.index = 0;
    }

    isPathInvalid() {
        return false;
    }
}