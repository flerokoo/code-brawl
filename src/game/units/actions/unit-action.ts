import Unit from '../unit';
export default abstract class UnitAction {
    private _completed: boolean = false;

    constructor(public unit: Unit) {}
    abstract update(dt: number): void;
    
    public finish() {
        this._completed = true;        
    }

    isFinished() {
        return this._completed;
    }
}