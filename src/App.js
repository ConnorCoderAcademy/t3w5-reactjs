import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <ul>
        <Title loggedInUser="Connor"/>
        <FruitList colour = {"Yellow"} listToShow = {["mangoes", "bananas", "lemon"]}/>
        <FruitList colour = {"Green"} listToShow = {["limes", "pears", "apples"]}/>
        <FruitList colour = {"Red"} listToShow = {["strawberry", "cherry" , "blood orange"]}>
          <h5>Red fruits are delicious</h5>
          <h6>and great for you!</h6>
        </FruitList>
        <Footer dataFromApi="Random API"/>
      </ul>
    </div>
  );
}

export default App;
