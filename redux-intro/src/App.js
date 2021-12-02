
import './App.css';
import Counter from "./components/counter"
import increasecounter from "./components/increasecounter"
import decreasecounter from './components/decreasecounter';
import increasebytwocounter from './components/increasebytwocounter';
function App() {
  return (
    <div>
      <Counter>
      <increasecounter>
        
      </increasecounter>
<decreasecounter></decreasecounter>
<increasebytwocounter></increasebytwocounter>
      </Counter>
    </div>
  );
}

export default App;
