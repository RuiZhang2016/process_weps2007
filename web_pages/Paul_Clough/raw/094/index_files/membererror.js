function ProgramManager($a){this.oEM=$a;this.oAM=new AdSetManager();this.oDM=new DataSetManager();this.run=Pm_run;this.sysp=Pm_sysp;this.rules=Pm_rules;this.psets=Pm_psets;this.sp=Pm_sp;this.gp=Pm_gp;this.oscillate=Pm_oscillate;this.throttle=Pm_throttle;this.setCookie=Pm_setCookie;this.incrementCookie=Pm_incCookie;CmSetVer(1.0);this.sysp();};function Pm_run(){this.psets();this.rules();this.oAM.process(this.oEM);return this.oAM;};function Pm_sysp(){return;};function Pm_rules(){if(((this.gp("cookie.sgp.p")==1)||(this.gp("cookie.sgs.p")==1))){this.sp("filter","adult");};if((this.gp("cookie.partner")!='')){if((((((((((((((((lcase(this.gp("cookie.partner"))=="pplpc")||(lcase(this.gp("cookie.partner"))=="neo"))||(lcase(this.gp("cookie.partner"))=="neol"))||(lcase(this.gp("cookie.partner"))=="sp"))||(lcase(this.gp("cookie.partner"))=="lotus"))||(lcase(this.gp("cookie.partner"))=="usatw"))||(lcase(this.gp("cookie.partner"))=="compaq"))||(lcase(this.gp("cookie.partner"))=="rcn"))||(lcase(this.gp("cookie.partner"))=="usats"))||(lcase(this.gp("cookie.partner"))=="adult"))||(lcase(this.gp("cookie.partner"))=="dog"))||(lcase(this.gp("cookie.partner"))=="onlinemedia"))||(lcase(this.gp("cookie.partner"))=="ibm"))||(lcase(this.gp("cookie.partner"))=="ibmkb"))||(lcase(this.gp("cookie.partner"))=="ibmtp"))){this.sp("filter","gaming");this.sp("filter","isp");this.sp("filter","neoplanet");this.sp("filter","portals");this.sp("filter","telecom");this.sp("filter","adult");this.sp("filter","att");this.sp("filter","computer");}};if(true){this.sp("user.interval",3600000);this.sp("user.impressions",1);this.sp("user.factor",3);this.sp("sitezone","ss");};if(true){this.sp("filter","adult");this.sp("filter","sexualovertone");};if(true){this.oscillate(1040);this.throttle(1040,1058,240);this.throttle(1040,1057,240);this.throttle(1040,1078,240);};if(true){this.throttle(1040,1261,243);}};function Pm_psets(){var b1="%3E%3C/IFRAME%3E";var c2="%3Cscript language=%22JavaScript%22%3E";var c7="%3C/script%3E";var c8="width=";var c9="height=";this.oDM.add(unescape("%3C!-- catman: start 247 --%3E%0D%0A%3CIFRAME "+c8+"%22468%22 "+c9+"%2260%22 MARGIN"+c8+"%220%22 MARGIN"+c9+"%220%22 HSPACE=%220%22 VSPACE=%220%22 FRAMEBORDER=%220%22 SCROLLING=%22no%22 BORDERCOLOR=%22#000000%22 SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_sx.ads/lycostripod/error/468x60/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position1($position$)?($system.ddt$)%22%3E%0D%0A%3CA HREF=%22http://oascentral.lycos.com/RealMedia/ads/click_nx.ads/lycostripod/error/468x60/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position1($position$)?($system.ddt$)%22%3E%3CIMG SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_nx.ads/lycostripod/error/468x60/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position1($position$)?($system.ddt$)%22 BORDER=%220%22 "+c8+"%22468%22 "+c9+"%2260%22 HSPACE=%220%22 VSPACE=%220%22%3E%3C/a%3E%0D%0A%3C/iframe%3E%0D%0A%3C!-- catman: end 247 --%3E"),"1040","banner+messagingunit+leaderboard","1058","banner","240","default","0","BODY");this.oDM.add(unescape("%3C!-- catman: start 247 tag --%3E%0D%0A%3CSCRIPT LANGUAGE=%22JavaScript1.1%22 SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_jx.ads/lycostripod/memberpop/1x1/wp/ss/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position3($position$)?($system.ddt$)%22%3E"+c7+"%0D%0A"+c2+"%0D%0A%3C!--%0D%0Aif %5C(parseFloat%5C(navigator.appVersion%5C) == 0%5C) { document.write%5C(%27%3CIFRAME "+c8+"120 "+c9+"600 MARGIN"+c8+"0 MARGIN"+c9+"0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR=%22#000000%22 SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_sx.ads/lycostripod/memberpop/1x1/wp/ss/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position3($position$)?($system.ddt$)%22"+b1+"%27%5C);%0D%0A}%0D%0A// --%3E%0D%0A"+c7+"%0D%0A%3Cnoscript%3E%0D%0A%3CA HREF=%22http://oascentral.lycos.com/RealMedia/ads/click_nx.ads/lycostripod/memberpop/1x1/wp/ss/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position3($position$)?($system.ddt$)%22%3E%3CIMG SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_nx.ads/lycostripod/memberpop/1x1/wp/ss/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Position3($position$)?($system.ddt$)%22 BORDER=%220%22 "+c8+"%221%22 "+c9+"%221%22 HSPACE=%220%22 VSPACE=%220%22%3E%3C/a%3E%0D%0A%3C/noscript%3E%0D%0A%3C!-- catman: end 247 --%3E"),"1040","banner+messagingunit+leaderboard","1261","footer","243","default","0","FOOTER");this.oDM.add(unescape("%3C!-- catman: start 247 --%3E%0D%0A%3CIFRAME "+c8+"%22728%22 "+c9+"%2290%22 MARGIN"+c8+"%220%22 MARGIN"+c9+"%220%22 HSPACE=%220%22 VSPACE=%220%22 FRAMEBORDER=%220%22 SCROLLING=%22no%22 BORDERCOLOR=%22#000000%22 SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_sx.ads/lycostripod/error/728x90/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Top1($position$)?($system.ddt$)%22%3E%0D%0A%3CA HREF=%22http://oascentral.lycos.com/RealMedia/ads/click_nx.ads/lycostripod/error/728x90/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Top1($position$)?($system.ddt$)%22%3E%3CIMG SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_nx.ads/lycostripod/error/728x90/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@Top1($position$)?($system.ddt$)%22 BORDER=%220%22 "+c8+"%22728%22 "+c9+"%2290%22 HSPACE=%220%22 VSPACE=%220%22%3E%3C/a%3E%0D%0A%3C/iframe%3E%0D%0A%3C!-- catman: end 247 --%3E"),"1040","banner+messagingunit+leaderboard","1078","leaderboard","240","default","0","BODY");this.oDM.add(unescape("%3C!-- catman: start 247 --%3E%0D%0A%3CIFRAME "+c8+"%22300%22 "+c9+"%22250%22 MARGIN"+c8+"%220%22 MARGIN"+c9+"%220%22 HSPACE=%220%22 VSPACE=%220%22 FRAMEBORDER=%220%22 SCROLLING=%22no%22 BORDERCOLOR=%22#000000%22 SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_sx.ads/lycostripod/error/300x250/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@x15($position$)?($system.ddt$)%22%3E%0D%0A%3CA HREF=%22http://oascentral.lycos.com/RealMedia/ads/click_nx.ads/lycostripod/error/300x250/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@x15($position$)?($system.ddt$)%22%3E%3CIMG SRC=%22http://oascentral.lycos.com/RealMedia/ads/adstream_nx.ads/lycostripod/error/300x250/wp/$sitezone$/a(/child_$system.childsite$)(/prov_$provider$)(/1$system.ordinal$)@x15($position$)?($system.ddt$)%22 BORDER=%220%22 "+c8+"%22300%22 "+c9+"%22250%22 HSPACE=%220%22 VSPACE=%220%22%3E%3C/a%3E%0D%0A%3C/iframe%3E%0D%0A%3C!-- catman: end 247 --%3E"),"1040","banner+messagingunit+leaderboard","1057","messagingunit","240","default","0","BODY");};function Pm_sp($b,$c){this.oEM.setParam($b,$c);};function Pm_gp($d){return this.oEM.getStringParam($d,"");};function Pm_oscillate($e){this.oAM.setPs(this.oDM.getPsName($e),$e);};function Pm_throttle($e,$f,$g){var $h=this.oDM.getSlotName($e,$f);if($h=="")return;var $i=new Array("HEADER","BODY","FOOTER");for(var i=0;i<$i.length;i++){var $j=$i[i];var $k=this.oDM.getTemplate($e,$f,$g,this.gp("system.browser.name"),this.gp("system.browser.vers"),$j);if($k!=""){this.oAM.add($h,$j,$k,$e,$f,$g);}}};function Pm_setCookie(name,$l,$m,$n,$o,$p,$q){CmSetCookie(name,$l,$m,$n,$o,$p,$q);};function Pm_incCookie(name,$l,$m,$n,$o,$p,$q){var $r=(($l)?"cookie."+name+"."+$l:"cookie."+name);CmSetCookie(name,$l,""+(this.oEM.getIntParam($r,$m-1)+1),$n,$o,$p,$q);}

