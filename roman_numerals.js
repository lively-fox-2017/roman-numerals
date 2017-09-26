function to_roman (num) {
	var result = '';

  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
  // melooping ke array yang kita buat
    while (num >= decimal[i]) {
    // terus mencari hingga sisa bagi kurang dari num
      result += roman[i];
      // masukan array roman sesuai index ke variabel result
      num -= decimal[i];
      // kurangi num dengan nilai decimal sesuai index , lalu ulangi ang
    }
  }
  return result;

  // var hasil = '';
  // var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3 , 2 , 1];
  // var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV','III', 'II' , 'I'];

  // for (var i = 0; i < arabic.length; i++){
  // 	if (num >= arabic[i]){
  // 		hasil = hasil + roman[i];
  // 		num = num - arabic[i];
  // 	}
  // }
  // return hasil;

}

//console.log(to_roman(1646))
// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
