import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fieldDims: {
        x: 2,
        y: 2
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
