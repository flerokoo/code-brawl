import Weapon from './weapon';
import WeaponType from './weapon-types';
import { Vector } from 'matter-js';
import Unit from '../game/units/unit';
export default class RangedWeapon extends Weapon {
    
    constructor() {
        super();
        this.type = WeaponType.RANGED;
        this.minRange = 15;
        this.maxRange = 100;
    }

    useEffect(target: Unit | Vector) {
        if (this.isInRange(target)) {
            // launch projectile
            console.log("using ranged")
            return true;
        }
    
        return false;
    }    
}