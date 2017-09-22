var browserID = 0;
var m_IE = false;
var m_Opera = false;
var m_Moz = false;
var m_Netscape = false;
if(navigator.appName == 'Microsoft Internet Explorer' && navigator.userAgent.indexOf('Opera', 0) == -1) {
}else if(navigator.userAgent.indexOf('Opera', 0) >= 0){
	browserID = 1
}else if(navigator.userAgent.indexOf('Netscape', 0) >= 0){
	browserID = 2
}else{
	browserID = 3
}

if(browserID == 0) m_IE = true;
if(browserID == 1) m_Opera = true;
if(browserID == 2) m_Netscape = true;
if(browserID == 3) m_Moz = true;


<!-- // load htmlarea
	_editor_url = "/htmlarea/";                     // URL to htmlarea files
	var win_ie_ver = parseFloat(navigator.appVersion.split("MSIE")[1]);
	if (navigator.userAgent.indexOf('Mac')        >= 0) { win_ie_ver = 0; }
	if (navigator.userAgent.indexOf('Windows CE') >= 0) { win_ie_ver = 0; }
	if (navigator.userAgent.indexOf('Opera')      >= 0) { win_ie_ver = 0; }
	if (win_ie_ver >= 5.5) {
	document.write('<scr' + 'ipt src="' +_editor_url+ 'editor.js"');
	document.write(' language="Javascript1.2"></scr' + 'ipt>');  
	} else { document.write('<scr'+'ipt>function editor_generate() { return false; }</scr'+'ipt>'); }
// -->

// JScript source code
function format_quote(ID) {
  var str;

	if (document.getSelection) {
    str = document.getSelection();
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange();
    str = range.text;
  } else {
  }


    str = str.replace(/\r\n/g, '<BR>');
    strs = str.replace(/\n/g, '<BR>');
    str = str.replace(/\r/g, '<BR>');
 <!--  str = str.replace(/\r\n/g, '\r' + "<BR><BR>");

  str = "[quote]" + str + "[/quote]" + '\r\r';

  editor_insertHTML(ID, str)

  return;
}

function setImageSize_onLoad(safeWidth,item)
{
   try{
      if(m_Opera == true){ safeWidth = 650; }
      if(safeToResizeImage(item.src)&&item.width>safeWidth){   
         var _link = 'onclick="window.open(\'' + item.src + '\');"';
         var _str = '<div style="padding:2px;background-color:#FFF089;border:solid 1px #CCCCCC;margin-bottom:2px;margin-top:2px;width:645px;cursor:pointer;font-size:11px;color:#000000;font-weight:normal;" ' + _link + '>';
         _str += '<img src="/images/alert.gif" align="absmiddle"> ';
         _str += 'This image has been resized. Click this bar to view the full image. The original image is sized ' + item.width + 'x' + item.height
         if(m_IE){
            _str += ' and weighs ' + parseInt(item.fileSize/1024) + 'k.';
         }else{
            _str += '.';
         }
         _str += '</div>';
         _str += '<img src="' + item.src + '" width="' + safeWidth + '" >';
         var div = document.createElement('div');
         div.style.width='650px';
         div.align='center';
         div.innerHTML = _str;
         item.parentNode.replaceChild(div,item);
      }
   }catch(e){
      alert(e.message);
   }
}
function safeToResizeImage(url)
{
   var domains = new Array("galciv2.com", "galciv1.com", "galciv.com", "wincustomize.com", "stardock.com", "joeuser.com", "stardockcentral.net", "guichamps.com", "xpthemes.com", "politicalmachine.com", "desktopgadgets.com", "societygame.com");
   for(var i=0;i<domains.length;i++){
      if(url.indexOf(domains[i])!=-1){ return false; }
   }
   return true;
}

