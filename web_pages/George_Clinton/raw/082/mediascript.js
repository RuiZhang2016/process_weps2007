var timerID = 0;
var objCurSelItem = null;
var strCurLoadMBItem = null;

var curRefID = null;
var curArtRefID = null;
var curSecNum = -1;
var curPageNum = 1;


var mbVleft = 0;
var mbVRight = 0;
var mbBufLeft = 0;
var mbBufRight = 0;
var curItemIndex = 0;
var fSmartLoad = true;
var mbBufDelta = 3;
var maxIndex = 0;

function SetMbItemIndex(itemID, artRefID)
{
	curArtRefID = artRefID;
	for(i=0; i < mbItemCount; i++)
	{
		if (mbItemArray[i] == itemID)
			curItemIndex = i;
	}
}

function initMediabar()
{
	if (window.medbarctr!= null)
	{
		if (medbarctr.clientWidth > medEnd.offsetLeft)
		{
			MedbarLeftArrow.style.visibility = "hidden";
			MedbarRightArrow.style.visibility = "hidden";
			
			for(i=0; i < mbItemCount; i++)
				mbItemArray[i].src = mbItemPath[i];
			
			fSmartLoad = false;
		}
		else
		{
			MedbarLeftArrow.style.visibility = "visible";
			MedbarRightArrow.style.visibility = "visible";
			doMbSmartLoad();
		}
	}
}

function doLeftBufferLoad()
{
	while (mbBufLeft > 0 && (mbBufLeft > (mbVleft - mbBufDelta)))
	{
		mbBufLeft--;
		if ((mbItemArray[mbBufLeft].offsetLeft + medbar.offsetLeft) >= 0)
			mbVleft--;
		mbItemArray[mbBufLeft].src = mbItemPath[mbBufLeft];
	}
}

function doRightBufferLoad()
{
	while ((mbBufRight < maxIndex) && (mbBufRight < (mbVRight + mbBufDelta)))
	{
		mbBufRight++;
		if ((mbItemArray[mbBufRight].offsetLeft + medbar.offsetLeft) <= medbarctr.clientWidth)
			mbVRight++;
		mbItemArray[mbBufRight].src = mbItemPath[mbBufRight];
	}
}

function doMbSmartLoad()
{
	mbVleft = mbVRight = mbBufLeft = mbBufRight = curItemIndex;
	
	if (mbItemCount > 0)
		maxIndex = mbItemCount - 1;
	
	if (curItemIndex <= mbItemCount && curItemIndex >= 0)
		mbItemArray[curItemIndex].src = mbItemPath[curItemIndex];
	
	scrollCurSelItemIntoView();
	
	doLeftBufferLoad();
	doRightBufferLoad();
}

function scrollCurSelItemIntoView()
{
	var leftDelta = curItemIndex;
	var rightDelta =  0;
	
	if (curItemIndex  < (mbItemCount-1))
		rightDelta = mbItemCount - curItemIndex - 1;
			
	if (leftDelta <= rightDelta)
	{
		if (leftDelta > 3)
			medbar.style.posLeft = -(mbItemArray[curItemIndex-3].offsetLeft);
		else
			medbar.style.posLeft = 0;
	}
	else
	{
		if (rightDelta > 3)
			medbar.style.posLeft = medbarctr.clientWidth - (mbItemArray[curItemIndex+3].offsetLeft + mbItemArray[curItemIndex+3].width);
		else
			medbar.style.posLeft = medbarctr.clientWidth - (mbItemArray[curItemIndex+rightDelta].offsetLeft + mbItemArray[curItemIndex+rightDelta].width);
	}
}

function onMediaBarResize()
{
	if ((medbarctr.clientWidth > medEnd.offsetLeft) && (medbar.offsetLeft>= 0))
	{
		MedbarLeftArrow.style.visibility = "hidden";
		MedbarRightArrow.style.visibility = "hidden";
	}
	else
	{
		MedbarLeftArrow.style.visibility = "visible";
		MedbarRightArrow.style.visibility = "visible";	
	}
	
	if ((fSmartLoad && mbBufLeft > 0) && ((mbItemArray[mbBufLeft-1].offsetLeft + medbar.offsetLeft) >= 0))
	{
		mbVleft = mbBufLeft;
		doLeftBufferLoad()
	}
	
	if ((fSmartLoad && mbBufRight < maxIndex) && ((mbItemArray[mbBufRight+1].offsetLeft + medbar.offsetLeft) <= medbarctr.clientWidth))
	{
		mbVRight = mbBufRight;
		doRightBufferLoad()
	}
}

