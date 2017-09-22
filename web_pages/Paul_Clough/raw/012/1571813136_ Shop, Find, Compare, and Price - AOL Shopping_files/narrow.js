filterUrl = window.location.search;
function ppGetReferrer(){
	if(!window.RegExp) return null;
	refurl = ppGetUrlParam('refurl',window.location.search);
	if(refurl && refurl.length>0){return unescape(refurl);}
	return null;
}

function ppGetUrlParam(key, url){
	var kv = url.slice(1).split('&');
	if(kv.length > 0){
		for(var i = 0; i < kv.length; i++){
			if(kv[i].slice(0,kv[i].indexOf('=')) == key ){
				return kv[i].slice(kv[i].indexOf('=')+1);
			}
		}
	}
}

function ppRemoveQueryParam(query,key){
	sArgs = query.slice(1).split('&');
	if(sArgs.length > 0){
		for(var i = 0; i < sArgs.length; i++){
			if(sArgs[i].slice(0,sArgs[i].indexOf('=')) == key){
				if(i == 0)
					query = query.replace(sArgs[i],'');
				else{
					query = query.replace('&' + sArgs[i],'');
				}
			}
		}
	}
	return query;
}

function ppRemoveAttrParam(query,attr){
	key = "attr";
	sArgs = query.slice(1).split('&');
	if(sArgs.length > 0){
		for(var i = 0; i < sArgs.length; i++){
			if(sArgs[i].slice(0,sArgs[i].indexOf(',')) == (key + '=' + attr)){
				if(i == 0)
					query = query.replace(sArgs[i],'');
				else{
					query = query.replace('&' + sArgs[i],'');
				}
			}
		}
	}
	return query;
}

function ppRemoveAllDropdownAttrs(query, theform){
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			sarr=theform.elements[i].name.split(',');
			query = ppRemoveAttrParam(query,sarr[0]);
		}
	}
	return query;
}
filterUrl = ppRemoveQueryParam(filterUrl,'nattr');
filterUrl = ppRemoveQueryParam(filterUrl,'at');
filterUrl = ppRemoveQueryParam(filterUrl,'pid');
filterUrl = ppRemoveQueryParam(filterUrl,'rpshow');
filterUrl = ppRemoveQueryParam(filterUrl,'attrtxt');

function ppSeeAll(){
	var attrs = "";
	theform = isgE("rapportFilterForm");
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs += ppAddSelect('attr',theform.elements[i]);
		}
	}
	filterUrl = ppRemoveAllDropdownAttrs(filterUrl, theform);
	filterUrl = ppRemoveQueryParam(filterUrl,'off');
	window.location = 'ppesearch' + filterUrl + attrs;
}

function ppSeeAll(tot,rpshow) {
	var attrs = "";
	theform = isgE("rapportFilterForm");
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs += ppAddSelect('attr',theform.elements[i]);
		}
	}
	filterUrl = ppRemoveAllDropdownAttrs(filterUrl, theform);
	filterUrl = ppRemoveQueryParam(filterUrl,'off');
	window.location = '/ppesearch' + filterUrl + attrs+'&tot='+tot+'&rpshow='+rpshow+'&sbox=12';
}

function ppFilterChange(obj){
	var attrs = "";
	theform = isgE("rapportFilterForm");
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs += ppAddSelect('nattr',theform.elements[i]);
		}
	}

	if(filterUrl.indexOf("?") == -1){
		filterUrl ='?' + filterUrl;
	}

	if( filterUrl.indexOf("k") == -1 ){
		var rapText = isgE("topform").k.value;
		if(rapText != "Search Shopping" && rapText != ""){
			filterUrl += "&k=" + rapText ;
		}
	}
	if(obj.options[obj.selectedIndex].value == 'more'){
		filterUrl = ppRemoveQueryParam(filterUrl,'allattr');
		sarr = obj.name.split(',');
		window.location = '/ppesearch' + filterUrl + attrs + '&rpshow=1' + '&at=a&allattr=' + sarr[0];
	}
	else{
		src = '/ppxfilter' + filterUrl + attrs + '&at=n';
		isgE('searchFilters').src = src;
	}
	if(is.isMac){
		istoggleSearch();
		istoggleSearch();
	}	
}