function insert_link() {
  var str = document.selection.createRange().text;
  document.frmAddReply.message.focus();
  var my_link = prompt("Enter URL:","http://");
  if (my_link != null) {
    var sel = document.selection.createRange();
	if (str){
	sel.text = "<a class=\"content\" href=\"" + my_link + "\">" + str + "</a>";
	}else{
	sel.text = "<a class=\"content\" href=\"" + my_link + "\">link</a>";
	}
  }
  return;
}

function doInsert(ibTag, ibClsTag, isSingle)
{
var isClose = false;
var sel = document.selection;
var rng = sel.createRange();

rng.colapse;
	if((sel.type == "Text" || sel.type == "None") && rng != null){
		if(ibClsTag != "" && rng.text.length > 0)
			ibTag += rng.text + ibClsTag;
		else if(isSingle)

		isClose = true;
		rng.text = ibTag;
	}
return isClose;
}	


function Format_Selection(ID, sItem) {
	var sStr;

	if (window.getSelection) {
		var sStr = window.getSelection();
	} else if (document.selection && document.selection.createRange) {
		var range = document.selection.createRange();
		var sStr = range.text;
	} else {
	}

	//alert(navigator.userAgent);
	// Mozilla + Opera Browsers ====================================
	if (navigator.userAgent.indexOf('Gecko')>= 0) { 

		var objTextArea = document.getElementById(ID);
		var ss = objTextArea.selectionStart;
		var st = objTextArea.scrollTop;
		var es = objTextArea.selectionEnd;
		
		if (es <= 2){ es = objTextArea.textLength; }
		
		var start  = (objTextArea.value).substring(0, ss);
		var middle = (objTextArea.value).substring(ss, es);
		var end    = (objTextArea.value).substring(es, objTextArea.textLength);
		
		if (objTextArea.selectionEnd - objTextArea.selectionStart > 0){
			middle = "[" + sItem + "]" + middle + "[/" + sItem + "]";
		}
		else { alert("Sorry, unable to insert the HTML [" + sItem + "] tag.  No Text Has Been Highlighted."); }
		
		objTextArea.value = start + middle + end;
		
		return;
	} else if (navigator.userAgent.indexOf('Opera')>= 0) { return alert("Sorry, unable to insert the HTML [" + sItem + "] tag.  \n\nOpera browsers are not supported at this time."); }
	//=====================================================

 if (sStr == '') { return alert("Sorry, unable to insert the HTML [" + sItem + "] tag.  No Text Has Been Highlighted."); }

   	sStr = sStr.replace(/\r\n/g, '<BR>');
   	sStr = sStr.replace(/\n/g, '<BR>');
   	sStr = sStr.replace(/\r/g, '<BR>');
    	// sStr  = "[" + sItem + "]" + sStr  + "[/" + sItem + "]"; 

	doInsert("[" + sItem + "]" + sStr + "[/" + sItem + "]", "", false)

  return;
}

function InsertIMG(ID) {
	var sImgURL = prompt("Enter the URL to an image you wish to insert.","");
	sImgURL = "[img]" + sImgURL + "[/img]" + '\r\r';
  	editor_insertHTML(ID, sImgURL)
	return;
}

function InsertLink(ID) {
	var sLinkURL = prompt("Enter the URL of the link you wish to insert.","");
	sLinkURL = "[link]" + sLinkURL  + "[/link]" + '\r\r';
  	editor_insertHTML(ID, sLinkURL)
	return;
}

function InsertEmail(ID) {
	var sLinkURL = prompt("Enter the email address you wish to insert.","");
	sLinkURL = "[email]" + sLinkURL  + "[/email]" + '\r\r';
  	editor_insertHTML(ID, sLinkURL)
	return;
}

function CookieExists(name) {
   try
    {
      var start = document.cookie.indexOf( name + "=" );
      var len = start + name.length + 1;
       if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) )
       {
         return false;
       }
       if ( start == -1 )
       {
         return false;
       }
       return true;
    }
    catch (error)
    {      
      return false;
    }
}

