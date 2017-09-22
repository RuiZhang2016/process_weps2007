function fireRepObjectCallAlert(argFunc){
	var img = new Image();
	var scs = "http://viarnd.112.2o7.net/b/ss/viarnd/1/EMAIL?pageName=Rep_Obj - function: " + argFunc + " - " + window.location;
	img.src = scs;
}

/****************************
* ReportingCall Global Vars *
*****************************/
var repObjectVersion = 2.03;
var defaultCall="";
var defaultDelimiter = "&";
var GETs = new Array(null);
var section_0 = new Array("gateway","portal","tab","area","sec_0","section_0");
var section_zeros = section_0.join("");

//if(document.ePingI)defaultCall=document.ePingI.src;
//else if(typeof(repImg)!='undefined')defaultCall=repImg.src;
if(typeof mep1 != "undefined") defaultCall = mep1;

/****************************
* ReportingCall Constructor *
*****************************/
function ReportingCall(call,d) {
   var pagename;
   var gateway;
   var url;
   var loginstatus;
   var login;
   var zyg;
   var era;

	var d_lmt = arguments.length==1?defaultDelimiter:d;
	var bits = call.split(d_lmt);
	for(var i in bits){
		if(i==0){
			this.host=bits[i];
			this.path = new Object();
		}else{
			av = bits[i].split("=");
			if (av[1]=="") continue;
			else this[av[0]] = av[1] + "";
         if(section_zeros.indexOf(av[0])){
            for (var j in section_0){
               if(this[section_0[j]]){
                  this.path[section_0[j]] = this[section_0[j]] + "";
               }
            }
         }
			if (av[0].indexOf("section_")>=0){
				this.path[av[0]] = av[1] + "";
			}
		}
	}
	this.getPropCount = getPropCount;
	this.objectToString = objectToString;
	this.origin = this.objectToString(this.path)+(this.pageName?this.pageName:"");
	this.joinProps = joinProps;
	this.getValue = getValue;
	this.getProps = getProps;
	this.setProps = setProps;
	this.clearProps = clearProps;
	this.cleanArgs = cleanArgs;
}
//new ReportingCall(defaultCall);

/************************
* ReportingCall Methods *
*************************/
ReportingCall.prototype.setPropsFromString = function(str,d) {
		fireRepObjectCallAlert("ReportingCall.setPropsFromString(\"str\",\"d\")")
		var d_lmt = d?d:",";
		var strg = this.cleanArgs(str);
		var avs = strg.split(d_lmt);
		var props = new Array();
		for(var i=0; i<avs.length; i++){
			props[i] = avs[i].split("=");
		}
		for(var i=0; i<props.length; i++){
			if(props[i][1] == "null" || props[i][1] == ""){
				this.deleteRepProps(props[i][0]);
			}
			else{
				this.setRepProps(props[i][0] + "=" + props[i][1]);
			}
		}
	
}

ReportingCall.prototype.setRepProps = function() {
	fireRepObjectCallAlert("ReportingCall.setRepProps()")
	if (arguments.length==0)
		return;
	else
		var avs = new Array();
	for (var i=0; i < arguments.length; i++) {
		avs[i] = arguments[i].split("=");
		this.setProps(avs[i][0],avs[i][1]);
		this.setPathParts(avs[i][0] + "=" + avs[i][1]);
	}
}

ReportingCall.prototype.deleteRepProps = function() {
	fireRepObjectCallAlert("ReportingCall.deleteRepProps()")
	if (arguments.length==0){
		return;
	}else{
		for(var i=0; i<arguments.length; i++){
			delete this[arguments[i]];
			var path = this.getPath();
			delete path[arguments[i]];
		}
	}
}

ReportingCall.prototype.getPath = function() {
	return this.path;
}


