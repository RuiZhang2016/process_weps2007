<!--
	function hideall() {
		document.getElementById('nhpressreleases').style.display = 'none';
		document.getElementById('nhspeeches').style.display = 'none';
		document.getElementById('nharticles').style.display = 'none';
		document.getElementById('nhmultimedia').style.display = 'none';
		document.getElementById('nhevents').style.display = 'none';

		document.getElementById('TabNHPR').src = 'images/bt_pressreleasestab0.gif';
		document.getElementById('TabNHSP').src = 'images/bt_speechestab0.gif';
		document.getElementById('TabNHAR').src = 'images/bt_articlestab0.gif';
		document.getElementById('TabNHMD').src = 'images/bt_mmtab0.gif';
		document.getElementById('TabNHEV').src = 'images/bt_eventstab0.gif';
		return true;
	}
	function showhide(strType) {
		if (strType == 'pr') {
			hideall();
			document.getElementById('nhpressreleases').style.display = 'block';
			document.getElementById('TabNHPR').src = 'images/bt_pressreleasestab1.gif';
		}
		else if (strType == 'sp') {
			hideall();
			document.getElementById('nhspeeches').style.display = 'block';
			document.getElementById('TabNHSP').src = 'images/bt_speechestab1.gif';
		}
		else if (strType == 'ar') {
			hideall();
			document.getElementById('nharticles').style.display = 'block';
			document.getElementById('TabNHAR').src = 'images/bt_articlestab1.gif';
		}
		else if (strType == 'mm') {
			hideall();
			document.getElementById('nhmultimedia').style.display = 'block';
			document.getElementById('TabNHMD').src = 'images/bt_mmtab1.gif';
		}
		else if (strType == 'ev') {
			hideall();
			document.getElementById('nhevents').style.display = 'block';
			document.getElementById('TabNHEV').src = 'images/bt_eventstab1.gif';
		}
	}
// -->
