Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
		EventCache.add(obj, type, fn);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
		EventCache.add(obj, type, fn);
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}
	
var EventCache = function(){
	var listEvents = [];
	return {
		listEvents : listEvents,
		add : function(node, sEventName, fHandler){
			listEvents.push(arguments);
		},
		remove : function(node, sEventName, fHandler){
            var i, item;
            for(i = listEvents.length - 1; i >= 0; i = i - 1) {
                if(node == listEvents[i][0] && sEventName == listEvents[i][1] && fHandler == listEvents[i][2]) {
                    item = listEvents[i];
                    if(item[0].removeEventListener) {
                        item[0].removeEventListener(item[1], item[2], item[3]);
                    }
                    if(item[1].substring(0, 2) != "on") {
                        item[1] = "on" + item[1];
                    }
                    if(item[0].detachEvent) {
                        item[0].detachEvent(item[1], item[0][sEventName+fHandler]);
                    }
                    item[0][item[1]] = null;
                }
            }
        },
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};
				item[0][item[1]] = null;
			};
		}
	};
}();

function removeEvent( obj, type, fn ) {
    EventCache.remove(obj, type, fn);
}

function preventDefault(e) {
    e = e || event;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
}

addEvent(window,'unload',EventCache.flush);