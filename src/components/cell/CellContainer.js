import Cell from './Cell';
import { useRef, useState, useEffect } from 'react';
// import React from 'react';

const CellContainer = props => {
    const { xIndex, yIndex } = props;

    const ref = useRef();
  
    // This function calculate X and Y cordinates of the center of the element
    const getCenterCords = () => {
      // Getting the x and y cordinations of element's edges
      const rect = ref.current.getBoundingClientRect();

      // Formula: ((right - left) / 4) + left
      const xCord = ((rect.right - rect.left) / 4) + rect.left;

      // Formula: ((bottom - top) / 4) + top 
      const yCord = ((rect.bottom - rect.top) / 4) + rect.top;

      return {x: xCord, y: yCord};
    };

    useEffect(() => {
      window.addEventListener('resize', getCenterCords);
  
      return () => {
        window.removeEventListener('resize', getCenterCords);
      };
    }, []);

    return (
      <div ref={ref}>
        <Cell xIndex={xIndex} yIndex={yIndex} />
      </div>
    );
}

export default CellContainer;
