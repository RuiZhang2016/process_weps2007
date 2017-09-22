

	// country array
	var countryArray = ['gbr','usa', 'aus', 'can', 'fra', 'deu', 'irl', 'esp', 'nld', 'jpn', 'ita'];
	var defaultCountry = 'other';
	
	function rs_decode_media() {
		var ck = document.cookie + ';';
		var ret = "";
		var x = ck.indexOf('GU_revsci_media=');
		
		if (x > -1) {
			var media_data = ck.substring(x+16, ck.indexOf(';',x));
			ret = unescape(media_data);
		}
		
		return ret;
	}
	
	function rs_process_media() {
		var rs_cook = rs_decode_media();
		if (rs_cook != "") {
			rs_cook = rs_cook.split(';');
			for (var i = 0; i < rs_cook.length; i++) {
				var data = rs_cook[i].split('=');
				DM_addToLoc(data[0],data[1]);
			}
		}
	}

	function deduceCountry(actualCountry) {
		
		// loop through the known countries
		// if not found set the default country
		
		var deducedCountry = defaultCountry;
		
		for (var x = 0; x <= countryArray.length; x++) {
			
			if (countryArray[x] == actualCountry)  {
				deducedCountry = actualCountry;
				break;
			}
		}
		
		// add country to the query String
		DM_addToLoc('country',deducedCountry);
		
		return;
		 	
	}
	
	