function setSelMBItem(strMedItemID, strRefID)
{
	strCurLoadMBItem = strMedItemID;
	curRefID = strRefID;
}
		
function initFrame()
{
	if (document.all.medfrm.readyState == "complete")
	{
		if (strCurLoadMBItem != null || strCurLoadMBitem != "")
		{
			var objItem = document.getElementById(strCurLoadMBItem);
			if (objItem && objCurSelItem != objItem)
			{
				setSelectMedBarItem(objItem);
			}
		}
		var objMedEnd = document.frames("medfrm").document.all.rawMedEnd;
		if (objMedEnd.offsetTop > 0)
			document.all.medfrm.height = objMedEnd.offsetTop + 10;
	}
}

function jumpToRevAssoc()
{
	objRevArea = document.frames("medfrm").document.getElementById("maxRevArea");
	if (objRevArea)
		objRevArea.scrollIntoView(false);
}

function setSelectMedBarItem(objItem)
{
	if (objItem != null)
	{
		unselectMedBarItem();
		objItem.style.filter="progid:DXImageTransform.Microsoft.BasicImage(Rotation=0,Mirror=0,Invert=0,XRay=0,Grayscale=0,Opacity=0.4)";
		objCurSelItem = objItem;
		objCurSelItem.style.borderColor='#000000';
		strCurLoadMBItem = ""; 
	}
}

function selectMedBarItem(fContentspg, objItem, refid , artRefID, secNum, pgNum)
{
	if ((objCurSelItem != objItem) && (objItem != null))
	{
		setSelectMedBarItem(objItem);
		
		if (fContentspg)
		{
			window.navigate("/media_" + refid + "_" + artRefID + "_" + secNum + "_" + pgNum + "/media.html");
		}
		else
		{
			document.all.medfrm.src = "/rawmedia_" + refid + "_" + artRefID + "_" + secNum + "_" + pgNum + "/rawmedia.html";
			curRefID = refid;
			curArtRefID = artRefID;
			curSecNum = secNum;
			curPageNum = pgNum;
		}
	}
}

function unselectMedBarItem()
{
	if (objCurSelItem != null)
	{
		objCurSelItem.style.filter='';
		objCurSelItem.style.borderColor='#ffffff';
		objCurSelItem = null;
	}
}

function onMouseOverMedBarItem(objItem)
{
	if ((objCurSelItem != objItem) && (objItem != null))
		objItem.style.borderColor='black';
}

function onMouseOutMedBarItem(objItem)
{
	if ((objCurSelItem != objItem) && (objItem != null))
		objItem.style.borderColor='white';
}


function moveRight(dirPix, Speed)
{	
	cancelMove();
	
	if (medbar.style.posLeft < 0)
	{
		timerID = window.setInterval("Move(" + dirPix + ")", Speed);			
	}
}

function moveLeft(dirPix, Speed)
{	
	cancelMove();
	
	if((medbar.style.posLeft + medEnd.offsetLeft) > medbarctr.clientWidth)
	{
		timerID = window.setInterval("Move(" + dirPix + ")", Speed);		
	}
}

function cancelMove()
{
	if (timerID)
		window.clearInterval(timerID);
	timerID =0;
}

function Move(dirVal)
{
	if (dirVal > 0 && medbar.style.posLeft < 0)
	{
		medbar.style.posLeft = medbar.style.posLeft + dirVal;
		if (fSmartLoad && mbBufLeft > 0)
		{
			if ((mbItemArray[mbVleft-1].offsetLeft + medbar.offsetLeft) >= 0)
			{
				mbVleft--;mbBufLeft--;
				mbItemArray[mbBufLeft].src = mbItemPath[mbBufLeft];
			}
		}
	}
	else if (dirVal < 0 && ((medbar.style.posLeft + medEnd.offsetLeft) > medbarctr.clientWidth))
	{
		medbar.style.posLeft = medbar.style.posLeft + dirVal;
		if (fSmartLoad && mbBufRight < maxIndex)
		{
			if ((mbItemArray[mbVRight+1].offsetLeft + medbar.offsetLeft) <= medbarctr.clientWidth)
			{
				mbVRight++; mbBufRight++; 
				mbItemArray[mbBufRight].src = mbItemPath[mbBufRight];
			}
		}
	}
	else
	{
		cancelMove();
	}
}

