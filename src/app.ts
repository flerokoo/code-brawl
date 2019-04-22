import World from './game/world/world';
import Renderer from './render/renderer';

export interface AppOptions {
    canvas: HTMLCanvasElement
}

export default class App {

    world: World;
    renderer: Renderer;
    canvas: HTMLCanvasElement;
    simulating: Boolean = true;
    rendering: Boolean = true;

    constructor(opts:AppOptions) {
        this.world = new World();
        this.canvas = opts.canvas;
        this.renderer = new Renderer(this.world, this.canvas);
        this.updateLayout();
        this.loop();
    }

    updateLayout() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.renderer.updateLayout();
    }

    loop() {
        if (this.simulating) this.world.step();
        if (this.rendering) this.renderer.render();
        window.requestAnimationFrame(this.loop.bind(this))
    }


}