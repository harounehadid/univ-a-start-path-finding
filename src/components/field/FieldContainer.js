import CellContainer from "../cell/CellContainer";
import { useSelector } from "react-redux";
import { selectFieldDimensions } from "../../features/set-field-dimensions/fieldDimensionsSlice";

const FieldContainer = () => {
    const fieldDims = useSelector(selectFieldDimensions);

    const styles = {
        display: 'grid',
        gridTemplate: `repeat(${fieldDims.x}, 1fr) / repeat(${fieldDims.y}, 1fr)`,
        outline: '1px solid black',
        padding: '5px',
        gap: '5px',
        margin: '10px'
    };

    const generateFieldArray = (xi, yi) => {
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

    return (
        <div style={styles}>
            {
                generateFieldArray(fieldDims.x, fieldDims.y).map(row => {
                    return row.map((cell, index) => <CellContainer xIndex={cell.x} yIndex={cell.y} key={index} />)
                })
            }
        </div>
    );
}

export default FieldContainer;
