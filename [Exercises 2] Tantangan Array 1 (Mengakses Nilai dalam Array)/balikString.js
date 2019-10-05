function balikString(str)
{
  var result = [];
  for(let counter = 0; counter <= str.length; counter++)
  {
    result.push(str.charAt(str.length - counter))
  }
  console.log(result.join(""))
}

balikString("abdullah said")