 /*
Derived from a script by Alejandro Gervasio.
Modified to work in FireFox by Stefan Mischook for Killersites.com

How it works: just apply the CSS class of 'column' to your pages' main columns.
Edited by:  schang
Modified:  070606
Note:  Customized to compare between two columns only
*/
matchColumns=function() {
  var divs,contDivs,maxHeight,divHeight,d;
  // get all <div> elements in the document
  divs=document.getElementsByTagName('div');
  contDivs=[];
  // initialize maximum height value
  maxHeight=0;
  sideBarHeight=0;
  mainBodyHeight=0;
  firstTime=0;
  // iterate over all <div> elements in the document
  for(var i=0;i<divs.length;i++) {
    // make collection with <div> elements with class attribute 'container'
    if(/\bcolumn\b/.test(divs[i].className)) {
      d=divs[i];
      contDivs[contDivs.length]=d;
      // determine height for <div> element
      if(d.offsetHeight) divHeight=d.offsetHeight;
      else if(d.style.pixelHeight) divHeight=d.style.pixelHeight;
      // calculate maximum height 
      maxHeight=Math.max(maxHeight,divHeight); 
      // set sideBarHeight
      if(firstTime==0) {
        sideBarHeight=divHeight;
        firstTime=1;
      }
      // set mainBodyHeight
      else mainBodyHeight=divHeight;
    }
  }
  // assign maximum height value to all of container <div> elements 
  //rporras 070806 Add a validation so that the function does not throw errors when the page does not have the required elements
  if(contDivs.length > 1){
    // for C2_01_Home, the only page on the site without a breadcrumb div, calculate max height differently
    if (!getDiv("panel_655X25")) {
      for(var i=0;i<contDivs.length;i++) contDivs[i].style.height=maxHeight + "px";
    }
    // for all other pages
    else {
      // side bar height is greater than main body height
      // subtract 29 pixels to account for breadcrumbing, which is outside of the main content block (SC, 070606)
      if (sideBarHeight > mainBodyHeight) {
        contDivs[1].style.height = (sideBarHeight - 29) + "px";
        contDivs[0].style.height = sideBarHeight + "px";
      }
      // main body height is greater than or equal to side bar height
      // add 29 pixels padding to account for breadcrumbing, which is outside of the main content block (SC, 070606)
      else {
        contDivs[0].style.height = (mainBodyHeight + 29) + "px";
        contDivs[1].style.height = mainBodyHeight + "px";
      }
    }
  }
}