import World from '../game/world/world';
import { Application, Graphics, interaction, Point } from 'pixi.js';
import { Composite, Vector } from 'matter-js';
import LevelDefinition from '../levels/level-definition';
import ServiceProvider from '../util/service-provider';
import { Service } from '../util/service-provider';
import FollowPath from '../game/units/actions/follow-path';

export default class Renderer implements Service {
  
    pixiapp: Application;
    debug: Graphics; 
    world: World;
    canvas: HTMLCanvasElement;

    constructor(public provider: ServiceProvider) {
        
        this.world = provider.getService("world")
        this.canvas = provider.getValue("canvas");

        this.pixiapp = new Application({
            view: this.canvas
        });

        let input = new interaction.InteractionManager(this.pixiapp.renderer);
        input.on("mousedown", e => {
            let pos: Point = e.data.global;
            console.log(pos)
            this.world.units.forEach(u => {
                u.moveTo(Vector.create(pos.x, pos.y));
            })            
        })
        
        this.debug = new Graphics();
        this.pixiapp.stage.addChild(this.debug);        
    }

    render() {
        this.renderDebug();
    }

    private renderDebug() {

        let { debug } = this;
        debug.clear();
        debug.beginFill(0xff0000)

        this.world.units.forEach(unit => {
            let pos = unit.body.position;
            debug.drawCircle(pos.x, pos.y, unit.config.bodyRadius);
        })
        debug.endFill();

        debug.lineStyle(1, 0x00ff00)
        Composite.allBodies(this.world.engine.world).forEach(body => {
            let verts = body.vertices;
            debug.moveTo(verts[0].x, verts[0].y)
            for (var i = 1; i < verts.length; i++) {
                debug.lineTo(verts[i].x, verts[i].y);
            }
            debug.lineTo(verts[0].x, verts[0].y)
        });


        let navmesh = this.world.navmesh;        
        if (navmesh) {
            
            for (let i of navmesh._graph.nodes) {
                let edges:any[] = i.polygon.edges;
                let flattenedEdges:any[] = i.polygon._flattenedEdges;
                
                if (!flattenedEdges) {
                    flattenedEdges = i.polygon._flattenedEdges = edges.reduce((acc: any[], edge: any) => {                        
                        acc.push(edge.start)
                        acc.push(edge.end)
                        return acc;
                    }, []);    
                }

                debug.lineStyle(1, 0xffffff, 0.1)
                debug.beginFill(0xffffff, 0.1)
                debug.moveTo(flattenedEdges[0].x, flattenedEdges[0].y)
                for (let i = 1; i < flattenedEdges.length; i++) {
                    debug.lineTo(flattenedEdges[i].x, flattenedEdges[i].y)
                }              
                debug.endFill();
            }

            let path = navmesh.findPath({ x: 0, y: 0 }, { x: 700, y: 550 });
            
            let paths = this.world.units
                .map(u => u.state.ai.action && (<FollowPath>u.state.ai.action).path)
                .filter(m => Array.isArray(m))
            
            if (paths.length > 0) path = paths[0];
            
            if (path) {
                debug.lineStyle(2, 0xff0000);
                debug.moveTo(path[0].x, path[0].y);
                for (let i = 1; i < path.length; i++) {
                    debug.lineTo(path[i].x, path[i].y)
                }
            }
        }
        
    }

    updateLayout(): any {
        this.pixiapp.renderer.resize(this.canvas.width, this.canvas.height);
    }
}