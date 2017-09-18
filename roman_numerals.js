function to_roman (num) {
  // your implementation code here
  var numS = num.toString(); // merubah num jadi string
  var romawi ='';
  var roman = [[0,'',''],[1,'I','V'] ,[2 , 'X' ,'L'] ,[3,'C','D'] , [4,'M' , 'V']] ;
  var unit = 0; //buat nentuin satuan puluhan ratuan dst

  for (var i=numS.length;i>=0 ; i--){

    if ('123'.indexOf(numS[i])!=-1){
      romawi = roman[unit][1].repeat(numS[i]) + romawi;
    }
    else if('678'.indexOf(numS[i])!=-1){
      romawi = roman[unit][2] + roman[unit][1].repeat(numS[i]-5) + romawi;
    }
    else if (numS[i]==4 ){
      romawi = roman[unit][1]+roman[unit][2] + romawi ;
    }
    else if(numS[i]==5){
      romawi = roman[unit][2] + romawi ;
    }
    else if(numS[i]==9){
      romawi = roman[unit][1]+roman[unit+1][1] + romawi ;
    }

    unit++;
  }

  return romawi

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
