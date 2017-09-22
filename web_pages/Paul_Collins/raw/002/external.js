function newimage (imagename,filename) {        
     document.images[imagename].src = filename;}
	 
	 
function jumpPage(newLoc) {
			newPage = newLoc.options[newLoc.selectedIndex].value
	
			if (newPage != "") {
				window.location.href = newPage
			}
		}
		

<!-- window for abbreviations -->	

function Start(page) {
OpenWin = this.open(page, "CtrlWindow", "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,height=350,width=400");
}		

<!-- book a visit -->

//global variable for error flag
var errfound = false;
//function to validate by length
function ValidLength(item, len) {
   return (item.length >= len);
}
//function to validate an email address
function ValidEmail(item) {
   if (!ValidLength(item, 5)) return false;
   if (item.indexOf ('@', 0) == -1) return false;
   return true;
}
// display an error alert
function error(elem, text) {
// abort if we already found an error
   if (errfound) return;
   window.alert(text);
   elem.select();
   elem.focus();
   errfound = true;
}
// main validation function
function Validatebook() {
   errfound = false;
   if (!ValidEmail(document.form.email.value))
      error(document.form.email,"Please enter your email address [ex. you@aol.com]");
   if (!ValidLength(document.form.name.value,1))
      error(document.form.name,"Please enter your name");
   if (!ValidLength(document.form.address1.value,1))
      error(document.form.address1,"Please enter your address");
   if (!ValidLength(document.form.country.value,1))
      error(document.form.country,"Please enter your country");
   if (!ValidLength(document.form.telephone.value,1))
      error(document.form.telephone,"Please enter your daytime telephone");
   if (!ValidLength(document.form.number.value,1))
      error(document.form.number,"Please enter the total number in your group");

   return !errfound; /* true if there are no errors */
}

<!-- composers schools -->

//global variable for error flag
var errfound = false;
//function to validate by length
function ValidLength(item, len) {
   return (item.length >= len);
}
//function to validate an email address
function ValidEmail(item) {
   if (!ValidLength(item, 5)) return false;
   if (item.indexOf ('@', 0) == -1) return false;
   return true;
}
// display an error alert
function error(elem, text) {
// abort if we already found an error
   if (errfound) return;
   window.alert(text);
   elem.select();
   elem.focus();
   errfound = true;
}
// main validation function
function Validateschool() {
   errfound = false;
   if (!ValidEmail(document.form.email.value))
      error(document.form.email,"Please enter your email address [ex. you@aol.com]");
   if (!ValidLength(document.form.name.value,1))
      error(document.form.name,"Please enter your name");
   if (!ValidLength(document.form.occupation.value,1))
      error(document.form.occupation,"Please enter your occupation");
   if (!ValidLength(document.form.country.value,1))
      error(document.form.name,"Please enter your country");
   if (!ValidLength(document.form.telephone.value,1))
      error(document.form.name,"Please enter your daytime telephone");
   return !errfound; /* true if there are no errors */
}


<!-- students -->
		
//global variable for error flag
var errfound = false;
//function to validate by length
function ValidLength(item, len) {
   return (item.length >= len);
}
//function to validate an email address
function ValidEmail(item) {
   if (!ValidLength(item, 5)) return false;
   if (item.indexOf ('@', 0) == -1) return false;
   return true;
}
//function to reject comments that include HTML in <> brackets 
function ValidComment(item) {
var htmlspec = /<(.|\n)+?>/; //regular expression defining HTML code <something> 
	if (item.search(htmlspec) != -1) return false;
	return true;
}
// display an error alert
function error(elem, text) {
// abort if we already found an error
   if (errfound) return;
   window.alert(text);
   elem.select();
   elem.focus();
   errfound = true;
}
// main validation function
function Validatestudent() {
   errfound = false;
   if (!ValidEmail(document.form.email.value))
      error(document.form.email,"Please enter your email address [ex. you@aol.com]");
   if (!ValidLength(document.form.year.value,1))
      error(document.form.year,"Please enter your year/class");
   if (!ValidLength(document.form.city.value,1))
      error(document.form.city,"Please enter your city/county");
   if (!ValidLength(document.form.comments.value,1))
      error(document.form.comments,"Please enter a comment");
   if (!ValidComment(document.form.comments.value))
      error(document.form.comments,"HTML code is not allowed in the comment");	  
   return !errfound; /* true if there are no errors */
}

<!-- subscribe -->
		
//global variable for error flag
var errfound = false;
//function to validate by length
function ValidLength(item, len) {
   return (item.length >= len);
}
//function to validate an email address
function ValidEmail(item) {
   if (!ValidLength(item, 5)) return false;
   if (item.indexOf ('@', 0) == -1) return false;
   return true;
}
// display an error alert
function error(elem, text) {
// abort if we already found an error
   if (errfound) return;
   window.alert(text);
   elem.select();
   elem.focus();
   errfound = true;
}
// main validation function
function Validatesubscribe() {
   errfound = false;
   if (!ValidEmail(document.form.email.value))
      error(document.form.email,"Please enter your email address [ex. you@aol.com]");
   if (!ValidLength(document.form.name.value,1))
      error(document.form.name,"Please enter your name");
   if (!ValidLength(document.form.country.value,1))
      error(document.form.name,"Please enter your country");
   return !errfound; /* true if there are no errors */
}

