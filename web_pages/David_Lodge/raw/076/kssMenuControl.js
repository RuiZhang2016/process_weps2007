var menu_objects=new Array();
var menu_active_bg='#66ff66';

function get_menu(jsname) {
	var m = new MenuClass(jsname);
	menu_objects[menu_objects.length] = m;
	return m;
}
function deactivate_menus() {
	for (var x=0; x < menu_objects.length; x++) {
		if(menu_objects[x].is_showing) menu_objects[x].set_inactive();
	}
}
function MenuClass(jsname) {
	this.name = jsname;
	this.items = new Array(0);
	this.is_active = false;
	this.is_timing = false;
	this.is_showing = false;
	
	this.add_item = function (id, popmenu_id, parent_item) {
		var m = new PopperItemClass(this, id, popmenu_id, parent_item);
		this.items[this.items.length] = m;
		return m;
	}
	this.all_off = function () {
		for (var x=0; x < this.items.length; x++) {
			this.items[x].is_on=false;
		}
	}
	this.all_pop_checked_off = function () {
		for (var x=0; x < this.items.length; x++) {
			this.items[x].pop_checked=false;
		}
	}
	this.display_now = function () {
		this.is_showing = false;
		for (var x=0; x < this.items.length; x++) {
			if (this.items[x].display() > 0) this.is_showing=true;
		}
		this.is_timing = false;
		if(! this.is_showing) setTimeout(this.name + '.set_inactive(true)', 800);
	}
	this.display = function () {
		if(this.is_timing) return;
		this.is_timing = true;
		if(! this.is_showing) this.display_now();
		else setTimeout(this.name + '.display_now()', 600) ;
	}
	this.set_active = function (item) {
		//called by item when clicked
		deactivate_menus();
		this.all_off();
		this.is_active = item.autoclose;
		item.set_on(true);
		this.display_now();
	}
	this.set_inactive = function (conditional) {
		//called by item when clicked off
		if(conditional==true) {
			if(this.is_timing) return;
			if(this.is_showing) return;
			this.is_active = false;
			this.all_pop_checked_off();
		}
		else {
			this.is_active = false;
			this.all_off();
			this.display_now();
		}
	}
	this.set_on = function (item, is_on) {
		//called by item on hover
		//turn off all while saving the active one
		if(this.is_active) {
			item.set_on(is_on);
			this.display();
		}
		else {
			item.swap(is_on);
		}
	}
}



function PopperItemClass(controller, id, popmenu_id, parent_item) {
	this.controller = controller; 
	this.id = id;
	this.div = document.getElementById(id);
	this.pop_id = popmenu_id;
	this.parent_itemObj = parent_item;
	this.is_on = false; 
	this.autoclose = true; 
	this.pop_down = false; 
	this.pop_checked = false;
	this.offset_top=0;
	this.offset_left=0;
	this.pop_obj = document.getElementById(popmenu_id);
	if(this.pop_obj) document.getElementById(id + '_a').href="javascript:void(0)";
	this.swap_bg_ids = new Array();
	this.swap_bg_on_vals = new Array();
	this.swap_bg_off_vals = new Array();
	this.swap_img_ids = new Array();
	this.swap_img_on_vals = new Array();
	this.swap_img_off_vals = new Array();
			
	this.display = function () {
		if(this.is_on) {
			if(this.pop_obj) this.pop_obj.style.display='inline';
		}
		else {
			if(this.pop_obj) this.pop_obj.style.display='none';
		}
		this.swap(this.is_on);
		return this.is_on;
	}
	this.swap = function (is_on) {
		var vals;
		is_on = (is_on | this.is_on);
		if(this.swap_img_ids.length > 0) {
			if(is_on) vals=this.swap_img_on_vals;
			else vals=this.swap_img_off_vals;
			if(this.swap_img_ids[0].src==vals[x]) return;
			for (var x=0; x < this.swap_img_ids.length; x++) {
				this.swap_img_ids[x].src=vals[x]; 
			}
		}
		else if(this.swap_bg_ids.length > 0) {
			if(is_on) vals=this.swap_bg_on_vals;
			else vals=this.swap_bg_off_vals;
			if(this.swap_bg_ids[0].style.background==vals[x]) return;
			for (var x=0; x < this.swap_bg_ids.length; x++) {
				this.swap_bg_ids[x].style.background=vals[x]; 
			}
		}
		else {
			if(is_on) this.div.style.background=menu_active_bg;
			else this.div.style.background='none';
		}
	}
	this.set_bg_swap = function (id, on_sty, off_sty) {
		var idx = this.swap_bg_ids.length;
		var element=document.getElementById(id);
		if(! element) return;
		this.swap_bg_ids[idx] = element;
		this.swap_bg_on_vals[idx] = on_sty;
		this.swap_bg_off_vals[idx] = off_sty;
	}
	this.set_img_swap = function (id, on_sty) {
		var idx = this.swap_bg_ids.length;
		var element=document.getElementById(id);
		if(! element) return;
		this.swap_img_ids[idx] = element;
		this.swap_img_on_vals[idx] = on_sty;
		this.swap_img_off_vals[idx] = element.src;
	}
	this.click = function () {
		if(! this.pop_obj ) {
			this.controller.set_inactive(this);
		}
		else if(this.autoclose) {
			this.controller.set_active(this);
		}
		else {
			if(this.is_on) 
				this.controller.set_inactive(false);
			else {
				this.controller.set_active(this);
			}
		}
	}
	this.mouseOver = function (is_on) {
		this.controller.set_on(this, is_on);
	}
	this.mouseOverPop = function (is_on) {
		if(this.autoclose) this.controller.set_on(this, is_on);
		else {
			if(is_on) this.controller.set_active(this);
		}
	}
	this.set_on = function (is_on) {
		if(this.is_on==is_on) return;
		this.is_on=is_on;
		if(this.parent_itemObj) this.parent_itemObj.set_on(true);
		
		if(this.pop_checked) return;
		if(!(this.div && this.pop_obj)) {
			this.pop_checked=true;
			return;
		}

		var op=this.div.offsetParent;
		var lt=this.div.offsetLeft;
		var tp=this.div.offsetTop;
		var x=0;
		while(op && op!=document.documentElement) {
			lt += op.offsetLeft;
			tp += op.offsetTop;
			op=op.offsetParent;
			if(x++>20) break;
		}
		if(this.pop_down==true) {
			tp += this.div.offsetHeight;
		}
		else {
			lt += this.div.offsetWidth;
		}
		var emsize=16;
		if(this.pop_obj.offsetHeight) {
			emsize=this.pop_obj.offsetHeight;
		}
		else if(window.getComputedStyle) {
			emsize=window.getComputedStyle(this.pop_obj, null).height
			emsize=Number(emsize.substr(0,emsize.indexOf("px")));
		}

		lt = lt+(this.offset_left*emsize);
		tp = tp+(this.offset_top*emsize);
		this.pop_obj.style.left=lt+"px";
		this.pop_obj.style.top=tp+'px';
		this.pop_checked=true;
	}
}

