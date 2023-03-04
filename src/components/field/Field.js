import CellContainer from "../cell/CellContainer";

const Field = props => {
    const {
        xDim,
        yDim,
        fieldArr
    } = props;

    const styles = {
        display: 'grid',
        gridTemplate: `repeat(${xDim}, 1fr) / repeat(${yDim}, 1fr)`,
        outline: '1px solid black',
        padding: '5px',
        gap: '5px',
        margin: '10px'
    };

    return (
        <div style={styles}>
            {
                fieldArr.map(row => {
                    return row.map((cell, index) => <CellContainer xIndex={cell.x} yIndex={cell.y} key={index} />)
                })
            }
        </div>
    );
}

export default Field;
