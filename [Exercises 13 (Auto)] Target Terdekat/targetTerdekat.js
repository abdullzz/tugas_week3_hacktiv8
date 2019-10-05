function targetTerdekat(arr) {
  // you can only write your code here!
  var distance = 0, curr = 0
  if(arr.indexOf("x") < 0 || arr.indexOf("o") < 0){return 0}
  for(var counter = 0; counter < arr.length; counter++)
  {
    if(counter == 0){curr = Math.abs(arr.indexOf("o") - arr.indexOf("x"))}
    else if(arr[counter] == "x")
    {
      if(curr > Math.abs(counter - arr.indexOf("o")))
      {
        curr = Math.abs(counter - arr.indexOf("o"))
      }
    }
  }
  return curr
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
