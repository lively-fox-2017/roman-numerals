function to_roman (num) {
  // your implementation code here
  var result = "";
  while(num > 0){
    if(num - 1000 >= 0){
      result+= 'M';
      num -= 1000;
      continue;
    }
    if(num - 900 >= 0){
      result += 'CM';
      num -= 900;
      continue;
    }
    if(num -  500 >= 0){
      result += 'D';
      num -= 500;
      continue;
    }
    if(num - 400 >= 0){
      result += 'CD';
      num -= 400;
      continue;
    }
    if(num - 100 >= 0){
      result += 'C';
      num -= 100;
      continue;
    }
    if(num - 90 >= 0){
      result += 'XC';
      num -= 90;
      continue;
    }
    if(num - 50 >= 0){
      result += 'L';
      num -= 50;
      continue;
    }
    if(num - 40 >= 0){
      result += 'XL';
      num -= 40;
      continue;
    }
    if(num - 10 >= 0){
      result += 'X';
      num -= 10;
      continue;
    }
    if(num - 9 >= 0){
      result += 'IX';
      num -= 9;
      continue;
    }
    if(num - 5 >= 0){
      result+= 'V';
      num -= 5;
      continue;
    }
    if(num - 4 >= 0){
      result += 'IV';
      num -= 4;
      continue;
    }
    if(num -1 >= 0){
      result += 'I';
      num -= 1;
      continue;
    }
  }
  return result;
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
