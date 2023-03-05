import { useDispatch, useSelector } from "react-redux";
import { selectFieldDimensions } from "../../features/field-dimensions/fieldDimensionsSlice";
import Field from "./Field";
import { useEffect } from "react";
import { selectFieldArray, setField } from "./fieldSlice";
import { setCellTypes } from "../../features/cell-types/cellTypesSlice";

const FieldContainer = () => {
    const dispatch = useDispatch();

    const fieldDims = useSelector(selectFieldDimensions);

    useEffect(() => {
        dispatch(setField(fieldDims));
        // Set cell types data
        dispatch(setCellTypes(fieldDims))
    }, [fieldDims.x, fieldDims.y]);

    const fieldArr = useSelector(selectFieldArray);

    return <Field xDim={fieldDims.x} yDim={fieldDims.y} fieldArr={fieldArr} />;
}

export default FieldContainer;
