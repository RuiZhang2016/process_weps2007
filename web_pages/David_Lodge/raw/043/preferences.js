/*

This library contains functions related to personalization on Powells.com.

Created on: May 31, 2006 12:48:51
Created by: Jereme Claussen <jereme@powells.com>

*/

/*  ~~~~~~~ First define the UserPrefs object and its methods ~~~~~~~ */
// Create the UserPrefs object
var UserPrefs             = new Object();
    UserPrefs.preferences = new Object();
    UserPrefs.dateObj     = new Date();
    UserPrefs.proto       = location.protocol;
    UserPrefs.host        = location.host;

// getPrefs decides where the prefs should come from and fetches them
UserPrefs.getPrefs = function() {
   // Fetch the cookie
   UserPrefs['Cookie'] = UserPrefs.getCookie();
   // If the cookie exists, parse it, else check the db
   if( UserPrefs['Cookie'] ) {
      UserPrefs.parseCookie();
      // Some cookie age test here
      if( UserPrefs.dateObj.getTime() - UserPrefs.timeStamp > 1000 * 60 * 5 ) {
         if( UserPrefs.preferences.ident ) {
            UserPrefs.getData();
         }
         UserPrefs.setCookie();
      }
   } else {
      UserPrefs.setCookie();
   }
}

// Loads cookie and decrypts it into key/value pairs, returns them.
UserPrefs.getCookie = function () {
   var cookies = document.cookie.split('; ');
   for( var i = 0; i < cookies.length; i++ ) {
      var crumb = cookies[i].split('=');
      if(crumb[0] == 'preferences') {
         return crumb[1];
      }
   }
}

// Parses the cookie if it exists
UserPrefs.parseCookie = function (prefsCookie) {
   UserPrefs['originalPreferences'] = new Object();
   var prefsArray = UserPrefs['Cookie'].split('&');
   for( var x = 0; x < prefsArray.length; x += 2 ) {
      if( prefsArray[x] == "timeStamp" ) {
         UserPrefs.timeStamp = decodeURIComponent(prefsArray[x+1]);
      } else {
         UserPrefs.preferences[prefsArray[x]] = decodeURIComponent(prefsArray[x+1]);
      }
   }

   // And again for easy testing of changes
   for( x in UserPrefs.preferences ) {
      UserPrefs.originalPreferences[x] = UserPrefs.preferences[x];
   }
}

// Generates a string version of the prefs to be stored as cookie
UserPrefs.Cookiefy = function () {
   var outArray = new Array();
   for( var x in UserPrefs.preferences ) {
      if( ! x.match('JSON') ) {
         outArray.push(x + "&" + encodeURIComponent(UserPrefs.preferences[x]));
      }
   }
   outArray.push("timeStamp&" + UserPrefs.dateObj.getTime());
   return outArray.join('&');
}

// Accepts key/value pairs, encrypts them and stores them in a cookie.
UserPrefs.setCookie = function () {
   var cookieData = UserPrefs.Cookiefy();
   document.cookie = "preferences=" + cookieData + "; expires=Thu, 01-Feb-3456 00:00:01 GMT; path=/; domain=powells.com";
}

//a Detect changes to prefs
UserPrefs.isChanged = function () {
   for( var i in UserPrefs.preferences ) {
      if( UserPrefs.preferences[i] != UserPrefs.originalPreferences[i] ) {
         return 1;
      }
   }

   return 0;
}

// Set a preference
UserPrefs.setPref = function (prefName, prefVal) {
   if( prefVal != UserPrefs.preferences[prefName] ) {
      UserPrefs.preferences[prefName] = prefVal;
      UserPrefs.setCookie();

      if( UserPrefs.preferences['ident'] != "" ) {
         UserPrefs.setData();
      }
   }
}

// Get a preference
UserPrefs.getPref = function (prefName) {
   return UserPrefs.preferences[prefName];
}

UserPrefs.parseData = function (x) {
   if( x.readyState == 4 || x.readyState=="complete" ) {
      var storedUserPrefs = x.responseText.parseJSON();
      for(var i in storedUserPrefs) {
         // a few JSON functions get carried through as well.
         if( i != "toJSONString" ) {
            UserPrefs.preferences[i] = storedUserPrefs[i];
         }
      }
   }
}

// Get prefs from DB
UserPrefs.getData = function () {
   var http = UserPrefs.getXMLHTTPObject();
   if( http ) {
      http.open('GET', UserPrefs.proto + '//' + UserPrefs.host + '/prefs/' + UserPrefs.preferences['ident'] ,true);
      http.onreadystatechange = function() { UserPrefs.parseData(http) };
      http.send(null);
   }
}

// Set prefs to DB
UserPrefs.setData = function () {
   var http = UserPrefs.getXMLHTTPObject();
   if( http ) {
      var queryString = "preferences=" + UserPrefs.preferences.toJSONString();
      var address = UserPrefs.proto + '//' + UserPrefs.host + '/prefs/' + UserPrefs.preferences['ident'];

      http.open('POST', address, true);

      http.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
      http.setRequestHeader( 'Content-length', queryString.length );
      http.onreadystatechange = function() { };
      http.send(queryString);
   }
}

// Provides XMLHttp object
UserPrefs.getXMLHTTPObject = function () {
   var xmlhttp = false;
   try {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } catch (e) {
      //console.info('I was not able to change the privlage manager');
   }

   try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
   } catch (e) {
      try {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
         xmlhttp = false;
      }
   }

   try {
      if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
         xmlhttp = new XMLHttpRequest();
      }
   } catch (e) {}
   return xmlhttp;
}

// get the users name as needed
UserPrefs.getMyName = function (username) {
   console.info('MY USERNAME IS: ' + username +' AND MY FIRST NAME IS: ' +UserPrefs.getPref('username'));
}

// Get cookie value
UserPrefs.getCookieValue = function (c_name) {
   var cookie_val;

   if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");

      if (c_start != -1) {
         c_start = c_start + c_name.length + 1;
         c_end   = document.cookie.indexOf(";", c_start);

         if (c_end == -1) {
            c_end = document.cookie.length;
         }

         cookie_val = unescape(document.cookie.substring(c_start, c_end));
      }
   }

   return cookie_val;
}


// Get session id
UserPrefs.getSessionID = function () {
   if(! UserPrefs.getCookieValue('p_session')) {

      // Do an AJAX call to set p_session cookie
      var http  = UserPrefs.getXMLHTTPObject();

      if( http ) {
         http.open('GET', UserPrefs.proto + '//' + UserPrefs.host + '/trail/get_anon_id', true);
         http.onreadystatechange = function() { UserPrefs.setSessionCookie(http) };
         http.send(null);
      }
   }
}

// Parse json data returned from XML Http to get session id
UserPrefs.setSessionCookie = function (e) {
   if( e.readyState == 4 || e.readyState=="complete" ) {
      var hash_id = e.responseText.parseJSON().result;

      if(hash_id !== undefined && hash_id != '') {
         document.cookie = "p_session" + "=" + hash_id + "; domain=.powells.com; path=/";
      }
   }
}

/*  ~~~~~~~ Now do what we gotta do ~~~~~~~ */
UserPrefs.getPrefs();
UserPrefs.getSessionID();
