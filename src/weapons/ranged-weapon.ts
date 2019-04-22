import Weapon from './weapon';
import WeaponType from './weapon-types';
import { Vector } from 'matter-js';
import Unit from '../game/units/unit';
export default class RangedWeapon extends Weapon {
    
    constructor() {
        super();
        this.type = WeaponType.RANGED;
    }

    use(target: Unit | Vector) {
        if (this.isInRange(target)) {
            // launch projectile
        }
    }    
}