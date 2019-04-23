import { Vector } from 'matter-js';
import Unit from '../game/units/unit';
import WeaponType from './weapon-types';
export default abstract class Weapon {

    public owner: Unit = null;
    public priority: number = 0;
    public damage: number;
    public cooldown: number;
    public minRange: number;
    public maxRange: number;
    public type: WeaponType;

    private _useTimeStamp = 0;

    use(target: Vector | Unit) {
        if (this.cooledDown) {
            if (this.useEffect(target)) {
                // weapon was used
                this._useTimeStamp = Date.now();
            }
        }
    }       

    abstract useEffect(target: Vector | Unit): boolean;

    

    setOwner(un: Unit) {
        this.owner = un;
        return this;
    }
    
    setPriority(priority: number) {
        this.priority = priority;
        return this;
    }

    isInRange(pos: Vector | Unit) {
        
        if (pos instanceof Unit) {
            pos = pos.body.position;
        }

        let upos = this.owner.body.position;
        let dist = Vector.magnitude(Vector.sub(upos, pos)); // TODO to sqrt
        return dist >= this.minRange && dist <= this.maxRange;        
    }

    get cooledDown() {
        return Date.now() - this._useTimeStamp >= this.cooldown;
    }

}