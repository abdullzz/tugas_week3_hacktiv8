function palindrome(kata) {
    // you can only write your code here!
    return kata.split("").join() === kata.split("").reverse().join()
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false