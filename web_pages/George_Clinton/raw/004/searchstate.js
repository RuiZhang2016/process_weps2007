if(typeof MTVi!="undefined"){
	if(typeof MTVi.reporting=="undefined"){
		//* Define Package *//
		MTVi.reporting={};
	}
}
MTVi.reporting.Keyword={name:"mtvn_search"};
MTVi.reporting.Keyword.set=function(value){
	document.cookie=this.name+"="+value+"; path=/";
}
MTVi.reporting.Keyword.read=function(){
	var name=this.name+"=";
	var ca=document.cookie.split(';');
	for(var i=0;i < ca.length;i++){
		var c=ca[i];
		while(c.charAt(0)==' '){c=c.substring(1,c.length)};
		if(c.indexOf(name)==0){return c.substring(name.length,c.length)};
	}
	return null;
}
/* PartnerSearch Module */
MTVi.reporting.PartnerSearch={id:"mtvn_search"};
MTVi.reporting.PartnerSearch.get=function(v){
	try{
		this.newSearch=new this.Hierarchy(v);
		this.oldSearch=new this.Hierarchy(this.readCookie());
		var search="";
		if(this.oldSearch.isPartner()){
			// Partner found in Cookie
			this.oldSearch.delReferral();
			this.newSearch.delReferral();
			if(this.isSamePartner()){
				// Search came from the same partner
				if(this.newSearch.hasKeywords){
					// New keywords found.
					this.oldSearch.setKeywords(this.newSearch.keywords);
				}
				search=this.oldSearch.toString();
			}else{
				// Search came from a new partner
				if(this.newSearch.isPartner()){
					this.newSearch.setReferral();
					search=this.newSearch.toString();
				}else if(this.oldSearch.isPartner()){
					search=this.oldSearch.toString();
				}else{
					search="";
				}
			}
		}else{
			// No partner found in Cookie
			if(this.newSearch.isPartner()){
				this.newSearch.setReferral();
				search=this.newSearch.toString();
			}else{
				search="";
			}		
		}
		search=this.format(search);
		this.setCookie(search);
		return(search);
	}catch(e){return "";}
}
MTVi.reporting.PartnerSearch.isSamePartner=function(){
	try{
		var oldSearch=this.oldSearch.partner.replace(/-\w+/g,"")+this.oldSearch.type;
		var newSearch=this.newSearch.partner.replace(/-\w+/g,"")+this.newSearch.type;
		return(oldSearch==newSearch?true:false);
	}catch(e){}
}
MTVi.reporting.PartnerSearch.format=function(v){
	try{
		v=v.replace(/\.$/,"");
		v=v.replace(/\"|\&quot;/g,"");
		v=v.replace(/\s+$/,"");
		v=v.replace(/^\s+/,"");
		v=(v!="-referral"?v:"");
		return v;
	}catch(e){return "";}
}
MTVi.reporting.PartnerSearch.Hierarchy=function(v){
	try{
		function cleanUp(s){
			s=unescape(s);
			s=s.replace(/\"|\&quot;/g,"");
			s=s.replace(/\s+$/,"");
			s=s.replace(/^\s+/,"");
			s=s.replace(/\./,"");
			return(s?s:false);
		}
		if(MTVi.util.isDefined(v)){
			var a=v.split('.');
			this.partner=cleanUp(a[0]);
			this.type=cleanUp(a[1]);
			this.keywords=cleanUp(a[2]);
			return this;
		}else{
			this.partner="";this.type="";this.keywords="";return this;
		}
	}catch(e){}
}
MTVi.reporting.PartnerSearch.Hierarchy.prototype={
	setReferral:function(){if(MTVi.util.isDefined(this.partner)){this.partner=this.partner+"-referral";}},
	delReferral:function(){this.partner=this.partner.replace(/-\w+/g,"");},
	hasPartner:function(){return(MTVi.util.isDefined(this.partner)?true:false);},
	hasType:function(){return(MTVi.util.isDefined(this.type)?true:false);},
	hasKeywords:function(){return(MTVi.util.isDefined(this.keywords)?true:false);},
	setKeywords:function(v){if(MTVi.util.isDefined(v)){this.keywords=v;}},
	toString:function(){
		try{
			var a=[];
			if(this.isPartner()){
				if(this.hasPartner()){a[0]=this.partner;}else{return "";}
				if(this.hasType()){a[1]=this.type;}else{return "";}
				if(this.hasKeywords()){a[2]=this.keywords;}
				return(a.join('.'));
			}else{
				return "";
			}
		}catch(e){return "";}
	},
	isPartner:function(){
		try{
			var partners=["yahoo","tvguide","blinkx","singingfish"];
			for(var i=0;i<partners.length;i++){
				if(this.partner.indexOf(partners[i])!=-1){return true;}
			}
			return false;
		}catch(e){return false;}
	}
};
MTVi.reporting.PartnerSearch.setCookie=function(v){
	try{document.cookie=this.id+"="+v+"; path=/";}catch(e){}
}
MTVi.reporting.PartnerSearch.readCookie=function(){
	try{
		var name=this.id+"=";
		var ca=document.cookie.split(';');
		for(var i=0;i < ca.length;i++){
			var c=ca[i];
			while(c.charAt(0)==' '){c=c.substring(1,c.length)};
			if(c.indexOf(name)==0){return c.substring(name.length,c.length)};
		}
		return false;
	}catch(e){}
}