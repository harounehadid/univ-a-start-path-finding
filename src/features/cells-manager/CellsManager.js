import cellTypes from "../cell-types/cellTypes";

class CellsManager {
    constructor() {
        if (this instanceof CellsManager) {
            throw Error('A static class cannot be instantiated.');
        }
    }

    static setCellsManager(xDim, yDim) {
        this._cellsNum = xDim * yDim;

        this._cellTypesArr = [];

        for (const type in cellTypes) {
            const targetedCell = cellTypes[type];
            let unitsNum;

            if (targetedCell.spawnChance === null) {
                unitsNum = 1;
            }
            else if (targetedCell.spawnChance === Infinity) {
                unitsNum = Math.round(this._cellsNum);
            }
            else if (targetedCell.spawnChance > 0) {
                unitsNum = Math.round(targetedCell.spawnChance * this._cellsNum);
            }
            else {
                console.error('Spawn chance CAN NOT be negative');
            }

            this._cellTypesArr.push({
                ...targetedCell,
                unitsLeft: unitsNum
            });
        }

        this._fieldCells = {};
    }

    static processCell(xIndex, yIndex, centerPos) {
        const cellId = `x${xIndex}y${yIndex}`;

        if (!this._fieldCells[cellId]) {
            const selectedTypeIndex = this.selectCellType();

            // Storing the new cell in this object
            this._fieldCells[cellId] = {
                type: this._cellTypesArr[selectedTypeIndex].name,
                xIndex,
                yIndex,
                cost: this._cellTypesArr[selectedTypeIndex].cost,
                pos: centerPos,
                representation: this._cellTypesArr[selectedTypeIndex].representation
            }
        }
        else {
            this._fieldCells[cellId].pos = centerPos;
        }
    }

    static selectCellType() {
        let typeIndex;

        // Check if only default empty cells are available
        let nonEmptyUnitsNum = 0;

        for (let i = 1; i < this._cellTypesArr.length; i++) {
            nonEmptyUnitsNum += this._cellTypesArr[i].unitsLeft;
        }

        if (nonEmptyUnitsNum === 1) {
            const goalType = this._cellTypesArr.find(element => element.name === 'goal');

            if (goalType.unitsLeft !== 0) {
                typeIndex = this._cellTypesArr.indexOf(goalType);
                goalType.unitsLeft--;
            }
        }
        
        if (nonEmptyUnitsNum === 0) {
            typeIndex = 0;
        }
        // ----------------------------------------------

        while (typeIndex === undefined) {
            let randNum = Math.floor(Math.random() * this._cellTypesArr.length);

            if (this._cellTypesArr[randNum].unitsLeft > 0) {
                typeIndex = randNum;
                this._cellTypesArr[randNum].unitsLeft--;
            }
        }

        return typeIndex;
    }

    static getCellByIndex(xIndex, yIndex) {
        if (!CellsManager._fieldCells) return;

        const cellId = `x${xIndex}y${yIndex}`;

        if (!CellsManager._fieldCells[cellId]) {
            // console.error('Cell DO NOT Exist');
            return;
        }

        return CellsManager._fieldCells[cellId];
    }
}

export default CellsManager;
