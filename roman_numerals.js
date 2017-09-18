function to_roman (num) {
	let result = '';
	const arabicToRoman = {
		'M': 1000,
		'CM': 900,
		'D': 500,
		'CD': 400,
		'C': 100,
		'XC': 90,
		'L': 50,
		'XL': 40,
		'X': 10,
		'IX': 9,
		'V': 5,
		'IV': 4,
		'I': 1,
	}

	for (let roman in arabicToRoman) {
		let arabic = arabicToRoman[roman]
		while (num >= arabic) {
			num -= arabic;
			result += roman;
		}
	}

	return result;
}
	// [
	// 	[1, 'I'],
	// 	[4, 'IV'],
	// 	[5, 'V'],
	// 	[9, 'IX'],
	// 	[40, 'XL'],
	// 	[90, 'XC'],
	// 	[100, 'C'],
	// 	[400, 'CD'],
	// 	[900, 'CM'],
	// 	[1000, 'M']
	// ];

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
