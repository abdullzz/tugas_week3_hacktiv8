function cariMean(arr) {
  // you can only write your code here!
  var sum = 0;
  for(let i = 0; i < arr.length; i++)
  {
    sum += parseInt(arr[i])
  }
  if(sum/arr.length < (Math.floor(sum/arr.length) + 0.5)){return Math.floor(sum/arr.length)}
  return Math.ceil(sum/arr.length)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7