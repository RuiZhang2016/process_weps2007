<!--
function MM_swapImgRestore() { //v2.0
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_preloadImages() { //v2.0
  if (document.images) {
    var imgFiles = MM_preloadImages.arguments;
    if (document.preloadArray==null) document.preloadArray = new Array();
    var i = document.preloadArray.length;
    with (document) for (var j=0; j<imgFiles.length; j++) if (imgFiles[j].charAt(0)!="#"){
      preloadArray[i] = new Image;
      preloadArray[i++].src = imgFiles[j];
  } }
}

function MM_swapImage() { //v2.0
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}

function form_popup(quiz,width,height){
  properties = 'width=' + width +
               ',height=' + height +
               'scrollbars=no,resizeable';
  window.open('','popup',properties);
  quiz.target = "popup";
  quiz.submit();
  return true;
}

function popup(url,width,height){
  properties = 'width=' + width +
               ',height=' + height +
               'scrollbars=no,resizeable';
  window.open(url,'popup',properties);
  return true;
}

function popup_scrolling(url,width,height){
  properties = 'width=' + width +
               ',height=' + height +
               ',scrollbars=yes,resizable=1,status=1';
  window.open(url,'popup',properties);
  return true;
}

function popup_flash(url,width,height){
  properties = 'width=' + width +
               ',height=' + height +
               ',scrollbars=yes,resizeable';
  window.open(url,'popup',properties);
}

function close_redirect(url){
  opener.location = url;
  self.close();
}

function close_popupredirect(url,width,height){
  popup_scrolling(url,width,height);
  self.close();
}

function redirect(url){
  if(url != ""){
     document.location = url;
  }
}

var lt = String.fromCharCode(60);
var gt = String.fromCharCode(62);
var dquot = String.fromCharCode(34);
//-->
