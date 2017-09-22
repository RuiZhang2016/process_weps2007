if (location.hostname == "www.history.ca") {

cmSetProduction();

}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0].toLowerCase() == variable.toLowerCase()) {
      return pair[1];
    }
  } 
  return null;
}

function AACBI_NormalizePageID()
{
	// grab the full url
	var stuff = location.pathname;
	
	// split the url into an array
	arrayOfStuff = stuff.split("/");
	
	// get the last element (array length minus one)
	var pageExt = arrayOfStuff[arrayOfStuff.length - 1];
	
	// get just the page name, without the extension
	pageArray = pageExt.split(".");
	
	var page = pageArray[0];
	var CMUrl = location.pathname;

	if( page.toLowerCase() == "index" || page.toLowerCase() == "default")
	{
		CMUrl = "";
		for (var x = 0; x < arrayOfStuff.length-1; x++)
		{
			if(x == 0)
			{
				// (CTW) One element of no length requires 
//				if(arrayOfStuff.length < 3 && arrayOfStuff[x].length == 0)
//				{
//					CMUrl = CMUrl + '/';
//				}
//				else
//				{
					CMUrl = CMUrl + arrayOfStuff[x];
//				}
			}
			else
			{
				CMUrl = CMUrl + '/' + arrayOfStuff[x];
			}
		}
		
        CMUrl = CMUrl + '/';
	}
	
	return CMUrl;
}


function AACBI_cmCreatePageviewTagFlash(pageArgs,categoryID, searchString, searchResults) 
{
	var CMUrl = AACBI_NormalizePageID();
	if(searchString != null)
	{
		if (getQueryVariable("jump") != null)
        {
    		if(searchString.toLowerCase() == getQueryVariable("Query").toLowerCase())
    		{
    			if(pageArgs != '')
    			{
    				cmCreatePageviewTag(CMUrl + '?' + pageArgs + '&jump=' + getQueryVariable("jump"), categoryID, searchString, searchResults);
    			}
    			else
    			{
    				cmCreatePageviewTag(CMUrl + '?jump=' + getQueryVariable("jump"), categoryID, searchString, searchResults);
    			}
    		}
    		else
    		{
    			if(pageArgs != '')
    			{
    				cmCreatePageviewTag(CMUrl + '?' + pageArgs , categoryID, searchString, searchResults);
    			}
    			else
    			{
    				cmCreatePageviewTag(CMUrl, categoryID, searchString, searchResults);
    			}
    		}
            }
            else
            {
    			cmCreatePageviewTag(CMUrl, categoryID, searchString, searchResults);
            }
		}
		else
		{
			if(window.location.search.length > 1)
			{
				if(pageArgs != '')
				{
					cmCreatePageviewTag(CMUrl + '?' + pageArgs + '&' + window.location.search.substring(1), categoryID);
				}
				else
				{
					cmCreatePageviewTag(CMUrl + '?' + window.location.search.substring(1), categoryID);
				}
			}
			else
			{
				if(pageArgs != '')
				{
					cmCreatePageviewTag(CMUrl + '?' + pageArgs, categoryID);
				}
				else
				{
					cmCreatePageviewTag(CMUrl, categoryID);
				}
			}
		}
}

function AACBI_cmCreatePageviewTag(categoryID, searchString, searchResults) 
{

	var CMUrl = AACBI_NormalizePageID();

	if(searchString != null)
	{
        if (getQueryVariable("Jump") != null)
        {
    		if(searchString.toLowerCase() == getQueryVariable("Query").toLowerCase() )
    		{
    			cmCreatePageviewTag(CMUrl + '?' + 'jump=' + getQueryVariable("Jump"), categoryID, searchString, searchResults);
    		}
    		else
    		{
    			cmCreatePageviewTag(CMUrl, categoryID, searchString, searchResults);
    		}
        }
        else
        {
    	cmCreatePageviewTag(CMUrl, categoryID, searchString, searchResults);
        }
	}
	else
	{
			if(window.location.search.length > 1)
			{
				cmCreatePageviewTag(CMUrl + '?' + window.location.search.substring(1), categoryID);
			}
			else
			{
				cmCreatePageviewTag(CMUrl, categoryID);
			}
	}
}

function AACBI_cmCreateTechPropsTag(categoryID) 
{
	var CMUrl = AACBI_NormalizePageID();
	cmCreateTechPropsTag(CMUrl, categoryID);
}


