function dataHandling2(input)
{
  input.splice(1,1,"Roman Alamsyah Elsharawy")
  input.splice(2,1,"Provinsi Bandar Lampung")
  input.splice(4,2,"Pria","Sma Internasional Metro")
  console.log(input)
  var bulan = parseInt(input[3].split("/").splice(1,1))
  switch(bulan)
  {
    case 1:
    console.log("Januari");break;
    case 2:
    console.log("Februari");break;
    case 3:
    console.log("Maret");break;
    case 4:
    console.log("April");break;
    case 5:
    console.log("Mei");break;
    case 6:
    console.log("Juni");break;
    case 7:
    console.log("Juli");break;
    case 8:
    console.log("Agustus");break;
    case 9:
    console.log("September");break;
    case 10:
    console.log("Oktober");break;
    case 11:
    console.log("November");break;
    case 12:
    console.log("Desember");break;
  }
  var currentDateFormat = input[3].split("/")
  var newDateFormat = []
  for(let counter = currentDateFormat.length - 1; counter >= 0; counter--)
  {
    newDateFormat.push(currentDateFormat[counter])
  }
  console.log(newDateFormat)
  console.log(currentDateFormat.join("-"))
  console.log(input[1].split("").splice(0,14).join(""))
}

 var input = [
                  "0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"
             ]

dataHandling2(input)