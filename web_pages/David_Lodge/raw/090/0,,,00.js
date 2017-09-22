

  // "Internal" function to return the decoded value of a cookie
function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}


//  Function to return the value of the cookie specified by "name".
//  name - String object containing the cookie name.
//  returns - String object containing the cookie value, or null if
//  the cookie does not exist.
function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break; 
    }
    return null;
}


// Function to email page to a friend
function sendFriend() {
	url = "http://" + location.host + "/nf/Email/EmailForm?url=" + location.href;
    openWindow(url,"emailtoafriend");
}


// Function to write link to email page to a friend
function writeEmailLink() {
	url = "http://" + location.host + "/nf/Email/EmailForm?url=" + location.href;
    document.write('<a class="sendfriend" href=javascript:openWindow(url,"emailtoafriend");>');
    document.write('Send this page to a friend</a>');
}


function openWindow(ref, name) {
	options="width=320,height=530,status=0,scrollbars=1,toolbar=0,resizable=1";
	window.open(ref,name,options);
}


function getFile() {
    // This procedure returns the HTML for the Author and Cover IMAGE TAGS,<br>
    // as well as the ANCHOR TAGS for the Audio and Video files.<br>
    // The arguments list is: type, ID or filename, DOM, width, height, size.<br>
    // The 'type' and 'ID' are required, while the rest are optional.<br>
    // The filename can be used instead of the ISBN or SAP_ID, since file<br>
    // extensions can vary greatly.  Images are assumed to be 'gifs', and<br>
    // audio and video files are assumed to be 'rm'.<br><br>
    // 08/22/01 - TS - Optional arg added to just return img tag versus doing doc.write
        
    // get argument array and argument count
    var argv=getFile.arguments; 
    var argc=getFile.arguments.length;
    
    // initialize optional variables
    var DOM=""; var width=""; var height=""; var size=""; var secondDir=""; var fileName=""; var returnString="";
    
    // set required variables
    var type=argv[0].toUpperCase();
    var ID=argv[1];
    var firstDir = '/'+ID.charAt(ID.length-1);
        
    // set optional variables
    if (argc == 7) {
        returnString=argv[6].toUpperCase();
        size=argv[5].toUpperCase();
        height=argv[4];
        width=argv[3]; 
        DOM=argv[2].toLowerCase();
    } else if (argc == 6) {
        size=argv[5].toUpperCase();
        height=argv[4];
        width=argv[3]; 
        DOM=argv[2].toLowerCase();
    } else if (argc == 5) {
        height=argv[4]; 
        width=argv[3]; 
        DOM=argv[2].toLowerCase();
    } else if (argc == 4) {
        width=argv[3]; 
        DOM=argv[2].toLowerCase();
    } else if (argc == 3) {
        DOM=argv[2].toLowerCase();
    }
        
    // default domain to 'all' if none specified
    if (DOM=="") DOM="all";
                    
    // if the ID has a file extension, then set the fileName variable to ID
    if (ID.indexOf('.')!=-1) {
        fileName=ID;
        if (type=='IMAGECTRIB' || type=='IMAGEPUB') {
            firstDir='/'+ID.charAt(ID.indexOf('.')-2);
            secondDir='/'+ID.charAt(ID.indexOf('.')-3);
        } else {
            firstDir='/'+ID.charAt(ID.indexOf('.')-1);              
        }
    }
        
    // set variables according to file type
    if (type=='IMAGECTRIB') {
        var path="authors";
        if (secondDir=="") secondDir = '/'+ID.charAt(ID.length-2);
        if (size=="") size="L";
        if (fileName=="") fileName=ID+size+'.gif';
    } else if (type=='IMAGEPUB') {
        var path="covers";
        if (secondDir=="") secondDir = '/'+ID.charAt(ID.length-2);
        if (size=="") size="L";
        if (fileName=="") fileName=ID+size+'.gif';
    } else if (type=='AUDIOCTRIB') {
        var path="audio/ctrib";
        if (fileName=="") fileName=ID+'.rm';
        var anchorText="Listen to an excerpt";
        var imageTag='<img src="/static/images/all/audio.gif" alt="Listen to an excerpt" align="bottom" hspace="2" width="15" height="15" border="0">';
    } else if (type=='AUDIOPUB') {
        var path="audio/pub";
        if (fileName=="") fileName=ID+'.rm';
        var anchorText="Listen to an excerpt";
        var imageTag='<img src="/static/images/all/audio.gif" alt="Listen to an excerpt" align="bottom" hspace="2" width="15" height="15" border="0">';
    } else if (type=='VIDEOCTRIB') {
        var path="video/ctrib"; 
        if (fileName=="") fileName=ID+'.rm';
        var anchorText="Watch a video";
        var imageTag='<img src="/static/images/all/video.gif" alt="Watch a video" align="bottom" hspace="2" width="15" height="15" border="0">';
    } else if (type=='VIDEOPUB') {
        var path="video/pub";   
        if (fileName=="") fileName=ID+'.rm';
        var anchorText="Watch a video";
        var imageTag='<img src="/static/images/all/video.gif" alt="Watch a video" align="bottom" hspace="2" width="15" height="15" border="0">';
    }
    
    // set first and second directory to "" if domain specific
    if (DOM!="all" || fileName.substr(0,7)=="missing") {
        firstDir="";
        secondDir="";
    }

    var filePath='/static/'+path+'/'+DOM+firstDir+secondDir+'/'+fileName;
    
    if (type=='IMAGECTRIB' || type=='IMAGEPUB') {
        var fileString='<img src="'+filePath+'"';
        if (width!="") fileString=fileString+' width="'+width+'"';
        if (height!="") fileString=fileString+' height="'+height+'"';
        fileString=fileString+'>';
    } else {
        var fileString='<a href="'+filePath+'" class=set3 valign="bottom" target="new">';
        var fileString=fileString+imageTag+anchorText+'</a>';
    }
    
    if (returnString == 'TAG') {
        return fileString;
    } else {
        document.write(fileString);
    }
} 


