// Create new UserTrail object
var UserTrail = new Object();

// Implement initUser function
UserTrail.initUser = function() {
   var trail_exists = UserTrail.cookieExists('trail_id');

   if(! trail_exists) {
      var logged_in    = UserTrail.loggedIn();
      var prefs_exists = UserTrail.cookieExists('preferences');
      var hash_id      = "";

      if(prefs_exists) {
         hash_id = UserTrail.getPropValue('preferences', 'ident');
    
         if(hash_id != '') {
            UserTrail.setCookie('trail_id', hash_id);
         }
      }

      if(! logged_in || ! hash_id.length > 0) {
         UserTrail.getHashId();
      }

   }
}

// Get cookie value
UserTrail.getCookie = function (c_name) {
   var cookie_val = "";

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

// Check if authenticated
UserTrail.loggedIn = function() {
   var authentCookie = UserTrail.getCookie('authent');
   var loggedIn      = 0;

   if(authentCookie.match("hash")) {
      loggedIn = 1;
   }

   return loggedIn;
}

// Check if cookie exists
UserTrail.cookieExists = function(c_name) {
   var cookie_val = UserTrail.getCookie(c_name);
   var exists   = 0;

   if(cookie_val.length > 0) {
      exists = 1;
   }

   return exists;
}

// Clear the user trail
UserTrail.clearTrail = function() {
   // Do an AJAX call to clear_trail
   var http = UserTrail.getXMLHTTPObject();

   if( http ) {
      UserTrail.clearTrailDisplay();
      http.open('GET', 'http://www.powells.com/trail/clear_trail', true);
      http.onreadystatechange = function() {};
      http.send(null);
   }

}

// Clear the trail display
UserTrail.clearTrailDisplay = function() {
   var show_trail    = document.getElementById("show_trail");
   var clear_trail   = document.getElementById("clear_trail");
   var divs          = show_trail.getElementsByTagName("div");
   var no_items      = document.createElement("div");
   var no_items_text = document.createTextNode("No Items");
   var i;

   // Remove all divs of class rec_item
   for(i = 0; i < divs.length; i++) {
      if(divs[i].getAttribute("class") == "rec_item" || divs[i].getAttribute("className") == "rec_item") {
         show_trail.removeChild(divs[i]);
         i--;
      }
   }

   show_trail.removeChild(clear_trail);
   no_items.setAttribute("style", "text-align: center; padding: 3px", 0);
   no_items.appendChild(no_items_text);
   show_trail.appendChild(no_items);
}

// Function to get an anonymous id
UserTrail.getHashId = function() {
   var http = UserTrail.getXMLHTTPObject();

   if( http ) {
      http.open('GET', 'http://www.powells.com/trail/get_anon_id', true);
      http.onreadystatechange = function() { UserTrail.parseHashId(http) };
      http.send(null);
   }
}

// Create the XML HTTP object
UserTrail.getXMLHTTPObject = function () {
   var xmlhttp = false;

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
      if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
         xmlhttp = new XMLHttpRequest();
      }
   } catch (e) {}

   return xmlhttp;
}

// Parse json data returned from XML Http to get hash id
UserTrail.parseHashId = function (e) {
   if( e.readyState == 4 || e.readyState=="complete" ) {
      var hash_id = e.responseText.parseJSON().result;

      if(hash_id !== undefined && hash_id != '') {
         UserTrail.setCookie('trail_id', hash_id);
      }
   }
}

// Set the specified cookie
UserTrail.setCookie = function (c_name, c_value) {
   document.cookie = c_name + "=" + c_value + "; domain=.powells.com; path=/";
}

// Get sub property value from cookie
UserTrail.getPropValue = function(c_name, property) {
   var cookie_val = UserTrail.getCookie(c_name);
   var prop_val   = "";
   
   if(cookie_val.match(property)) {
      c_start = cookie_val.indexOf(property + "&");

      if (c_start != -1) {
         c_start = c_start + property.length + 1;
         c_end   = cookie_val.indexOf("&", c_start);

         if (c_end == -1) {
            c_end = cookie_val.length;
         }

         prop_val = unescape(cookie_val.substring(c_start, c_end));
      }
 
   }

   return prop_val;
}

//Function to toggle the display of recent items.
UserTrail.toggle_items = function (id) {
   dom = document.getElementById ? 1 : 0;
   ie4 = (document.all && !dom) ? 1 : 0;
   opera = (navigator.userAgent.indexOf('Opera')!=-1) ? 1 : 0;
   supported = ((dom||ie4||opera)) ? 1 : 0;

   if(!supported)
   return;

   if (dom && !document.all)
   document.all = document.getElementsByTagName("*")

   obj = (dom) ? document.getElementById(id) : document.all(id)
   obj_inv = (dom) ? document.getElementById(id + "_inverse") : document.all(id + "_inverse")

   if(obj.style.display!='none') {
      obj.style.display='none';
      obj_inv.style.display='block';

   } else {
      obj.style.display='block';
      obj_inv.style.display='none';
   }
}

// Attach the initUser event to the page
if( window.attachEvent ) {
   window.attachEvent( "onload", UserTrail.initUser );
} else if( window.addEventListener ) {
   window.addEventListener( "load", UserTrail.initUser, false );
}
