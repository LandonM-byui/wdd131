nums = [12,10,8,3]

console.log(compareFn(nums))



const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleSort.sort();

console.log(simpleSort);

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLocaleLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = 'co';

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item){
    return item.includes(searchTerm);
}

console.log(filterFruit);



const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];
              

function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}


let productSort = products.sort(compareFn);
console.log(productSort);


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
              

let query = 'wild';
let filteredList = animals.filter(searchList);

function searchList(item){
    return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
}

console.log(filteredList);

let queryTrait = 'ox';
let filteredTraits = animals.filter(searchTraits);

function searchTraits(item){
    return item.traits.find((trait) => trait.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

console.log(filteredTraits);