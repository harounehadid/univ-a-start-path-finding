import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fieldArr: []
};

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setField: (state, action) => {
            const {x, y } = action.payload;
            const arr = [];

            for (let i = 0; i < x; i++) {
                for (let j = 0; j < y; j++) {

                    const newCell = {
                        xIndex: j,
                        yIndex: i,
                        id: `x${j}y${i}`,
                        pos: undefined
                    };

                    arr.push(newCell);
                }
            }

            state.fieldArr = arr;
        },
        updateCell: (state, action) => {
            const { cellType, id } = action.payload;

            const targetedCellIndex = state.fieldArr.findIndex(element => element.id === id);

            if (targetedCellIndex >= 0) {
                state.fieldArr[targetedCellIndex] = {
                    ...state.fieldArr[targetedCellIndex],
                    type: cellType.name,
                    cost: cellType.cost,
                    representation: cellType.representation
                }
            }
            else {
                console.error('Cell DO NOT exist!');
            }
        },
        updateCellPosition: (state, action) => {
            const { id, pos } = action.payload;

            const targetedCellIndex = state.fieldArr.findIndex(element => element.id === id);

            if (targetedCellIndex >= 0) {
                state.fieldArr[targetedCellIndex] = {
                    ...state.fieldArr[targetedCellIndex],
                    pos: pos
                }
            }
            else {
                console.error('Cell DO NOT exist!');
            }
        }
    }
});

export const selectFieldArray = state => state.field.fieldArr;

export const selectCell = (state, id) => {
    const targetedCellIndex = state.field.fieldArr.findIndex(element => element.id === id);
    return state.field.fieldArr[targetedCellIndex];
}

export const { setField, updateCell, updateCellPosition } = fieldSlice.actions;
export default fieldSlice.reducer;
