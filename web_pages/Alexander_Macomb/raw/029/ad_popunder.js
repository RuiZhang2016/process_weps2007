function DisplayPopunder(State,Adname) {
  if(navigator.userAgent.indexOf('MSIE 7')>-1) return true;
  var aAd = Adname.split("|");
  var aWin = new Array(aAd.length);
  var iNumAd = 1; // aAd.length;  
  for( i=0; i<iNumAd; i++ ) {
      WritePopunderCookieAndOpenWin(aAd[i],aWin[i], State, i);
  }
}

function WritePopunderCookieAndOpenWin(sAd,dWindow,State,adnumber) {
  var Height=320,Width=740;TopLeft=20 + (360 * adnumber);
  var URL="/cgi-bin/ad_popup";
  var Debug=0;
  var hours=12;
  var numexpDate=new Date();
  numexpDate.setTime(numexpDate.getTime()+(hours * 60 * 60 * 1000));
  var expDate=new Date();
  expDate.setTime(expDate.getTime()+(hours * 60 * 60 * 1000));
  if (document.referrer.indexOf('realestate.yahoo.com') > -1) {
    document.cookie='NumAd='+adnumber+';expires='+numexpDate.toGMTString()+';path=/';
  }
  if(!HasPopunderCookie('NumAd')) {
    var displayed = 0;
    document.cookie='NumAd=-1;expires='+expDate.toGMTString()+';path=/';
    if(HasPopunderCookie('NumAd=-1')) {
        dWindow=window.open(URL+"?state="+State+"&ad="+sAd,sAd,'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,top='+TopLeft+',left=150,width='+Width+',height='+Height);
        if (dWindow) {
            dWindow.blur();
            window.focus();
            displayed = 1;
        } else {
            dWindow = window.showModelessDialog("javascript:function blockError(){return true;}dWindow = window.open('http://www.greatschools.net" +URL+"?state="+State+"&ad="+sAd+"','_blank','toolbar=no,resizable=yes,scrollbars=no,channelmode=no,directories=no,width=720,height=300,left=150,top="+TopLeft+",menubar=no,location=no'); self.close();","","dialogtop:3000px;dialogleft:3000px;dialogheight:0px;dialogWidth:0px;status:no;help:no");
            if (dWindow) {
                setTimeout('window.focus()',500);
                setTimeout('window.focus()',1000);
                setTimeout('window.focus()',3000);
                displayed = 1;
            }
        }
        if (displayed == 1) {
            document.cookie='NumAd='+adnumber+';expires='+numexpDate.toGMTString()+';path=/';
        }
    }
  }
}

function HasPopunderCookie(Junk) {
  var idx=parseInt(document.cookie.indexOf(Junk));
  return(idx>-1);
}