function OnMBHistSave() 
{ 
	var strobjid = "mb" + curRefID;
	MBHistSaved.setAttribute('objid', strobjid);
	if (curRefID != null)
	{
		MBHistSaved.setAttribute('refid',curRefID);
	}
	if (curArtRefID != null)
	{
		MBHistSaved.setAttribute('artrefid',curArtRefID);
	}
	MBHistSaved.setAttribute('sec',curSecNum);
	MBHistSaved.setAttribute('pg',curPageNum);		
}
function OnMBHistLoad() 
{ 
	var strobjid = MBHistSaved.getAttribute('objid');
	var objitem = document.getElementById(strobjid);
	var refid = MBHistSaved.getAttribute('refid');
	var artrefid = MBHistSaved.getAttribute('artrefid');
	var secnum = MBHistSaved.getAttribute('sec');
	var pgnum = MBHistSaved.getAttribute('pg');
	if (objitem != null && refid != null && artrefid != null) 
	{ 
		selectMedBarItem(0, objitem, refid , artrefid, secnum, pgnum);
	} 
}
function OnMBFavSave() 
{ 
	var strobjid = "mb" + curRefID;
	MBFavSaved.setAttribute('objid', strobjid);
	MBFavSaved.setAttribute('refid',curRefID);
	MBFavSaved.setAttribute('artrefid',curArtRefID);
	MBFavSaved.setAttribute('sec',curSecNum);
	MBFavSaved.setAttribute('pg',curPageNum);
}
function OnMBFavLoad() 
{ 
	var strobjid = MBFavSaved.getAttribute('objid');
	var objitem = document.getElementById(strobjid);
	var refid = MBFavSaved.getAttribute('refid');
	var artrefid = MBFavSaved.getAttribute('artrefid');
	var secnum = MBFavSaved.getAttribute('sec');
	var pgnum = MBFavSaved.getAttribute('pg');
	if (objitem != null && refid != null && artrefid != null) 
	{ 
		selectMedBarItem(0, objitem, refid , artrefid, secnum, pgnum);
	} 
}

function initWMPlyr(nWidth, nHeight, strMedia, fCCSupp, strSAMI, strPluginURL)
{
	strHtml = "<object width='" + nWidth + "' height='"+ nHeight + "' id='EncwmpPlayer' classid='CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6'><param name='autoStart' value='1'/><param name='enableContextMenu' value='0'/><param name='URL' value='"+ strMedia + "'/>";
		
	if (fCCSupp == 1)
		strHtml += "<param name='captioningID' value='cc'/><param name='SAMIFileName' value='" + strSAMI + "' />"
		
	strHtml += "<EMBED TYPE='application/x-mplayer2' NAME='EncwmpPlayer' WIDTH='" + nWidth + "' HEIGHT='" + nHeight + "' SRC='" + strMedia + "' PLUGINSPAGE='" + strPluginURL + "' /></object>";
	document.write(strHtml);
}

function initQTPlyr(nWidth, nHeight, strMedia)
{
	strHtml = "<object width='" + nWidth + "' height='"+ nHeight + "' id='EncqtPlayer' hspace='20' vspace='20' type='application/x-oleobject' standby='loading...' classid='CLSID:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' codebase='http://www.apple.com/qtactivex/qtplugin.cab'><param name='src' value='"+ strMedia + "'/><param name='loop' value='false'/><param name='type' value='application/x-oleobject'/><param name='autoplay' value='true'/><EMBED loop='false' TYPE='application/x-oleobject' NAME='EncwmpPlayer' WIDTH='" + nWidth + "' HEIGHT='" + nHeight + "' SRC='" + strMedia + "' ALT='You need QuickTime: ...' AUTOPLAY='True' PLUGINSPAGE='http://www.apple.com/quicktime/download' /></object>";
	document.write(strHtml);
}

function initInteractSWPlyr(nWidth, nHeight, strMedia, strProductID, strPlyr)
{
	strHtml = "<object id='swplyr' classid='clsid:166B1BCA-3F9C-11CF-8075-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0' width='" + nWidth + "' height='" + nHeight + "' ><param NAME='AutoStart' VALUE='TRUE'/><param name='PALETTE' value='BACKGROUND'/><param name='LOGO' value='false'/><param name='PROGRESS' value='true'/><param swVolume='false' swRestart='false' swPausePlay='false' swFastForward='false' swContextMenu='false' /><param name='sw1' value='[#windowSize:[" + nWidth + " , " + nHeight + "], #locVersion:\"" + strProductID + "\", #debugLevel:10, #showDebug:0, #hostTabSync:0, #keepGlobals:0, #playMode:\"html\"]' /><param name='SRC' value='" + strPlyr + "' /><param name='SWURL' value='" + strMedia + "' /><EMBED progress='true' logo='FALSE' swVolume='false' swRestart='false' swPausePlay='false' swFastForward='false' TYPE='application/x-director' NAME='swplyr' pluginspage='http://www.macromedia.com/shockwave/download/' width='" + nWidth + "' height='" + nHeight + "' SRC='" + strPlyr + "' SWURL='" + strMedia + "' /></object>";
	document.write(strHtml);
}