ReportingCall.prototype.setPathParts = function(arg) {
	if(arguments.length == 0){
		return;
	}else{
		if(arg.indexOf(".")>=0){
			var pg = arg.split('=');
			this.setProps('pageName',pg[1]);
		}else if(arg.indexOf("section_")>=0){
			this.setPath(arg);
		}else{
			for(var i=0; i<section_0.length; i++){
				if(arg.indexOf(section_0[i])>=0)
					this.setPath(arg);
			}
		}
	}
}

ReportingCall.prototype.setPath = function(arg) {
	if(arguments.length == 0){
		return;
	}else{
		var path = this.getPath();
		for(var i=0; i<arguments.length; i++){
			avs = arguments[i].split("=");
			if(avs[1] == "null"){
				this.deleteRepProps(avs[0]);
			}else{
				this.setProps(avs[0],avs[1]);
				path[avs[0]] = avs[1];
			}
		}
	}
}

ReportingCall.prototype.resetPath = function(arg) {
	var sec_0 = "section_0";
	var pth = arguments.length == 0?this.origin:arg;
	for (var j in section_0){
		if(this[section_0[j]])
			sec_0 = section_0[j];
	}
	if(pth.indexOf("/")==0) pth = pth.substring(1);
	if(pth.lastIndexOf("/") == (pth.length-1)) pth = pth.slice(0, pth.length-1);
	var or = pth.split("/");
	this.clearProps(this.getPath());
	for (var i in or){
		if (i == 0){
			this.setRepProps(sec_0 + "=" + or[i]);
		}else{
			this.setRepProps("section_" + i + "=" + or[i]);
		}
	}
	var props = this.getProps();
	var xSecs = new Array();
	for (i in props) {
		if (props[i].indexOf("section_")>=0)
		xSecs[xSecs.length] = props[i];
	}
	for (j in xSecs) {
		if (this.path[xSecs[j]])
			continue;
		else
			delete this[xSecs[j]];
	}
}

ReportingCall.prototype.pathToString = function(mode){
	var pathParts = new Array();
	var thisPath = this.getPath();
	var sortedPath = new Object();
	for (var i in thisPath) {	
		if(i.toString().indexOf("_")==-1) pathParts[0] = [i, thisPath[i]];
		else pathParts[i.toString().substring(i.toString().indexOf("_")+1)] = [i, thisPath[i]];
	}
	for (var j = 0, k = 0; j < pathParts.length; j++) {
		if (typeof(pathParts[j]) == 'undefined') continue;
		sortedPath[pathParts[j][0]] = pathParts[j][1];
		++k;
	}
	var strPath = this.objectToString(sortedPath);
	if (mode == "h") { strPath = strPath.substring(0, strPath.length-1); }
	else if (mode == "p") { strPath = "/" + strPath; }
	else { strPath = strPath; }
   if(strPath.indexOf("//")!=-1){
      strPath = strPath.replace(new RegExp("/+","g"));
   }

	return strPath;

}

ReportingCall.prototype.toString = function(d) {
	var d_lmt = arguments.length == 0?",":d;
	var meth = new Array();
	var prop = "";
	var c = 0;
	for(var p in this){
		if (p == "path"){
			prop += "path: " + this.objectToString(this[p]) + d_lmt;
			continue;
		}
		if (typeof this[p] == "function")
			meth[c++] = p;
		else
			prop += p + ": " + this[p] + d_lmt;
	}
	for(i in meth){
		prop += "METHOD: " + meth[i] + d_lmt; 
	}
	return prop;
}

ReportingCall.prototype.makeFullCall = function() {
	// Deprecated. Left here for legacy implementations.
	return;
}

ReportingCall.prototype.makeTaxCall = function() {
	// Deprecated. Left here for legacy implementations.
	return;
}

ReportingCall.prototype.getQueryVals = function(){
	var qsStr = document.location.search;
	var qsEmpty = "";
	if((typeof(qsStr)!='undefined')&&(qsStr!=null)){
		qsStr=qsStr.replace(/\?/,"");
		qsStr=qsStr.replace(/\&/g,"|");
		return unescape(qsStr);
	}else return qsEmpty;
}

