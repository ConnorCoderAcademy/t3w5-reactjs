// let someFruit = [
//     "mangoes",
//     "pears",
//     "oranges",
//     "bananas",
//     "strawberries"
//   ]
  
function FruitList (props) {
    let fruitListItems = props.listToShow.map((fruit => <li key={fruit}>{fruit}</li>))
    console.log(props);
    return (
      <>
      <h3>{props.colour} Fruits</h3>
      <ul>
          {fruitListItems}
      </ul>
      
      </>
    )
      
      

  }


export default FruitList