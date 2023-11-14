import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <ul>
        <Title />
        <FruitList />
        <Footer />
      </ul>
    </div>
  );
}

export default App;
