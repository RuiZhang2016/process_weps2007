function openOlympics(){
var olympics=window.open('/features/olympics/popup/today.php',"","width=665,height=450,status,scrollbars")
}

function printWindow(){
   bV = parseInt(navigator.appVersion)
   if (bV >= 4) window.print()
}

function clearText(thefield){
   if (thefield.defaultValue==thefield.value)
   thefield.value = ""
}

function checkLogin(){
   if (document.loginform.uname.value == '' || document.loginform.uname.value == 'username') {
      alert("Please enter a valid username.");
      return false
   } else {
      if (document.loginform.fpassword.value == '' || document.loginform.fpassword.value == 'pass') {
         alert("Please enter a valid password.");
         return false
      } else {
         return true
      }
   }
}

function enforcechar(what,limit){
   if (what.value.length>=limit)
   return false
}

function checkchars(cur){
   if (cur.comments.value.length>255){
      alert("Sorry, you can only enter a maximum of 255 characters!")
      return false
   }
}

function SearchWeb() {
searchformleft.action='http://www.mirago.co.uk/scripts/qhandler.aspx';
searchformleft.target='_blank';
}