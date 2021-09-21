import './App.css';
import Header from "./components/Header";
import SelectBox from './components/SelectBox';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Front end coding task</h1>
      <div className="container">
        <SelectBox />
      </div>
    </div>
  );
}

export default App;
