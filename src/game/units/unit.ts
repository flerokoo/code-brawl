import World from '../world/world';
import { UnitInterface, constructInterfaceForUnit } from './unit-interface';
import { Bodies, Body, Vector } from 'matter-js';
import Weapon from '../../weapons/weapon';
import UnitAction from './actions/unit-action';
import FollowPath from './actions/follow-path';
import Team from '../teams';
import { applyMaterialToBody } from '../physics-options';
import PhysicsOptions from '../physics-options';


export interface UnitConfig {
    type:string,
    health: number,
    bodyRadius: number,
    moveSpeed: number,
    weaponsGetter:(unit:Unit)=>Weapon[]
}

export interface UnitState {
    health: number,
    dead: boolean,
    weapons: Weapon[],
    action?:UnitAction
}

export default class Unit {

    world: World;
    interface: UnitInterface;
    state: UnitState;
    body: Body;
    team: Team; 
 
    constructor(public config: UnitConfig) {
        this.body = Bodies.circle(0, 0, config.bodyRadius)     
        applyMaterialToBody(PhysicsOptions.materials.unit, this.body);

        this.interface = constructInterfaceForUnit(this);

        this.state = {
            weapons: config.weaponsGetter(this),
            health: config.health,
            dead: false
        };

        this.state.weapons.forEach(weapon => weapon.setOwner(this));
    }    

    update(dt:number) {
        // this.body.force = Vector.create(10, 10)
        // Body.applyForce(this.body, this.body.position, Vector.create(0.00005, 0.00005))
        if (this.state.dead) {
            return;    
        }

        if (this.state.action) {
            this.state.action.update(dt);
            if (this.state.action.isFinished()) {
                this.state.action = null;
            }
        }
    }

    receiveDamage(damage: number): any {
        this.state.health -= damage;
        if (this.state.health <= 0) {
            this.state.dead = true;
        }
    }

    moveTo(pos: Vector) {
        this.state.action = new FollowPath(this, pos);
        return this;
    }

    stop() {
        this.state.action = null;
    }

}