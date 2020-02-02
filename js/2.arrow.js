// ===== ES5 =====

function add_es5(x, y) {
  return x + y;
}
console.log('value = ' + add_es5(2, 3));

// ===== ES6 =====

// function getHeroes (heroes) {
//   this.heroes = heroes;
// }

// #1
const add_es6 = (x, y) => {
  return x + y;
}
console.log('value = ' + add_es6(3, 4));

// #2
// Parentheses are optional when there's only one parameter name:
const power_es6 = number => number * number;
console.log('value = ' + power_es6(3));

// #3
// The parameter list for a function with no parameters should be written with a pair of parentheses.
const getCurrentDateTime = () => new Date().toLocaleDateString();
console.log('value = ' + getCurrentDateTime());

// ===== Example =====

const movies = ['Avengers', 'The Lion King', 'Captain Marvel', 'Toy Story 4'];

movies.forEach(function (value, index) {
  console.log(value);
});

movies.forEach((value, index) => {
  console.log(value);
})