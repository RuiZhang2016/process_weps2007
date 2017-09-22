function errBack(theMsg){
  alert(theMsg);
  window.history.back();
}
function textfocusclear(theInput, theText){
  if(theInput.value == theText){
    theInput.value = "";
  }
}
function parentWindow(theURL){
	if(self.opener){
		self.opener.location.href = theURL;
		self.focus();
		self.close();
	}else{
		location.href = theURL;
	}
}
function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}
function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}
function isInteger (s)
{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}
function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);
    if (!isInteger(s, false)) return false;
    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}

function verify_tb_search(theForm){
	var s = theForm.SearchFor.value;
	if( s.length <= 2 ){
		theSelect = theForm.SearchBy;
		if( theSelect.options[theSelect.selectedIndex].value == 'All' ){
			alert( 'Please select a category...' );
			return false;
		}
	}
	return true;
}
