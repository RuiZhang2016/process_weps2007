function openEditAlertWindow() {
    var agent = navigator.userAgent.toLowerCase();
	var winContent="/Blank.html";

	if (agent.indexOf("win") != -1 && agent.indexOf("aol") !=-1) {
        winContent="about:blank";
	}
   return isopenCenteredWindow(winContent,'_alert',705,300,true,false,true);
}

function isdoAlert(form, screenname) {

  if ( screenname == null || screenname.length == 0 ) {
       rememberItShowErrorBox(101);
       return;
   }

   var windowref = openEditAlertWindow();
   windowref.document.writeln(" ");
   form.target = windowref.name;
   form.action="/aol/ppxcreatealert";
   form.submit();
}

function wishlistAddAlert(formName) {
   var windowref = openEditAlertWindow();
   var form=null;
   if(isgE('rememberItemsFrame') && isgE('rememberItemsFrame').contentDocument) {
     form=eval("isgE('rememberItemsFrame').contentDocument." + formName);
   } else {
     form=eval("window.frames['rememberItemsFrame'].document." + formName);
   }
   windowref.document.writeln(" ");
   form.target = windowref.name;
   form.action="/aol/ppxcreatealert";
   form.submit();
}
