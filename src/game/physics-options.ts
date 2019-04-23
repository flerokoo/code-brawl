import { Body } from 'matter-js';

interface PhysicsMaterial {
    friction?: number;
    frictionAir?: number;
    frictionStatic?: number;
    density?: number;
    restitution?: number;
    [name: string]: any;
}

let PhysicsOptions = {
    // see body.collisionFilter of matterjs body
    // http://brm.io/matter-js/docs/classes/Body.html    
    filters: {
        unit: {
            category: 0x0001,
            group: 0,
            mask: 0x0011
        },
        obstacle: {
            category: 0x0010,
            group: 0,
            mask: 0x0011
        }
    },
    materials: {
        unit: {
            friction: 0,
            frictionAir: 0.02,
            frictionStatic: 0
        },
        obstacle: {
            friction: 0,
            frictionAir: 0,
            frictionStatic: 0
        }
    }
}

export default PhysicsOptions;

export let applyMaterialToBody = (material: PhysicsMaterial, body: Body) => {
    
    let applyIfExists = (prop:string, def:number) => {
        return typeof material[prop] == 'number'
            ? material[prop]
            : def ;
    }

    body.friction = applyIfExists("friction", 0.1);
    body.frictionAir = applyIfExists("frictionAir", 0.01);
    body.frictionStatic = applyIfExists("frictionStatic", 0.5);
    body.restitution = applyIfExists("restitution", 0);
    body.density = applyIfExists("density", body.density);

    return body;
}