function ppAddSelect(attrName, select){
	if(select.selectedIndex > 0 && select.options[select.selectedIndex].value != 'more'){
		sarr = select.name.split(',');
		return "&" + attrName + "=" + select.options[select.selectedIndex].value + "&attrtxt=" + escape( sarr[1] + "," + select.options[select.selectedIndex].text);
	}
	return "";
}

function ppFilterCallback(filter,selectInfo,selectIndex){
	if(selectInfo && isgE(filter)){
		select = isgE(filter);
		select.disabled = false;
		while(select.options.length > 0){
			select.options[0] = null;
		}
		for(i = 0; i < selectInfo.length; i++){
			select.options[i] = new Option(selectInfo[i].title,selectInfo[i].value);
		}
		select.selectedIndex = selectIndex;
		if(selectInfo.length <= 1){
			select.disabled=true;
		} else{
			select.disabled=false;
		}
	}
}

function ppFilterNumberCallback(num){
	if(isgE('rapportFilterNum')) iswH(isgE('rapportFilterNum'), num);
}

function ppProductNumberCallback(num){
	if(isgE('rapportProductNum'))iswH(isgE('rapportProductNum'), num);
}

function ppAttrBack(show){
	ref = ppGetReferrer();
	if(ref && ref.length != 0 && ref.indexOf('?') != -1){
		var base = ref.substring(0,ref.indexOf('?'));
		var query = ref.substring(ref.indexOf('?'));
		query = ppRemoveQueryParam(query,'nattr');
		query = ppRemoveQueryParam(query,'at');
		query = ppRemoveQueryParam(query,'allattr');
		query = ppRemoveQueryParam(query,'rpshow');
		var loc = base + query + ppAttrAll;
		loc += '&rpshow=1';
		window.location = loc;
	}
	else{
		var loc = ppBack + ppAttrAll;
		loc += '&rpshow=1';
		window.location = loc;
	}
}

function ppAttrGo(selection){
	var loc='';
	ref = ppGetReferrer();
	if(ref && ref.length != 0 && ref.indexOf('?') != -1){
		var base = ref.substring(0,ref.indexOf('?'));
		var query = ref.substring(ref.indexOf('?'));
		query = ppRemoveQueryParam(query,'nattr');
		query = ppRemoveQueryParam(query,'at');
		query = ppRemoveQueryParam(query,'allattr');
		query = ppRemoveQueryParam(query,'rpshow');
		if(ppeBrowse==1){
			query = ppRemoveQueryParam(query,'off');
			query = ppRemoveQueryParam(query,'attr');
			loc = base + query + ppAttrAllBut + '&rpshow=1&attr=' + selection;
		}
		else{
			loc = base + query + ppnAttrAllBut + '&rpshow=1&nattr=' + selection;
		}
		window.location = loc;
	}
	else{
		if(ppeBrowse==1)
			loc = ppBackNoAttr + ppAttrAllBut + '&rpshow=1&attr=' + selection;
		else
			loc = ppBack + ppnAttrAllBut + '&rpshow=1&nattr=' + selection;
		window.location = loc;
	}
	return false;
}