/************************
* Utility methods used  *
* indirectly by the     *
* ReportingCall object. *
*************************/
function joinProps(prim, second, d) {
	var delim= d?d:"|";
	var aggregate="";
	if(prim)aggregate=prim;else return aggregate;
	if(second)aggregate+=delim+second;
	return aggregate;
}

function objectToString(o,d) {
	var d_lmt = d?d:"/";
	var str = "", pCnt = this.getPropCount(this[o]), cnt = 1;
	for(var i in o){
		d_lmt = cnt==pCnt?"":d_lmt;
		str += o[i] + d_lmt;
		cnt++;
	}
	return(str);
}

function getPropCount(o){
	if (arguments.length == 0)
		return false;
	var pCount = 0;
	for(var i in this[o]){
		pCount++
	}
	return pCount;
}

function getValue(prop) {
	return this[prop];
}

function getProps() {
	var avs = new Array();
	for (var av in this){
		if(typeof this[av] == "function") continue;
		avs[avs.length] = av;
	}
	return avs;
}

function setProps (a,v) {
	if(v == "null"){
		delete this[a];
	}else{
		this[a] = v;
	}
}

function clearProps (o) {
	for (var i in o) {
		delete o[i];
	}
}

function cleanArgs (s) {
	var str = s.replace(/\s/g, "");
	return str;
}

/****************************
* Error handling for        *
* reporting calls.          *
*****************************/
function mtvi_catchError(e) {
	var er = {message:'c21', name:'c22', stack:'c23'};
	var img = new Image();
	var scs = "http://viarnd.112.2o7.net/b/ss/viarnd/1/EMAIL?pageName=JS_ER-" + window.location;
	for(var i in e){
		if(typeof er[i] != 'undefined')
			scs += "&" + er[i] + "=" + e[i];
	}
	img.src = scs;
}
/********************************
* data integrity implementation *
*********************************/

function cleanData(a_dataVal,a_safePropNames){
	var retVal=a_dataVal;
	if(typeof(a_dataVal)!='object'){
		a_dataVal+="";//if the data is not an object, make it a string !!!NEEDS TO BEE FIXED, CONVERTS BOOLEAN INTO STRINGS!!!
		retVal=cleanString(a_dataVal);//clean that string
	}
	else if(typeof(a_safePropNames)=='object'){//if the data is object and the array of safe name properties of this object is passed as array
		for(var i in a_dataVal){
			for(var j in a_safePropNames){//find any matching object data property name against the safe list and clean up the value of it
				if(a_safePropNames[j].toLowerCase()==i.toLowerCase()) a_dataVal[i]=cleanData(a_dataVal[i],a_safePropNames);
			}
		}
		retVal=a_dataVal;
	}
	return retVal;
}

function cleanString(a_stringVal){
	var retVal=a_stringVal;
	retVal=retVal.replace(/ /g, '_');//replace all spaces with underscores
	var tempArray=retVal.split(".");//split the string by periods
	var tempRetVal="";
	for(var i in tempArray){
		tempArray[i]=tempArray[i].replace(/\W/g, '');//remove all non-alphanumeric characters from each split part
		tempRetVal+=tempArray[i]+".";//put period back
	}
	retVal=tempRetVal.substring(0,tempRetVal.length-1);//remove last extra period
	while(retVal.charAt(0) == ('_') ){
		retVal = retVal.substring(1);//trim all leading underscores
	}
	while(retVal.charAt(retVal.length-1) == ('_') ){
		retVal = retVal.substring(0,retVal.length-1);//trim all trailing underscores
	}
	while(/__/.test(retVal)==true){//test for double underscores
		retVal=retVal.replace(/__/g, '_');//replace all current double underscores with one underscore
	}
	return retVal.toLowerCase();//change all to lower case string
}