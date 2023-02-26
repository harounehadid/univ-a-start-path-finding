import Cell from "../cell/Cell";

const FieldContainer = props => {
    const { xDim, yDim } = props;

    const styles = {
        display: 'grid',
        gridTemplate: `repeat(${xDim}, 1fr) / repeat(${yDim}, 1fr)`,
        outline: '1px solid black',
        padding: '5px',
        gap: '5px',
        margin: '10px'
    };

    console.log(styles.gridTemplate);

    // console.log(`X: ${xDim}  Y: ${yDim}`)

    const fieldArray = [];

    for (let i = 0; i < xDim; i++) {
        const row = [];

        for (let j = 0; j < yDim; j++) {
            row.push({x: i, y: j});
        }

        fieldArray.push(row);
    }

    // console.log(fieldArray);

    return (
        <div style={styles}>
            {
                fieldArray.map(row => {
                    return row.map((cell, index) => <Cell xPos={cell.x} yPos={cell.y} key={index} />)
                })
            }
        </div>
    );
}

export default FieldContainer;
