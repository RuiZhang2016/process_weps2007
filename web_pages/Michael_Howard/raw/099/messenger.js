/*
  if (document.domain == 'uk.gay.com' || document.domain == 'www.uk.gay.com') {
    document.domain = 'gay.com';
  }
*/
  var messenger_win = null;

  function messenger_getWin() {
    if (!messenger_win || messenger_win.closed) {
      messenger_win = window.open('', 'gcom_messenger_top', 'width=214,height=350,resizable=0,left=750,screenX=750,top=50,screenY=50');
      if (!messenger_win.gcom_messenger_cmd)
        messenger_win.location = 'http://www.intl-uk.gay.com/messenger/frameset.html';
      if (!messenger_win && messenger_win.closed) {
        alert('We can\'t open the window for some reason!');
      }
    }
    return messenger_win;
  }

  function sidebar_member_messenger_open() {
    messenger_win = messenger_getWin();
    if (messenger_win && !messenger_win.closed) {
      messenger_win.focus();
    }
  }

  function messenger_closeWin() {
    messenger_getWin().close();
  }
 
  /* messenger_sendpvt
     Initiates private conversation with named Gay.com member via Messenger
  
     Last update: 06 June 2002 11:29:26 [SM]
  */
  function messenger_sendpvt(user) {
    alert(user);
    // get reference to Messenger
	  messenger_win = messenger_getWin();
	  if (messenger_win && !messenger_win.closed)
	  {
		  if (messenger_win.cmd) {
			  messenger_win.cmd('msg(\'' + user + '\')');
		  } else {
        // 06 June 2002 16:17:37 - increase timeout to 2 sec
		    window.setTimeout('messenger_sendpvt(\'' + user +'\')', 2000);
		  }
	  }
  }