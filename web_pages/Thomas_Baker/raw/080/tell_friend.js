// *** Change this variable ***
// should be the URL to the cgi script
var path_to_cgi="http://www.thefurnituredoctoronline.com/cgi-bin/tell_friend.cgi";

// You dont need to change anything else
path_to_cgi += '?url=' + escape(document.location);

function tell_friend(){
window.open(path_to_cgi,"FRIENDS01","STATUS=NO,TOOLBAR=NO,LOCATION=NO,DIRECTORIES=NO,COPYHISTORY=NO,MENU=NO,RESIZABLE=NO,SCROLLBARS=YES,TOP=40,LEFT=20,WIDTH=300,HEIGHT=330");
}
