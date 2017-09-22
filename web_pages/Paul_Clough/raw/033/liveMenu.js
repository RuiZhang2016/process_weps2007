var lastLayerName = "";

function showLayer(layerName){
	if(layerName != lastLayerName){
		if(document.getElementById && document.getElementsByTagName){
			var curObj = document.getElementById(layerName);
			var sub_links = curObj.getElementsByTagName("a");
			if(sub_links.length > 0){
				curObj.style.visibility = "visible";
			}
			if(lastLayerName != ""){
				document.getElementById(lastLayerName).style.visibility = "hidden";
			}
		}
		lastLayerName = layerName;
	}
}

function hideLayer(layerName){
	if(lastLayerName != ""){
		if(document.getElementById){
			document.getElementById(layerName).style.visibility = "hidden";
		}
		lastLayerName = "";
	}
}
