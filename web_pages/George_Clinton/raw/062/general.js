
/* Randomly display a slogan over the logo */
var randImages = new Array("/img/slogans/slogan1.png", "/img/slogans/slogan2.png", "/img/slogans/slogan3.png", "/img/slogans/slogan4.png", "/img/slogans/slogan5.png", "/img/slogans/slogan6.png", "/img/slogans/slogan7.png", "/img/slogans/slogan9.png");
function pickSlogan() {
    var number = Math.round(Math.random() * 7);
    if (document.images["slogan"]) {
        document.images["slogan"].src = randImages[number];
    }
}

//Get element by id
function getElement(elementId) {
    if (document.getElementById) {
        return document.getElementById(elementId);
    } else {
        if (document.all) {
            return document.all[elementId];
        } else {
            if (document.layers) {
                return document.layers[elementId];
            }
        }
    }
    return null;
}

// Check style of the element
function checkStyle(elementId, className) {
    if (null == elementId || null == className) {
        return false;
    }
    element = getElement(elementId);
    if (null == element) {
        return false;
    }
    return element.className == className;
}

// Change style of the element	
function changeStyle(elementId, className) {
    if (null == elementId || null == className) {
        return;
    }
    element = getElement(elementId);
    if (null == element) {
        return;
    }
    element.className = className;
}
//Change text	
function changeText(elementId, text) {
    if (null == elementId) {
        return;
    }
    element = getElement(elementId);
    if (null == element) {
        return;
    }
    if (element.type != "text") {
        return;
    }
    element.value = text;
}	

//Check if value of element is empty	
function isEmptyValue(elementId) {
    if (null == elementId) {
        return true;
    }
    element = getElement(elementId);
    if (null == element) {
        return true;
    }
    if (element.type != "text") {
        return true;
    }
    return element.value == null || element.value == "";
}



//Check if email address valid	
function isEmailAddressValid(mail) {

	   if (mail == null) return false ;
	   if ( Trim(mail) == "" ) return false ;

	   var supported = 0;
	   if (window.RegExp){
	      var tempStr = "a";
	      var tempReg = new RegExp(tempStr);
	      if (tempReg.test(tempStr)) supported = 1;
	   }
	   if (!supported) return (mail.indexOf(".") > 2) && (mail.indexOf("@") > 0);

	   var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
	   var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
	   return (!r1.test(mail) && r2.test(mail));

}


//left trim
function LTrim(String){
   var i = 0;
   var j = String.length - 1;
   if (String == null) return (false);
   for (i = 0; i < String.length; i++)
   {
      if (String.substr(i, 1) != ' ' &&
          String.substr(i, 1) != '\t')
         break;
   }
   if (i <= j)
      return (String.substr(i, (j+1)-i));
   else
      return ('');
}

//right trim
function RTrim(String){
   var i = 0
   var j = String.length - 1;
   if (String == null)
      return (false);

   for(j = String.length - 1; j >= 0; j--)
   {
      if (String.substr(j, 1) != ' ' &&
         String.substr(j, 1) != '\t')
      break;
   }
   if (i <= j)
      return (String.substr(i, (j+1)-i));
   else
      return ('');
}

//trim
function Trim(String){
   if (String == null) return (false);
   return RTrim(LTrim(String));
}



