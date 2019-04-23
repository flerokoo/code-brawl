import UnitAction from './unit-action';
import Unit from '../unit';
import { Vector } from 'matter-js';
import FollowPath from './follow-path';

export default class Attack extends UnitAction {
    
    constructor(public unit: Unit, public target:Unit | Vector) {
        super(unit); 
    }

    update(dt: number) {
        let { unit, target } = this;

        let weapon = unit.selectedWeapon;
       
        if (!weapon) {
            return this.finish();
        }

        if (weapon.isInRange(target)) {
            weapon.use(target);
        } else {
            this.prepend(new FollowPath(unit, target));
        }
    }


    

}