function ppMiniFilterChange(obj){
	var attrs = "";
	theform = isgE("rapportMiniFilterForm");
	if(obj.options[obj.selectedIndex].value == 'more'){
		for(var i = 0; i < theform.elements.length; i++){
			if(theform.elements[i].type == "select-one"){
				attrs += ppAddSelect('nattr',theform.elements[i]);
			}
		}
		filterUrl = ppRemoveQueryParam(filterUrl,'allattr');
		filterUrl = ppRemoveQueryParam(filterUrl,'nattr');
		filterUrl = ppRemoveQueryParam(filterUrl,'off');
		sarr=obj.name.split(',');
		window.location = 'ppesearch' + filterUrl + attrs + '&refurl=' + escape(document.location.href) + '&at=a&allattr=' + sarr[0];
	}
	else{
		for(var i = 0; i < theform.elements.length; i++){
			if(theform.elements[i].type == "select-one"){
				attrs += ppAddSelect('attr',theform.elements[i]);
			}
		}
		filterUrl = ppRemoveAllDropdownAttrs(filterUrl, theform);
		filterUrl = ppRemoveQueryParam(filterUrl,'off');
		window.location = 'ppesearch' + filterUrl + attrs;
	}
}

function ppSetRpCid(cid){
	if(cid && cid.length>0){
		filterUrl = ppRemoveQueryParam(filterUrl,'cid');
		filterUrl += "&cid=" + cid;
	}
}

function cppAddSelect(select){
	var sarr = "";
	var sText = ""; 
	if(select.selectedIndex>0 && select.options[select.selectedIndex].value != 'more'){
		sarr = select.options[select.selectedIndex].value.split(',');
		sText = select.options[select.selectedIndex].text; 
		// check for Brand Value containing character "/" and replace with "|" 
		if(sText.indexOf("/")){
			sText = tokenReplacer(sText,"/","|");
		} 
		if(sarr[0]=="259818" && sText.indexOf("-")){
			sText = sText.replace("-","#");
		}  
		return "/" + sarr[0] +"-"+sarr[1]+"-" +escape(sText);
	}
	else{
		sarr = select.name.split(',');
		url ="";
		if(select.selectedIndex != 0){
			url = "/"+sarr[0]+"-"+0+"-More";
		}
		return url;
	}
}
 
function getFilterURL(flag){
	var theform = document.getElementById("rapportMiniFilterForm");
	var offset = (flag == true) ? "1" : theform.offset.value;
	var url = "";
	url = theform.id.value+"-"+offset+"-"+theform.view.value;	
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if( fieldValue != 'no_sortby') {
	url =  url = theform.id.value+"-"+offset+"-"+fieldValue+"-"+theform.view.value;
	}
	return url;
}
 
function miniFilterChange(obj){
	var attrs = "";
	var  theform = document.getElementById("rapportMiniFilterForm");
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs += cppAddSelect(theform.elements[i]);
		}
	}
	window.location = cfilterURL+getFilterURL(true)+attrs;
}

function callPagination(offset){
	var attrs = "";
	var theform = document.getElementById("rapportMiniFilterForm");
	// construct the uri part of filtering
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs +=cppAddSelect(theform.elements[i]);
		}
	}
	// construct the pagination uri part
	var url = theform.id.value+"-"+offset+"-"+theform.view.value;	
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if(fieldValue != 'no_sortby'){
		url = theform.id.value+"-"+offset+"-"+fieldValue+"-"+theform.view.value;
	}
	window.location = cfilterURL+url+attrs;
}

function callSearchPagination(offset,keyWord){
	var attrs = "";
	var  theform = document.getElementById("rapportMiniFilterForm");
	// construct the pagination uri part
	var url = theform.id.value+"-"+offset+"-"+theform.view.value;   
	var queryStr = "&tot="+theform.tot.value+"&rpshow="+theform.rpshow.value + "&cid="+ theform.cid.value;
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if(fieldValue != 'no_sortby'){
		url =  theform.id.value+"-"+offset+"-"+theform.view.value+"?p_s="+fieldValue+queryStr;
	} 
	keyWord = keyWord.replace(/\s/g,"+");
	keyWord = keyWord.replace(/[\+]+/g,"+");
	window.location = "/" + escape(keyWord) + "-search-results/" + url+"?"+queryStr;
}


