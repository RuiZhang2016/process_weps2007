	function OpenURL(sURL, sHandle) {
		if (sHandle != '') {window.open(sURL, sHandle);}
		else {document.location.href = sHandle;}
		}
		
	function AddFavorites(){
		if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
			var url = "http://<%=sPageURL%>";
			var title = "Artistopia Music";
			window.external.AddFavorite(url,title);
			}
		else {
			var msg = "This browser does not support automated bookmarking!  Please use your browser functions to add Artistopia to your favorites.";
			if(navigator.appName == "Netscape") 
				alert(msg);
			}
		}