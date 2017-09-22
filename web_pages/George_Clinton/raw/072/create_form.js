function createForm()
	{
		document.write('<div id="localization">');
			document.write('<form name="go_local" method="post" action="/stations/stations_results.php" onsubmit="if (document.go_local.txtSearchValue.value!=\'Call Letters\' && document.go_local.txtSearchValue.value!=\'\') {document.go_local.refUrl.value=window.location.href} else {window.location.href=\'http://www.npr.org/stations/index.php?sForm=call&refUrl=' + window.location.href + '\';return false;}">');
				document.write('<div id="headerLocalizationTxt"><img src="http://download.npr.org/anon.npr-www/chrome/tower.gif" width="12" height="25" alt="" />find your local<br />member station:</div>');
				document.write('<input type="hidden" name="searchType" value="zipcall" />');
				document.write('<input type="hidden" name="refUrl" value="" />');
				document.write('<input name="txtSearchValue" id="txtSearchValue" value="Call Letters" onclick="clearField();" onblur="fillField();" /> <input type="submit" name="find" class="button" value="find" />');
				//document.write('<input type="submit" name="find" id="localizationfind" class="button" value="find" />');
				document.write('<p>e.g., "Austin, TX" or WXYZ or 20001</p>');
			document.write('</form>');
		document.write('</div>');
	}
