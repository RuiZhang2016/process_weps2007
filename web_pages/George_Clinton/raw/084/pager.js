// this is copied out of "menus.js"
// should probably have a common file somewhere ...
/* rporras 022606 This function already exists in menus.js. Given that both are included in
base/Template.xsl  then it is only neccesary to have it in one of the files
function getDiv(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	}

	if (document.all) {
		return document.all[id];
	}

	if (document.layers) {
		return document.all[id];
	}

	return null;
}
*/



function toggleFeatured(id, other_id, all_url) {
	var btn = getDiv(id);
	if (btn.className && btn.className == "current") {
		return;
	}

	// toggling for list view
	if (btn.my_view == null) {
		btn.my_view = getDiv(btn.id + "_view");
	}
	if (btn.other_view == null) {
		btn.other_view = getDiv(other_id + "_view");
	}

	// toggling for list pager
	if (btn.my_pager == null) {
		btn.my_pager = getDiv(btn.id + "_pager");
	}
	if (btn.other_pager == null) {
		btn.other_pager = getDiv(other_id + "_pager");
	}

	// toggling for all button (between new releases and just added)
	if (btn.my_url == null) {
		btn.my_url = getDiv(btn.id + "_link");
	}
	if (btn.other_url == null) {
		btn.other_url = getDiv(other_id + "_link");
	}

	// toggling for all button (between editor's picks and the guest list)
	if (btn.my_all_url == null) {
		btn.my_all_url = getDiv(btn.id + "_all_link");
	}
	if (btn.other_all_url == null) {
		btn.other_all_url = getDiv(other_id + "_all_link");
	}

	if (btn.other_btn == null) {
		btn.other_btn = getDiv(other_id);
	}

	btn.other_view.style.display = "none";
	btn.other_pager.style.display = "none";
	btn.other_url.style.display = "none";
	if (btn.other_all_url != null) btn.other_all_url.style.display = "none";
	btn.other_btn.className = "";
	btn.my_view.style.display = "block";
	btn.my_pager.style.display = "block";
	btn.my_url.style.display = "block";
	if (btn.my_all_url != null ) btn.my_all_url.style.display = "block";
	btn.className = "current";

	toggleFeaturedUrl(id, all_url);
	// called in an href tag, so no return;
	//return false;
}


function nextPage(element) {
	return adjustPage(element, 1);
}
function prevPage(element) {
	return adjustPage(element, -1);
}

function adjustPage(element, offset) {
	var id = getMyId(element);
	var menu = getDiv(id);
	if (menu.current_page != null) {
		var pg = menu.current_page + offset;
		setPage(menu, pg);
		setPagerDisplay(element.parentNode, menu.current_page, menu.pages.length);
	}
	return true;
}




function getMyId(btn) {
	return btn.parentNode.id.replace(/_pager$/, "_list");
}

function initPager(id, page_size, page) {
	var menu = initList(id, page_size, page);
	initButtons(id, menu);
}

function initButtons(id, menu) {
	var pager =  getDiv(id + "_pager");

	if (pager == null || pager.childNodes == null) {
		// error conditions
		alert("pager: " + id + " or it child list was null");
		return;
	}
	if (menu.pages.length == 1) {
		pager.style.display = "none";
	}

	setPagerDisplay(pager, menu.current_page, menu.pages.length);
}

function setPagerDisplay(div, current_page, pages) {
	var is_first = current_page == 0;
	var is_last = current_page == (pages - 1);
	// there should be any comment nodes in the pages
	// but just in case. we do this the hard way
	for (var i = 0; i < div.childNodes.length; i++) {
		var node = div.childNodes[i];
		if (node.nodeName == "SPAN" || node.nodeName == "span") {
			if (node.className == "pg") {
				// if current_page is null (because list is empty), set to -1
				if(current_page == null) current_page = -1;
				node.innerHTML = (current_page + 1) + "&#160;/&#160;" + pages;
			}
		}

		if (node.nodeName == "BUTTON" || node.nodeName == "button") {
			if (node.className.match(/lf/)) {
				if (is_first) {
					node.className = "lf_inactive";
				} else {
					node.className = "lf";
				}
			}
			if (node.className.match(/rt/)) {
				if (is_last) {
					node.className = "rt_inactive";
				} else {
					node.className = "rt";
				}
			}
		}
	}
}

function initList(id, page_size, page) {
	var menu = getDiv(id + "_list");

	if (menu == null || menu.childNodes == null) {
		// error conditions
		alert("menu: " + id + " was null or not a list");
		return null;
	}
	if (menu.current_page) {
		//alert("on current page");
		return menu;
	}

	// break the menu up in to pages
	var pages = new Array(); // the pages
	var current_page = 0;
	current_page = new Array(); // the first page
	for (var i = 0; i < menu.childNodes.length; i++) {
		// start a new page?
		if (current_page.length >= page_size) {
			// append
			pages[pages.length] = current_page;
			current_page = new Array();
		}
		//alert(menu.nodeName);
		//alert(menu.childNodes[i].nodeName);
		// filter out the comment nodes
		//alert(menu.childNodes[i].nodeName);
		if (menu.childNodes[i].nodeName == "LI" || menu.childNodes[i].nodeName == "li") {
			// as long as we're here,
			// hide all tghe nodes and we'll
			// display the current page later
			//alert(menu.childNodes[i].nodeName);
			menu.childNodes[i].className = "hide";

			//append
			current_page[current_page.length] = menu.childNodes[i];
		}
		// filter out the comment nodes
		//if (menu.childNodes[i].nodeName == "TR" || menu.childNodes[i].nodeName == "tr") {
			// as long as we're here,
			// hide all tghe nodes and we'll
			// display the current page later
			//menu.childNodes[i].className = "hide";

			//append
			//current_page[current_page.length] = menu.childNodes[i];
		//}
	}

	// hack for a weird bug
	// appearing in firefox
	if (current_page.length > 0) {
		pages[pages.length] = current_page;
	}

	menu.pages = pages;

	var initial_page = page == null ? 0 : page;
	if (initial_page < 0 || initial_page >= menu.length) {
		alert("bad value " + initial_page + " for initial_page");
		return menu;
	}

	setPage(menu, initial_page);
	menu.style.visibility = "visible";
	return menu;
}
function setPage(menu, page_number) {
	if (page_number < 0 || page_number >= menu.pages.length) {
		return;
	}

	if (menu.current_page != null) {
		hidePage(menu, menu.current_page);
	}

	showPage(menu, page_number);
	menu.current_page = page_number;
}

function showPage(menu, page_number) {
	//alert("showPage: " + page_number);
	var page = menu.pages[page_number];

	for (var i = 0; i < page.length; i++) {
		page[i].className = "";
	}
}

function hidePage(menu, page_number) {
	//alert("hidePage: " + page_number);
	var page = menu.pages[page_number];

	for (var i = 0; i < page.length; i++) {
		page[i].className = "hide";
	}
}

function hoverPrev(evt) {
	setStatusBar('previous page', evt.srcElement);
	return true;
}


function hoverNext(evt) {
	setStatusBar('next page', evt.srcElement);
	return true;
}


