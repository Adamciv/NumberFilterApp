const numbers=[2,4,6,7,9,32,5,7,15,22];
const squares=numbers.map(x => Math.pow(x,2))
const evenNumbers=numbers.filter(x=>x%2===0);
const oddNumbers=numbers.filter(x=>x%2!==0);

console.log("squared array: "+squares)
console.log(evenNumbers)
console.log(oddNumbers)