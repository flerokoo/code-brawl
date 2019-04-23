import World from './world';
import Unit from '../units/unit';
import { Vector } from 'matter-js';
import Team from '../teams';

export interface WorldInterface {
    units: Unit[];
    friendlyUnits: Unit[];
    enemyUnits: Unit[];
    isPointReachable: (v: Vector) => Boolean;
    arePointsInDirectVisibility: (p1: Vector, p2: Vector) => Boolean;
}

export let constructInterfaceForWorld = (world: World, player:Team):WorldInterface => {

    let units = world.units.map(u => u.interface);
    let friendlyUnits = units.filter(unit => unit.team == player);
    let enemyUnits = units.filter(unit => unit.team != player);
    let navmesh = world.navmesh;

    if (!navmesh) {
        throw new Error("World without navmesh is not supported");
    }

    return Object.defineProperties({}, {
        "units": {
            get: () => world.units
        },
        "friendlyUnits": {
            get: () => friendlyUnits
        },
        "enemyUnits": {
            get: () => enemyUnits
        },
        "isPointReachable": {
            value: world.isPointReachable.bind(world)
        },
        "arePointsInDirectVisibility": {
            value: world.arePointsInDirectVisibility.bind(world)
        }
    })
}