import { media } from "../../functionality/getResource";

const Player = () => {
    const styles = {
        position: 'absolute',
        zIndex: '999',
        top: `713px`,
        left: `1229.5px`
    }

    return (
        <img src={media.player} alt='' style={styles} />
    );
}

export default Player;
