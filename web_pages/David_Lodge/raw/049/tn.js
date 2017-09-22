/*********************************************************************
 * This file contains all the javascript functions used
 * for the ET Telegraph Network dropdown list.
 *
 * Updates
 *
 * 13/05/2002   J Cutbush   CR938 - Added menuId to Crossword Society
 *                          link to allow pageclass to be generated.
 *
 * 29/05/2002   L Coghlan   CR971 - Add 'Mobile Services' to the dropdown
 *                          menu list
 *  
 * 06/08/2002   S Culverwell CR1146 ReaderOffers channel
 *
 * 03/02/2003   S Culverwell CR1479 Added Dating
 *
 * 06/02/2003   S Culverwell CR1469 Added Dating
 *
 * 03/03/2003   S Culverwell CR1539 Removed all references to outdoors and family
 *
 * 07/05/2003   S Culverwell CR1672 Add Pressoffive and Advertising, remove Shopping
 *
 * 29/05/2003   S Culverwell CR1793 Business Change to drop down, becomes city news
 *
 * 26/06/2003   S Culverwell CR1875 Removed unnecesary code
 *
 * 10/07/2003   S Culverwell CR1823 Fix to losing toolbar on telegraph network popup
 *
 * 11/07/2003   S Culverwell CR1862 Add tracking to all links in the drop down menu site wide
 *
 * 12/08/2003   S Flint      CR1862  Amended code for tracking links in drop down menu 
 *
 * 27/08/2003   R Spence     CR1977  changed business file link
 * 13/09/2003   R Spence     CR2756  fixed Personal finance grid
 * 17/02/2005   R Spence     CR3033  changed dating link
 * 18/05/2005	S Flint	CR2821	Replaced sessionid with jsessionid
 *	16/06/2005	Sue Flint	CR17415	Changed to reflect drop-down to other Telegraph
 *							sites which is causing extra session in some instances!
 *********************************************************************/
