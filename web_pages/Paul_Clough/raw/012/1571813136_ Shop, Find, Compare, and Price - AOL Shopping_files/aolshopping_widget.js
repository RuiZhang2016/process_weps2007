var c=0;
var tkr='';
var dlini=false;
var to=null;
var dlnum=1;
var nDls=1;
var dldur=8000;
var dllast;
var qfcs;
var troflags = new Array();
var pd;
var psed=false;
var fitab='';
function dlinit(){
	if(dlini) return;
	dlini = true;
	if(isgE('controlsContainer3')){to='dlgo()';} /*check for PG(PhotoGallery) widget which has controlsContainer3 div*/
	else{to=setTimeout('dlgo()',getdldur(dlnum));} /*DL widget*/
	if(ptdiv=p_o('pt'+dlnum)) pt(dlnum);
}

function pt(){
	if(!pd) return;
	tkr = '<a href="'+pd[c].u+'"><span id="ps">'+pd[c].tkr+'</span><span id="pv">'+pd[c].v+'</span><span id=';
	pd[c].d?((pd[c].d=='+')?(tkr+='pup'):(tkr+='pdn')):(tkr+='pnc');
	tkr+='>'+pd[c].c+'</span></a>';
	if(ptdiv=p_o('pt'+dlnum)) p_o('pt'+dlnum).innerHTML=tkr;
	c++;
	if(c==pd.length) c=0;
	setTimeout('pt()',3000);
}

function dlf(){return dlgo('FWD')}
function dlb(){return dlgo('BAK')}
function pgf(){return pggo('FWD')} /*for PG widget*/
function pgb(){return pggo('BAK')} /*for PG widget*/

function dlgo(typ,num){
	dlini=true;
	dllast=dlnum;
	switch(typ){
		case 'NUM':
			if(dlnum==num) return false; clrT(); dlnum=num; psed=true; break;
		case 'BAK':
			clrT(); dlnum--; break;
		case 'FWD':
			clrT(); dlnum++; break;
		default:
			if(!psed) dlnum++; break;
	}
	if(dlnum>nDls){dlnum=1;}
	else if(dlnum<1){dlnum=nDls;}
	if(nDls!=1){pGet('tab.adp?type=portal&id=dlC&mod=dlDhtml&dlact=dl'+dlnum,dlnum,'dlt','dlC','dlc()');}
	setPse();
	return false;
}

function pggo(typ,num){ /*for PG widget*/
	dlini=true;
	dllast=dlnum;
	switch(typ){
		case 'NUM':
			if(dlnum==num) return false; clrT(); dlnum=num; psed=true; break;
		case 'BAK':
			dlnum--; break;
		case 'FWD':
			dlnum++; break;
		default:
			break;
	}
	if(dlnum>nDls){dlnum=1;}
	else if(dlnum<1){dlnum=nDls;}
	if(isgE('SlideCount')){isgE('SlideCount').innerHTML = '<center>'+dlnum+'/'+nDls+'</center>';}
	if(nDls!=1){pGet('tab.adp?type=portal&id=dlC&mod=dlDhtml&dlact=dl'+dlnum,dlnum,'dlt','dlC','pgc()');}
	setPse();
	return false;
}

function dlc(){
	if(!psed){to=setTimeout('dlgo()',getdldur(dlnum));}
	if(trdiv=p_o('tr'+dlnum)) track('tr'+dlnum);
	if(trodiv=p_o('tro'+dlnum)) track('tro'+dlnum,true);
	if(aspdiv=p_o('dla'+dlnum)) track('dla'+dlnum,true);
	if(ptdiv=p_o('pt'+dlnum)) p_o('pt'+dlnum).innerHTML=tkr;
	if(p_o('quote'+dlnum) && p_o('quote'+dllast)){
		if(qfcs==1){p_o('quote'+dlnum).focus();}
		p_o('quote'+dlnum).value = p_o('quote'+dllast).value;
	}
}

function pgc(){/*for PG widget*/
	if(trdiv=p_o('tr'+dlnum)) track('tr'+dlnum);
	if(trodiv=p_o('tro'+dlnum)) track('tro'+dlnum,true);
	if(aspdiv=p_o('dla'+dlnum)) track('dla'+dlnum,true);
	if(ptdiv=p_o('pt'+dlnum)) p_o('pt'+dlnum).innerHTML=tkr;
	if(p_o('quote'+dlnum) && p_o('quote'+dllast)){
		if(qfcs==1){p_o('quote'+dlnum).focus();}
		p_o('quote'+dlnum).value = p_o('quote'+dllast).value;
	}
}

