// number to string
let number = 1234;
number = number.toString();
console.log('here is your string!', number);
// string to number
console.log('we make a number with:', Number('1234'));

// string into an array
let stringToArray = 'apples';
let arrayOfString = [];
for (letter of stringToArray) {
  arrayOfString.push(letter)
}
console.log('we get this array of the string', arrayOfString)

// array to single strings
let finalString = ''
let arrayFullOfStrings = [
  'jason',
  'chloe',
  'joseph'
]
for (let string of arrayFullOfStrings) {
  finalString = finalString + string
}
console.log('our final string looks like:', finalString)
console.log('or we do join:', arrayFullOfStrings.join(''))
console.log('with join, we can separate string by other characters:', arrayFullOfStrings.join('|'));
