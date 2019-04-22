import Unit from './unit';
import { Vector, Body } from 'matter-js';

export interface UnitInterface {
    health:number
}

export let constructInterfaceForUnit = (unit: Unit): UnitInterface => {
    
    let position = Object.defineProperties({}, {
        "x": {
            // set: x => Body.setPosition(unit.body, {y: unit.body.position.y, x}),            
            get: () => unit.body.position.x
        },
        "y": {
            // set: y => Body.setPosition(unit.body, {x: unit.body.position.x, y}),            
            get: () => unit.body.position.y
        },
    });

    let velocity = Object.defineProperties({}, {
        "x": {
            // set: x => Body.setPosition(unit.body, {y: unit.body.position.y, x}),            
            get: () => unit.body.velocity.x
        },
        "y": {
            // set: y => Body.setPosition(unit.body, {x: unit.body.position.x, y}),            
            get: () => unit.body.velocity.y
        },
    });

    return Object.defineProperties({}, {
        "health": {
            get: () => unit.state.health
        },
        "position": {            
            get: () => position,
            // set: (position:Vector) => Body.setPosition(unit.body, position)
        },
        "velocity": {            
            get: () => velocity,
            // set: (position:Vector) => Body.setPosition(unit.body, position)
        }
    })
}
