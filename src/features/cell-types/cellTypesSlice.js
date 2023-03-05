import { createSlice } from "@reduxjs/toolkit";
import cellTypes from "./cellTypes";

const initialState = {
    typesArr: []
};

const cellTypesSlice = createSlice({
    name: 'cellTypes',
    initialState,
    reducers: {
        setCellTypes: (state, action) => {
            const { x, y } = action.payload;

            const cellsNum = x * y;
            const arr = [];

            for (const type in cellTypes) {
                const targetedCellType = cellTypes[type];
                let unitsNum;
        
                if (targetedCellType.spawnChance === null) {
                    unitsNum = 1;
                }
                else if (targetedCellType.spawnChance === Infinity) {
                    unitsNum = cellsNum;
                }
                else if (targetedCellType.spawnChance > 0) {
                    unitsNum = Math.round(targetedCellType.spawnChance * cellsNum);
                }
                else {
                    console.error('Spawn chance CAN NOT be negative');
                }
        
                arr.push({
                    ...targetedCellType,
                    unitsLeft: unitsNum
                });
            }

            state.typesArr = arr;
        },
        substractCellUnit: (state, action) => {
            const { typeName } = action.payload;
            const targetedIndex = state.typesArr.findIndex(type => type.name === typeName);
            console.log(targetedIndex);
            if (targetedIndex >= 0) state.typesArr[targetedIndex].unitsLeft--;
            console.log(state.typesArr[targetedIndex].unitsLeft);
        }
    }
});

export const selectCellTypesArray = state => state.cellTypes.typesArr;

export const { setCellTypes, substractCellUnit } = cellTypesSlice.actions;
export default cellTypesSlice.reducer;
