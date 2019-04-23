export default class Ticker {
    tick = 0;

    constructor(public ticks: number = 60) { }

    reset() {
        this.tick = 0;
    }

    update() {
        this.tick++;
        if (this.tick > this.ticks) {
            this.tick = 0;
        }
    }

    

}