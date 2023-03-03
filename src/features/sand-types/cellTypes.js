const cellTypes = {
    empty: {
        name: 'empty',
        cost: 1
    },
    grass: {
        name: 'grass',
        cost: 2
    },
    sand: {
        name: 'sand',
        cost: 4
    },
    water: {
        name: 'water',
        cost: 4
    },
    wall: {
        name: 'wall',
        cost: Infinity
    },
    goal: {
        name: 'goal',
        cost: 0
    }
}

export default cellTypes;
