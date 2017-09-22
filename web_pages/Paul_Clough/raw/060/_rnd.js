function rnd(n){
	if (!isNaN(n)) {
		n = (Math.round(n*100)/100);
		var x = (n < 10 ? '0' : '') + (String(n).indexOf('.') == 0 ? '0' : '') + String(n) + (n == Math.floor(n) ? '.' : '') + '00';
		x = x.substr(0,5);
		return x
	}
	else {
		return 'N/A' 
	}
}

function addCommas(num){
	if (!isNaN(num)) {
		var result = "";
		if(num >= 0) sign = "";
		else {
			sign = "-"; num = String(num).substring(1);
		}
		var splitNum = String(num).split(".");
		intPart = splitNum[0];
		fractionPart = splitNum[1] || '00';
		
		for(var i = intPart.length - 1; i > -1; i--)		{
			if(((intPart.length - i) % 3) == 0 && i != 0)
			result = "," + intPart.charAt(i) + result;
			else result = intPart.charAt(i) + result;
		}
		return sign + result + "." + fractionPart + (fractionPart.length > 1 ? '' : '0');
	}
	else {
		return 'N/A' 
	}
}

function calculatePercentChange(last, change)
{
   percent_change = String(change / (last - change) * 100);
   return padZeros(roundDecimal(percent_change, 2));
}

function padZeros(num)
{
   var number = new String(num);
   var idx = number.indexOf(".");
   if(idx == -1)
    number += ".00";
   else if((number.substring(idx)).length < 3)
      number += "0";
   return number;
}

function roundDecimal(value, numDecimals) {
    multiplier = parseFloat(Math.pow(10, numDecimals));
    var sign = value < 0 ? -1 : 1;
    value = Math.abs(value);
    temp = parseInt(value * multiplier);
    roundCoef = parseInt(value * multiplier * 10) - (temp * 10);
    if(roundCoef >= 5)
                temp += 1;
        return temp / multiplier * sign;
}
