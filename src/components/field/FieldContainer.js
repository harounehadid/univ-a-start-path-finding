import CellContainer from "../cell/CellContainer";
import { useSelector } from "react-redux";
import { selectFieldDimensions } from "../../features/set-field-dimensions/fieldDimensionsSlice";
import CellsManager from "../../features/cells-manager/CellsManager";
import Field from "./Field";

const FieldContainer = () => {
    const fieldDims = useSelector(selectFieldDimensions);

    const generateField = (xi, yi) => {
        const array = [];

        for (let i = 0; i < xi; i++) {
            const row = [];

            for (let j = 0; j < yi; j++) {
                const newCell = {
                    x: i,
                    y: j,
                    id: `x${i}y${j}`
                };

                row.push(newCell);
            }

            array.push(row);
        }

        return array;
    }

    const fieldArr = generateField(fieldDims.x, fieldDims.y);
    CellsManager.setCellsManager(fieldDims.x, fieldDims.y);

    return <Field xDim={fieldDims.x} yDim={fieldDims.y} fieldArr={fieldArr} />;
}

export default FieldContainer;
