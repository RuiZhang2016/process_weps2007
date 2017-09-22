function hideDiv(div_id)
{
   var element = document.getElementById(div_id);
   element.style.display = 'none';
}
function showDiv(div_id)
{
   var element = document.getElementById(div_id);
   element.style.display = 'block';
}
function InsertWelcomeLogin(iWidth)
{
  var sName = GetCookie('WelcomeName');
  if (iWidth == null)
  {
    iWidth = 725;
  }

  // -------------------------------------------------------
  // We don't want a successul login to take the user to
  // index_n or index_r, so convert both of these to index_a.
  // -------------------------------------------------------

  var sLocation = "" + window.location + "";
  var iLocation = sLocation.search(/index_n.html/);
  if (iLocation >= 0)
  {
    sLocation = sLocation.substr(0, iLocation) + "index_a.html";
  }
  iLocation = sLocation.search(/index_r.html/);
  if (iLocation >= 0)
  {
    sLocation = sLocation.substr(0, iLocation) + "index_a.html";
  }

  if (sName == null)
  {
    document.write('' +
'<style>' +
'#loginView { display: none; }' +
'.dispRight { height: 25px;' +
'             width: ' + iWidth + ';' +
'             text-align: right;' +
'             font: 10pt bold Arial, Helvetica, sans-serif;' +
'             border-bottom: 1px solid #000099;' +
'             color: #000099;' +
'             margin-top: 5px;' +
'           }' +
'.dispRight a:link, .dispRight a:visited { color: #000099;' +
'                                          font-weight: bold;' +
'                                        }' +
'#l_subscribe:link, #l_subscribe:visited { background-color: #FAFABC; padding: 2px; border: 1px solid #FFFF99; }' +
'</style>' +
'  <div id="initialView" class="dispRight">' +
'    <a href="javascript: void 0;"' +
'       onClick="javascript:hideDiv(\'initialView\');' +
'                           showDiv(\'loginView\');">Login</a>' +
'    &nbsp;&nbsp;&nbsp;' +
'    <a href="http://www.genealogy.com/cpc/MemOffer_AllTrial_01.html"' +
'       id="l_subscribe">Subscribe</a>' +
'  </div>' +
'  <div id="loginView" class="dispRight">' +
'    <form name="loginForm"' +
'          action="https://familytreemaker.genealogy.com/cgi-bin/login.cgi"' +
'          method="GET"' +
'          style="margin-bottom: 5px;">' +
'      UserName:&nbsp;<input type="text"' +
'                            name="Username"' +
'                            size="12"' +
'                            maxlength="12">' +
'      &nbsp;&nbsp;' +
'      Password:&nbsp;<input type="password"' +
'                            name="Password"' +
'                            size="8"' +
'                            maxlength="8">' +
'      &nbsp;&nbsp;&nbsp;' +
'      <input type="submit" id="b_login" name="submit" value="Log In">' +
'      <input type="hidden" name="state" value="PAGE2">' +
'      <input type="hidden" name="url" value="' + sLocation + '">' +
'      <input type="hidden" name="state" value="PAGE2">' +
'      &nbsp;&nbsp;&nbsp;' +
'      <a href="http://www.genealogy.com/cgi-bin/getpass.cgi">Forgot?</a>' +
'    </form>' +
'  </div>');
  } else
  {
    var sFirstName = sName.split('::', 1);

    document.write('' +
'<style>' +
'#loginView { display: none; }' +
'.dispRight { height: 25px;' +
'             width: ' + iWidth + ';' +
'             text-align: right;' +
'             font: 10pt bold Arial, Helvetica, sans-serif;' +
'             border-bottom: 1px solid #000099;' +
'             color: #000099;' +
'             margin-top: 5px;' +
'           }' +
'.dispRight a:link, .dispRight a:visited { color: #000099;' +
'                                          font-weight: bold;' +
'                                        }' +
'</style>' +
'<div id="welcomeView" class="dispRight">' +
'  Welcome, ' + sFirstName + '!' +
'&nbsp;&nbsp;&nbsp;' +
'<a href="http://familytreemaker.genealogy.com/cgi-bin/logout.cgi">Logout</a>' +
'&nbsp;&nbsp;&nbsp;' +
'<a href="http://familytreemaker.genealogy.com/cgi-bin/MyAccount.cgi">My Account</a>' +
'</div>');
  }
}

