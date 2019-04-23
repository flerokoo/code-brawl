import { Body, World, Bodies, Vector, Vertices } from 'matter-js';
import { applyMaterialToBody } from '../physics-options';
import PhysicsOptions from '../physics-options';

export default class WorldFactory {

    static createObstacles(world: World, obstacles: { verts: { x: number; y: number; }[]; }[]) {
        return obstacles.map(o => WorldFactory.createObstacle(world, o));
    }

    static createObstacle(world: World, obstacle: { verts: { x: number; y: number; }[]; },
        chamferSize: number = 25 ) {
        let center = Vertices.centre(obstacle.verts);
        obstacle.verts = <any>Vertices.chamfer(obstacle.verts, chamferSize, 3, 2, 4)
        let body = Bodies.fromVertices(center.x, center.y, [obstacle.verts], { isStatic: true });
        
        applyMaterialToBody(PhysicsOptions.materials.obstacle, body);        
        World.add(world, body);
        return body;
    }

    static createWalls(world: World, w: number, h: number, thickness: number = 50) {
        let walls = [
            Bodies.rectangle(w / 2, -thickness, w + thickness * 2, thickness, { isStatic: true }),
            Bodies.rectangle(w / 2, h, w + thickness * 2, thickness, { isStatic: true }),
            Bodies.rectangle(-thickness, h / 2, thickness, h + thickness * 2, { isStatic: true }),
            Bodies.rectangle(w, h / 2, thickness, h + thickness * 2, { isStatic: true })
        ];

        walls.forEach(wall => {
            applyMaterialToBody(PhysicsOptions.materials.obstacle, wall);
            wall.collisionFilter = PhysicsOptions.filters.obstacle;
        })  

        World.add(world, walls);

        return walls;
    }

}