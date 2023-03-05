const typeSelector = cellTypesArr => {
    let typeIndex;

    console.log('type selector');
    console.log(cellTypesArr)

    // Check if only default empty cells are available
    let nonEmptyUnitsNum = 0;

    for (let i = 1; i < cellTypesArr.length; i++) {
        nonEmptyUnitsNum += cellTypesArr[i].unitsLeft;
    }

    if (nonEmptyUnitsNum === 1) {
        const goalIndex = cellTypesArr.indexOf(element => element.name === 'goal');

        if (cellTypesArr[goalIndex].unitsLeft > 0) {
            console.log(cellTypesArr[goalIndex].unitsLeft);
            typeIndex = goalIndex;
            // cellTypesArr[goalIndex].unitsLeft--;
        }
    }
    else if (nonEmptyUnitsNum === 0) {
        typeIndex = 0;
    }
    // ----------------------------------------------

    while (typeIndex === undefined) {
        let randNum = Math.floor(Math.random() * cellTypesArr.length);

        if (cellTypesArr[randNum].unitsLeft <= 0) continue;

        typeIndex = randNum;
        // cellTypesArr[randNum].unitsLeft--;
    }

    return {
        name: cellTypesArr[typeIndex].name,
        cost: cellTypesArr[typeIndex].cost,
        representation: cellTypesArr[typeIndex].representation
    };
}

export default typeSelector;
