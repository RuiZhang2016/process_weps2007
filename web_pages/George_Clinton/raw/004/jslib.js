	if (document.images) {
		icn_out = new MakeArray(15);
		icn_over = new MakeArray(15);
		
		icn_out[1].src = "/dynamic_templates/artists/img/btn_moreinfo.gif";
		icn_out[2].src = "/dynamic_templates/artists/img/btn_more_blue.gif";
		icn_out[3].src = "/dynamic_templates/artists/img/nav_arrow_gray.gif";
		icn_out[4].src = "/dynamic_templates/artists/img/icn_arrow_blue.gif";
		icn_out[5].src = "/dynamic_templates/artists/img/icn_arrow_yellow.gif";
		icn_out[6].src = "/dynamic_templates/artists/img/icn_audio.gif";
		icn_out[7].src = "/dynamic_templates/artists/img/icn_download.gif";
		icn_out[8].src = "/dynamic_templates/artists/img/icn_face.gif";
		icn_out[9].src = "/dynamic_templates/artists/img/icn_photo.gif";
		icn_out[10].src = "/dynamic_templates/artists/img/icn_roll.gif";
		icn_out[11].src = "/dynamic_templates/artists/img/icn_train.gif";
		icn_out[12].src = "/dynamic_templates/artists/img/icn_tv.gif";
		icn_out[13].src = "/dynamic_templates/artists/img/icn_txt.gif";
		icn_out[14].src = "/dynamic_templates/artists/img/btn_more_yellow.gif";
		icn_out[15].src = "/dynamic_templates/artists/img/btn_close_blue.gif";
			
		icn_over[1].src = "/dynamic_templates/artists/img/btn_moreinfo_a.gif";
		icn_over[2].src = "/dynamic_templates/artists/img/btn_more_blue_a.gif";
		icn_over[3].src = "/dynamic_templates/artists/img/nav_arrow_red.gif";
		icn_over[4].src = "/dynamic_templates/artists/img/icn_arrow_blue_a.gif";
		icn_over[5].src = "/dynamic_templates/artists/img/icn_arrow_yellow.gif";
		icn_over[6].src = "/dynamic_templates/artists/img/icn_audio_a.gif";
		icn_over[7].src = "/dynamic_templates/artists/img/icn_download_a.gif";
		icn_over[8].src = "/dynamic_templates/artists/img/icn_face_a.gif";
		icn_over[9].src = "/dynamic_templates/artists/img/icn_photo_a.gif";
		icn_over[10].src = "/dynamic_templates/artists/img/icn_roll_a.gif";
		icn_over[11].src = "/dynamic_templates/artists/img/icn_train_a.gif";
		icn_over[12].src = "/dynamic_templates/artists/img/icn_tv_a.gif";
		icn_over[13].src = "/dynamic_templates/artists/img/icn_txt_a.gif";
		icn_over[14].src = "/dynamic_templates/artists/img/btn_more_yellow_a.gif";
		icn_over[15].src = "/dynamic_templates/artists/img/btn_close_blue_a.gif";
		
		}
		function MakeArray(n) {
		   	this.length = n
		   	for (var i = 1; i<=n; i++) {
		    	this[i] = new Image()
		   	}
		   	return this;
		}
		function icnOver(name,number){
			if (document.images){
		     	name.src = icn_over[number].src;
		   	}
		}
		function icnOut(name,number){
			if (document.images){
			
		      	name.src = icn_out[number].src;
		      	
		   	}
		}
		
		 function launchRSN(varStationID)
		    {
		        var face = 'VH1';
		        var tuner;
		        tuner = window.open('http://radio.sonicnet.com/player/launchplayer.asp?A='+varStationID+'&face='+face,'TUNER','width=492,height=366,toolbar=no,resizable=no,scrollbars=no');
		    }

			
		function sortMe(sort) {
			var location = document.location;
			var v_location = document.URL;
			if(v_location.indexOf("sortBy=") == -1) {
				if(v_location.indexOf("?") == -1) this.location.href = location + "?sortBy=" + sort;
				else this.location.href = location + "&sortBy=" + sort;
			}
			else{
				sortLoc = v_location.indexOf("sortBy=");
				preSort = v_location.substr(0, sortLoc);
				postSort = "";
				if(v_location.length > preSort.length + 12) postSort = v_location.substr(sortLoc + 12);
				this.location.href = preSort + "sortBy=" + sort + postSort;
			}
		}
		
		function reminder(sid,eid) {					
			window.open('/dynamic_templates/shows/reminder/index.jhtml?sid=' + sid + '&eid=' + eid+ '&cid=3','reminder','width=468,height=529,scrollbars=0');
		}
		
		function reminderDate(sid,eid,date) {					
			window.open('/dynamic_templates/shows/reminder/index.jhtml?sid=' + sid + '&eid=' + eid+ '&cid=3&dateID=' + escape(date),'reminder','width=468,height=529,scrollbars=0');
		}
		
		function checkUpdateForm(form) {
			var msg="";
			msg+=boxCheck(form);
			if (msg!="") {
				alert (msg);
				return false;
			}
			return true;
		}
		
		function boxCheck(form)
		{
		   var error = "";
		   var count = 0;
		   if (form.artist.length) {
			   for (var i = 0 ; i < form.artist.length ; ++i) {
			     if (form.artist[i].checked) { count++; }
			   }
			}
			else {
			   if (form.artist.checked) {count=1;}
			}
			if (count == 0) {
				error = "Please select an artist";
			}
		   return error;
		}	