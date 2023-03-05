import './App.css';
import FieldContainer from '../components/field/FieldContainer';
import FieldDimensionsController from '../features/field-dimensions/FieldDimensionsController';
import PlayerContainer from '../components/player/PlayerContainer';

function App() {
  return (
    <div className="App">
      <FieldDimensionsController />
      <FieldContainer />
      <PlayerContainer />
    </div>
  );
}

export default App;
