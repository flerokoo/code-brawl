import World from '../world/world';
import { UnitInterface, constructInterfaceForUnit } from './unit-interface';
import { Bodies, Body, Vector } from 'matter-js';
import Weapon from '../../weapons/weapon';


export interface UnitConfig {
    type:string,
    health: number,
    bodyRadius: number,
    weaponsGetter:(unit:Unit)=>Weapon[]
}

export interface UnitState {
    health: number,
    dead: boolean,
    weapons: Weapon[]
}

export default class Unit {

    world: World;
    interface: UnitInterface;
    state: UnitState;
    body: Body;

    constructor(public config: UnitConfig) {
        this.body = Bodies.circle(0, 0, config.bodyRadius)        
        this.interface = constructInterfaceForUnit(this);

        this.state = {
            weapons: config.weaponsGetter(this),
            health: config.health,
            dead: false
        };

        this.state.weapons.forEach(weapon => weapon.setOwner(this));
    }    

    update() {
        // this.body.force = Vector.create(10, 10)
        Body.applyForce(this.body, this.body.position, Vector.create(0.00005, 0.00005))
    }

    receiveDamage(damage: number): any {
        this.state.health -= damage;
        if (this.state.health <= 0) {
            this.state.dead = true;
        }
    }

}