function submit_email(email, isPopUpWindow)
{
  if ( email.value == "" || email.value == "email address")
  {
    alert("Please enter email address");
    email.focus();
    return false;
  }
  if ( !isEmail(email.value) )
  {
    alert("Please enter valid email address");
    email.focus();
    return false;
  }

  if (isPopUpWindow)
  {
    window.open('', 'email_confirm', 'width=300,height=400,status=no,toolbar=no,resizable=no,menubar=no');
  }
  return true;
}

function isEmail(email)
{
  return email!="" 
         && email.indexOf("@")!=-1 
         && email.indexOf(".")!=-1;
}

function buildEmailSubscribeURL(sIdParam,sId,spamTypeParamName,spamTypeValue,formName){
    var custEmail = document.forms[formName].email_email.value;
    return "/popup.gsp?"+spamTypeParamName+"="+spamTypeValue+"&"+"email_email="+custEmail+"&"+sIdParam+"="+sId+"&save.x=0&save.y=0";
}

function openThxPopup(sIdParam,sId,spamTypeParamName,spamTypeValue,formName){

         var url = buildEmailSubscribeURL(sIdParam,sId,spamTypeParamName,spamTypeValue,formName);
         var opts="menubar=no,resizable=no,status=no,scrollbar=no,toolbar=no,toolbar=no";
         window.open(url,'thankyou',opts);
         return true;
}

function openThxPopupExpiration(sIdParam,sId,spamTypeParamName,spamTypeValue,formName,monFormField,dayFormField,yearFormField){
         var mon = document.forms[formName].elements[monFormField].value;
         var day = document.forms[formName].elements[dayFormField].value;
         var year = document.forms[formName].elements[yearFormField].value;

         var url = buildEmailSubscribeURL(sIdParam,sId,spamTypeParamName,spamTypeValue,formName)+"&"+monFormField+"="+mon+"&"+dayFormField+"="+day+"&"+yearFormField+"="+year;

         var opts="menubar=no,resizable=no,status=no,scrollbar=no,toolbar=no,toolbar=no";
         window.open(url,'thankyou',opts);
         return true;
}