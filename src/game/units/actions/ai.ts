import Unit from '../unit';
import UnitAction from './unit-action';
export default class AI {

    private _action: UnitAction = null;

    constructor(public owner: Unit) {
        
    }

    update(dt: number) {
        let action = this._action;
        if (action) {
            action.update(dt);
            if (action.isFinished()) {
                console.log("replacing");
                this.setAction(action.chained);
            }
        }
    }

    setAction(act: UnitAction) {
        this._action = act;
        if (act) act.added();
        return this;
    }

    stop() {
        this._action = null;
        return this;
    }

    get action() {
        return this._action;
    }


}