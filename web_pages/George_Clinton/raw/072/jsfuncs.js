// popup window function, based on original code by James Craig
var sUserAgent = navigator.userAgent.toLowerCase();
var isOp = (sUserAgent.indexOf('opera')!=-1)?true:false;

function popUp(oAnchor,sProps,sWindow){
    var sUrl = '';
    if(typeof(oAnchor)=='string') sUrl = oAnchor;
    else {
        if(oAnchor.getAttribute) sUrl = oAnchor.getAttribute('href');
        if(sUrl=='') sUrl = oAnchor.href;
    }
    if(sUrl=='') return true;
    var sWindowName = sWindow?sWindow:'nprPopup';
    if(!sProps) sProps = null;
    if(sUrl) var oPopup = window.open(sUrl,sWindowName,sProps);
    if(oPopup && !isOp) oPopup.focus();
    return (oPopup)?false:true;
}
function setUserVars()
    {
        if(navigator.appName.indexOf('Internet Explorer') != -1)
            {
                window.isIE = true;
            }
        window.userPlatform = navigator.platform;
        if((window.userPlatform.indexOf("mac") != -1) || (window.userPlatform.indexOf("MAC") != -1) || (window.userPlatform.indexOf("Mac") != -1))
            {
                window.userPlatform = "mac";
            }
    }
setUserVars();
function adCompatible(mediaPreference)
    {
        /*returnVal = false;
        if(((window.isIE) && (window.userPlatform != "mac")) && ((mediaPreference == "WM") || (mediaPreference == "RM")) )
            {
                returnVal = true;
            }
        return returnVal;*/
        if (navigator.userAgent.indexOf("Windows\ NT\ 5.1") != -1)
        {
            // alert('Windows XP');
            return true;
        }
        else
        {
            //alert('Not Windows XP');
            return true;
        }
        // alert ('navigator.userAgent=' + navigator.userAgent);
        return true;
    }
function doAd(newURL, mediaPreference)
    {
        if(adCompatible(mediaPreference))
            {
                location.href=newURL + "&getUnderwriting=1";
            }
        else
            {
                location.href=newURL;
            }   
    }
function toNumericMonth(month)
    {
        var monthArray = new Object();
        monthArray["jan"] = 0;
        monthArray["feb"] = 1;
        monthArray["mar"] = 2;
        monthArray["apr"] = 3;
        monthArray["may"] = 4;
        monthArray["jun"] = 5;
        monthArray["jul"] = 6;
        monthArray["aug"] = 7;
        monthArray["sep"] = 8;
        monthArray["oct"] = 9;
        monthArray["nov"] = 10;
        monthArray["dec"] = 11;
        return monthArray[month.toLowerCase()];
    }
function parseZero(valToUse)
    {
        if(valToUse.length > 1 && valToUse.charCodeAt(0) == 0)
            {
                valToUse = valToUse.substr(1, valToUse.length);
            }
        return valToUse;
    }
function setDate(dateToUse)
    {
        dateArray = dateToUse.split("-");
        dateToReturn = new Date();
        dateToReturn.setDate(parseZero(dateArray[0]));
        dateToReturn.setMonth(toNumericMonth(dateArray[1].toLowerCase()));
        dateToReturn.setYear(dateArray[2]);
        dateToReturn = Date.parse(dateToReturn);
        return dateToReturn;
    }
function compareDates(date1, date2)
    {
        date1 = setDate(date1);
        date2 = setDate(date2);
        returnVal = "after";
        if(date2 < date1)
            {
                returnVal = "before";           
            }
        return returnVal;
    }
function checkMediaPrefs(mediaPrefVals, valToTest)
    {
        match = false;
        for(i = 0; i < mediaPrefVals.length; i++)
            {
                if(mediaPrefVals[i] == valToTest)
                    {
                        match = true;
                    }
            }
        return match;
    }
function makePrefArray(mediaPreference)
    {
        temp = new Array();
        temp = mediaPreference.split(",");
        for(i = 0; i < temp.length; i++)
            {
                temp[i] = temp[i].toUpperCase();
            }
        return temp;
    }
function goNewURL(newURL, saURL, winTarget)
    {
        if(saURL == "")
            {
                saURL = newURL;
            }
        if(window.sa_onclick)
            {
                sa_onclick(saURL);
            }
        if(winTarget == "new")
            {
                window.open(newURL, '', "width=540,height=360,toolbar=none,location=none,menubar=none,status=none,resizable=yes");
            }
        else
            {
                location.href= newURL;
            }
    }
