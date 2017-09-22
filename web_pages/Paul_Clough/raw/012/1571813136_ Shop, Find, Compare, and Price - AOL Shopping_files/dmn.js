server_url="http://switcher.dmn.aol.com/sw/a";
params = {
       sch:"",
       ssch:"",
       squery:"",
       snum:"",
       stest:"",
       locale:"",
       z:"",
       page:"",
       nt:"",
       lf:"",
       callback:"",
       ssafe:"",
       sh_ie:"",
       sh_oe:"",
       sclient:"",
       spch:"",
       csp:"",
       scoco:"",
       sbrand:"",
       sview:"",
       sit:"",
       surl:"",
       skw:"",
       skwt:"",
       skw2:"",
       callback:"done"
};

function get_links() {
	var s="";
	for (var anItem in params) if(params[anItem]!="") s+="&"+anItem+"="+escape(params[anItem]);
	text="<scr"+"ipt src='"+server_url+"?"+s.slice(1)+"' type='text/javascript'></scr"+"ipt>";
	document.write(text);
}