function dlblr(){qfcs=0;}

function dlfcs(){qfcs=1;}

function dlp(){
	if(psed){psed = false; to = setTimeout('dlgo()',getdldur(dlnum));}
	else{psed = true; clrT();}
	setPse();
	return false;
}

function setPse(){
	if(!p_o('dlpi')) return;
	if(psed){p_o('dlpi').src = pctrl_off;}
	else{p_o('dlpi').src = pctrl_on;}
}

function track(id,once){
	if(!(o=p_o(id))) return;
    if(once && troflags[id]){return;}
	var d=o.innerHTML;
    var urls=d.split(",");
    for(i = 0; i < urls.length; i++){imp(urls[i]);}
    if(once) troflags[id] = 1;
}

function fitrk(){
	if(fitab==null) return;
	track('fiap'+fitab,true);
}

function clrT(){
	if(to){clearTimeout(to); to=null;}
}

ae(window,'load',dlinit);

function getdldur(dlnum){
	if(o=p_o('dlcyc'+dlnum)){
		return (o.innerHTML * 500);
	}
	return dldur;
}

function p_o(o){return document.getElementById(o);}

function showTab(did,cid,cback){
	if(did==null) return false;
	var div=p_o(did);
	var tab=p_o(cid);
	if(tab==null) return false;
	var tabs=div.childNodes;
	for(var i = 0; i < tabs.length; i++){
		tabs[i].className='dn';
	}
	if(isgE('controlsContainer3')){isgE('controlsContainer3').className='';} /*for PG widget*/
	tab.className='di';
	if(cback!=null) eval(cback);
}

function mkTab(did,cid,htm){
	var div=p_o(did);
	if(div==null) return;
	var tab=document.createElement('div');
	tab.setAttribute('id',cid);
	tab.className='dn';
	tab.innerHTML=htm;
	div.appendChild(tab);
}

function allLI(arg){
	if(p_o((arg))!=null){var x = p_o((arg)).getElementsByTagName("li").length;}
	while(x>0){
		p_o((arg+x)).className="";
		p_o((arg+'a'+x)).className="";x--;
	}
}

function selTab(arg,i){
	if(arg!=null){
		allLI(arg);
		lidx = (arg+i);
		liadx = (arg+'a'+i);
	}
	if(arg == 'r'){
		p_o(lidx).className="curr";
	}
	else if(arg!=null){
		if(p_o(lidx)!=null){
		p_o(lidx).className="over";
		p_o(liadx).className="sel";
		}
	}
}

function pGet(url,i,arg,id,cback){
	var cid=id+i;
	if(showTab(id,cid,cback)==false){
		var uid=(new Date()).getTime();
		url+='&uid='+uid+'&cid='+cid;
		if(arg!=null) url+='&targ='+arg;
		if(i!=null) url+='&tid='+i;
		if(cback!=null) url+='&cback='+escape(cback);
		setErr(uid,true);
		var funcRef=errMsg(uid);
		setTimeout(funcRef,10000);
		peval=true;
		pipe.location.replace(url);
		document.close(); 
	}
	else{
		selTab(arg,i);
	}
}

function btnOvr(btn){
	btn.className+="over";
	btn.className=btn.className.replace("clk","");
}

function btnOut(btn){
	btn.className=btn.className.replace("over","");
	btn.className=btn.className.replace("clk", "");
}

function btnClk(btn){
	btn.className+="clk";
	btn.className=btn.className.replace("over","");
}

function ae(o,et,fn){
	if(o.addEventListener)o.addEventListener(et,fn,true);
	else if(o.attachEvent)o.attachEvent('on'+et,fn);
}

function Select_Value(test){
   if(test==''){return false;}
   else{location.href=test;}
}

