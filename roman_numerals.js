function to_roman (num) {
  // your implementation code here
  	var toRoman=''; 
    var roman=['M','CM','D','CD','C','LC','L','XL','X','XI','V','IV','I']; 
  	// var roman=['I','IV','V','IX','X','XL','L','LC','C','CD','D','CM','M']; 
    var angka=['1000','900','500','400','100','90','50','40','10','9','5','4','1']; 
  	// var angka=['1','4','5','9','10','40','50','90','100','400','500','900','1000']; 
  	for(var i=0;i <= angka.length;i++){ 
  		while(num >= angka[i]){
	  		toRoman+=roman[i];
	  		num-=angka[i];
  		}
	}
	return toRoman;
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
