import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFieldDimensions } from "./fieldDimensionsSlice";

const FieldDimensionsController = () => {
    const dispatch = useDispatch();

    const fieldDims = useSelector(selectFieldDimensions);

    const [xVal, setXVal] = useState(fieldDims.x);
    const [yVal, setYVal] = useState(fieldDims.y);
  
    const handleClick = (event) => {
        event.preventDefault();

        console.log(event);
    }
  
    const handleChange = (event) => {
      event.preventDefault();
  
      if (event.target.value >= 2) {
        if (event.target.name === 'xVal') setYVal(event.target.value);
        else if (event.target.name === 'yVal') setXVal(event.target.value);
        else console.logError('Input not connected properly');
      }
    }

    return (
        <form style={{display: 'flex', gap: '8px'}}>
            <label for='xVal'>X</label>
            <input type='number' 
                onChange={handleChange} 
                value={yVal} 
                id='xVal'
                name='xVal'
                />
            <label for='yVal'>Y</label>
            <input type='number' 
                onChange={handleChange} 
                value={xVal} 
                id='yVal'
                name='yVal'
                />
            <button type='submit' onClick={handleClick}>Enter</button>
      </form>
    );
}

export default FieldDimensionsController;
