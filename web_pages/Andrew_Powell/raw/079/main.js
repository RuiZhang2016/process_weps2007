<!--

var openedWin=null;

function openwindow(url,name,params) {
   if (!params) {
      params = 'width=820,height=600,scrollbars=1,resizable=1,toolbar=1';
   }
   openedWin = window.open(url,name,params);
   openedWin.focus();
   setTimeout("openedWin.focus()",1000);
}

//-->
