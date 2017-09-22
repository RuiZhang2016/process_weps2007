	function switchcontent(newcontent)
	{
		if (newcontent !== currenttab)
		{
			var oldtab = currenttab + "tab";
			var oldmenu = currenttab + "menu";
			var newtab = newcontent + "tab";
			var newmenu = newcontent + "menu";
			
			if (document.getElementById(newtab) !== null && document.getElementById(oldtab) !== null)
			{
				document.getElementById(newtab).style.display = "";
				document.getElementById(newmenu).className = "selected";
				document.getElementById(oldtab).style.display = "none";
				document.getElementById(oldmenu).className = "menu";
				currenttab = newcontent;
				
				//set the location/url bar.'/cviewplayer_include.asp'
				strNewLocation = 'http://' + window.location.hostname + window.location.pathname + window.location.search;
				//intSportType = getQueryStringParam("sport");
				//intPRKey = getQueryStringParam("pr_key");					
				//strNewLocation = strNewLocation + 'sport=' + intSportType + '&pr_key=' + intPRKey + '#' + newcontent;
				strNewLocation = strNewLocation + '#' + newcontent;
				//alert(strNewLocation);
				window.location.href = strNewLocation;
			}
		}
		
		//if stats tab, close off any game-by-games displayed.
		if (newcontent == 'stats')
		{
			if (sLast !== null)
			{
				showDiv('close','')
			}
		}
	}
	
	function ChangeScoutContent(strType,inKey)
	{
		var obj = null;
		var obj_old = null;
		
		strScoutDiv = strType + "_" + inKey;
		
		if (strScoutDiv !== strCurrentScoutDiv)
		{
			obj = document.getElementById(strScoutDiv);
			obj_old = document.getElementById(strCurrentScoutDiv);
			
			obj_old.style['display'] = "none";
			obj.style['display'] = 'inline';				
			
			if (strType == "scoutlist")
			{
				if (inCurrentScoutKey !== inKey)
				{
					var oldscoutmenu = "scoutmenu_" + inCurrentScoutKey;
					var newscoutmenu = "scoutmenu_" + inKey;
					
					document.getElementById(newscoutmenu).className = "selectedscout";
					document.getElementById(oldscoutmenu).className = "";
					
					inCurrentScoutKey = inKey;
				}
			}
			
			strCurrentScoutDiv = strScoutDiv;
		}				
	}
	
	function switchscout(newscoutname)
	{
		if (newscoutname !== currentscout)
		{var oldscout = currentscout + "_scouttext";
		var oldscoutmenu = currentscout + "_scoutmenu";
		var newscout = newscoutname + "_scouttext";
		var newscoutmenu = newscoutname + "_scoutmenu";
		document.getElementById(newscout).style.display = "";
		document.getElementById(newscoutmenu).className = "selectedscout";
		document.getElementById(oldscout).style.display = "none";
		document.getElementById(oldscoutmenu).className = "";
		currentscout = newscoutname;}
	}

	function openScoutingInfo(keyType,keyValue)
	{
		if (keyType == "sc_key")
		{
			scoutpop = window.open('scoutinfo.asp?sc_key=' + keyValue,"Scouting","height=300,width=500,resizable=yes,scrollbars=yes");
		}
		else if (keyType == "sc_sc_key")
		{
			scoutpop = window.open('scoutinfo.asp?sc_sc_key=' + keyValue,"Scouting","height=300,width=500,resizable=yes,scrollbars=yes");
		}
	}
	
	//function to get the query string value.
	function getQueryStringParam(argname)
	{
		query = location.search.substring(1);
		pairs = query.split("&");
		for(i=0; i < pairs.length; i++){
			key   = pairs[i].split("=")[0];
			value = pairs[i].split("=")[1];
			if (key.toLowerCase() == argname)
			{
				return value;
			}
		}
		return "";
	}
		
	//default content tab from query string if present.
	//values = bio, colleges, audibles, videos, ticker, scouting, commentary.
	rExp = /#/;
	strContentTab = location.hash;
	if (strContentTab !== "")
	{	
		strContentTab = strContentTab.replace(rExp,"");
		
		if (strContentTab !== "")
		{
			//alert(strContentTab);
			switchcontent(strContentTab);
		}
	} 
	else
	{
		//else check if mckeen's hockey. if so, commentary is displayed first.
		strHostName = window.location.hostname;
		strHostName = strHostName.toLowerCase();
		
		if (strHostName.indexOf("mckeenshockey") >= 0)
		{
			switchcontent("commentary");
		}
		else 
		{
			intSID = getQueryStringParam("sid");
			if (intSID == 960)
			{
				switchcontent("commentary");
			}
		}
	}

	function submitTeamPlayerFrm(strDDType)
	{
		//check if user had selected a player. If so, then we take user to that player page.
		if (strDDType == 'player')
		{ 
			frmTeamPlayer.hidDDType.value = strDDType;
			frmTeamPlayer.action = frmTeamPlayer.action + '&player=' + frmTeamPlayer.selPLKey.options[frmTeamPlayer.selPLKey.selectedIndex].value;
			frmTeamPlayer.submit();	
		}
		else
		{
			frmTeamPlayer.hidDDType.value = strDDType;
			frmTeamPlayer.action = frmTeamPlayer.action + '&player=' + frmTeamPlayer.hidPLKey.value;
			frmTeamPlayer.submit();	
		}
	}	