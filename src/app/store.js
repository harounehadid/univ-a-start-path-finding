import { configureStore } from "@reduxjs/toolkit";
import fieldDimensionsReducer from "../features/set-field-dimensions/fieldDimensionsSlice";

const store = configureStore({
    reducer: {
        fieldDims: fieldDimensionsReducer
    }
});

export default store;
