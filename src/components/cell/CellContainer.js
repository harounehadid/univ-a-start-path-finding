import Cell from './Cell';
import { useRef, useState, useEffect } from 'react';
// import React from 'react';

const CellContainer = props => {
    const { xPos, yPos } = props;

    const boxRef = useRef();

    // X
    const [x, setX] = useState();
  
    // Y
    const [y, setY] = useState();
  
    // This function calculate X and Y
    const getPosition = () => {
      const newX = ((boxRef.current.getBoundingClientRect().right - boxRef.current.getBoundingClientRect().left) / 4) + boxRef.current.getBoundingClientRect().left;
      // setX(x);
  
      const newY = ((boxRef.current.getBoundingClientRect().bottom - boxRef.current.getBoundingClientRect().top) / 4) + boxRef.current.getBoundingClientRect().top;
      // setY(y);

      console.log(`X: ${newX}, Y: ${newY}`);
    };
  
    // Get the position of the red box in the beginning
    useEffect(() => {
      getPosition();
    }, []);
  
    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
      window.addEventListener("resize", getPosition);
    }, []);

    return (
      <div ref={boxRef}>
        <Cell xPos={xPos} yPos={yPos} />
      </div>
    );
}

// class CellContainer extends React.Component {
//     constructor(props) {
//         super(props);

//         // this.myRef = document.getSelection;
//         // this.rect = this.getBoundingClientRect();
//         console.log(this);
//     }



//     render() {
//         return (
//             <div ref='eleRef'>
//                 <Cell xPos={this.props.xPos} yPos={this.props.yPos}/>
//             </div>
//         );
//     }
// }

export default CellContainer;
