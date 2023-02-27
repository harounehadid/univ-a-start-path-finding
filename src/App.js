import './App.css';
import FieldContainer from './components/field/FieldContainer';
import { useState } from 'react';
import { media } from './functionality/getResource';

function App() {
  const [fieldDims, setFieldDims] = useState({x: 2, y: 2});
  const [xVal, setXVal] = useState(fieldDims.x);
  const [yVal, setYVal] = useState(fieldDims.y);

  const handleClick = () => {

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
    <div className="App">
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
      <FieldContainer xDim={xVal} yDim={yVal} />
      <img src={media.player} alt='' style={{position: 'absolute', top: '408.5px', left: '669.5px'}} />
    </div>
  );
}

export default App;