//This function gets the current CoreSetId from the ServerName
function GetCoreSetId() {
	// check the ServerName against all the Coresets.
	switch (self.location.hostname.toLowerCase()) {
	 
	case "prod.sa.penguin.com" :
		return 0;
		break;
	
	case "bookseller.penguingroup.com" :
		return 4;
		break;
	
	case "heatbook.com" :
		return 618;
		break;
	
	case "press.penguin.ca" :
		return 3;
		break;
	
	case "christie.penguin.com" :
		return 616;
		break;
	
	case "www.heatbook.com" :
		return 618;
		break;
	
	case "www.penguin.ie" :
		return 503;
		break;
	
	case "us.penguingroup.com" :
		return 0;
		break;
	
	case "us.penguinclassics.com" :
		return 10;
		break;
	
	case "www.penguin.co.uk" :
		return 0;
		break;
	
	case "www.pearsonrewards.com" :
		return 611;
		break;
	
	case "employeestorepreview.penguin.com" :
		return 608;
		break;
	
	case "www.riverheadbooks.com" :
		return 602;
		break;
	
	case "academics.penguin.ca" :
		return 2;
		break;
	
	case "www.penguin.com.au" :
		return 0;
		break;
	
	case "www.penguin.ca" :
		return 0;
		break;
	
	case "signetclassics.com" :
		return 607;
		break;
	
	case "www.penguinmodernclassics.ca" :
		return 509;
		break;
	
	case "www.riverheadbooks.biz" :
		return 602;
		break;
	
	case "nz.penguinclassics.com" :
		return 10;
		break;
	
	case "www.dorlingkindersley-uk.co.uk" :
		return 11;
		break;
	
	case "www.penguinmodernclassic.ca" :
		return 509;
		break;
	
	case "us.dk.com" :
		return 11;
		break;
	
	case "prod.in.penguin.com" :
		return 0;
		break;
	
	case "penguin.com.au" :
		return 0;
		break;
	
	case "www.penguin.co.nz" :
		return 0;
		break;
	
	case "booksellers.dk.com" :
		return 4;
		break;
	
	case "bookclub.penguin.ca" :
		return 6;
		break;
	
	case "dawbooks.com" :
		return 50;
		break;
	
	case "www.heatbooks.com" :
		return 618;
		break;
	
	case "readers.penguin.co.uk" :
		return 5;
		break;
	
	case "idiotsguides.com" :
		return 603;
		break;
	
	case "uk.sellers.dk.com" :
		return 501;
		break;
	
	case "www.dawbooks.com" :
		return 50;
		break;
	
	case "www.vikingbooks.ca" :
		return 0;
		break;
	
	case "www.puffinbooks.ca" :
		return 1;
		break;
	
	case "bookseller.penguin.com" :
		return 4;
		break;
	
	case "booksellers.penguingroup.com" :
		return 4;
		break;
	
	case "prod.cn.penguin.com" :
		return 0;
		break;
	
	case "www.kiddk.com" :
		return 620;
		break;
	
	case "www.signetclassics.com" :
		return 607;
		break;
	
	case "partners.penguin.com" :
		return 610;
		break;
	
	case "www.penguinmodernclassics.com" :
		return 509;
		break;
	
	case "www.redlightbooks.com" :
		return 619;
		break;
	
	case "brown.penguin.com" :
		return 614;
		break;
	
	case "booksellers.us.penguingroup.com" :
		return 4;
		break;
	
	case "cn.dk.com" :
		return 11;
		break;
	
	case "kiddk.com" :
		return 620;
		break;
	
	case "prod.us.penguin.com" :
		return 0;
		break;
	
	case "schools.dk.com" :
		return 506;
		break;
	
	case "redlightbooks.com" :
		return 619;
		break;
	
	case "pearsonstore.penguin.com" :
		return 500;
		break;
	
	case "ukchildrens.dk.com" :
		return 101;
		break;
	
	case "www.riverheadbooks.us" :
		return 602;
		break;
	
	case "pressoffice.penguin.co.uk" :
		return 3;
		break;
	
	case "www.modernclassic.ca" :
		return 509;
		break;
	
	case "prod.nz.penguin.com" :
		return 0;
		break;
	
	case "bookseller.dk.com" :
		return 4;
		break;
	
	case "www.penguinclassics.co.uk" :
		return 10;
		break;
	
	case "books.peterrabbit.com" :
		return 14;
		break;
	
	case "store.penguin.com" :
		return 605;
		break;
	
	case "prod.ca.penguin.com" :
		return 0;
		break;
	
	case "us.penguin.com" :
		return 0;
		break;
	
	case "www.puffin.co.uk" :
		return 15;
		break;
	
	case "prod.au.penguin.com" :
		return 0;
		break;
	
	case "ukbookseller.dk.com" :
		return 104;
		break;
	
	case "pearsonrewards.com" :
		return 611;
		break;
	
	case "riverheadbooks.com" :
		return 602;
		break;
	
	case "books.ladybird.co.uk" :
		return 13;
		break;
	
	case "employeestore.penguin.com" :
		return 608;
		break;
	
	case "www.modernclassics.ca" :
		return 509;
		break;
	
	case "www.hamishhamilton.co.uk" :
		return 505;
		break;
	
	case "penguin.ca" :
		return 0;
		break;
	
	case "www.penguinclassics.ca" :
		return 10;
		break;
	
	case "booksellers.penguin.ca" :
		return 4;
		break;
	
	case "penguin.co.nz" :
		return 0;
		break;
	
	case "academics.penguin.co.uk" :
		return 2;
		break;
	
	case "books.funwithspot.com" :
		return 12;
		break;
	
	case "heatbooks.com" :
		return 618;
		break;
	
	case "www.idiotsguides.com" :
		return 603;
		break;
	
	case "www.riverheadbooks.info" :
		return 602;
		break;
	
	case "sales.penguin.ca" :
		return 508;
		break;
	
	case "booksellers.penguin.com" :
		return 4;
		break;
	
	case "bookseller.us.penguingroup.com" :
		return 4;
		break;
	
	case "pearsonstore.dk.com" :
		return 609;
		break;
	
	case "test.uk.penguin.com" :
		return 1;
		break;
	
	case "cn.penguinclassics.com" :
		return 10;
		break;
	 default :
		return 0;
	}
	
    return 0;
}


