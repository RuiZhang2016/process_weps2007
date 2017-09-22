		var uniqueIdsHash = new Array();
		var currentOpenDiv = null;
	
	
		function openWindow(link)
		{
			var w  = window.open(link);
			w.focus();
			return false;
		}
	
		function getLink(url, text, className)
		{
			var ret = '<a href="' + url + '" onclick="return popUp(this,\'toolbar=yes,scrollbars=yes,location=yes,directories=yes,status=yes,menubar=yes,resizable=yes\',\'npr\');" class="' + className + '">' + text + '</a>';
		
			//var ret = '<a href="javascript:void(0);" onclick="openWindow(\'' + url + '\');" class="' + className + '">' + text + '</a>';
			return ret;
		}
	
		function toggleEcommerceDiv(uniqueId, index, title)
		{
			if (uniqueId != -1 && uniqueIdsHash[uniqueId + '_' + index] == null)
			{
				var url = "/templates/XMLQuery/UPCQuery.php?UPC=" + uniqueId;
				
				var vendorCodesRequester = getRequester();
				vendorCodesRequester.open("GET", url, false);
				vendorCodesRequester.send(null);

				
				var isAmazonOnly = document.getElementById('AmazonOnlyVendorLinks' + uniqueId  + '_' + index) != null;
				
				if (vendorCodesRequester.readyState == 4 && vendorCodesRequester.status == 200)
				{
					response  = vendorCodesRequester.responseXML.documentElement;

					var displayLinksSpan = null;
					
					if (isAmazonOnly)
					{
						displayLinksSpan = document.getElementById('AmazonOnlyVendorLinks' + uniqueId + '_' + index);
					}
					else
					{
						displayLinksSpan = document.getElementById('VendorLinks' + uniqueId + '_' + index);
					}
					
					if (displayLinksSpan != null)
					{
						displayLinksSpan.innerHTML = "";
	
						amazonLinks = response.getElementsByTagName("Amazon");
						if (amazonLinks.length == 1 && amazonLinks[0].getElementsByTagName("link-npr").length > 0)
						{
							if (isAmazonOnly)
							{
								// different link for World Cafe
							    var link_url = amazonLinks[0].getElementsByTagName("link-wxpn")[0].firstChild.data;
							   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Amazon.com', 'buyLink1'); 
							}	
							else
							{
							   	var link_url = amazonLinks[0].getElementsByTagName("link-npr")[0].firstChild.data;
							   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Amazon.com', 'buyLink1');
							}						
						}
						else 
						{
							if (isAmazonOnly)
							{
								// different link for World Cafe
								var link_url = amazonLinks[0].getElementsByTagName("link-query-wxpn")[0].firstChild.data + title.replace(/ /g,'+');
							   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Amazon.com', 'buyLink1'); 
							}
							else
							{
								var link_url = amazonLinks[0].getElementsByTagName("link-query-npr")[0].firstChild.data + title.replace(/ /g,'+');
							   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Amazon.com', 'buyLink1'); 
							}
						}

						prmsLinks = response.getElementsByTagName("PRMS");
						if (prmsLinks.length == 1)
						{
							if (!isAmazonOnly)
							{
								var link_url = prmsLinks[0].getElementsByTagName("link")[0].firstChild.data;
								displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Public Radio MusicSource', 'buyLink2'); 
							}
						}
						else if (prmsLinks.length > 1)
						{
							if (!isAmazonOnly)
							{
							   	var link_url = "http://www.prms.org/servlet/PRMS.Attribution/www.thestore24.com/Music/SearchResults.aspx?&amp;set_station=1&amp;station=1653&amp;SEARCH=" + uniqueId + "&amp;sec=upc%2Fcat.%23";	
							   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; Public Radio MusicSource', 'buyLink2'); 
							}
						}



						// for future iteration of itunes. Does not do fuzzy search for more than one result
						itunesLinks = response.getElementsByTagName("iTunes");
						if (itunesLinks.length == 1)
						{
						   	var link_url = itunesLinks[0].getElementsByTagName("link")[0].firstChild.data;
						   	displayLinksSpan.innerHTML += getLink(link_url, '&raquo; iTunes', 'buyLink3'); 
						}
					}
				}
				else
				{
					// ignore, regretfully. User doesn't need to know about this kind of problem. No easy way to inform developers.
				}
				
				uniqueIdsHash[uniqueId + '_' + index] = "on";	

			}



			var ecommerceDiv = document.getElementById("ecommerceDiv" + uniqueId + '_' + index);
			
			if (currentOpenDiv != null && currentOpenDiv != ecommerceDiv)
			{
				currentOpenDiv.className= currentOpenDiv.className.replace("openDiv", "closeDiv");
			}
			
			if (ecommerceDiv.className.indexOf("closeDiv") != -1)
			{
				ecommerceDiv.className = ecommerceDiv.className.replace("closeDiv", "openDiv");
				currentOpenDiv = ecommerceDiv;
			}
			else
			{
				ecommerceDiv.className = ecommerceDiv.className.replace("openDiv", "closeDiv");
				currentOpenDiv = null;
			}

		
		}
		
		// browser independent way of getting XMLRequestObject
		function getRequester()
		{
			var requester = null;
		
			try
			{
				requester = new XMLHttpRequest();
			}
			catch (error)
			{
				 try
				 {
				   requester = new ActiveXObject("Microsoft.XMLHTTP");
				 }
				 catch (error)
				 {
				   return null;
				 }
			}
			
			return requester;
		}		
	
	
