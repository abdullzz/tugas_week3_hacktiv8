function dataHandling(input)
{
  var result = ""
  //contoh input
 
  for(var row = 0; row < input.length; row++)
  {
    for(var column = 0; column < input[row].length; column++)
    {
      switch(column)
      {
        case 0:
        result += "Nomor ID: " + input[row][column] + "\n";break;
        case 1:
        result += "Nama Lengkap: " + input[row][column] + "\n";break;
        case 2:
        result += "Alamat: " + input[row][column] + "\n";break;
        case 3:
        result += "TTL: " + input[row][column] + "\n";break;
        case 4:
        result += "Hobi: " + input[row][column] + "\n";break;
      }
    }
    result += "\n"
  }
  console.log(result)
}

 var input = [
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ]

dataHandling(input)