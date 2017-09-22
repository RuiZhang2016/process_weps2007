var _MenuMousedOver = 0;
function showExtendedOptions(item)
{
	if(_MenuMousedOver == 0){
		item.onclick = function() { 
			var MenuId		= '_GalOptionsMenu';
			var dElement	= document.createElement('div');
			dElement.id		= MenuId;
			dElement.style.display='none';
			dElement.innerHTML = getGalleryOptionsLinkContent(MenuId);
			document.getElementsByTagName('BODY')[0].appendChild(dElement);
			showGallerySlideMenu(MenuId,item); 			
		}	
		_MenuMousedOver = 1;
	}
}
function getCookie(name) 
{
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else
		begin += 2;
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
		end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}
function setCookie(name,value){
	if(name==null && value==null){ return; }
	var oneYear = 365 * 24 * 60 * 60 * 1000;
	var expDate = new Date();		
	expDate.setTime(expDate.getTime() + oneYear);
	
	var domain = ""; //"domain=localhost/Wincustomize;"
	
	document.cookie = name + "=" + escape(value) + "; " + domain + " expires=" + expDate.toGMTString();
}
function inUserArray(id,array)
{
	var _userArray = array.split(',');
	for(var i = 0;i<_userArray.length;i++){
		if(_userArray[i]==id){ return true; }
	}
	return false;
}
function getGalleryOptionsLinkContent(MenuId)
{	
	var array = _GalleryItemsArray;	
	var _userArray = getCookie("Gallery");
	var _str = '';
	_str += '<div class="OptionsMenuTextConstraints">';
	_str += '<table width=500 cellpadding=0 cellspacing=0>';
	_str += '<tr>\n';
		_str += '<td width=22></td>\n';
		_str += '<td width=22></td>\n';
		_str += '<td></td>\n';
		_str += '<td width=22></td>\n';
		_str += '<td width=22></td>\n';
		_str += '<td></td>\n';
	_str += '</tr>\n';
	for(var i = 0; i < array.length; i++){
		_str += '<tr>\n';
		
		
		   for(var ii = 0; ii < 2; ii++){
		      if(i + ii < array.length){
			         _str += '<td><input type=checkbox name="GalOptions__' + array[i + ii][2] + '" ';
			         if(_userArray){
				         if(array[i + ii][5]==1||inUserArray(array[i + ii][2],_userArray)){
					         if(array[i + ii][5]==1){
						         _str += 'checked disabled';
					         }else{
						         _str += 'checked ';
					         }
				         }
			         }else{
				         if(array[i + ii][4]==1||array[i + ii][5]==1){
					         if(array[i + ii][5]==1){
						         _str += 'checked disabled';
					         }else{
						         _str += 'checked ';
					         }
				         }
			         }
			         _str += ' ></td>\n';
			         _str += '<td><img src="http://images3.stardock.com/wc/icons/' + array[i + ii][3] + '"></td>\n';
			         _str += '<td>' + array[i + ii][0] + '</td>\n';
		      }else{
   		         _str += '<td colspan=3></td>\n';
		      } 
		   }	
		   i++;
		_str += '</tr>\n';
	}
	_str += '<tr>\n';
		_str += '<td height=10></td>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
	_str += '</tr>\n';
	_str += '<tr>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
		_str += '<td>';																												
			_str += '<input type=button name=save value="Save" onClick="saveGalleryMenuOptions(\''+ MenuId +'\');" class="GalleryOptionButton">&nbsp;&nbsp;&nbsp;<input type=button name=Cancel value="Cancel" onClick="closeGalleryMenu(\''+ MenuId +'\');" class="GalleryOptionButton">\n';
		_str += '</td>\n';
		_str += '<td></td>\n';
		_str += '<td></td>\n';
		_str += '<td><a href="javascript:;" onClick="hideShowGalleryOptionItems(0);">Hide</a> / <a href="javascript:;" onClick="hideShowGalleryOptionItems(1);">Show</a> all gallery items.</td>\n';
	_str += '</tr>\n';
	_str += '</table>';
	_str += '</div>';
	
	return _str;
}
function hideShowGalleryOptionItems(mode)
{
   var _checked = false;
   if(mode==1){ _checked = true; }
   var items = document.getElementsByTagName('INPUT');
	for(var i=0;i<items.length;i++){
		if(items[i].name.indexOf('GalOptions__')!=-1){
				items[i].checked = _checked;
		}
	}
}
function closeGalleryMenu(MenuId)
{
	showGallerySlideMenu(MenuId,null);
}
function saveGalleryMenuOptions(MenuId)
{
   var _count = 0;
	var _arrStr = '';
	var items = document.getElementsByTagName('INPUT');
	for(var i=0;i<items.length;i++){
		if(items[i].name.indexOf('GalOptions__')!=-1){
			if(items[i].checked){
			   _count++;
				_arrStr += items[i].name.substring(12) + ',';
			}
		}
	}
	if(_count==0){
	   _arrStr += ',';
	   //alert('Sorry, you must have at least one gallery selection \nbefore you can save your settings. \n\nPlease try again.');
	   //return;
	}
	//if(_arrStr.indexOf(',')!=-1){ _arrStr = _arrStr.substring(0,_arrStr.length-1); }
	setCookie("Gallery", _arrStr);
	showGallerySlideMenu(MenuId,null);
	writeGalleryMenu();
}
function writeGalleryMenu()
{
   try
	{
	   var array = _GalleryItemsArray;
	   var _userArray = getCookie("Gallery");	
	   var bArrayExists = false;	
	   if(_userArray){ 
	      bArrayExists = true; 
	      if(_userArray.indexOf(',')!=-1){ _userArray = _userArray.substring(0,_userArray.length-1); }
	   }
   	
	   var _str = '';
	   var bVisible = false;
   	
	   _str += '<table width="100%" cellpadding=0 cellspacing=0 class="LibraryLinkBarFont">';
	   _str += '<tr>\n';
		   _str += '<td width=22></td>\n';
		   _str += '<td></td>\n';
		   _str += '<td width=45></td>\n';
	   _str += '</tr>\n';
	   for(var i = 0; i < array.length; i++){
		   bVisible = false;
		   if(bArrayExists){
			   if(array[i][5]==1||inUserArray(array[i][2],_userArray)){
				   bVisible = true;
			   }
		   }else{
			   if(array[i][4]==1||array[i][5]==1){
				   bVisible = true;
			   }
		   }
		   if(bVisible){
			   _str += '<tr>\n';
				   _str += '<td align=center><img src="http://images3.stardock.com/wc/icons/' + array[i][3] + '"></td>\n';
				   _str += '<td><nobr><a href="/Skins.aspx?LibID=' + array[i][2] + '" class="LibraryLinkBarFont">' + array[i][0] + '</a></nobr></td>\n';
				   _str += '<td align=right height=22 class="LibraryCountTextColor" style="font-size: 11px;">' + array[i][1] + '&nbsp;</td>\n';
			   _str += '</tr>\n';
		   }
	   }
	   _str += '</table>';
	   document.getElementById('_GalleryMenu').innerHTML = _str;
	}
	catch(ex)
	{
	}
}
var m_GallerySliderPropObj;
function showGallerySlideMenu(MenuId,LinkObj)
{ 
	var bIsIE	= false;
	var bExists = false;
	
	if(navigator.appName == 'Microsoft Internet Explorer' && navigator.userAgent.indexOf('Opera', 0) == -1) { bIsIE = true; }

	if(document.getElementById('_slideMenu')){
		var s = document.getElementById('_slideMenu');
		if(LinkObj && s.className.indexOf('___' + LinkObj.id)!=-1){ bExists=true; } 
		if(bIsIE){
			if(bExists){
				LinkObj.parentNode.removeChild(s);
				document.getElementById(MenuId).parentNode.removeChild(document.getElementById(MenuId));
			}else{
				m_GallerySliderPropObj.itemObj.parentNode.removeChild(s);
			}
		}else{
			if(bExists){
				document.getElementsByTagName('BODY')[0].removeChild(s);
				document.getElementById(MenuId).parentNode.removeChild(document.getElementById(MenuId));
			}else{
				m_GallerySliderPropObj.itemObj.parentNode.removeChild(s);
			}
		}
	}
	if(bExists==false&&(LinkObj)){
		var d 			= document.createElement('div');
		d.id 			= '_slideMenu';
		d.className 	= 'MenuBorder' + ' ___' + LinkObj.id;
		if(bIsIE){
			LinkObj.parentNode.insertBefore(d, LinkObj);
		}else{
			document.getElementsByTagName('BODY')[0].appendChild(d);
		}
		
		var dc 			= document.createElement('div');
		dc.id			= '_slideMenuClose';
		dc.className 	= 'MenuBorderCloseBtn';
		dc.innerHTML 	= 'Close';
		dc.onclick		= function() { showGallerySlideMenu(LinkObj.id,LinkObj); };
		d.appendChild(dc);
		
		if(document.getElementById(MenuId)){
		}else{
			var dElement	= document.createElement('div')
			dElement.id		= MenuId;
			document.getElementsByTagName('BODY')[0].appendChild(dElement);
		}
		
		var dd 			= document.createElement('div');
		dd.id			= '_slideMenu_inside';
		dd.className 	= 'MenuBorderInside';
		dd.innerHTML 	= document.getElementById(MenuId).innerHTML;
		d.appendChild(dd);		
		
		document.getElementById(MenuId).parentNode.removeChild(document.getElementById(MenuId));
		
		if(bIsIE==false){
			d.style.left	= (document.body.clientWidth / 2) - (dd.offsetWidth / 2);
			d.style.top		= (document.body.clientHeight / 2) - (dd.offsetHeight / 2) + document.body.scrollTop;
		}
		
		m_GallerySliderPropObj = new function() {
				this.itemObj	= d;
				this.itemSubObj = dd;
				this.width		= dd.offsetWidth;  
				this.height		= dd.offsetHeight;
				this.newWidth	= 0;
				this.newHeight	= 0;
				this.Counter	= 1;
				this.endCounter = 10;
			}
		drawSliderMenuAnimation();
	}
}
function drawSliderMenuAnimation()
{
	if(m_GallerySliderPropObj.Counter == 1){ m_GallerySliderPropObj.itemObj.className=m_GallerySliderPropObj.itemObj.className + ' MenuBorderOverflow' }
	
	m_GallerySliderPropObj.itemObj.style.width = m_GallerySliderPropObj.newWidth;
	m_GallerySliderPropObj.newWidth = (m_GallerySliderPropObj.Counter / m_GallerySliderPropObj.endCounter) * m_GallerySliderPropObj.width;
	m_GallerySliderPropObj.itemObj.style.height = m_GallerySliderPropObj.newHeight;
	m_GallerySliderPropObj.newHeight = (m_GallerySliderPropObj.Counter / m_GallerySliderPropObj.endCounter) * m_GallerySliderPropObj.height;
	m_GallerySliderPropObj.Counter++;
	
	if(m_GallerySliderPropObj.Counter-1 <= m_GallerySliderPropObj.endCounter){ setTimeout("drawSliderMenuAnimation()", 10); }
	if(m_GallerySliderPropObj.Counter-1 > m_GallerySliderPropObj.endCounter){ 
		m_GallerySliderPropObj.itemObj.className = m_GallerySliderPropObj.itemObj.className.replace('MenuBorderOverflow',''); 
		m_GallerySliderPropObj.itemSubObj.className += ' MenuBorderShadow'; 
	}
}
