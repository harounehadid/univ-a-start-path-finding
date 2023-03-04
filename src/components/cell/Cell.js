import { media } from "../../functionality/getResource";

const Cell = props => {
    const { xIndex, yIndex, rep } = props;

    const styles = {
        container: {
            position: 'relative'
        },
        p: {
            position: 'absolute',
            top: '5px',
            left: '5px'
        }
    };

    return (
        <div style={styles.container}>
            <img src={rep} alt='' />
            <p style={styles.p}>{`{${xIndex}, ${yIndex}}`}</p>
        </div>
    );
}

export default Cell;