/*DM widget JS*/
/*showdetails function will show details about selected product and hide other product details
idval - div ID which is selected by user
wgttype - widget type which is calling this func.
NoOfProd - number of product in that widget.
wgtId - unique widget Id appended along with div Id for avoiding Id conflict
*/
function Showdetails(idval,wgttype,NoOfProd,wgtId){
	for(var i = 1; i <= NoOfProd; i++ ){
		divOff('detail_prod'+i+"_"+wgtId);
	}
	switch(wgttype){
		case 'wgt3': 
			isgE('detail_'+idval).style.backgroundColor = '#fff';
			break;
		case 'wgt5': 
			isgE('detail_'+idval).style.backgroundColor = '#fff';
			for(var i = 1; i <= NoOfProd; i++){
				if(isgE('imgdiv_prod'+i)){isgE('imgdiv_prod'+i).style.background = 'url(../img/DMwidget/img_divider.gif)';}
			}
			var wgtNum = idval.substr(4,5);
			var increcount = (parseInt(wgtNum)+1);
			var decrecount = (parseInt(wgtNum)-1);
			if(isgE('imgdiv_prod'+decrecount)){isgE('imgdiv_prod'+decrecount).style.background = 'url(../img/DMwidget/hideImg_divider.gif)';}
			if(isgE('imgdiv_prod'+parseInt(wgtNum))){isgE('imgdiv_prod'+parseInt(wgtNum)).style.background = 'url(../img/DMwidget/hideImg_divider.gif)';}
			break;
	}
	divOn('detail_'+idval);
	isgE('detail_'+idval).style.display = 'block';
}

/*expandBox is particularly for DWDT drawer widget*/
function expandBox(idval,wgttype,NoOfprod,wgtId){
	for(var i=1;i<=NoOfprod ;i++ ){
		var RowBoxId = 'prod'+i+"_"+parseInt(wgtId);
		var prodDetBoxId = 'detail_prod'+i+"_"+parseInt(wgtId);
		divOff(prodDetBoxId);
		divOn(RowBoxId);
		isgE(RowBoxId).style.display = 'block';
		isgE(RowBoxId).style.background ='url(../img/DMwidget/bg_blue.gif)';
	}
	divOn('detail_'+idval);
	divOff(idval);
	isgE('detail_'+idval).style.display ='block';
}

function divOn(id){
	if(isgE(id)){isgE(id).style.display = 'block';}
}

function divOff(id){
	if(isgE(id)){isgE(id).style.display = 'none';}
}

/*highLightOff is for hiding highlight of product.Based on the widget type,style is applied*/
function highLightOff(id,wgttype,NoOfprod){
	switch(wgttype){
		case 'wgt5': 
			if(isgE(id)){
				var obj = isgE(id);
				for(var i = 1; i <= NoOfprod; i++ ){
					var objs = isgE('navImg'+i);
					objs.className = 'navImgHighlightOff';
				}
				obj.className ='navImgHighlightOn';
			}
			break;
		case 'wgt6': 
			if(isgE(id)){
				isgE(id).display = 'block';
				isgE(id).style.background = 'url(../img/DMwidget/bg_blue.gif)';
			}
		break;
	}
}

/*highLightOn is for highlighting selected product.Based on the widget type,style is applied*/
function hightLightOn(id,wgttype,NoOfprod,wgtId){
	switch (wgttype){
		case 'wgt3': 
			if(isgE(id)){
				for(i = 1; i <= NoOfprod ;i++){
					isgE('prod'+i+"_"+parseInt(wgtId)).style.border = '2px solid #fff';
				}
				isgE(id).style.border = '2px solid #BDDD3C';
			}
			break;
		case 'wgt5':
			if(isgE(id)){
				var obj = isgE(id);
				for(i = 1; i <= NoOfprod; i++ ){
					isgE('navImg'+i).className = 'navImgHighlightOff';
				}
				obj.className = 'navImgHighlightOn';
			}
			break;
		case 'wgt6': 
			if(isgE(id)){
				isgE(id).style.display = 'block';
				isgE(id).style.background = 'url(../img/DMwidget/bg_green.gif)';
			}
			break;
		case 'wgt7': 
			if(isgE(id)){
				for(i = 1;i <= NoOfprod; i++ ){
					isgE('prod'+i+"_"+parseInt(wgtId)).style.border = '1px solid #fff';
					isgE('prod'+i+"_"+parseInt(wgtId)).style.color = '#3CA1DD';
					isgE('prod'+i+"_"+parseInt(wgtId)).firstChild.style.color='#3CA1DD';
				}
				isgE(id).style.border = '1px solid #BDDD3C';
				isgE(id).style.color = '#666';
				isgE(id).firstChild.style.color='#666';
			}
			break;
	}
}