import Weapon from "./weapon";
import Unit from "../game/units/unit";
import { Vector } from "matter-js";
import WeaponType from './weapon-types';

export default class MeleeWeapon extends Weapon {
    constructor() {
        super();
        this.type = WeaponType.MELEE;
    }

    use(target: Unit | Vector) {
        if (target instanceof Vector) {
            throw new Error("Using melee weapons allowed only on Unit targets");
        }

        if (this.isInRange(target)) {
            target.receiveDamage(this.damage);
        }
    }

}