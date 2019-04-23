import Unit from '../unit';

export default abstract class UnitAction {
    private _completed: boolean = false;
    private _chained: UnitAction = null;    

    constructor(public unit: Unit) {}
    abstract update(dt: number): void;  
   
    added() {
        this._completed = false;
    }

    finish() {
        this._completed = true;        
    }

    chain(action: UnitAction) {
        this._chained = action;
        return this;
    }

    prepend(action: UnitAction) {
        this.chain(action);
        action.chain(this);
        return this.finish();
    }

    isFinished() {
        return this._completed;
    }

    get chained() {
        return this._chained;
    }
}