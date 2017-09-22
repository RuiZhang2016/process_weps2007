
var currentState = "";
var baseURL = "/directory_search/physician/profiles/getcities.cfm?action=";
include_once("/consumer/scripts/ajaxFactory.js");

function setSearchState()
{
	document.namesearch.zip_code.value = "";
	currentState = whichItem("state").options[whichItem("state").selectedIndex].value;
	if (currentState != 0)
		{ getStateCities(); }
	else
		{ whichItem("city_drop").innerHTML="<select name=\"city\" id=\"city\"><option value=\"\">First select a state&#8230;</option></select>"; }
		
}

function setSearchZipcode()
{
	document.namesearch.state.selectedIndex = 0;
	currentState = 0;
	whichItem("city_drop").innerHTML="<select name=\"city\" id=\"city\"><option value=\"\">First select a state&#8230;</option></select>";
		
}

function setSearchSpecialty()
{
	currentSpec = whichItem("specialty").options[whichItem("specialty").selectedIndex].value;
	if (currentState != "")
		{ getStateCities(); }
}
	
function getStateCities()
{
	tmpObject = voidObject();
	whichItem("city_drop").innerHTML = "<select name=\"city\" id=\"city\"><option value=\"\">Loading cities&#8230;</option></select>";
	theURL = baseURL + "getstatecities&state=" + whichItem("state").options[whichItem("state").selectedIndex].value + "&specialty=" + whichItem("specialty").options[whichItem("specialty").selectedIndex].value;
	ajaxFactory(tmpObject, 'city_drop', theURL, "GET", true);
}

function form_check() 
{
	if (document.namesearch.zip_code.value) {
		return true;
		}
	else {
		if (document.namesearch.state.selectedIndex == 0) {
				alert('You must enter either a zipcode or a state and city to search');
				return false;
				}
			else { 
				if (document.namesearch.city.selectedIndex == 0) {
					alert('You must enter a city to search');
					return false;
					}
				else return true;
				}

		}

}