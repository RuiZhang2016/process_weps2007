
<!-- Begin
var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);
function getRef(id) {
if (isDOM) return document.getElementById(id);
if (isIE4) return document.all[id];
if (isNS4) return document.layers[id];
}
function getSty(id) {
return (isNS4 ? getRef(id) : getRef(id).style);
} 
// Hide timeout.
var popTimer = 0;
// Array showing highlighted menu items.
var litNow = new Array();
function popOver(menuNum, itemNum) {
clearTimeout(popTimer);
hideAllBut(menuNum);
litNow = getTree(menuNum, itemNum);
changeCol(litNow, true);
targetNum = menu[menuNum][itemNum].target;
if (targetNum > 0) {
thisX = parseInt(menu[menuNum][0].ref.left) + parseInt(menu[menuNum][itemNum].ref.left);
thisY = parseInt(menu[menuNum][0].ref.top) + parseInt(menu[menuNum][itemNum].ref.top);
with (menu[targetNum][0].ref) {
left = parseInt(thisX + menu[targetNum][0].x);
top = parseInt(thisY + menu[targetNum][0].y);
visibility = 'visible';
      }
   }
}
function popOut(menuNum, itemNum) {
if ((menuNum == 0) && !menu[menuNum][itemNum].target)
hideAllBut(0)
else
popTimer = setTimeout('hideAllBut(0)', 500);
}
function getTree(menuNum, itemNum) {

// Array index is the menu number. The contents are null (if that menu is not a parent)
// or the item number in that menu that is an ancestor (to light it up).
itemArray = new Array(menu.length);

while(1) {
itemArray[menuNum] = itemNum;
// If we've reached the top of the hierarchy, return.
if (menuNum == 0) return itemArray;
itemNum = menu[menuNum][0].parentItem;
menuNum = menu[menuNum][0].parentMenu;
   }
}

// Pass an array and a boolean to specify colour change, true = over colour.
function changeCol(changeArray, isOver) {
for (menuCount = 0; menuCount < changeArray.length; menuCount++) {
if (changeArray[menuCount]) {
newCol = isOver ? menu[menuCount][0].overCol : menu[menuCount][0].backCol;
// Change the colours of the div/layer background.
with (menu[menuCount][changeArray[menuCount]].ref) {
if (isNS4) bgColor = newCol;
else backgroundColor = newCol;
         }
      }
   }
}
function hideAllBut(menuNum) {
var keepMenus = getTree(menuNum, 1);
for (count = 0; count < menu.length; count++)
if (!keepMenus[count])
menu[count][0].ref.visibility = 'hidden';
changeCol(litNow, false);
}

// *** MENU CONSTRUCTION FUNCTIONS ***

function Menu(isVert, popInd, x, y, width, overCol, backCol, borderClass, textClass) {
// True or false - a vertical menu?
this.isVert = isVert;
// The popout indicator used (if any) for this menu.
this.popInd = popInd
// Position and size settings.
this.x = x;
this.y = y;
this.width = width;
// Colours of menu and items.
this.overCol = overCol;
this.backCol = backCol;
// The stylesheet class used for item borders and the text within items.
this.borderClass = borderClass;
this.textClass = textClass;
// Parent menu and item numbers, indexed later.
this.parentMenu = null;
this.parentItem = null;
// Reference to the object's style properties (set later).
this.ref = null;

}

function Item(text, href, frame, length, spacing, target) {
this.text = text;
this.href = href;
this.frame = frame;
this.length = length;
this.spacing = spacing;
this.target = target;
// Reference to the object's style properties (set later).
this.ref = null;
}