function getMedia(prgCode, showDate, segNum, mediaAvailable)
    {
        nprcookie = get_cookie('sauid');
        
        mediaAvailArray = makePrefArray(mediaAvailable);
        if((segNum == "all") || (segNum == "ALL"))
        {
            segNum = "";
        }
        if(checkMediaPrefs(mediaAvailArray, "RAM") && (!checkMediaPrefs(mediaAvailArray, "RM")) && (!checkMediaPrefs(mediaAvailArray, "WM")))
        {
            // only ram available
            goNewURL("http://www.npr.org/templates/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=RAM", "", "");
        }
        else if(checkMediaPrefs(mediaAvailArray, "RM") && !checkMediaPrefs(mediaAvailArray, "WM"))
        {
            // only real available
            goNewURL("http://www.npr.org/templates/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=RM", "", "");
        }
        else if(checkMediaPrefs(mediaAvailArray, "WM") && !checkMediaPrefs(mediaAvailArray, "RM"))
        {
            // only windows available
            if(nprcookie != null && nprcookie != "undefined")
            {
                goNewURL("http://www.npr.org/templates/dmg/dmg_wmref.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=WM&sauid=" + nprcookie, "", "");
            }
            else
            {
                goNewURL("http://www.npr.org/templates/dmg/dmg_wmref.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=WM", "", "");
            }
            
        }       
        else if((checkMediaPrefs(mediaAvailArray, "RAM") || checkMediaPrefs(mediaAvailArray, "RM")) && checkMediaPrefs(mediaAvailArray, "WM"))
        {
            // windows available and at least one of real or ram available

                    if(checkCookie("NPRMediaPref"))
                        {
                            mediaPreference = checkCookie("NPRMediaPref");
                            if(mediaPreference == "WM")
                            {
                                if(nprcookie != null && nprcookie != "undefined")
                                {
                                    newURL = "http://www.npr.org/templates/dmg/dmg_wmref.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=" + mediaPreference + "&sauid=" + nprcookie;
                                }
                                else
                                {
                                    newURL = "http://www.npr.org/templates/dmg/dmg_wmref.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=" + mediaPreference;
                                }
                            }
                            else
                            {
                                if(checkMediaPrefs(mediaAvailArray, "RAM"))
                                {
                                    newURL = "http://www.npr.org/templates/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=RAM";
                                }
                                else
                                {
                                    newURL = "http://www.npr.org/templates/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=" + mediaPreference;
                                } 
                            }
                            if(window.sa_onclick)
                                {
                                    sa_onclick(newURL);
                                }
                            doAd(newURL, mediaPreference);
                        }
                    else
                        {
                            goNewURL("http://www.npr.org/templates/dmg/audioplayer.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum, "", "new");
                        }
                

        }
    }
function getStaticMedia(URL, mediaPreference)
    {
        sauid = checkCookie("sauid");
        referrer = document.referrer;
        
        mediaPrefVals = makePrefArray(mediaPreference);
    
        if(URL.indexOf("http://") != -1)
            {
                goNewURL(URL, '', '');
            }
        else if(URL.toUpperCase() == "NEWSCAST")
            {
                getNewsCast(); 
            }
        else if(URL.toUpperCase() == "PROGRAMSTREAM")
            {
                getProgramStream(); 
            }           
        else if((checkMediaPrefs(mediaPrefVals, "WM")) && (checkMediaPrefs(mediaPrefVals, "RM")))
            { 
                mediaPreference = checkCookie("NPRMediaPref");
                if((mediaPreference == false) || (mediaPreference == "RM"))
                    {
                        goNewURL("http://www.npr.org/templates/dmg/dmg.php?mediaURL=" + URL + "&mediaType=RM", URL, "");
                    }
                else if(mediaPreference == "WM")    
                    {
                        goNewURL("http://www.npr.org/templates/dmg/dmg.php?mediaURL=" + URL + "&mediaType=WM", URL, "");
                    }
            }
        else if((checkMediaPrefs(mediaPrefVals, "RM")) && (!checkMediaPrefs(mediaPrefVals, "WM")))
            {
                goNewURL("http://www.npr.org/templates/dmg/dmg.php?mediaURL=" + URL + "&mediaType=RM", URL, "");
            }
        else if((checkMediaPrefs(mediaPrefVals, "WM")) && (!checkMediaPrefs(mediaPrefVals, "RM")))
            {
                goNewURL("http://www.npr.org/templates/dmg/dmg.php?mediaURL=" + URL + "&mediaType=WM", URL, "");
            }

    }
function getTopicMedia(topicId, topicName, mediaPreference)
    {
        topicName = escape(topicName);
        nprcookie = get_cookie('sauid');
        mediaPrefVals = makePrefArray(mediaPreference); 
        if(checkCookie("NPRMediaPref"))
            {
                mediaPreference = checkCookie("NPRMediaPref");
                newURL = "http://www.npr.org/templates/dmg/dmg.php?topicId=" + topicId + "&topicName=" + topicName + "&mediaPref=" + mediaPreference;
                if(mediaPreference == "WM")
                {
                    if(nprcookie != null && nprcookie != "undefined")
                    {
                        newURL = "http://www.npr.org/templates/dmg/dmg_wmref.php?topicId=" + topicId + "&topicName=" + topicName + "&mediaPref=" + mediaPreference + "&sauid=" + nprcookie;
                    }
                    else
                    {
                        newURL = "http://www.npr.org/templates/dmg/dmg_wmref.php?topicId=" + topicId + "&topicName=" + topicName + "&mediaPref=" + mediaPreference;
                    }
                    
                }

                if(window.sa_onclick)
                    {
                        sa_onclick(newURL);
                    }
                doAd(newURL, mediaPreference);
            }
        else
            {
                goNewURL("http://www.npr.org/templates/dmg/audioplayer.php?topicId=" + topicId + "&topicName=" + topicName, "", "new");
            }       
    }
function getLatestShow(prgCode)
    {
        if(checkCookie("NPRMediaPref"))
            {
                mediaPreference = checkCookie("NPRMediaPref");
                goNewURL("http://www.npr.org/templates/dmg/dmg.php?getLatestShow=true&prgCode=" + prgCode + "&NPRMediaPref=" + mediaPreference, "", "new");
            }
        else
            {
                goNewURL("http://www.npr.org/templates/dmg/audioplayer.php?getLatestShow=true&prgCode=" + prgCode, "", "new");
            }
    }
function getFeaturedAudio(newURL)
    {
        nprcookie = get_cookie('sauid');
        if(checkCookie("NPRMediaPref"))
            {
                mediaPreference = checkCookie("NPRMediaPref");
                if(mediaPreference == "WM")
                    {
                        newURL += "&NPRMediaPref=WM";
                        newURL = replaceString(newURL, 'dmg.php', 'dmg_wmref.php'); 
                        if(nprcookie != null && nprcookie != "undefined")
                        {
                            newURL += "&sauid=" + nprcookie;
                        }
                        
                    }
                else
                    {
                        newURL += "&NPRMediaPref=RM";
                    }
                if(window.sa_onclick)
                    {
                        sa_onclick(newURL);
                    }
                doAd(newURL, mediaPreference);
            }
        else
            {
                //newURL += "&NPRMediaPref=RM";
                //goNewURL(newURL, "", "new");
                goNewURL("http://www.npr.org/templates/dmg/audioplayer.php?newURL=" + newURL, '', 'new');
            }
    }
function getProgramStream()
    {
        getFeaturedAudio("http://www.npr.org/templates/dmg/dmg.php?getProgramStream=true");
    }
function getNewsCast()
    {
        getFeaturedAudio("http://www.npr.org/templates/dmg/dmg.php?getNewsCast=true");
    }
function goLightningCast(newURL, mediaPref)
    {
        extension = "&getUnderwriting=1&ext=.asx";
        if(mediaPref == "RM")
            {
                "&getUnderwriting=1&ext=.rm";
            }
        newURL += extension;
        newURL = "http://www.npr.org/templates/lightningcast/index.html" + "?audioURL=" + newURL;
        window.open(newURL, "playerWin", "width=400,height=430,resizable=yes,toolbar=no,scrollbars=no");
    }
function getMusicButton(songId, musicAudioFileName, prgCode)
    {
        if(checkCookie("NPRMediaPref"))
            {
                mediaPreference = checkCookie("NPRMediaPref");
                goNewURL("http://www.npr.org/templates/dmg/dmg.php?getMusicButton=true&songId=" + songId + "&musicAudioFileName=" + musicAudioFileName + "&prgCode=" + prgCode + "&NPRMediaPref=" + mediaPreference, "", "");
            }
        else
            {
                goNewURL("http://www.npr.org/templates/dmg/audioplayer.php?getMusicButton=true&songId=" + songId + "&musicAudioFileName=" + musicAudioFileName + "&prgCode=" + prgCode, '', "new");
            }
    }
//cookie code
function setCookie(cookieToSet, daysToExpiration, cookieValue)
    {
        var exp=new Date();
        exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * daysToExpiration));
        document.cookie=cookieToSet + "=" + cookieValue + "; path=/; domain=npr.org; expires=" + exp.toGMTString();
    }
