/***************
DeBabel v.0.5, Copyright (C) 2005, Todd Cotton (todd.cotton@gmail.com)
Used by permission.
****************/

var Lang;
var strLangDir = "/common/lang/"; //-- Directory where your language resource files are stored.
var intLangIDLen = 2; //-- Set the language identifier length. Use 2 for short or 5 for long i.e. "en"|"en-us".
var strDefaultLang = "en"; //-- Set the default language id.
var strCurrentLang = GetLanguage();

document.open();
document.write("<\script type=\"text/javascript\" src=\""+ strLangDir + strCurrentLang +".js\"><\/script>");
document.close();

if (window.addEventListener) {
	window.addEventListener("load", function () { TranslatePage(); }, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", function () { TranslatePage(); }, false);
}

function TranslatePage() {
	if (strCurrentLang != strDefaultLang && document.getElementsByTagName) {
		var aryObjs;
		var strLangID;
		var strTxt;
		var myObj;

		//-- SPANS --

		aryObjs = document.getElementsByTagName("span");
		for (i = 0; i < aryObjs.length; i++) {
			myObj = aryObjs[i];
			strLangID = GetLangID(myObj);
			if (strLangID != "" && strLangID != null) {
				strTxt = eval("Lang." + strLangID);
				if (strTxt != undefined) { myObj.innerHTML = strTxt; }
			}
		}

		//-- LINKS --

		aryObjs = document.getElementsByTagName("a");
		for (i = 0; i < aryObjs.length; i++) {
			myObj = aryObjs[i];
			strLangID = GetLangID(myObj);
			if (strLangID != "" && strLangID != null) {
				strTxt = eval("Lang." + strLangID);
				if (strTxt != undefined) {
					if (strLangID.substring(0,3) == "Lnk") {
						if (myObj.getAttribute("className") == "menu") { //-- IE hack for Connect.
							myObj.style.display = "inline";
							myObj.innerHTML = strTxt;
							myObj.style.display = "block";
						} else {
							myObj.innerHTML = strTxt;
						}
					} else {
						myObj.title = strTxt;
					}
				}
			}
		}

		//-- BUTTONS --

		aryObjs = document.getElementsByTagName("input");
		for (i = 0; i < aryObjs.length; i++) {
			myObj = aryObjs[i];
			strLangID = GetLangID(myObj);
			if (strLangID != "" && strLangID != null) {
				strTxt = eval("Lang." + strLangID);
				var myType = myObj.getAttribute("type");
				if (strTxt != undefined && (myType == "button" || myType == "submit" || myType == "reset")) { myObj.setAttribute("value", strTxt); }
			}
		}

		//-- OPTIONS --

		aryObjs = document.getElementsByTagName("option");
		for (i = 0; i < aryObjs.length; i++) {
			myObj = aryObjs[i];
			strLangID = GetLangID(myObj);
			if (strLangID != "" && strLangID != null) {
				strTxt = eval("Lang." + strLangID);
				if (strTxt != undefined) { myObj.text = strTxt; }
			}
		}

		//-- IMAGES --

		aryObjs = document.getElementsByTagName("img");
		for (i = 0; i < aryObjs.length; i++) {
			myObj = aryObjs[i];
			strLangID = GetLangID(myObj);
			if (strLangID != "" && strLangID != null) {
				strTxt = eval("Lang." + strLangID);
				if (strTxt != undefined) {
					myObj.alt = strTxt;
					myObj.title = strTxt;
				}
			}
		}
	}
}

function GetLangID(oCurrent) {
	var langid;
	if (oCurrent.getAttribute("className")) {
		langid = oCurrent.getAttribute("className");
	} else if (oCurrent.getAttribute("class")) {
		langid = oCurrent.getAttribute("class");
	}
	if (langid != null && langid.lastIndexOf(" ") != -1) {
		langid = langid.substring(langid.lastIndexOf(" ") + 1, langid.length);
	}
	return langid;
}

function GetLanguage() {
	var bLang = strDefaultLang;
	var dc = document.cookie;
	if (dc && dc.indexOf("lang=") != -1) {
		bLang = dc.substr((dc.indexOf("lang=") + 5),intLangIDLen);
	} else {
		if (navigator.language) {
			bLang = (navigator.language).substring(0,intLangIDLen);
		} else if (navigator.browserLanguage) {
			bLang = (navigator.browserLanguage).substring(0,intLangIDLen);
		}
	}
	return bLang;
}

function SetLanguage(langID) {
	document.cookie = "lang=" + langID;
	history.go(0);
}