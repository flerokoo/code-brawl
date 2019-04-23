import { UnitConfig } from '../game/units/unit';
import { Vector } from 'matter-js';
import Team from '../game/teams';


type ArrayOfVectors = { x: number, y: number }[];

type ObstacleDefinition = {
    verts: ArrayOfVectors;
}

type UnitDefinition = {   
    config: UnitConfig,
    team: Team, 
    positions: ArrayOfVectors
}



export default interface LevelDefinition {
    navmesh: ArrayOfVectors[];
    width: number;
    height: number;
    obstacles?: ObstacleDefinition[];
    // units: UnitDefinition[];
}
