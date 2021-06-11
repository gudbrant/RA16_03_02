import './App.css';
import Listing from './components/Listing';
import dataset from './data.json';


function App() {

  return (
    <Listing items={dataset}/>
  );
}

export default App;
