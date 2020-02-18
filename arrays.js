let coolArray = [1, 2, 3, 4, 5];

let count = 0;
for (element of coolArray) {
  count += 1
}
console.log('count is:', count);
// OR
console.log('the length is', coolArray.length);

console.log(coolArray[0]);
console.log(coolArray[1]);
console.log(coolArray[-1]); // why doesn't this work
let k = 3
console.log(coolArray[k]);

// change the value
coolArray[0] = 'word';
coolArray[1] = 'hey';
coolArray[coolArray.length - 1] = 'p';

coolArray.push(100)
console.log('remove the last element:', coolArray.splice(-1));
console.log(coolArray)
console.log(coolArray.pop()) // how do i do this
