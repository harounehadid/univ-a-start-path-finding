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
                fieldArr.map(cell => <CellContainer id={cell.id} key={cell.id} />)
            }
        </div>
    );
}

export default Field;
