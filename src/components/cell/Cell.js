import { media } from "../../functionality/getResource";

const Cell = props => {
    const { xPos, yPos } = props;

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
            <img src={media.cell} alt='' />
            <p style={styles.p}>{`{${xPos}, ${yPos}}`}</p>
        </div>
    );
}

export default Cell;
