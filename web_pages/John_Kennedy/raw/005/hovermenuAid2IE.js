// javascript hovermenuAid2IE
// called by /common/start_doc.xhtml.transitional

var startList = function() {

// Mac IE cannot seem to handle (i.e., we suck, but so does Mac IE in our defense) CSS popup menus. - M.Galloway 12/12/2005
// The popup menus themselves work but normal list items disappear (turn to white).
	if (navigator.appVersion.indexOf("Win")!=-1) {
		if (document.all&&document.getElementById) {
			if (document.getElementById("hover_ul"))
			{
			navRoot = document.getElementById("hover_ul");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("hover_ul2"))
			{
			navRoot = document.getElementById("hover_ul2");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("hover_ul3"))
			{
			navRoot = document.getElementById("hover_ul3");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

//this loop is probably unnecessary now
			if (document.getElementById("healthitem"))
			{
			navRoot = document.getElementById("healthitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("healthsubmorelistitem"))
			{
			navRoot = document.getElementById("healthsubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("busisubmorelistitem"))
			{
			navRoot = document.getElementById("busisubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("entsubmorelistitem"))
			{
			navRoot = document.getElementById("entsubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("scisubmorelistitem"))
			{
			navRoot = document.getElementById("scisubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("socsubmorelistitem"))
			{
			navRoot = document.getElementById("socsubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("socsubmorelistitem"))
			{
			navRoot = document.getElementById("referencesubmorelistitem");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }

			if (document.getElementById("morespeccolls"))
			{
			navRoot = document.getElementById("morespeccolls");
				for (i=0; i<navRoot.childNodes.length; i++) {
					node = navRoot.childNodes[i];
						if (node.nodeName=="LI") {
							node.onmouseover=function() {
								this.className+=" over";
							}
							node.onmouseout=function() {
								this.className=this.className.replace(" over", "");
							}
						}
				  }
			 }
			}

		} //OS detection curly brace
	
	} // curly brace for startList = function()

	window.onload= startList;






