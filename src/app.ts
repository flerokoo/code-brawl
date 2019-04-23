import World from './game/world/world';
import Renderer from './render/renderer';
import ServiceProvider from './util/service-provider';
import Messenger from './util/messenger';

export interface AppOptions {
    canvas: HTMLCanvasElement
}

export default class App extends ServiceProvider {

    world: World;
    renderer: Renderer;
    canvas: HTMLCanvasElement;
    simulating: Boolean = true;
    rendering: Boolean = true;

    constructor(opts: AppOptions) {
        
        super();        

        this.registerService("world", World);
        this.registerService("renderer", Renderer);
        this.registerService("messenger", Messenger);
        this.registerValue("canvas", opts.canvas)

        this.world = this.getService("world");
        this.renderer = this.getService("renderer");

        this.canvas = opts.canvas;
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