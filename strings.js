let str1 = 'apples'
let str2 = 'oranges'

console.log(str1)
console.log(str2)

// putting together the strings
concatString = str1 + str2
// OR
console.log('the strings together:', str1.concat(str2))

//string in another string
console.log('Is it inside of it?', String.prototype.includes(str2));


let waffles = 'hallelujah'
// number of characters
let count = 0
for (let char of waffles) {
  count += 1
}
console.log('the num of characters:', count)
//Or
console.log(waffles.length)

// retreiving characters
console.log('the first char of waffles is:', waffles[0]);
console.log('the second char:', waffles[1]);
console.log('the last character:', waffles[-1]);
// this one is not working???
let k = 3
console.log('the character at k:', waffles[k])
console.log('append to waffles:', waffles + 'a')
// template literals
console.log(`oh praise the lord, ${waffles}`)