function DeleteCookie(name, path, domain) {
   if ( CookieExists( name ) )
   {
      document.cookie = name + "=" + ( ( path ) ? ";path=" + path : "" ) + 
         ( ( domain ) ? ";domain=" + domain : "" ) + 
         ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
   }
}

function ValidateCommentField(ID, bValidateName)
{

	var str = document.getElementById(ID).value;
	if( Trim(str) == '' )
	{
		alert("You cannot Leave the TextArea Blank.");
		return false;
	}
	
	if( bValidateName == true )
	{
		if( Trim(document.getElementById("ucCommentForm_txtNickName").value) == '' )
		{
			alert("You must enter a name before you can leave a comment.");
			return false;
		}
	}
	
	return true;
}

function Trim(s) 
{
  // Remove leading spaces and carriage returns
  
  while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r'))
  {
    s = s.substring(1,s.length);
  }

  // Remove trailing spaces and carriage returns

  while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r'))
  {
    s = s.substring(0,s.length-1);
  }
  return s;
}


function validateDelete() 
{
 if (!confirm("Are you sure you wish to delete this item!")) 
 {
        event.returnValue=false;
       }
}


function showModList(mode, id)
{
	if (mode==1){
		document.getElementById(id).style.display='block';
		document.getElementById(id).style.border='solid 1px #000000';
		document.getElementById(id).style.backgroundColor='#FFFFFF';
		document.getElementById(id).style.paddingTop='5px';
		document.getElementById(id).style.paddingBottom='5px';
		document.getElementById(id).style.paddingLeft='15px';
		document.getElementById(id).style.paddingRight='15px';
		document.getElementById(id).style.position='absolute';
		document.getElementById(id).style.marginLeft='-10px';
		document.getElementById(id).style.color='#FF0000';
		setTimeout("showModList(0, '" + id + "');", 6000);
	}else{
		document.getElementById(id).style.display='none';
	}
}

function getCookieKey(mainKey,subKey) {
 var reg = new RegExp("(^| )"+mainKey+"=([^;]*)(;|$)");
 var arr = document.cookie.match(reg);
 if (arguments.length == 2) {
  if (arr!=null)
    return key(subKey,arr[2]);
  else
   return null;
 } else if (arguments.length == 1) {
   if (arr!=null)
   return unescape(arr[2]);
  else
   return null;
 }
 
 function key(subKey,findWith) {
  var arr,reg = new RegExp("(^| |&)"+subKey+"=([^&]*)(&|$)");
  var findWith = findWith?findWith:document.cookie;
  if (arr =  findWith.match(reg))
   return unescape(arr[2]);
  else
   return null;
 }
}

