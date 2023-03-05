const Cell = props => {
    const { rep = '', name = '' } = props;

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
            <p style={styles.p}>{name}</p>
        </div>
    );
}

export default Cell;
