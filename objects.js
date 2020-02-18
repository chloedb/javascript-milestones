let personData = {};

personData.firstName = 'Jean-Luc';
personData.lastName = 'Picard';
personData.age = 79;

let daysInMonth = {
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31
}

console.log('the values are', Object.values(daysInMonth))
console.log('the keys are', Object.keys(daysInMonth))