function setControls()
{
    var _path = location.pathname.toLowerCase();
    var _str = '';
    var _nickname = '';
    var _honorific = '';
    var _personalsite = '';
    var _showAd = '';
        
    if ( CookieExists( "UserInfo" ) == false || CookieExists("AuthCookie2") == false )
    {
      DeleteCookie( "UserInfo", "", "" );
      DeleteCookie( "AuthCookie2", "", "" );
    }

    try{
        _showAd = getCookieKey("UserInfo","a");
    }catch(e){
        _showAd = '1';
    }
    
    try{      
        _nickname = getCookieKey("UserInfo","NickName");
        if ( _nickname == null || _nickname == '' || _nickname == 'null')
        {
         DeleteCookie( "UserInfo", "", "" );
         DeleteCookie( "AuthCookie2", "", "" );
         _nickname = '';
        }
    }catch(e){
         DeleteCookie( "UserInfo", "", "" );
         DeleteCookie( "AuthCookie2", "", "" );
         _nickname = '';
    }
    
    try{            
        _honorific = getCookieKey("UserInfo","Title");
        if ( _honorific == null || _honorific == '' || _honorific == 'null')
        {
         DeleteCookie( "UserInfo", "", "" );
         DeleteCookie( "AuthCookie2", "", "" );
         _honorific = '';
        }
    }catch(e){
         DeleteCookie( "UserInfo", "", "" );
         DeleteCookie( "AuthCookie2", "", "" );
         _honorific = '';
    }
    
     try{
        _personalsite = getCookieKey("UserInfo","SiteName");
        if ( _personalsite == null || _personalsite == '' )
        {
         _personalsite = 'www';
        }
    }catch(e){
        _personalsite = 'www';
    }


   //if ( (_path.indexOf('/index.')!=-1) && (_path.indexOf('store/index.')==-1) ){
   if ( (_path=='/index.aspx') || (_path=='/') || (_path=='/index.html')   ){
        if(_showAd == "0"){
            //Do not show the ads
            if(document.getElementById('_TopBannerAd')){
                document.getElementById('_TopBannerAd').style.display='none';
            }
           
            if(document.getElementById('_TowerSponsorBoxAd')){
                document.getElementById('_TowerSponsorBoxAd').style.display='none';
            }
            if(document.getElementById('_BoxAdSponsor')){
                document.getElementById('_BoxAdSponsor').style.display='none';
            }
            if(document.getElementById('_CenterBoxAd')){
                document.getElementById('_CenterBoxAd').style.display='none';
            }
        }else{
   
            //Show the ads
            if(document.getElementById('_TopBannerAd')){
                document.getElementById('_TopBannerAd').style.display='block';
            }
            if(document.getElementById('_TowerSponsorBoxAd')){
                document.getElementById('_TowerSponsorBoxAd').style.display='block';
            }
            if(document.getElementById('_BoxAdSponsor')){
                document.getElementById('_BoxAdSponsor').style.display='block';
            }
            if(document.getElementById('_CenterBoxAd')){
                document.getElementById('_CenterBoxAd').style.display='block';
            }            
            
        } 
   }

    //if ( (_path.indexOf('/index.')!=-1) && (_path.indexOf('store/index.')==-1) ){
    if ( (_path=='/index.aspx') || (_path=='/') || (_path=='/index.html')   ){
        if(getCookie("AuthCookie2")){
            _str += '<table width="100%" cellpadding="0" cellspacing="0">';
            _str += '<tr>';
            _str += '<td valign="top">';
            _str += '<table width="100%" height="28" background="http://images3.stardock.com/wc/T_AERO/images/linkbar_bg2_blue.gif" cellpadding="0" cellspacing="0" class="StatusBarFont">';
            _str += '<tr>';
            _str += '<td>';
            _str += '<nobr>&nbsp;&nbsp;&nbsp;&nbsp;<B>Welcome <a href="http://' + _personalsite + '.wincustomize.com/">'+ _honorific + ' ' + _nickname + '</a>!</B> &nbsp;&nbsp;</nobr>';
            _str += '</td>';
            _str += '<td align=right valign=top>';
            _str += '<table height="100%" cellpadding=0 cellspacing=0>';
            _str += '<tr>';
            _str += '<td valign=top>';
            _str += '<table height=14 cellpadding=0 cellspacing=0>';
            _str += '<tr>';
            _str += '<td width=73><a href="http://www.wincustomize.com/WatchList.aspx"><img src="http://images3.stardock.com/wc/T_AERO/images/link_watchlist.gif" width=73 height=14 title="Watch List" border=0></a></td>';
            _str += '<td width=1><img src="http://images.stardock.com/wc/spacer.gif" width=1 height=1></td>';
            _str += '<td width=73><a href="http://' + _personalsite + '.wincustomize.com/MyAccount.aspx"><img src="http://images3.stardock.com/wc/T_AERO/images/link_myaccount.gif" width=78 height=14 title="My Account" border=0></a></td>';
            _str += '<td width=1><img src="http://images.stardock.com/wc/spacer.gif" width=1 height=1></td>';
            _str += '<td width=73><a href="http://' + _personalsite + '.wincustomize.com/MySkins.aspx"><img src="http://images3.stardock.com/wc/T_AERO/images/link_myskins.gif" width=65 height=14 title="My Skins" border=0></a></td>';
            _str += '</tr>';
            _str += '</table>';
            _str += '</td>';
            _str += '<td width=15></td>';
            _str += '</tr>';
            _str += '</table>';
            _str += '</td>';
            _str += '<td width="10"></td>';
            _str += '</tr>';
            _str += '</table>';
            _str += '</td>';             
            _str += '<td height="28" background="http://images3.stardock.com/wc/T_AERO/images/linkbar_bg2_blue.gif" valign="top" id="_tdStatbarRight">';
            _str += '<table id="ucPageHeader_UCLogin__ShowLogOutBox" height="14" cellpadding="0" cellspacing="0">';
            _str += '<tr>';
            _str += '<td><input type="image" name="ucPageHeader:UCLogin:_iBtnLogOff" id="ucPageHeader_UCLogin__iBtnLogOff" title="Log Out" src="http://images3.stardock.com/wc/T_AERO/images/link_logout_small.gif" border="0" /></td>';
            _str += '</tr>';
            _str += '</table>';
            _str += '</td>';
            _str += '</tr>';
            _str += '</table>'; 
            
            if(document.getElementById('_tdStatsBarOutter')){
                document.getElementById('_tdStatsBarOutter').innerHTML = _str;
            } 

	    }else{
            _str += '<table width="100%" cellpadding="0" cellspacing="0">';
            _str += '<tr>';
            _str += '<td valign="top"></td>';
            _str += '<td height="28" background="http://images3.stardock.com/wc/T_AERO/images/linkbar_bg2_blue.gif" valign="top">';
            _str += '<table class="LoginFont" height="100%" cellspacing="0" cellpadding="0" width="100%" border="0">';
            _str += '<tr>';
            _str += '<td width="10"></td>';
            _str += '<td nowrap="nowrap">&nbsp;Your home for skins, wallpapers, themes, icons and everything you need to customize your PC.&nbsp;&nbsp;</td>';
            _str += '<td width="16"></td>';
            _str += '<td width="55">Username&nbsp;:</td>';
            _str += '<td width="104"><input name="ucPageHeader:UCLogin:txtUser" type="text" id="ucPageHeader_UCLogin_txtUser" style="width:100px;" /></td>';
            _str += '<td width="10"></td>';
            _str += '<td width="55">Password&nbsp;:</td>';
            _str += '<td width="75">';
            _str += '<nobr>';
            _str += '<input name="ucPageHeader:UCLogin:txtPassword" type="password" id="ucPageHeader_UCLogin_txtPassword" style="width:75px;" />&nbsp;';
            _str += '<input type="submit" name="ucPageHeader:UCLogin:cmdlogin" value="Go" id="ucPageHeader_UCLogin_cmdlogin" />';
            _str += '</nobr>';
            _str += '</td>';
            _str += '<td width="10"></td>';
            _str += '<td class="TableFont" width="60">';
            _str += '<nobr>[<a class="SignUpLink" href="http://www.wincustomize.com/login.aspx">Sign-up</a>]</nobr>';
            _str += '</td>';
            _str += '<td class="TableFont" width="60"><nobr>[<a class="SignUpLink" href="http://www.wincustomize.com/SendPassword.aspx">Send Password?</a>]</nobr></td>';
            _str += '<td width="16"></td>';
            _str += '</tr>';
            _str += '</table>';
            _str += '</td>';
            _str += '</tr>';
            _str += '</table>';
            if(document.getElementById('_tdStatbarLeft')){
                 document.getElementById('_tdStatbarLeft').style.display = 'none';
            }
            if(document.getElementById('_tdStatbarRight')){
                document.getElementById('_tdStatbarRight').innerHTML = _str;
            } 
        }
	}
}
