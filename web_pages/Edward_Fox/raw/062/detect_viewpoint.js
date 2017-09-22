VwptVETInstalled=false;
VwptAp=(navigator.appName);
VwptBv=(parseInt(parseInt(navigator.appVersion.substring(0,1))));
VwptIsIE=((VwptAp=="Microsoft Internet Explorer")&&(VwptBv>=4));
VwptIsNN=((VwptAp.indexOf("Netscape")!=-1)&&(VwptBv==4));
VwptAgt=(navigator.userAgent.toLowerCase());
VwptIsMac=(VwptAgt.indexOf("mac")!=-1);

if((VwptIsIE)&&(!VwptIsMac))document.write(unescape("%3cSCRIPT LANGUAGE=%22VBScript%22%3e Dim VwptP_o:Function VwptAXchk(n):VwptAXchk=1:On Error Resume Next:Set VwptP_o=CreateObject(n):if IsObject(VwptP_o) then:VwptAXchk=0:end if:End Function:%3c%2fSCRIPT%3e"));

function VwptNPChk(nam){
	if(navigator.plugins)
		for(var i=0;i<navigator.plugins.length;i++){
			if(navigator.plugins[i].name.toLowerCase()==nam.toLowerCase()){
				for(var j=0;j<navigator.plugins[i].length;j++){
					var m=navigator.plugins[i][j]
					if(m.enabledPlugin&&(m.type=="application/x-mtx")){
						return true
					}
				}
				return false
			}
		}
	return false
}

function VwptIEChk(){
	var x="AxMetaStream.MetaStreamCtl"
	if(VwptAXChk(x+"Secondary")==0)return true
	if(VwptAXChk(x)==0) return true
	return false
}

function VwptVETInst(){
	var i=true;
	m="MetaStream"+(VwptIsMac?"3":" 3 Plugin")
	if(VwptIsIE&&(!(VwptIsMac)))i=VwptIEChk()
	else i=VwptNPChk(m)
	return i
}

VwptVETInstalled=VwptVETInst();