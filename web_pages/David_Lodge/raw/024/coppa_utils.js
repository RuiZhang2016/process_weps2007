function shouldCOPPAPrevent(){
            var allcookies=document.cookie;
            var now=new Date();
            var pos=allcookies.indexOf("coppa_timeout");
            if(pos!=-1){
                var start=pos+14;
                var end=allcookies.indexOf(";",start);
                if(end == -1)
                  end=allcookies.length;
                  var value=parseInt(allcookies.substring(start,end));
                if(value-now.getTime()>0)
                    return true;
                }
            return false;
         }
function showCOPPAMsgPopup(){
              var opts="menubar=no,resizable=no,status=no,scrollbar=no,toolbar=no,toolbar=no";
              window.open("/cservice/coppa_message_popup.jsp",'thankyou',opts);
              return;
}

function setCOPPACookie(){
          document.cookie = "coppa_timeout="+escape(today.getTime()+300000)+
                "; path=/"+
                "; domain=walmart.com"
                + ";";
}