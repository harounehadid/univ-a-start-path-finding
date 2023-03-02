import './App.css';
import FieldContainer from '../components/field/FieldContainer';
import FieldDimensionsController from '../features/set-field-dimensions/FieldDimensionsController';
import Player from '../components/player/Player';

function App() {
  return (
    <div className="App">
      <FieldDimensionsController />
      <FieldContainer />
      <Player />
    </div>
  );
}

export default App;