function checkCookie(cookieToCheck)
    {
        var allcookies = document.cookie;
        var pos = allcookies.indexOf(cookieToCheck + "=");
        if(pos != -1)
            {
                var start = pos + cookieToCheck.length + 1;
                var end = allcookies.indexOf(";", start);
                if(end == -1)
                    {
                        end = allcookies.length;
                    }
                return allcookies.substring(start, end);
            }
        else
            {
                return false;
            }
    }
function killCookie(cookieToKill)
    {
        setCookie(cookieToKill, -1, '')
    }


// --------------------------------------------------------
// replaceString
// --------------------------------------------------------
//  description:  GENERIC REPLACE STRING FUNCTION
//
//  parameters:   
//      repStr is the string that will have the replace done to it
//      stringToFind is the string searched for in the repStr (and replaced, when found)
//      stringToRep is the string to replace when the stringToFind is found
//
//  RETURN newStr - the modified "repStr"
// 
function replaceString(repStr, stringToFind, stringToRep)
    {
        sFind = 0;
        newStr = repStr;

        while (sFind != -1)
            {
                // FIND THE NEXT OCCURENCE OF THE stringToFind
                sFind = newStr.indexOf(stringToFind);

                // IF THERE IS AN OCCURENCE, PERFORM THE REPLACE
                if (sFind != -1)
                    {
                        startString = newStr.substring(0, sFind); // GET THE STRING BEFORE stringToFind
                        endString = newStr.substring(sFind +  stringToFind.length, newStr.length); // GET THE STRING AFTER stringToFind
                        newStr = startString + stringToRep + endString; // CAT THE STRING BEFORE AND AFTER stringToFind AND INSERT stringToRep IN BETWEEN
                    }
            }

        return newStr;  // RETURN VALUE AFTER REPLACES
    }