function writeMenus() {
if (!isDOM && !isIE4 && !isNS4) return;

for (currMenu = 0; currMenu < menu.length; currMenu++) with (menu[currMenu][0]) {
// Variable for holding HTML for items and positions of next item.
var str = '', itemX = 0, itemY = 0;

// Also use properties of each item nested in the other with() for construction.
for (currItem = 1; currItem < menu[currMenu].length; currItem++) with (menu[currMenu][currItem]) {
var itemID = 'menu' + currMenu + 'item' + currItem;

// The width and height of the menu item - dependent on orientation!
var w = (isVert ? width : length);
var h = (isVert ? length : width);

// Create a div or layer text string with appropriate styles/properties.

if (isDOM || isIE4) {
str += '<div id="' + itemID + '" style="position: absolute; left: ' + itemX + '; top: ' + itemY + '; width: ' + w + '; height: ' + h + '; visibility: inherit; ';
if (backCol) str += 'background: ' + backCol + '; ';
str += '" ';
}
if (isNS4) {
str += '<layer id="' + itemID + '" left="' + itemX + '" top="' + itemY + '" width="' +  w + '" height="' + h + '" visibility="inherit" ';
if (backCol) str += 'bgcolor="' + backCol + '" ';
}
if (borderClass) str += 'class="' + borderClass + '" ';

// Add mouseover handlers and finish div/layer.
str += 'onMouseOver="popOver(' + currMenu + ',' + currItem + ')" onMouseOut="popOut(' + currMenu + ',' + currItem + ')">';

// Add contents of item (default: table with link inside).

str += '<table width="' + (w - 8) + '" border="0" cellspacing="0" cellpadding="' + (!isNS4 && borderClass ? 3 : 0) + '"><tr><td align="left" height="' + (h - 7) + '">' + '<a class="' + textClass + '" href="' + href + '"' + (frame ? ' target="' + frame + '">' : '>') + text + '</a></td>';
if (target > 0) {

// Set target's parents to this menu item.
menu[target][0].parentMenu = currMenu;
menu[target][0].parentItem = currItem;

// Add a popout indicator.
if (popInd) str += '<td class="' + textClass + '" align="right">' + popInd + '</td>';
}
str += '</tr></table>' + (isNS4 ? '</layer>' : '</div>');
if (isVert) itemY += length + spacing;
else itemX += length + spacing;
}
if (isDOM) {
var newDiv = document.createElement('div');
document.getElementsByTagName('body').item(0).appendChild(newDiv);
newDiv.innerHTML = str;
ref = newDiv.style;
ref.position = 'absolute';
ref.visibility = 'hidden';
}

// Insert a div tag to the end of the BODY with menu HTML in place for IE4.
if (isIE4) {
document.body.insertAdjacentHTML('beforeEnd', '<div id="menu' + currMenu + 'div" ' + 'style="position: absolute; visibility: hidden">' + str + '</div>');
ref = getSty('menu' + currMenu + 'div');
}

// In NS4, create a reference to a new layer and write the items to it.
if (isNS4) {
ref = new Layer(0);
ref.document.write(str);
ref.document.close();
}

for (currItem = 1; currItem < menu[currMenu].length; currItem++) {
itemName = 'menu' + currMenu + 'item' + currItem;
if (isDOM || isIE4) menu[currMenu][currItem].ref = getSty(itemName);
if (isNS4) menu[currMenu][currItem].ref = ref.document[itemName];
   }
}
with(menu[0][0]) {
ref.left = x;
ref.top = y;
ref.visibility = 'visible';
   }
}


var menu = new Array();

// Default colours passed to most menu constructors (just passed to functions, not
// a global variable - makes things easier to change later in bulk).
var defOver = '#000000', defBack = '#005D99';

// Default 'length' of menu items - item height if menu is vertical, width if horizontal.
var defLength = 22;

// Menu 0 is the special, 'root' menu from which everything else arises.
menu[0] = new Array();

menu[0][0] = new Menu(false, '', 5, 75, 17, '#000000', '', '', 'itemText');

