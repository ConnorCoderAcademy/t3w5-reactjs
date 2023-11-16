import './FruitList.css';


// let someFruit = [
//     "mangoes",
//     "pears",
//     "oranges",
//     "bananas",
//     "strawberries"
//   ]
  
function FruitList (props) {

    if (props.listToShow.includes("durian")) {
      return null;
    }

    let fruitListItems = props.listToShow.map((fruit => <li class="listMessage" key={fruit}>{fruit}</li>))
    console.log(props.children);
    return (
      <>
      <h3>{props.colour} Fruits</h3>
      <ul>
          {fruitListItems}
      </ul>
      {props.children}
      
      </>
    )
      
      

  }


export default FruitList