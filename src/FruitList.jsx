let someFruit = [
    "mangoes",
    "pears",
    "oranges",
    "bananas",
    "strawberries"
  ]
  
function FruitList () {
    let fruitListItems = someFruit.map((fruit => <li key={fruit}>{fruit}</li>))
    return fruitListItems
  }


export default FruitList