function set_cookie( name, value, expires, path, domain, secure ) 
{
    // set time, it's in milliseconds
    var today = new Date();
    today.setTime( today.getTime() );

    /*
    if the expires variable is set, make the correct 
    expires time, the current script below will set 
    it for x number of days, to make it for hours, 
    delete * 24, for minutes, delete * 60 * 24
    */
    if ( expires )
    {
    expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );

    document.cookie = name + "=" +escape( value ) +
    ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
    ( ( path ) ? ";path=" + path : "" ) + 
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ( ( secure ) ? ";secure" : "" );
}

function get_cookie( name ) 
{
    
    var start = document.cookie.indexOf( name + "=" );
    var len = start + name.length + 1;
    if ( ( !start ) &&
    ( name != document.cookie.substring( 0, name.length ) ) )
    {
    return null;
    }
    if ( start == -1 ) return null;
    var end = document.cookie.indexOf( ";", len );
    if ( end == -1 ) end = document.cookie.length;
    return unescape( document.cookie.substring( len, end ) );
}
function get_source_code()
{
    var url = document.URL;
    var sc = url.match(/(&|\?)sc=(\w+)/);
    var sourceCode = url.match(/(&|\?)sourceCode=(\w+)/);
    var ft = url.match(/(&|\?)ft=(\w+)/);
    
    if(ft != null && ft[2] != null)
    {
        return '/sc=' + ft[2];
    }
    else if(sc != null && sc[2] != null)
    {
        return '/sc=' + sc[2];
    }
    else if(sourceCode != null && sourceCode[2] != null)
    {
        return '/sc=' + sourceCode[2];
    }
    else
    {
        return '';
    }
    
function get_target()
{
    if(window.target != null)
    {
        return window.target;
    }
    else
    {
        return '';
    }
}

}