//This function gets the Content Section Symbol from query String.
function GetSymbol(defaultSym) {
	symbol = defaultSym;
	queryString = unescape(window.location);	
	start = queryString.indexOf("sym=");
	if (start != -1) {
		symbol = queryString.substring(start+4,start+7);
	}
	return symbol;
}


function ExecQuickSearch() {
    var searchText = document.QuickSearch.SearchString.value;
	rawSearchText = escape(searchText);
    searchText = searchText.replace(/'/g,"^");
    searchText = searchText.replace(/\./g,"!");     
    searchText = searchText.replace(/\//g,"~");     	
    searchText = searchText.replace(/\?/g,"%3F");     	
    if (searchText.length == 0) {
        alert('Please enter a search string.');
        return;
    }
    if (searchText.length == 1 && searchText == '%') {
        alert('Please enter more text');
        return;
    }
    var oid = escape(searchText);
    var url = '/nf/Search/QuickSearchProc/1,,' + searchText + ',00.html?id=' + searchText;
    window.open(url, "_top");
}


function viewCounter(pageName, uncacheFreq, id, misc1, misc2  ) {
	var undefined;
	if (misc1==undefined) {misc1="";}
	if (misc2==undefined) {misc2="";}
	
	var today = new Date();
	var factor = uncacheFreq * 1000;
	//The below line sets time to a new number every $uncacheFreq seconds.
	var time = Number(today)/factor - (Number(today)%factor)/factor;
	document.write("<img border=0 width='1' height='1' src='/static/images/all/wtblanks/" + pageName + ".gif?id=" + id + "&misc1=" + misc1 + "&misc2=" + misc2 +"&time="+ time + "'>");
}

