window.name = "ppesearch";
queryPath = window.location.pathname;
queryUrl = window.location.search;

function isKeyPresent (theArgName, someStr) {
    var sArgs = someStr.slice(1).split('&');
    if (sArgs.length > 0) {
        for (var i = 0; i < sArgs.length; i++) {
          if (sArgs[i].slice(0,sArgs[i].indexOf('=')) == theArgName) {
              return 1;
          }
        }
      return 0;
    }
}

function isGetNumChecked (theArgName, someStr) {
    var sArgs = getValue(theArgName, someStr).split(',');
    if (sArgs.length > 0) {
      return sArgs.length;
    } else return 0;
}

function getValue (key, someStr) {
    var kv = someStr.slice(1).split('&');
    if (kv.length > 0) {
        for (var i = 0; i < kv.length; i++) {
          if (kv[i].slice(0,kv[i].indexOf('=')) == key ) {
              return kv[i].slice(kv[i].indexOf('=')+1);
          }
        }
    }
}

function makeUrl(key, value) {
    if (isKeyPresent(key, queryUrl)) {
        queryUrl = strReplace(key, queryUrl, key + '=' + value);
        url = queryPath + queryUrl;
    } else {
	 if(queryUrl !=null && queryUrl !="" ){              
        	url = queryPath + queryUrl + "&" + key + "=" + value;
	 } else {
		url = queryPath + "?" + key + "=" + value;
	 }
    }
    window.open(url, "_top");
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

    removeOnlyRest('off');
    removeOnlyRest('p2c');
    makeUrl("p_s", fieldValue);

}

function sortResultsSearch() {
    var index = document.sortby[0].selectedIndex;
    var fieldValue = document.sortby[0].options[index].value;
    removeOnlyRest('off');
    removeOnlyRest('p2c');
    makeUrlSearch("p_s", fieldValue);

}

function makeUrlSearch(key, value) {
    if (isKeyPresent(key, queryUrl)) {
        queryUrl = strReplace(key, queryUrl, key + '=' + value);
        url = queryPath + queryUrl;
    } else {
        url = queryPath + queryUrl + "&" + key + "=" + value;
    }
  if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
        window.open(url, '_top');
    } else {
        window.open(url, "ppesearch");
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
    window.open(redirUrl, "_blank");
}
