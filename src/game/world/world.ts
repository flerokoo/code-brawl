import Unit from '../units/unit';
import { Engine, Render, World as MatterWorld, Bodies, Runner, Composite, Vector, Query, Body } from 'matter-js';
import { Service } from '../../util/service-provider';
import ServiceProvider from '../../util/service-provider';
import Navmesh from 'navmesh';
import WorldFactory from './world-factory';
import LevelDefinition from '../../levels/level-definition';

export default class World implements Service {

    
    running: Boolean = false;
    units: Unit[] = []; 
    obstacles: Body[] = [];
    engine: Engine;
    navmesh: Navmesh;   
    
    
    // render: Render;  

    constructor(public provider:ServiceProvider) {


        this.engine = Engine.create();
        // this.render = Render.create({
        //     element: document.body,
        //     engine: this.engine
        // })

        // document.body.append(this.render.canvas);
        this.engine.world.gravity.y = 0;
        // MatterWorld.add(this.engine.world, Bodies.rectangle(50, 50, 1000, 50, {isStatic: true}))

        // Engine.run(this.engine);
        // Render.run(this.render);
        let nv = [[{"y": -609.9999905, "x": 1000.0000954}, {"y": -521.0680008, "x": 798.7284184}, {"y": -538.953495, "x": 253.4687996}], [{"y": -372.319293, "x": 805.3359032}, {"y": -414.2843246, "x": 880.8063507}, {"y": -215.6824112, "x": 832.4869156}], [{"y": -116.6066408, "x": 186.4490151}, {"y": -113.1066561, "x": 755.5249214}, {"y": 0.0, "x": 0.0}], [{"y": -396.5650558, "x": 588.5612488}, {"y": -487.4406815, "x": 329.2072296}, {"y": -479.1028023, "x": 723.2580185}], [{"y": -609.9999905, "x": 1000.0000954}, {"y": -414.2843246, "x": 880.8063507}, {"y": -521.0680008, "x": 798.7284184}], [{"y": -521.0680008, "x": 798.7284184}, {"y": -479.1028023, "x": 723.2580185}, {"y": -538.953495, "x": 253.4687996}], [{"y": -538.953495, "x": 253.4687996}, {"y": -414.5696163, "x": 160.144186}, {"y": -609.9999905, "x": 0.0}], [{"y": -479.1028023, "x": 723.2580185}, {"y": -487.4406815, "x": 329.2072296}, {"y": -538.953495, "x": 253.4687996}], [{"y": -609.9999905, "x": 0.0}, {"y": -609.9999905, "x": 1000.0000954}, {"y": -538.953495, "x": 253.4687996}], [{"y": -363.0568266, "x": 235.882616}, {"y": -433.7546349, "x": 288.9268398}, {"y": -301.3820648, "x": 439.6010876}], [{"y": -433.7546349, "x": 288.9268398}, {"y": -392.7478075, "x": 433.1062317}, {"y": -301.3820648, "x": 439.6010876}], [{"y": 0.0, "x": 0.0}, {"y": -609.9999905, "x": 0.0}, {"y": -199.4843602, "x": 147.802496}], [{"y": -609.9999905, "x": 0.0}, {"y": -414.5696163, "x": 160.144186}, {"y": -199.4843602, "x": 147.802496}], [{"y": -199.4843602, "x": 147.802496}, {"y": -414.5696163, "x": 160.144186}, {"y": -363.0568266, "x": 235.882616}], [{"y": -238.1308556, "x": 230.6802273}, {"y": -199.4843602, "x": 147.802496}, {"y": -363.0568266, "x": 235.882616}], [{"y": -155.5877686, "x": 693.0655479}, {"y": -155.25316, "x": 269.3267345}, {"y": -301.3820648, "x": 439.6010876}], [{"y": -258.1635475, "x": 770.0276852}, {"y": -155.5877686, "x": 693.0655479}, {"y": -305.1993132, "x": 595.0561523}], [{"y": -238.1308556, "x": 230.6802273}, {"y": -363.0568266, "x": 235.882616}, {"y": -301.3820648, "x": 439.6010876}], [{"y": -305.1993132, "x": 595.0561523}, {"y": -472.4533558, "x": 728.3689976}, {"y": -372.319293, "x": 805.3359032}], [{"y": -238.1308556, "x": 230.6802273}, {"y": -301.3820648, "x": 439.6010876}, {"y": -155.25316, "x": 269.3267345}], [{"y": -155.5877686, "x": 693.0655479}, {"y": -301.3820648, "x": 439.6010876}, {"y": -305.1993132, "x": 595.0561523}], [{"y": -258.1635475, "x": 770.0276852}, {"y": -305.1993132, "x": 595.0561523}, {"y": -372.319293, "x": 805.3359032}], [{"y": -609.9999905, "x": 1000.0000954}, {"y": 0.0, "x": 1000.0000954}, {"y": -414.2843246, "x": 880.8063507}], [{"y": -215.6824112, "x": 832.4869156}, {"y": -258.1635475, "x": 770.0276852}, {"y": -372.319293, "x": 805.3359032}], [{"y": -414.2843246, "x": 880.8063507}, {"y": 0.0, "x": 1000.0000954}, {"y": -215.6824112, "x": 832.4869156}], [{"y": 0.0, "x": 0.0}, {"y": -199.4843602, "x": 147.802496}, {"y": -116.6066408, "x": 186.4490151}], [{"y": -116.6066408, "x": 186.4490151}, {"y": -155.25316, "x": 269.3267345}, {"y": -113.1066561, "x": 755.5249214}], [{"y": -113.1066561, "x": 755.5249214}, {"y": -215.6824112, "x": 832.4869156}, {"y": 0.0, "x": 1000.0000954}], [{"y": -155.25316, "x": 269.3267345}, {"y": -155.5877686, "x": 693.0655479}, {"y": -113.1066561, "x": 755.5249214}], [{"y": 0.0, "x": 1000.0000954}, {"y": 0.0, "x": 0.0}, {"y": -113.1066561, "x": 755.5249214}], [{"y": -479.1028023, "x": 723.2580185}, {"y": -472.4533558, "x": 728.3689976}, {"y": -396.5650558, "x": 588.5612488}], [{"y": -396.5650558, "x": 588.5612488}, {"y": -392.7478075, "x": 433.1062317}, {"y": -487.4406815, "x": 329.2072296}], [{"y": -472.4533558, "x": 728.3689976}, {"y": -305.1993132, "x": 595.0561523}, {"y": -396.5650558, "x": 588.5612488}], [{"y": -433.7546349, "x": 288.9268398}, {"y": -487.4406815, "x": 329.2072296}, {"y": -392.7478075, "x": 433.1062317}]] 

        nv.forEach( poly => {
            poly.forEach(vert => {
                vert.y *= -1;
                // vert.x = Math.round(vert.x);
                // vert.y = Math.round(vert.y)
            })
        })

        this.loadLevel({
            navmesh: nv,
            width: 1021,
            height: 600,
            obstacles: [{
                verts: [
                    { x: 185, y: 117 },
                    { x: 269, y: 156 },
                    { x: 228, y: 236 },
                    { x: 149, y: 198 }
                ]
            }, {                
                verts: [
                    { x: 439, y: 300 },
                    { x: 594, y: 305 },
                    { x: 588, y: 392 },
                    { x: 432, y: 390 },
                ]
            }, {
                verts: [
                    { x: 694, y: 152 },
                    { x: 755, y: 113 },
                    { x: 831, y: 214 },
                    { x: 769, y: 256 }
                ]
            }, {
                verts: [
                    {x: 806, y: 373},
                    {x: 878, y: 414},
                    {x: 797, y: 516},
                    {x: 724, y: 476}
                ]
            }, {
                verts: [
                    {x: 330, y: 484},
                    {x: 250, y: 535},
                    {x: 161, y: 412},
                    {x: 235, y: 362}
                ]
            }
            ]})
    }

    addUnit(unit: Unit) {
        this.units.push(unit);
        unit.world = this;
        MatterWorld.add(this.engine.world, unit.body);
        return this;
    }

    step() {
        Engine.update(this.engine, 1 / 60)
        this.units.forEach(u => u.update(1/60))
    }

    clear() {
        MatterWorld.clear(this.engine.world, false);
        Engine.clear(this.engine);
    }

    loadLevel(level:LevelDefinition) {
        this.clear();
        WorldFactory.createWalls(this.engine.world, level.width, level.height)
        WorldFactory.createObstacles(this.engine.world, level.obstacles);
        this.navmesh = new Navmesh(level.navmesh, 0);
        console.log(Navmesh)
    }

    isPointReachable(p: Vector) {
        if (!this.navmesh) throw new Error("Add navmesh to this level!");
        return this.navmesh.getPolygons().some((poly:any) => poly.contains(p));        
    }

    arePointsInDirectVisibility(p1: Vector, p2: Vector) {
        let collisions = Query.ray(this.obstacles, p1, p2);
        return collisions.length == 0;
    }
}

