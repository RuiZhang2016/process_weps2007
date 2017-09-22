/*******************************************
 * Kaosweaver Expert Breadcrumbs           *
 * by Paul Davis http://www.kaosweaver.com * 
 * Copyright 2003 all rights reserved      *
 *******************************************/
var KW_uTitle=document.title
function KW_breadcrumbs(o,m,n,r,f,q,v) { // v1.3.0
	d=document;l=window.location.toString();s=l.split("/");d1=" <span class='kwspan'>"+m+"</span> "
	if (f!=-1) if (l.indexOf(f)!=-1){sNew = new Array(); for (i=0;i<s.length-1;i++) {sNew[i] = s[i]};
	s = sNew;};i=q;	h="<a href='"+KW_jTrail(l,i)+f+"' class='kwhref'>"+o+"</a>";
	t="<span class='kwtitle'>"+KW_uTitle+"</span>";if (s.length==q) {h=t;d1=""}	w=(r==1)?h+d1:t;
	d.write(w);if (n&&!r) d.write("<br>");if (r==1) for (i=v;i<s.length;i++) {d.write("<a href='");
	d.write(KW_jTrail(l,i)+f+"' class='kwhref'>"+KW_fName(s[i-1])+"</a> <span class='kwspan'>"+m+"</span> ")
	l=window.location.toString();} else for (i=s.length;i>v;i--) {d.write(" <span class='kwspan'>"+m)
	d.write("</span> <a href='"+KW_jTrail(l,i-1)+f+"' class='kwhref'>"+KW_fName(s[i-2])+"</a>");
	l=window.location.toString();}if (n && r) d.write("<br>");w=(r==1)?t:d1+h;if (s.length!=q) d.write(w)
}
function KW_jTrail(l,i){ // v1.3.0
	p=0;for (z=0;z<i;z++)p=l.indexOf("/",p)+1;return l.substring(0,p)
}
function KW_fName(a) { // v1.3.0
	a=unescape(a); g=a.split(' '); for (l=0;l<g.length;l++)	
	g[l]=g[l].toUpperCase().slice(0,1)+g[l].slice(1);retVal=g.join(" "); 
	nList= new Array()
	for (var x=0;x<nList.length;x=x+2) 	if (a==nList[x]) {retVal=nList[x+1];break;}	
	return retVal;
}