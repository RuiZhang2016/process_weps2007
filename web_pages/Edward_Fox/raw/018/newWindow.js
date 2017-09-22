
  <!--// browser variables
  function openWin(URLtoOpen, windowName, windowFeatures) {
    newWindow=window.open(URLtoOpen, windowName, windowFeatures);
  }

  // Prefs window always opens the same size, position.
  function openPrefsWin(sURL) {
    var popup = window.open(sURL, 'blank','toolbar=no,width=720,height=580,scrollbars=yes');
  }

  // Media window always opens the same size, position.
  function openMediaWin(URL) {
    var popup = window.open(URL,'videoWin','height=678,width=726,location=no,resizable=no,toolbar=no,scrollbars=no');
  }
  
  // Survey window always opens the same params
  function openSurveyWin(URL,post) {
    if (post) {
      poll_id = document.forms['poll'].poll_id.value;
      for (counter = 0; counter < document.forms['poll'].choice_id.length; counter++) {
        if (document.forms['poll'].choice_id[counter].checked)
          choice_id = document.forms['poll'].choice_id[counter].value;
      }
      URL = URL + "&poll_id=" + poll_id + "&choice_id=" + choice_id;
    }
    var popup = window.open(URL, 'pollWin','height=775,width=760,location=no,resizable=no,toolbar=no,scrollbars=no');
  }

  function track_contact(user,contact_username, mode, force_reload ) {
      if('undefined' == typeof force_reload) {force_reload = true;}
      addcontactpop(user, contact_username, mode );

      if ( force_reload ) {
          // reload the current page with the updated data.
          window.location.reload( force_reload );
      }
  }

  function addcontactpop(user,contact_username,mode) {
      if (location.href.indexOf("/tv/www/") != -1) {
        var prefix = '/tv/www'
      } else {
        var prefix = '';
      }
      popupWin = window.open(prefix+'/users/'+user+'/directory.php?bd=nh&popup=true&action=' + mode + '&user=' + contact_username, 'contactpop', 'width=260,height=260,resizable=1,scrollbars=0');
  }

  // -->

