import { configureStore } from "@reduxjs/toolkit";
import fieldDimensionsReducer from "../features/field-dimensions/fieldDimensionsSlice";
import fieldSliceReducer from "../components/field/fieldSlice";
import cellTypesReducer from "../features/cell-types/cellTypesSlice";

const store = configureStore({
    reducer: {
        fieldDims: fieldDimensionsReducer,
        field: fieldSliceReducer,
        cellTypes: cellTypesReducer
    }
});

export default store;
