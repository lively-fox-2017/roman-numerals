'use strict'

function to_roman (num) {
  // your implementation code here
  const romawiKey = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
  }


  var result = "";
  var stringNum = num.toString();

  for(var i = 0; i<stringNum.length;i++){
    if(num < 10){
      var range = parseInt(stringNum[i]);
      console.log(range)
      if (range === 0){

      }
      else if(range < 4){
        for(var j = 0; j < range; j++){
          result += romawiKey[1];
        }
      }else if(range === 4){
          result += romawiKey[1]+romawiKey[5];
      }else if(range === 5){
        result += romawiKey[5];
      }else if(range > 5 && range < 9){
        result += romawiKey[5];
        for(var j = 0; j < range%5; j++){
          result += romawiKey[1];
        }
      }else{
        result += romawiKey[1]+romawiKey[10];
      }
    }else if(num < 100){
      console.log(stringNum[i]);
      if(i === 0){
       console.log(i)
       var range = parseInt(stringNum[i]);
       console.log(range)
       if (range === 0){

       }
       else if(range < 4){
         for(var j = 0; j < range; j++){
           result += romawiKey[10];
         }
       }else if(range === 4){
           result += romawiKey[10]+romawiKey[50];
       }else if(range === 5){
         result += romawiKey[50];
       }else if(range > 5 && range < 9){
         result += romawiKey[50];
         for(var j = 0; j < range%5; j++){
           result += romawiKey[10];
         }
       }else{
         result += romawiKey[10]+romawiKey[100];
       }
     }else{
       var range = parseInt(stringNum[i]);
       console.log(range)
       if (range === 0){

       }
       else if(range < 4){
         for(var j = 0; j < range; j++){
           result += romawiKey[1];
         }
       }else if(range === 4){
           result += romawiKey[1]+romawiKey[5];
       }else if(range === 5){
         result += romawiKey[5];
       }else if(range > 5 && range < 9){
         result += romawiKey[5];
         for(var j = 0; j < range%5; j++){
           result += romawiKey[1];
         }
       }else{
         result += romawiKey[1]+romawiKey[10];
       }
     }
    }else if(num < 1000){
      console.log(stringNum[i]);
       if(i === 0){
        console.log(i)
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){
        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[100];
          }
        }else if(range === 4){
          result += romawiKey[100]+romawiKey[500];
        }else if(range === 5){
          result += romawiKey[500];
        }else if(range > 5 && range < 9){
          result += romawiKey[500];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[100];
          }
        }else{
          result += romawiKey[100]+romawiKey[1000];
        }
      }else if(i === 1){
        console.log(i)
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){

        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[10];
          }
        }else if(range === 4){
            result += romawiKey[10]+romawiKey[50];
        }else if(range === 5){
          result += romawiKey[50];
        }else if(range > 5 && range < 9){
          result += romawiKey[50];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[10];
          }
        }else{
          result += romawiKey[10]+romawiKey[100];
        }
      }else{
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){

        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[1];
          }
        }else if(range === 4){
            result += romawiKey[1]+romawiKey[5];
        }else if(range === 5){
          result += romawiKey[5];
        }else if(range > 5 && range < 9){
          result += romawiKey[5];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[1];
          }
        }else{
          result += romawiKey[1]+romawiKey[10];
        }
      }
    }else{
      console.log(stringNum[i]);
      if(i === 0){
        console.log(i);
        //console.log(stringNum[i]);
        var range = parseInt(stringNum[i]);
        //console.log(range);
        for(var j = 0; j < range; j++){
          result += romawiKey[1000];
          //console.log(i);
        }
      }else if(i === 1){
        console.log(i)
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){

        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[100];
          }
        }else if(range === 4){
          result += romawiKey[100]+romawiKey[500];
        }else if(range === 5){
          result += romawiKey[500];
        }else if(range > 5 && range < 9){
          result += romawiKey[500];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[100];
          }
        }else{
          result += romawiKey[100]+romawiKey[1000];
        }
      }else if(i === 2){
        console.log(i)
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){

        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[10];
          }
        }else if(range === 4){
            result += romawiKey[10]+romawiKey[50];
        }else if(range === 5){
          result += romawiKey[50];
        }else if(range > 5 && range < 9){
          result += romawiKey[50];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[10];
          }
        }else{
          result += romawiKey[10]+romawiKey[100];
        }
      }else{
        var range = parseInt(stringNum[i]);
        console.log(range)
        if (range === 0){

        }
        else if(range < 4){
          for(var j = 0; j < range; j++){
            result += romawiKey[1];
          }
        }else if(range === 4){
            result += romawiKey[1]+romawiKey[5];
        }else if(range === 5){
          result += romawiKey[5];
        }else if(range > 5 && range < 9){
          result += romawiKey[5];
          for(var j = 0; j < range%5; j++){
            result += romawiKey[1];
          }
        }else{
          result += romawiKey[1]+romawiKey[10];
        }
      }
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
console.log('921    | CMXXI     | ', to_roman(80))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
