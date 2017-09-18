function to_roman(num) {
    // your implementation code here
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var hasil = '';

    if (num <= 3000) {
        for (var i = 0; i < decimal.length; i++) {
            while (num % decimal[i] < num) { // loop num yang sama     
                hasil = hasil + roman[i]; //nambah roman yang sesuai ke string 
                //console.log(hasil);
                //console.log(roman[i]);
                num = num - decimal[i]; // pengurangan nilai decimal dari num
                //console.log(num);
            }
        }
        return hasil;

    } else {
        return "Hanya angka 3000 ke bawah";
    }
}
// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))