// 1k DHTML API - standards version
d=document;l=d.layers;op=navigator.userAgent.indexOf('Opera')!=-1;px='px';
function isgE(e,f){if(l){f=(f)?f:self;var V=f.document.layers;if(V[e])return V[e];for(var W=0;W<V.length;)t=isgE(e,V[W++]);return t;}return d.getElementById(e);}
function isgEAll(e,f){if(l){f=(f)?f:self;var V=f.document.layers;if(V[e])return V[e];for(var W=0;W<V.length;)t=isgE(e,V[W++]);return t;}if(d.all)return d.all[e];return d.getElementById(e);}
function issE(e){e.visibility='show';e.style.visibility='visible';}
function ishE(e){e.visibility='hide';e.style.visibility='hidden';}
function isnE(e){e.style.display='none';e.style.visibility="hidden";}
function isbE(e){e.style.display='block';e.style.visibility='visible';}
function issZ(e,z){l?e.zIndex=z:e.style.zIndex=z;}
function issX(e,x){l?e.left=x:op?e.style.pixelLeft=x:e.style.left=x+px;}
function issY(e,y){l?e.top=y:op?e.style.pixelTop=y:e.style.top=y+px;}
function issW(e,w){l?e.clip.width=w:op?e.style.pixelWidth=w:e.style.width=w+px;}
function issH(e,h){l?e.clip.height=h:op?e.style.pixelHeight=h:e.style.height=h+px;}
function issC(e,t,r,b,x){l?(X=e.clip,X.top=t,X.right=r,X.bottom=b,X.left=x):e.style.clip='rect('+t+px+' '+r+px+' '+b+px+' '+x+px+')';}
function iswH(e,h){if(l){Y=e.document;Y.open();Y.write(h);Y.close();}if(e.innerHTML)e.innerHTML=h;}
function isgX(e){if(l)x=e.left;else if(op)x=e.style.pixelLeft;else x=e.style.left;return parseInt(x);}
function isgY(e){if(l)y=e.top;else if(op)y=e.style.pixelTop;else y=e.style.top;return parseInt(y)}