menu[0][1] = new Item('  Home', 'index.htm', '', 50, 20, 0);
menu[0][2] = new Item('  About Us', 'jk_aboutus.htm', '', 80, 20, 2);
menu[0][3] = new Item('  Services', 'jk_services.htm', '', 70, 20, 0);
menu[0][4] = new Item('  Policies', 'jk_policies.htm', '', 65, 20, 4);
menu[0][5] = new Item('  Contact Us', 'jk_contactus.htm', '', 90, 20, 5);
menu[0][6] = new Item('  Pipeline Consultants', 'jk_pcl.htm', '', 150, 20, 6);
menu[0][7] = new Item('  Links', 'jk_links.htm', '', 50, 20, 0);
menu[0][8] = new Item('  Vacancies', 'jk_vacancies.htm', '', 80, 20, 0);


// Home menu.
menu[1] = new Array();
menu[1][0] = new Menu(true, '>', 0, 22, 180, defOver, defBack, 'itemBorder', 'itemText');


// About Us menu.
menu[2] = new Array();
menu[2][0] = new Menu(true, '', 0, 22, 255, defOver, defBack, 'itemBorder', 'itemText');
menu[2][1] = new Item('Organogram', 'jk_organogram.htm', '', defLength, 0, 0);
menu[2][2] = new Item('Clients', 'jk_clients.htm', '', defLength, 0, 0);
menu[2][3] = new Item('Financial Growth', 'jk_finance.htm', '', defLength, 0, 0);
menu[2][4] = new Item('Trade & Professional Associations', 'jk_associations.htm', '', defLength, 0, 0);
menu[2][5] = new Item('Training', 'jk_training.htm', '', defLength, 0, 0);

// Services menu
menu[3] = new Array();
menu[3][0] = new Menu(true, '', 0, 22, 180, defOver, defBack, 'itemBorder', 'itemText');

// Policies menu
menu[4] = new Array();
menu[4][0] = new Menu(true, '', 0, 22, 150, defOver, defBack, 'itemBorder', 'itemText');
menu[4][1] = new Item('Health & Safety', 'jk_hs.htm', '', defLength, 0, 0);
menu[4][2] = new Item('Environmental', 'jk_environmental.htm', '', defLength, 0, 0);
menu[4][3] = new Item('Quality', 'jk_quality.htm', '', defLength, 0, 0);

// Contact Us menu
menu[5] = new Array();
menu[5][0] = new Menu(true, '', 0, 22, 180, defOver, defBack, 'itemBorder', 'itemText');
menu[5][1] = new Item('Locations & Contacts', 'jk_locations.htm', '', defLength, 0, 0);
menu[5][2] = new Item('Publications', 'jk_publications.htm', '', defLength, 0, 0);

// Policies menu
menu[6] = new Array();
menu[6][0] = new Menu(true, '', 0, 22, 150, defOver, defBack, 'itemBorder', 'itemText');
menu[6][1] = new Item('About Us', 'pcl_about.htm', '', defLength, 0, 0);
menu[6][2] = new Item('Services', 'pcl_services.htm', '', defLength, 0, 0);
menu[6][3] = new Item('Contact Us', 'pcl_contact.htm', '', defLength, 0, 0);


// Links menu
menu[7] = new Array();
menu[7][0] = new Menu(true, '', 0, 22, 180, defOver, defBack, 'itemBorder', 'itemText');

// Vacancies menu
menu[8] = new Array();
menu[8][0] = new Menu(true, '', 0, 22, 180, defOver, defBack, 'itemBorder', 'itemText');


var popOldWidth = window.innerWidth;
nsResizeHandler = new Function('if (popOldWidth != window.innerWidth) location.reload()');


if (isNS4) document.captureEvents(Event.CLICK);
document.onclick = clickHandle;

function clickHandle(evt)
{
 if (isNS4) document.routeEvent(evt);
 hideAllBut(0);
}


// This is just the moving command for the example.

function moveRoot()
{
 with(menu[0][0].ref) left = ((parseInt(left) < 100) ? 100 : 5);
}
//  End -->
