import { cellImage } from "../../functionality/getResource";

const cellTypes = {
    empty: {
        name: 'empty',
        cost: 1,
        // Can spawn as many as needed
        spawnChance: Infinity,
        representation: cellImage.empty
    },
    grass: {
        name: 'grass',
        cost: 2,
        spawnChance: 0.2,
        representation: cellImage.grass
    },
    sand: {
        name: 'sand',
        cost: 4,
        spawnChance: 0.05,
        representation: cellImage.sand
    },
    water: {
        name: 'water',
        cost: 4,
        spawnChance: 0.02,
        representation: cellImage.water
    },
    wall: {
        name: 'wall',
        cost: Infinity,
        spawnChance: 0.1,
        representation: cellImage.wall
    },
    goal: {
        name: 'goal',
        cost: 0,
        // The number of goal cells is set manually -hard coded number-
        spawnChance: null,
        representation: cellImage.goal
    }
}

export default cellTypes;