function initSVPlyr(nWidth, nHeight, nSurWidth, nCtrlWidth, strMedia)
{
	strHtml="<object classid='clsid:928626A3-6B98-11CF-90B4-00AA00A4011F' type='application/x-oleobject' id='surVid' codebase='/encnet/external/MSSurVid.cab#Version=1,2,0,20' width='" + nWidth + "' height='" + nHeight + "' ><param name='ControlDLL' value='CPSurVid.dll'/><param name='SurroundRect' value='0,0," + nSurWidth + "," + nHeight + "' /><param name='ControlRect' value='" + nSurWidth + ",0," + nCtrlWidth + "," + nHeight + "' /><param name='Caption' value=''/><param name='Image' value='" + strMedia + "' /><embed type='application/x-npwrap' CLASSID='928626A3-6B98-11CF-90B4-00AA00A4011F' NPCODEBASE='/encnet/external/npwrap.cab#Version=1,0,0,15' CODEBASE='/encnet/external/MSSurVid.cab#Version=1,2,0,20' CONTROLNAME='Microsoft Surround Video Version 1.2' PLUGINSPAGE='http://carpoint.msn.com/include/DownloadNPWrap.asp?Feature=Surround%20Video' PLUGINURL='http://carpoint.msn.com/include/DownloadNPWrap.asp?Feature=Surround%20Video' CONTROLDLL='CPSurVid.dll' width='" + nWidth + "' height='" + nHeight + "' Image='" + strMedia + "' SurroundRect='0,0," + nSurWidth + "," + nHeight + "' ControlRect='" + nSurWidth + ",0," + nCtrlWidth + "," + nHeight + "' Caption='' /></object>";
	document.write(strHtml);
}

function WriteMediaCommonObjectTag(mediaId, width, height, iiafFlashPlayerPath, iiafMediaPath)
{		
	var s = "";
	s = '<object classid="' + 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' + '" '
	+ ' codebase="' + 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' + '" '
	+ ' ALIGN=""' 
	+ ' id=' + mediaId 
	+ ' width="' + width + '"'
	+ ' height="' + height + '"'
	+ ' VIEWASTEXT' + '>'		
	+ '<param name="movie" value="' + iiafFlashPlayerPath + '"></param>'
	+ '<param name="loop" value="false" />' + '<param name="menu" value="false" />'
	+ '<param name="quality" value="best" />' + '<param name="scale" value="noscale" />'
	+ '<param name="bgcolor" value="#FFFFFF" />' + '<param name="BASE" value="." />'
	+ '<param name="FlashVars" value="filepath=' + iiafMediaPath + '&amp;isActive=true"></param>'
	+ '<EMBED menu="false" ' + 'quality="high" ' + 'bgcolor="#FFFFFF" ' + 'ALIGN="" ' + 'TYPE="application/x-shockwave-flash" '
	+ 'PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" ' + 'base="." NAME="001887f7" ' 
	+ 'src="' + iiafFlashPlayerPath + '" '	+ 'FlashVars="filepath=' + iiafMediaPath + '&amp;isActive=true" '
	+ 'width="' + width + '" '
	+ 'height="' + height + '">'
	+ '</EMBED>' + '</object>';
	
	document.write(s);
}

function WriteDictionaryPronObjectTag(width, height, audioPath, title)
{
	var s = "";
	
	s = '<OBJECT id="movie" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
	+ ' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" '
	+ 'WIDTH="' + width + '" '
	+ 'HEIGHT="' + height + '" ' 
	+ 'ALIGN="" VIEWASTEXT="true">'
	+ '<PARAM NAME="movie" VALUE="/encnet/features/dictionary/audioplayer.swf" />'
	+ '<PARAM NAME="menu" VALUE="false" />'
	+ '<PARAM NAME="FlashVars" value="snd=' + audioPath + '&amp;title=' + title + '"></PARAM>'
	+ '<PARAM NAME="quality" VALUE="high" /><PARAM NAME="wmode" VALUE="transparent" /><PARAM NAME="bgcolor" VALUE="#FFFFFF" />'
	+ '<EMBED name="movie" src="/encnet/features/dictionary/audioplayer.swf" menu="false" quality="high" '
	+ 'wmode="transparent" bgcolor="#FFFFFF" '
	+ 'WIDTH="' + width + '" '
	+ 'HEIGHT="' + height + '" '
	+ 'NAME="movie" ALIGN=""'
	+ 'TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" '
	+ 'FlashVars="snd=' + audioPath + '&amp;title=' + title + '">'
	+ '</EMBED></OBJECT>'
	
	document.write(s);
		
}

