function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    var flag = 0
    for(let i = 0; i < animals.length; i++)
    {
      let temp = []
      for(let j = i; j < animals.length; j++)
      {
        if(animals[i][0] === animals[j][0])
        {
          if(result.some(row => row.includes(animals[j])))
          {
            continue;
          }
          else{
            temp.push(animals[j])
            flag = 1
          }
        }
      }
      if(flag==1){result.push(temp)}
      flag = 0
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]