function newSite(sFile) {
	var jId = sFile.indexOf(";jsessionid=");
  var newUrl = "";
  var sId = "";
  var noRedirect = false;
  var trackingParameter = "?from=dd";
  
  // if cookies are not used, store the session id
  if (jId != -1) {
  	sId = sFile.substring(jId);
  }

  var selObject = window.document.fSite.selSite
  switch(selObject.options[selObject.selectedIndex].value) {
    case "1":
      newUrl = "/core/log.jhtml?page=/portal/index.jhtml" + sId + trackingParameter;
      break
    case "2":
      newUrl = "/core/log.jhtml?page=/news/index.jhtml" + sId + trackingParameter;
      break
    case "5":
      newUrl = "/core/log.jhtml?page=/sport/index.jhtml" + sId + trackingParameter;
      break
    case "6":
      newUrl = "/core/log.jhtml?page=/travel/index.jhtml" + sId + trackingParameter;
      break
    case "7":
      newUrl = "/core/log.jhtml?page=/money/index.jhtml" + sId + trackingParameter;
      break
    case "8":
      newUrl = "/core/log.jhtml?page=/motoring/index.jhtml" + sId + trackingParameter;
      break
    case "9":
      newUrl = "/core/exit.jhtml?exit=http://jobs.telegraph.co.uk" + sId + trackingParameter;
      break
    case "10":
      newUrl = "/core/exit.jhtml?exit=http://www.businessfile-online.co.uk" + sId + trackingParameter;
      break
    case "11":
      newUrl = "/core/log.jhtml?page=/property/index.jhtml" + sId + trackingParameter;
      break
    case "12":
      newUrl = "/core/log.jhtml?page=/pressoffice/index.jhtml" + sId +trackingParameter;
      break
    case "13":
      newUrl = "/core/log.jhtml?page=/fashion/index.jhtml" + sId +trackingParameter;
      break
    case "14":
      newUrl = "/core/log.jhtml?page=/gardening/index.jhtml" + sId +trackingParameter;
      break
    case "15":
      newUrl = "/core/log.jhtml?page=/health/index.jhtml" + sId +trackingParameter;
      break
    case "16":
      newUrl = "/core/log.jhtml?page=/wine/index.jhtml" + sId +trackingParameter;
      break
    case "17":
      newUrl = "/core/log.jhtml?page=/weather/index.jhtml" + sId +trackingParameter;
      break
    case "18":
      newUrl = "/core/log.jhtml?page=/opinion/index.jhtml" + sId +trackingParameter;
      break
    case "21":
      newUrl = "/core/log.jhtml?page=/arts/index.jhtml" + sId +trackingParameter;
      break
    case "22":
      newUrl = "/core/log.jhtml?page=/connected/main.jhtml?menuId=1539&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&targetRule=10&from=dd";
      break
    case "23":
      newUrl = "/core/log.jhtml?page=/arts/main.jhtml?menuId=570&menuItemId=-1&view=SUMMARY&grid=P16&targetRule=1&from=dd";
      break
    case "24":
      newUrl = "/core/log.jhtml?page=/arts/main.jhtml?menuId=562&menuItemId=-1&view=DISPLAYCONTENT&grid=P8&targetRule=5&from=dd";
      break
    case "25":
      newUrl = "/core/log.jhtml?page=/education/index.jhtml"+ sId  +trackingParameter;
      break
    case "26":
      newUrl = "/core/log.jhtml?page=/juiced/index.jhtml"+ sId  +trackingParameter;
      break
    case "27":
      newUrl = "/core/log.jhtml?page=/connected/main.jhtml?menuId=1536&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&targetRule=10&from=dd";
      break
    case "28":
      newUrl = "/core/log.jhtml?page=/opinion/index.jhtml"+ sId  +trackingParameter;
      break
    case "29":
      newUrl = "/core/log.jhtml?page=/news/main.jhtml?menuId=558&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&siteId=5&targetRule=10&from=dd";
      break
    case "30":
      newUrl = "/core/log.jhtml?page=/portal/index.jhtml"+ sId  +trackingParameter;
      break     
    case "31":
      newUrl = "/core/log.jhtml?page=/arts/main.jhtml?menuId=561&menuItemId=-1&view=CROSSWORD&grid=P20&from=dd";
      break
    case "32":
      newUrl = "/core/log.jhtml?page=/core/Matt/pMattTemplate.jhtml?pTitle=Matt.telegraph";
      newWin = window.open(newUrl,'Matt','scrollbars,resizable,width=404,height=600');
      newWin.moveTo(50,50)
      noRedirect = true
      break
    case "33":
      newUrl = "/core/log.jhtml?page=/money/Alex/pAlexTemplate.jhtml?pTitle=Alex.telegraph";
      newWin = window.open(newUrl,'Alex','scrollbars,resizable,width=820,height=505');
      newWin.moveTo(50,50)
      noRedirect = true
      break
    case "34":
      newUrl = "/core/log.jhtml?page=/global/index.jhtml"+ sId  +trackingParameter;
      break     
    case "35":
      newUrl = "/core/exit.jhtml?exit=http://www.internetforschools.co.uk"+ sId  + trackingParameter;
      break     
    case "36":
      newUrl = "/core/log.jhtml?page=/connected/index.jhtml" + sId  +trackingParameter;
      break     
    case "37":
      newUrl = "/core/log.jhtml?page=/promotions/index.jhtml" + sId +trackingParameter;
      break     
    case "38":
      newUrl = "/core/log.jhtml?page=/money/main.jhtml?menuId=244&menuItemId=-1&view=SUMMARY&grid=M1&targetRule=2&from=dd";
      break     
    case "39":
      newUrl = "/core/log.jhtml?page=/news/main.jhtml?menuId=1570&menuItemId=-1&view=SUMMARY&grid=P9&from=dd";
      break     
    case "40":
      newUrl = "/core/exit.jhtml?exit=http://www.tffo.co.uk" +trackingParameter;
      break
    case "41":
      newUrl = "/core/log.jhtml?page=/money/main.jhtml?menuId=242&menuItemId=-1&view=SUMMARY&grid=M1&targetRule=2&from=dd";
      break 
    case "42":
      newUrl = "/core/exit.jhtml?exit=http://www.mobile.telegraph.co.uk" + sId +trackingParameter;
      break 
    case "43":
      newUrl = "/core/log.jhtml?page=/readeroffers/index.jhtml" + sId +trackingParameter;
      break 
    case "44":
      newUrl = "/core/exit.jhtml?exit=http://dating.telegraph.co.uk" + sId +trackingParameter;
      break 
    case "45":
      newUrl = "/core/log.jhtml?page=/pressoffice/main.jhtml?menuId=2317&menuItemId=-1&view=DISPLAYCONTENT&grid=P8&targetRule=0&from=dd";
      break  
    case "46":
      newUrl = "/core/exit.jhtml?exit=http://www.classified.telegraph.co.uk" + sId +trackingParameter;
      break        
    default:
      noRedirect = true
    }

  if (noRedirect == false) {
    newPWin = window.open(newUrl,'nPWin','directories,menubar,status,scrollbars,resizable,width=800,height=600,toolbar,location');
    newPWin.moveTo(50,50)
    newPWin.focus();
  }
  window.document.fSite.selSite.selectedIndex = 0;
}