function WriteKidsMediaObjectTag(width, height, mediaId, iiafFlashPlayerPath, iiafMediaPath)
{
	var s = "";
	
	s = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" '
	+ 'ALIGN="" '
	+ 'id="' + mediaId + '" '
	+ 'width="' + width + '" '
	+ 'height="' + height + '"> '
	+ '<param name="movie" value="' + iiafFlashPlayerPath + '">'
	+ '<param name="loop" value="false"><param name="menu" value="false"> <param name="quality" value="best">'
	+ '<param name="scale" value="noscale"> <param name="bgcolor" value="#FFFFFF"> <param name="BASE" value=".">'
	+ '<param name="FlashVars" value="filepath=' + iiafMediaPath + '&amp;isActive=true">'
	+ '<EMBED menu="false" quality="high" bgcolor="#FFFFFF" ALIGN="" TYPE="application/x-shockwave-flash" '
	+ 'PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" base="." NAME="' + mediaId + '" '
	+ 'src="' + iiafFlashPlayerPath + '" '
 	+ 'FlashVars="filepath=' + iiafMediaPath + '&amp;isActive=true" '
	+ 'width="' + width + '" '
	+ 'height="' + height + '"> '
	+ '</EMBED></object>'
	
	document.write(s);
}

function WriteKidsMediaEncwmpPlayerObjectTag(width, height, mediaPath, uiMode, flagCaption, samiFileName, pluginPath)
{
	var s = "";
	
	s = '<object id="EncwmpPlayer" classid="CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6" '
	+ 'width="' + width + '" '
	+ 'height="' + height + '"> '
	+ '<param name="autoStart" value="1"><param name="enableContextMenu" value="0"> '
	+ '<param name="URL" value="' + mediaPath + '"> '
	+ '<param name="uiMode" value="' + uiMode + '"> '
	
	if (flagCaption == '1')
	{
		s = s + '<param name="captioningID" value="cc"> '
		s = s + '<param name="SAMIFileName" value="' + samiFileName + '"> '
	}
	
	
	s = s + '<embed type="application/x-mplayer2" name="EncwmpPlayer" '
	s = s + 'width="' + width + '" '
	s = s + 'height="' + height + '" '
	s = s + 'src="' + mediaPath + '" pluginspage="' + pluginPath + '/"></embed></object> '	
	
	document.write(s);
}


function WriteBilingualObjectTag(width, height, title, mediaPath, flagPlayBlpFromScript, flagAuthorized)
{
	var s = "";
	
	s = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" '
	+ 'WIDTH="' + width + '" '
	+ 'HEIGHT="' + height + '" '
	+ 'ALIGN="" VIEWASTEXT="true" id="blp_' + title + '" '
	
	if (flagPlayBlpFromScript)
	{
		s = s + 'onkeydown="if (event.keyCode == 13) window.document.blp_' + title + '.SetVariable(&quot;soundStatus&quot;,&quot;play&quot;);"> '
	}

	s = s + '<PARAM NAME="movie" VALUE="/encnet/features/dictionary/audioplayer.swf" /> '
	s = s + '<PARAM NAME="menu" VALUE="false" />'
	s = s + '<PARAM NAME="FlashVars" value="snd=' + mediaPath + '&amp;title=' + title + '&amp;enabled=' + flagAuthorized + '"></PARAM> '
	s = s + '<PARAM NAME="quality" VALUE="high" /><PARAM NAME="wmode" VALUE="opaque" /><PARAM NAME="bgcolor" VALUE="#FFFFFF" />'
	s = s + '<EMBED src="/encnet/features/dictionary/audioplayer.swf" menu="false" quality="high" wmode="opaque" bgcolor="#FFFFFF" '
	s = s + 'WIDTH="' + width + '" '
	s = s + 'HEIGHT="' + height + '" ALIGN="" TYPE="application/x-shockwave-flash"  PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" '
	s = s + 'FlashVars="snd=' + mediaPath + '&amp;title=' + title + '&amp;enabled=' + flagAuthorized + '" '
	s = s + 'name="blp_' + title + '"></EMBED></OBJECT>'
	

	document.write(s);
}



