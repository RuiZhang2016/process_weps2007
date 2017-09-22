function RunObj(Poll)
{
document.write ('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="240" height="260" id="channels_fballpoll" align="middle">\n');
document.write ('<param name="allowScriptAccess" value="sameDomain" />\n');
document.write ('<param name="movie" value="http://vmedia.rivals.com/images/rivalschannel/www_poll.swf' + Poll + '"/>\n');
document.write ('<param name="quality" value="high" />\n');
document.write ('<param name="bgcolor" value="#ffffff" />\n');
document.write ('<embed src="http://vmedia.rivals.com/images/rivalschannel/www_poll.swf' + Poll + '" quality="high" bgcolor="#ffffff" width="240" height="260" name="channels_fballpoll" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
document.write ('</object>\n');
}

function RunGenObj(txt)
{
	document.write (txt);
}