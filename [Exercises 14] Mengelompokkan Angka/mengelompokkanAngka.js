function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var arrEven = []
  var arrOdd = []
  var arr3 = []
  var result = []
  for(var counter = 0; counter < arr.length; counter++)
  {
    if(arr[counter] % 3 == 0){arr3.push(arr[counter])}
    else if(arr[counter] % 2 == 0){arrEven.push(arr[counter])}
    else if(arr[counter] % 2 == 1){arrOdd.push(arr[counter])}
  }
  result.push(arrEven);result.push(arrOdd);result.push(arr3)
  return result
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], []