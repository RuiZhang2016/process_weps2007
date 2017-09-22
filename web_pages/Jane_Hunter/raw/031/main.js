function isKeyPresent (theArgName, someStr) {
    sArgs = someStr.slice(1).split('&');
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
          if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == theArgName) {
              return 1;
          }
        }
      return 0;
    }
}

function makeUrl(key, value) {
    if (isKeyPresent(key, queryUrl)) {
        queryUrl = strReplace(key, queryUrl, key + '=' + value);
        url = queryPath + queryUrl;
    } else {
        url = queryPath + queryUrl + "&" + key + "=" + value;
    }
   window.open(url, "ppesearch");
}

function makeAndSaveUrl(key, value) {
    if (isKeyPresent(key, queryUrl)) {
        queryUrl = strReplace(key, queryUrl, key + '=' + value);
    } else {
        queryUrl = queryUrl + "&" + key + "=" + value;
    }
}

function makeUrl2(key, value) {
    removeRestriction(key);
    key = "at";
    if (isKeyPresent(key, queryUrl)) {
        queryUrl = strReplace(key, queryUrl, key + '=' + value.substring(4));
        url = queryPath + queryUrl;
    } else {
        url = queryPath + queryUrl + "&" + "at=" + value.substring(4);
    }
    window.open(url, "ppesearch");
}

function strReplace(key, someStr, replStr) {
    
    sArgs = someStr.slice(1).split('&');
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
            if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == key) {
            return someStr.replace(sArgs[i],replStr);
            }
        }
    }
    return someStr;
}

function sortResults() {

    var index = document.sortby[0].selectedIndex;
    var fieldValue = document.sortby[0].options[index].value;
    makeUrl("p_s", fieldValue);

}
function sortMerchantProduct() {
    var index = document.sortby[0].selectedIndex;
    var fieldValue = document.sortby[0].options[index].value;
    queryUrl = strConvertor(queryUrl); 
    removeOnlyRest('_mp_o');
    makeUrl("mp_s", fieldValue, "ppeproduct");

}

function sortReviews() {

    var index = document.sortrev[0].selectedIndex;
    var fieldValue = document.sortrev[0].options[index].value;
    removeOnlyRest('_r_o');
    queryUrl = strConvertor(queryUrl); 
    makeUrl("r_s", fieldValue, "ppereview");

}

function makeUrl(key, value, path) {
    if (isKeyPresent(key, queryUrl)) {
       queryUrl = strReplace(key, queryUrl, key + '=' + value);
       url = queryPath + queryUrl;
    } else {
        url = queryPath + queryUrl + "&" + key + "=" + value;
    }
    window.open(url, '_top');
}

function narrowWidget(widgetName) {
    for (var i = 0; i < document.search.length; i++) {
        var objectName = document.search[i].name;
        if (objectName == widgetName) {
            var index = document.search[i].selectedIndex;
            var fieldValue = document.search[i].options[index].value;
            if (widgetName == 'p_s') {
                removeOnlyRest('_mp_o');
                removeOnlyRest('off');
            } else if (widgetName == 'r_s') {
                removeOnlyRest('_r_o');
                removeOnlyRest('off');
            }
            if (fieldValue.substr(0,3) == 'no_') {
                removeRestriction(widgetName);
            } else if (fieldValue.substr(0,4) == 'all_') {
                removeRestriction(widgetName);
                makeUrl("at",fieldValue.substr(4));
            } else {
                makeUrl(widgetName,fieldValue);
            }
            break;
        }
    }
}

function removeRestriction(key) {
    sArgs = queryUrl.slice(1).split('&');
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
            if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == key) {
                if (i == 0)
                    queryUrl = queryUrl.replace(sArgs[i],'');
                else {
                    queryUrl = queryUrl.replace('&' + sArgs[i],'');
                }
            }
        }
    }
    url = queryPath + queryUrl;
    window.open(url, "ppesearch");
}


function removeOnlyRest(key) {
    sArgs = queryUrl.slice(1).split('&');
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
            if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == key) {
                if (i == 0)
                    queryUrl = queryUrl.replace(sArgs[i],'');
                else {
                    queryUrl = queryUrl.replace('&' + sArgs[i],'');
                }
            }
        }
    }
}

function redirect(genericRedirUrl, prodId, merchId, merchRank, merchUrl) {
    redirUrl = genericRedirUrl+"&prod_d="+prodId+"&merch_id="+merchId+"&rank="+merchRank+"&URL="+merchUrl
    //window.location=redirUrl;
	var x, y = 0;
	var properties;
	var agent = navigator.userAgent.toLowerCase();

    var ref = window.open(redirUrl, "_blank");
}

function getRedirect(genericRedirUrl, prodId, merchId, merchRank, merchUrl) {
    var host = location.host;
    //TODO - property is hardcoded to 'instore'
    redirUrl = "http://"+host+"/instore/"+genericRedirUrl+"&prod_d="+prodId+"&merch_id="+merchId+"&rank="+merchRank+"&URL="+merchUrl

    return redirUrl;
}

function goZip(url, zip, newValue) {
    if (newValue == 1) {
        if (zip == "" || zip.length < 5 ) {
            alert ("Please supply a valid zip code");
            return;
         }
     }
    redirUrl = url+"&newzip="+zip+"#zipto";
    window.location=redirUrl;
    //window.open(redirUrl, "ppeproduct");
}

function submitEnter (thisField, e, url){
    var keycode;
    if (window.event) {
        keycode = window.event.keyCode;
    }
    else if (e) {
        keycode = e.which;
    }
    if (keycode == 13) {
        goZip(url, thisField.value, 1);
        return false;
    }
    return true;
}

function ppGotoHash(key) {
    fUrl = window.location.search;
    sArgs = fUrl.slice(1).split('&');
    val = "";

    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
            if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == key) {
                val = sArgs[i].slice(sArgs[i].indexOf('=') + 1);
            }
        }
    }
    if (val != "") {
        location.hash = val;
     }
}


function strConvertor(someStr) {
    sArgs = someStr.slice(1).split('&amp;');
    var tempStr="?";
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
			if(i != sArgs.length-1){
				tempStr+=sArgs[i]+"&";
			} else {
				tempStr+=sArgs[i];
			}
        }        
		return tempStr;
    } else {
		return someStr;
    }
}
