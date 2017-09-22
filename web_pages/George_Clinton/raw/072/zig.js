var v = {};

if(window.vscount != null)
{
    window.vscount = window.vscount + 1;
    v["logCount"] = window.vscount;
}
else
{
    window.vscount = 1;
}

var ct = "<img src=";
var cd = "http://www.npr.org"; 

var cu = "/images/zag.gif?Log=1";
var ce = ">";

var c = {};
c["sw"] = screen.width;
c["sh"] = screen.height;
c["cd"] = screen.colorDepth;
var co = "";

for ( cKey in c ) {
    co = co+"&"+cKey+"="+escape(c[cKey]);
}
document.write(ct,cd,cu,co,ce);

var d = {};
d["dr"] = document.referrer;
d["cb"] = new Date().getTime();
var vo = "";

if (typeof v != "undefined") {
    for ( vKey in v ) {
        vo = vo+"&"+vKey+"="+v[vKey];
    }
}
if(window.vstag != null)
{
    for (vKey in window.vstag) {
        if(vKey != 'title' && vKey != 'dt') {
        vo = vo+"&"+vKey+"="+window.vstag[vKey];
        }
    }
}
if(window.vstag && window.vstag.title)
{
    vo = vo+"&dt="+window.vstag.title;
}
else
{
    vo = vo+"&dt="+escape(document.title);
}

for ( dKey in d ) {
    vo = vo+"&"+dKey+"="+escape(d[dKey]);
}
document.write(ct,cd,cu,vo,ce);
