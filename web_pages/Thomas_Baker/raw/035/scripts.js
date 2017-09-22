//START: IE7 QA Defect, Right rail alignment issue, Rel-46, Swapnil k 09-08-2006
var detectwidth_cntr = 0;
function detectWidth(browser){
	if ( detectwidth_cntr < 2) 
	{
		detectwidth_cntr++; 
		setTimeout("detectWidth(browser)", 100);
	}
//END: IE7 QA Defect, Right rail alignment issue, Rel-46, Swapnil k 09-08-2006
	//if (document.getElementById("rightSpan").scrollWidth == '120' ) { // equal
	//alert(document.getElementById("rightSpan").scrollWidth + " / " +  document.getElementById("featured").style.width + " / " + document.getElementById("divrightRail").style.width);	
	var w = '';
	var w1 = '';
	var w2 = '';
	
	if((browser != null)&&(browser == 'firefox'))
	{
		w=300;
	}
	else
	{
		if (document.getElementById("rightSpan")) {
		  w1 = document.getElementById("rightSpan").scrollWidth;} 
		if (document.getElementById("rightSpan2")) {
		  w2 = document.getElementById("rightSpan2").scrollWidth;}
		if (w1 && w2) {
		  if (w1 > w2) {
		   w=w1;}
		  else {
		   w=w2;}
		} else if (w1) {
		   w=w1;
		} else if (w2) {
		   w=w2;
		}
	}
	//right banner < 301
	//alert(w);
	if (w < '121' && w != '') {			//right banner < 121
		if (document.getElementById("divcon")) {
			document.getElementById("divcon").style.width = '505px';
		}
		if (document.getElementById("featured")) {
			document.getElementById("featured").style.width = '505px';
		}
		if (document.getElementById("divrightRail")) {
			document.getElementById("divrightRail").style.width = '121px';
		}
	} else if (w < '161' && w != '') {			//right banner < 161
		if (document.getElementById("divcon")) {
			document.getElementById("divcon").style.width = '465px';
		}
		if (document.getElementById("featured")) {
			document.getElementById("featured").style.width = '465px';
		}
		if (document.getElementById("divrightRail")) {
			document.getElementById("divrightRail").style.width = '161px';
		}
	} else if (w < '251' && w != '') {			//right banner < 251
		if (document.getElementById("divcon")) {
			document.getElementById("divcon").style.width = '368px';
		}
		if (document.getElementById("featured")) {
			document.getElementById("featured").style.width = '374px';
		}
		if (document.getElementById("divrightRail")) {
			document.getElementById("divrightRail").style.width = '251px';
		}
	} else if (w < '301' && w != '') {
		if (document.getElementById("divcon")) {
			document.getElementById("divcon").style.width = '320px';
		}
		if (document.getElementById("featured")) {
			document.getElementById("featured").style.width = '320px';
		}
		if (document.getElementById("divrightRail")) {
			document.getElementById("divrightRail").style.width = '301px';
		}	
	} else {			//default assume right banner =300
		if (document.getElementById("divcon")) {
			document.getElementById("divcon").style.width = '320px';
		}
		if (document.getElementById("featured")) {
			document.getElementById("featured").style.width = '320px';
		}
		if (document.getElementById("divrightRail")) {
			document.getElementById("divrightRail").style.width = '301px';
		}
	}
	//alert(document.getElementById("rightSpan").scrollWidth + " / " +  document.getElementById("featured").style.width + " / " + document.getElementById("divrightRail").style.width);	
}


function SetTopNavTab() 
{ 

	var arrayTabNames = new Array();
	
	var arrayhtmlid = new Array();

	arrayTabNames[0] = 'moviestab';
	arrayTabNames[1] = 'trailerstab'; 
	arrayTabNames[2] = 'tvtab';
	arrayTabNames[3] = 'dvdtab';
	arrayTabNames[4] = 'newstab';
	arrayTabNames[5] = 'celebstab';
	arrayTabNames[6] = 'fantab';	
	
	arrayhtmlid[0] = 1; //'movies';
	arrayhtmlid[1] = 9; //'trailers';
	arrayhtmlid[2] = 2; // 'tv'
	arrayhtmlid[3] = 3; // 'dvd'
	arrayhtmlid[4] = 4; //'news';
	arrayhtmlid[5] = 5; //'celebs';
	arrayhtmlid[6] = 10; //'Fan';
	
	var Tab;

	for(var iCounter=0;iCounter<arrayTabNames.length;iCounter++)
	{
		Tab = document.getElementById(arrayhtmlid[iCounter]);
		if(Tab == null)
		{
			continue;
		}
		else
		{
			Tab = document.getElementById(arrayTabNames[iCounter]);
			break;
		}
	}
	//alert(Tab);
	if(Tab!==null)
	{
		var TabAttribute = Tab.getAttribute("class");

		if(TabAttribute==null)//IE will return null as it does not recognize getAttribute("class")
		{
			Tab.setAttribute("className","navsel fs13 b");
		}
		else //for other browsers 
		{
			Tab.setAttribute("class","navsel fs13 b");
		}
	}
			
}
//Function to check if enter key was pressed in the search text boxes
/*function SubmitSearch(defaultButton) 
{  
	if (event.keyCode == 13)
	{
		event.cancelBubble = true;
		event.returnValue = false;
		document.getElementById(defaultButton).click(); 
	}	

}*/	

//Function to check if enter key was pressed in the search text boxes
function SubmitSearch(e,defaultButton) 
{  
	if (e.keyCode == 13)
	{
		e.cancelBubble = true;
		e.returnValue = false;
		zipSubmit(); 
	}	
}

//DFI-00793-for Mozilla
function SubmitSearchMain(e, defaultButton) 
{
	if (e.keyCode == 13)
	{
		e.cancelBubble = true;
		e.returnValue = false;
		loadsearchpage();
	}
}


/*
function PopulateDate(dropdownctrl) 
{
	alert(dropdownctrl);
	function makeArray() 
	{
    for (i = 0; i<makeArray.arguments.length; i++)
        this[i] = makeArray.arguments[i];
	}

	var days = new makeArray('Sun','Mon','Tue','Wed','Thu','Fri','Sat');

	var today = new Date();
	var day   = days[today.getDay()];
	var date  = today.getDate();	
	var month = today.getMonth()+1;
	alert(day);
	alert(month);
	alert(date);
    option0 = new Option("TODAY",0)
    option1 = new Option("Value 1",1)
    option2 = new Option("Value 2",2)
	
	function makeArray1() 
	{
    for (i = 0; i<makeArray.arguments.length; i++)
        this[i] = makeArray.arguments[i];
	}
}
*/


/*************************************************************************************************	
Function Name: getPlayerScript(string)
Parameter: str (string)
This function generates the script required for playing the movies in trailer datail page						
											
**************************************************************************************************/
function getPlayerScript(str)
{
	while(str.indexOf('[object]') != -1)
	{
		
		str=str.replace('[object]','object');
	}
	while(str.indexOf('[embed]') != -1)
	{
		str=str.replace('[embed]','embed');
	}
	document.getElementById("lblPlayer").innerHTML=str;
}

 


