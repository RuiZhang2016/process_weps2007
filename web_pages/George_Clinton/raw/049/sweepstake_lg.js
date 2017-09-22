// [JAG,17Jun2003]
var m_ClickChecked = false;
var m_Loaded = false;
var m_PopUpWin;
var m_Activate = false;
var m_RelyOnUnload = false;
var m_DALL = false;
var m_DEBI = false;
var m_DLAY = false;
var m_Show = false;

if (document.all) {
    m_DALL = true;
}
if (document.getElementById) {
    m_DEBI = true;
}
if (document.layers) {
    m_DLAY = true;
}

if(m_DEBI || m_DALL || m_DLAY) {
	m_Activate = true;
    m_Rules = new Array();
    m_Rules[0] = "~bmgmusic.com";
    m_Rules[1] = "~dmi-indy-dyndv2";
    m_Rules[2] = "~dyn-crwqa";
    m_Rules[3] = "~dyn-crwstaging";
    m_Height = 5;
    m_Width = 5;
    m_ScrollBars = "yes";
    m_Resizable = "yes";
    m_Source = "/sweeps/sweeps_popup_select.jhtml";
    m_SessionIdLen = 23;
    if (navigator.appName.toLowerCase() != "microsoft internet explorer" || navigator.userAgent.indexOf("Opera") > -1) {
        m_RelyOnUnload = false;
    } else {
        m_RelyOnUnload = true;
    }
}

function F_CheckUnload(p_SessionId){ 
	if(m_Loaded && m_Activate && m_RelyOnUnload) {
		F_Pop(p_SessionId, true);
	}
}

function F_Pop(p_SessionId, p_GrabFocus){
    var c = document.cookie;
    var cl = c.length;
    var n = "SweepPopUp";
    var nl = n.length;
    var cx = false;
    var i = 0;
    var cEnd;

    if (cl == 0) {
        cx = false;
    }

    while (i < cl) {
        var j = i + nl;
        var compare = c.substring(i,j);
        if (compare == n) {
            cx = true;
            m_Activate = false;
            i = cl;
        }
        i++;
    }

    if (!cx) {
        //document.cookie="n=SweepPopUp;PATH=/";
        m_PopUpWin = openWin2(m_Source, m_Width, m_Height, p_SessionId);
        if (p_GrabFocus) {
            m_PopUpWin.focus();
        }
        else {
            window.focus();
        }

        if (!m_PopUpWin.opener) {
            m_PopUpWin.opener=self;
        }
    }
}

function F_IsInternal(p_Url) {
    for( i = 0; i < m_Rules.length; i++ ) {
        m_Parts = m_Rules[i].split("&&");
        m_Result = true;
        for(j = 0; j < m_Parts.length; j++) {
            m_Search = p_Url.indexOf( m_Parts[j].substring(1));
            m_Call = m_Parts[j].charAt(0);

            if( m_Search == -1 && m_Call == "~" ) {
                m_Result = false;
                break;
            }
            else if( m_Search > -1 && m_Call == "!") {
                m_Result = false;
                break;
            }
        }
        if(m_Result) {
            return true;
        }
    }
    return false;
}

function F_CheckClick(p_Event) {
    m_ClickChecked = true;
    if(m_Activate) {
        m_Link="";
        m_Elm = window.event.srcElement;
        while( m_Elm.tagName.toLowerCase() != "a" &&
			m_Elm.tagName.toLowerCase() != "area" &&
			m_Elm.tagName.toLowerCase() != "body" &&
			m_Elm.tagName.toLowerCase() != "input" ) {
			m_Elm = m_Elm.parentElement;
        }
        m_TagName = m_Elm.tagName.toLowerCase();
        if(m_TagName == "a" || m_TagName == "area") {
            m_Link = m_Elm.href;
        }
        else if( m_TagName == "input" ) {
            m_Activate = false;
        }
 
        m_Link = m_Link.toLowerCase();
        var m_Slash = /\x2F/g;
        m_Url = self.location.pathname;
        m_Url = m_Url.replace( m_Slash, "\[\/\]");
        var m_ToMatch = new RegExp(m_Url + "[/]{0,1}(index.|default.){0,1}[^.]*#", "i");
        var m_Relative = m_Link.search(m_ToMatch);
		
        if(m_Link != "" && m_Relative == -1 && m_Link.substring(0,4)=="http") {
            if(F_IsInternal(m_Link)) {
                m_Activate = false;
            }
        }
    }
}

if(m_Activate) {
	if(!m_RelyOnUnload) {
        m_Index = self.location.href.indexOf("jsessionid", 0);
		if (m_Index > -1) {
			m_SessionId = self.location.href.substr(m_Index + 11, m_SessionIdLen);
		} else {
			m_SessionId = null;
		}
		F_Pop(m_SessionId, false);
	} else {
        if(m_DALL) {
            document.onclick = F_CheckClick;
        }
	}
}


function F_CloseSweeps() {
    m_PopUpWin = openFullWin("/sweeps/sweeps_popup_select.jhtml",512,657);
    if (m_PopUpWin && !m_PopUpWin.closed) {
        m_PopUpWin.close();
    }
}

m_Loaded = true;
