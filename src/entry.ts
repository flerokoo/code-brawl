import Unit from './game/units/unit';
import World from './game/world/world';
// import * as Navmesh from 'navmesh';
import App from './app';
import { Bodies, Body } from 'matter-js';
import MeleeWeapon from './weapons/melee-weapon';
import RangedWeapon from './weapons/ranged-weapon';


window.onload = () => {
    // let w = new World()
    
    // let u = new Unit({
    //     health: 100,
    //     bodyRadius: 10
    // });

    // (<any>window).unit = u;

    // w.addUnit(u)

    // w.start();

    // const meshPolygonPoints = [
    //     [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }], // Polygon 1
    //     [{ x: 10, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 10, y: 10 }], // Polygon 2
    //     [{ x: 10, y: 10 }, { x: 20, y: 10 }, { x: 20, y: 20 }, { x: 10, y: 20 }] // Polygon 3
    //   ];

    // (<any>window).nav = new Navmesh(meshPolygonPoints)
    
    let canvas = document.getElementsByTagName("canvas")[0];
    let app = new App({ canvas });


    for (let i = 0; i < 1; i++) {
        let u = new Unit({
            type: "archer",
            health: 100,
            bodyRadius: 10,
            moveSpeed: 10,
            weaponsGetter: unit => [
                new RangedWeapon().setPriority(1),
                new MeleeWeapon().setPriority(0)
            ]
        });

        
        (<any>window).unit = u;
        Body.setPosition(u.body, { x: Math.random() * 100 + 100, y: Math.random() * 100 });            
   
        app.world.addUnit(u);


        let enemy = new Unit({
            type: "swordsman",
            health: 100,
            bodyRadius: 10,
            moveSpeed: 10,
            weaponsGetter: unit => [
                new MeleeWeapon().setPriority(0)
            ]
        });

        Body.setPosition(enemy.body, { x: 635, y: 429 });

        app.world.addUnit(enemy);
        (<any>window).enemy = enemy;

    }
    
    
}