function selectView(offset,view){
	var attrs = "";
	var  theform = document.getElementById("rapportMiniFilterForm");
	// construct the uri part of filtering  
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs +=cppAddSelect(theform.elements[i]);
		}
	}

	// construct the pagination uri part
	var url = theform.id.value+"-"+offset+"-"+view;	   
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if(fieldValue != 'no_sortby'){
		url =  theform.id.value+"-"+offset+"-"+fieldValue+"-"+view;
	}
	window.location = cfilterURL+url+attrs;
}

function selectSearchView(offset,view,keyWord){
	var attrs = "";
	var theform = document.getElementById("rapportMiniFilterForm");
	// construct the pagination uri part   
	var queryStr = "&tot="+theform.tot.value+"&rpshow="+theform.rpshow.value + "&cid="+ theform.cid.value;
	var url = theform.id.value+"-"+offset+"-"+view;
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if(fieldValue != 'no_sortby'){
		url =  theform.id.value+"-"+offset+"-"+view+"?p_s="+fieldValue+queryStr;
	}
	keyWord = keyWord.replace(/\s/g,"+");
	keyWord = keyWord.replace(/[\+]+/g,"+");
	window.location = "/" + escape(keyWord) +"-search-results/" + url+"?"+queryStr;
}

function cppAttrBack(selection){
	var theform = document.getElementById("friendlyFilterForm");
	var url = "";
	var fieldValue = theform.sort.value;
	if(fieldValue != 'no_sortby'){
		url = theform.id.value+"-"+theform.offset.value+"-"+fieldValue+"-"+theform.view.value;
	}
	else{
		url=theform.id.value+"-"+theform.offset.value+"-"+theform.view.value;
	}        
	window.location = cfilterURL+url;
}
                                                                                                                
function cppAttrGo(selection){
	var theform = document.getElementById("friendlyFilterForm");
	var url = "";
	var fieldValue = theform.sort.value;
	if(fieldValue != 'no_sortby'){
		url =  theform.id.value+"-"+theform.offset.value+"-"+fieldValue+"-"+theform.view.value;
	}
	else{
		url=theform.id.value+"-"+theform.offset.value+"-"+theform.view.value;
	}
	window.location = cfilterURL+url+"/"+selection;
}

function callProduct(str){
	window.location = str;
}
                                                                                                                             
                                                                                                                             
function csortResults(){
	var attrs = "";
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	var theform = document.getElementById("rapportMiniFilterForm");
	// construct the uri part of filtering
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs +=cppAddSelect(theform.elements[i]);
		}
	}

	// construct the pagination uri part
	//var url = theform.cid.value +"-"+theform.id.value+"-"+offset+"-"+view;
	var offset = theform.offset.value;
	if(offset == "null"){
		offset = 1;
	}
	var url ="";
	if(fieldValue != 'no_sortby'){
		url = theform.id.value+"-"+offset+"-"+fieldValue+"-"+theform.view.value;
	}
	else{
		url = theform.id.value+"-"+offset+"-"+theform.view.value;
	}
	window.location = cfilterURL+url+attrs;
}

function tokenReplacer(sText,sToken,rToken){
	if(sText != null){
		while(sText.indexOf(sToken) !=-1){
			sText = sText.replace(sToken,rToken);
		}
		return sText;
	}
	else{
		return "";
	}
}

function onRightClick(obj,offset){
	var attrs = "";
	var theform = document.getElementById("rapportMiniFilterForm");
	// construct the uri part of filtering
	for(var i = 0; i < theform.elements.length; i++){
		if(theform.elements[i].type == "select-one"){
			attrs +=cppAddSelect(theform.elements[i]);
		}
	}

	// construct the pagination uri part
	var url = theform.id.value+"-"+offset+"-"+theform.view.value;
	var index = document.sortby[0].selectedIndex;
	var fieldValue = document.sortby[0].options[index].value;
	if( fieldValue != 'no_sortby') {
	url =  theform.id.value+"-"+offset+"-"+fieldValue+"-"+theform.view.value;
	}
	obj.href= cfilterURL+url+attrs;
}
