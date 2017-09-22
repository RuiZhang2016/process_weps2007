if(typeof MTVi=="undefined"){
	var MTVi={
	//* Packages *//
		reporting: {},
		util: {},
		ads: {},
		logger: {},
	//* Properties *//
		path: "/global/scripts/yeti/",
		scriptname: "mtvi.js",
		version: "1.5",
		modules: [],
		sectionSetup: {},
	//* Methods *//
		appendScript: function(n){
			try{
				if(n.indexOf("/")!=-1){
					n=(n.indexOf(".js")==-1?n+".js":n);
				}else{
					n=(n.indexOf(".js")==-1?this.path+n+".js":this.path+n);
				}
				if(typeof document.createElement!="undefined"){
					var s=document.createElement('script');
					s.type='text/javascript';s.src=n;
					document.getElementsByTagName('head')[0].appendChild(s);
				}else{
					document.write("<scr" + "ipt type='text/javascript' src='" + n + "'><" + "/" + "scr" + "ipt>");
				}
			}catch(e){try{MTVi.logger.JsError(e);}catch(e){}}
		},
		loadModules: function(){
			try{
				for(var i=0;i<arguments.length;i++) {
					var o=arguments[i];
					if(typeof o=='string'){
						this.appendScript(o);
					}else{
						for(var x=0;x<o.length;x++){this.appendScript(o[x]);}
					}
				}
			}catch(e){try{MTVi.logger.JsError(e);}catch(e){}}
		},
		addOnloadEvent: function(func){
			try{
				if(window.attachEvent){window.attachEvent("onload",func);}
				if(window.addEventListener){window.addEventListener("load",func,false);}
				return this;
			}catch(e){}
		},
		debug: function(msg){
			try{
				var c=document.getElementById("debug");
				if(!c){
					c=document.createElement("div");
					c.setAttribute("id","debug");
					document.getElementsByTagName("body")[0].appendChild(c);
				}
				c.innerHTML=c.innerHTML+msg+"<br>";
			}catch(e){try{MTVi.logger.JsError(e);}catch(e){}}
		},
		toString: function(){return "MTV Javascript Package version "+this.version;}
	};
}
//* Logger Package *//
MTVi.logger={
	url: "http://viarnd.112.2o7.net/b/ss/viarnd/1/EMAIL?",
	send: function(msg){
		if(MTVi.util.isDefined(msg)){var img=new Image();img.src=msg;}
	},
	JsError: function(e){
		try{
			var map={message:'c21',name:'c22',stack:'c23'};
			var msg=this.url+"pageName=JS_ER-"+window.location;
			if(!MTVi.util.isDefined(e.stack)){e.stack=window.location.href;}
			for(var i in map){
				if(MTVi.util.isDefined(e[i])){
					msg+="&"+map[i]+"="+e[i];
				}
			}
			this.send(msg);
		}catch(e){
			try{this.send(this.url+"pageName=JS_ER-"+"MTVi.logger error:"+e.message);}catch(e){}
		}
	},
	FailedSearch: function(ssl,account,terms){
		try{
			if(MTVi.util.isDefined(account)){
				var url=".112.2o7.net/b/ss/";
				var msg="http"+(ssl?"s":"")+"://"+account+url+account+"/1/EMAIL?pageName=FAILED+SEARCH&v4=";
				if(MTVi.util.isDefined(terms)){var img=new Image();img.src=msg+terms;}
			}
		}catch(e){try{this.JsError(e);}catch(e){}}
	}
};
//* Util Package *//
MTVi.util={
	isDefined: function(v){if(typeof v==='undefined'||v===null||v===''||v==='undefined'){return false}else{return true};},
	setProperties: function(o){
		try{
			for(var i in o.properties){
				if(typeof o[i]!="object"){
					var name=i.ucFirst();
					eval("o.get"+name+"=function(){return this."+i+";}");
					eval("o.set"+name+"=function(v){this."+i+"=MTVi.util.isDefined(v)?v:'';}");
				}
			}
		}catch(e){try{MTVi.logger.JsError(e);}catch(e){}}
	},
	queryStringToHash: function(str){
		try{
			var q=[];var p=str.substring(1).split('&');
			for(var i=0;i < p.length;i++){
				var idx=p[i].indexOf('=');
				if(idx>0){q[p[i].substring(0,idx)]=p[i].substring(idx+1);}
			}
			return(q);
		}catch(e){try{MTVi.logger.JsError(e);}catch(e){}}
	}
};
//* Core Methods *//
String.prototype.ucFirst=function(){return(this.charAt(0).toUpperCase()+this.substr(1,this.length));}
String.prototype.stripSlashes=function(){return(this.replace(new RegExp("/+","g"),"/"));}
String.prototype.ltrim=function(){return this.replace(/^\\s+/,'');}
String.prototype.rtrim=function(){return this.replace(/\\s+$/,'');}
String.prototype.trim=function(){return this.replace(/^\\s+|\\s+$/g,'');}
String.prototype.chop=function(n){if(isNaN(n)){n=this.length-1;}return(this.substring(0,n));}
String.prototype.stripPrecedingSlashes=function(){try{return this.replace(new RegExp("/+","g"),"/").substring(1);}catch(e){}}
Math.getRnd=function(a_numA,a_numB){if(!MTVi.util.isDefined(a_numA)||isNaN(a_numA)||parseInt(a_numA)<0){a_numA=1;}if(!MTVi.util.isDefined(a_numB)||isNaN(a_numB)||parseInt(a_numB)<0){a_numB=0;}if(a_numA<a_numB){var tempNum=a_numA;a_numA=a_numB;a_numB=tempNum;}return(parseInt(Math.random()*(a_numA-a_numB+1)+a_numB));}
//* From JSON.org: var a_string=JSON.stringify(ob); *//
var JSON=function(){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},s={'boolean':function(x){return String(x);},number:function(x){return isFinite(x)?String(x):'null';},string:function(x){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}c=b.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);});}return'"'+x+'"';},object:function(x){if(x){var a=[],b,f,i,l,v;if(x instanceof Array){a[0]='[';l=x.length;for(i=0;i<l;i+=1){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=',';}a[a.length]=v;b=true;}}}a[a.length]=']';}else if(x instanceof Object){a[0]='{';for(i in x){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=',';}a.push(s.string(i),':',v);b=true;}}}a[a.length]='}';}else{return;}return a.join('');}return'null';}};return{copyright:'(c)2005 JSON.org',license:'http://www.JSON.org/license.html',stringify:function(v){var f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){return v;}}return null;},parse:function(text){try{return!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g,'')))&&eval('('+text+')');}catch(e){return false;}}};}();