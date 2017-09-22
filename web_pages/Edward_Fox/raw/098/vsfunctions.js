function VSgetCookie(id) {
var allcookies = document.cookie;
var start = allcookies.indexOf(id + "=");
if (start != -1) {
start += id.length +1;
var end = allcookies.indexOf(";", start);
if (end == -1) end = allcookies.length;
var cookie = allcookies.substring(start, end);
} else {
cookie = "none";
}
return(cookie);
}
