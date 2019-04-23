import World from '../world/world';
import { UnitInterface, constructInterfaceForUnit } from './unit-interface';
import { Bodies, Body, Vector } from 'matter-js';
import Weapon from '../../weapons/weapon';
import UnitAction from './actions/unit-action';
import FollowPath from './actions/follow-path';
import Team from '../teams';
import { applyMaterialToBody } from '../physics-options';
import PhysicsOptions from '../physics-options';
import Attack from './actions/attack';
import AI from './actions/ai';


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
    ai?:AI
}

export default class Unit {

    private _forcedWeaponIndex: number = -1;
    private _selectedWeaponIndex: number = -1;
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
            dead: false,
            ai: new AI(this)
        };

        this.state.weapons.forEach(weapon => weapon.setOwner(this));
    }    

    update(dt:number) {
        // this.body.force = Vector.create(10, 10)
        // Body.applyForce(this.body, this.body.position, Vector.create(0.00005, 0.00005))
        if (this.state.dead) {
            return;    
        }

        this.state.ai.update(dt);
    }

    receiveDamage(damage: number): any {
        this.state.health -= damage;
        if (this.state.health <= 0) {
            this.state.dead = true;
        }
    }

    moveTo(pos: Vector) {
        this.state.ai.setAction(new FollowPath(this, pos));
        return this;
    }

    attack(target: Unit | Vector) {
        if (target == this) return;
        
        this.state.ai.setAction(new Attack(this, target));
        return this;
    }

    stop() {
        this.state.ai.stop();
    }

    forceWeapon(index: number) {
        if (index < 0 || index >= this.state.weapons.length) {
            throw new Error(`No weapon with index ${index}`)            
        }

        this._forcedWeaponIndex = index;
        this._selectedWeaponIndex = -1; // to reselect next time selectedWeapon getter used
    }

    selectWeapon() {
        if (this._forcedWeaponIndex >= 0) {
            this._selectedWeaponIndex = this._forcedWeaponIndex;
        } else {
            this._selectedWeaponIndex = this.state.weapons.reduce((prev, cur, i, arr) => {
                return cur.priority > arr[prev].priority
                    ? i : prev;
            }, 0);
        }
    }

    get selectedWeapon() {
        if (this._selectedWeaponIndex < 0) this.selectWeapon();
        return this.state.weapons[this._selectedWeaponIndex]
    }

}