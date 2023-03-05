import { createSlice } from "@reduxjs/toolkit";

const minDimLength = 2;
const maxDimToAdd = 4;

const initialState = {
    fieldDims: {
        x: Math.floor((Math.random() * maxDimToAdd) + minDimLength),
        y: Math.floor((Math.random() * maxDimToAdd) + minDimLength)
    }
};

const fieldDimensionsSlice = createSlice({
    name: 'fieldDims',
    initialState,
    reducers: {
        setFieldDimensions: (state, action) => {
            state.fieldDims = action.payload;
        }
    }
});

export const selectFieldDimensions = state => state.fieldDims.fieldDims;

export const { setFieldDimensions } = fieldDimensionsSlice.actions;
export default fieldDimensionsSlice.reducer;
