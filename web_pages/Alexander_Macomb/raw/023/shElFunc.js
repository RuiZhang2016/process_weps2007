function shEl(shadow, activator, closer, init)  { 
	var xCord = 0;								
	var yCord = 0;						
	this.shadow = shadow;
	
	this.activator = activator;
	this.activator.modelObj = this;
	this.activator.onclick=this.showShadow;
	
	this.closer = closer;
	this.closer.modelObj = this;
	this.closer.onclick = this.hideShadow;

	this.init = init;
}

shEl.prototype.updateXY = function(e) {
	if (document.captureEvents) {
		this.xCord = e.pageX;
		this.yCord = e.pageY;
	} else if (window.event.clientX) {
		this.xCord = window.event.clientX+document.documentElement.scrollLeft;
		this.yCord = window.event.clientY+document.documentElement.scrollTop;
	}
}

shEl.prototype.showShadow = function(e) {
	var modelObj = this.modelObj;
	modelObj.updateXY(e);
	modelObj.display();
}
	
shEl.prototype.hideShadow = function() {
	this.modelObj.shadow.style.visibility='hidden';
	if(this.modelObj.cleanup) {
		this.modelObj.cleanup.call(this);
	}
}

shEl.prototype.display = function() {
	if(this.init) {
	    this.init.call(this);
	}
		
	var scrX = Number(this.xCord);
	var scrY = Number(this.yCord);
	var tp = parseInt(scrY+15);
	var lt = parseInt(scrX);

	var shadowX = lt - (this.shadow.offsetWidth / 2);
	if(shadowX < 0) {
		shadowX = 0;
	}
		
	this.shadow.style.left = shadowX+'px';
	this.shadow.style.top = tp +'px';
		
	this.shadow.style.visibility = 'visible';
}

function initShadows() {
		var shAct = document.getElementById('linkArt');
		var shadow = document.getElementById('linkArtEl');
		var shCloser = document.getElementById('linkArtElCl');

		if(shAct && shadow && shCloser) {
			var sh1 = new shEl(shadow, shAct, shCloser);
		}
}

addEvent(window,'load',initShadows);