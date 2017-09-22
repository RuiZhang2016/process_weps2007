//test browser
var ie = document.all;
var mozilla = document.getElementById&&!document.all;


// store current state
var curChapter=new Array()
var curNews=new Array()
//position = section,  contents = curChapter 

function pageLoad(){

	if (maxdivs >0){
		//set page one (div0) as active for all sections & chapter
		for (g=0;g<=maxSection;g++){
			for (h=0;h<=maxdivs;h++){
				for (i=0;i<=maxdivs;i++){
					changeState(i,1,0,g);
				}
			}	
		}
	}
	// track which chapter is active
	for (j=0;j<=maxSection;j++){
		
			curChapter[j] = 0;
			curNews[j] = 0;
			
		}
	
}




function hideNews(section){

	
	if (maxdivs != 0){
	
		//which Nav?
		g =section
		
		for (h=0;h<=maxChapter;h++){
			for (i=0;i<=maxdivs;i++){
				
				//alert("hide= p" + g + h + i );
				var myele = document.getElementById("p" + g + h + i );
				if(myele != null){
					document.getElementById("p" + g + h + i ).style.display='none';
				}
				changeState(curNews[section],1,0,g);
			}
		}
	}
	
}


// write out the news nav
function writeNewsNav(whichNav){

	// if there is more than one news section
	if (maxdivs > 0) {
		
		var imgSwitch;
		var anchor;
		leftArrow ="<div><a href='javascript://' onclick='page(-1," + whichNav + ")'><img src='/images/everest/layout/arrow_left.gif' border='0' alt='previous'></a>";
		rightArrow ="<a href='javascript://' section='" + whichNav+ "' onclick='page(1,"+ whichNav +")'><img border='0' src='/images/everest/layout/arrow_right.gif' alt='next'></a></div>"
		//output the nav
		document.write(leftArrow + buildLinks(0,whichNav) + rightArrow);
	}

}


function buildLinks(state,whichNav) {
	var Menu = "";

	// count # of news sections
		for ( var count=0 ; count <= maxdivs ; count++) {
		
			
			displayLink = count +1;
			
			// write a dot and a link for each one
			Menu = Menu + 
					"<span class='pageMenu'><a  href='###' class='r0' id='a" + whichNav + count  +
					"' onclick='jumpNews(" + count + "," + whichNav +
					");this.blur();'>"+ (displayLink)+"</a></span>" 
		}
		return Menu

}


function hasState(state){
		//state = (!state)? "off": state;
		//return state;
}

function getState(state,type){
	
	if (state.lastIndexOf("off")) { 
		value= state.replace("off","on") ; 
	}else{ 
		value= state.replace("on","off");
	}
		
	return value;

}	
	
function hLink(obj,chapter){
	n = mozilla? obj.parentNode : obj.parentElement;
	
	test = chapter.substring(1);
	if (test != curChapter[chapter.substring(0,1)]) {
		search = (n.className.indexOf("on") > 0 ) ? "on" : "off";
		replace = (n.className.indexOf("on") > 0 ) ? "off" : "on";
		
		n.className = n.className.replace(search,replace);
		
	}else {
		n.className = n.className.replace("off","on");
		
	}

}	


function hideChapter(whichChapter){
	for (i=0;i<=maxChapter;i++){
		w = whichChapter.substring(0,1);
		//alert("w= " + "chapter"+w+i);
		var myele = document.getElementById("chapter"+w+i);
		if(myele != null){
			document.getElementById("chapter"+w+i).style.display='none';
		}
	}

}


function showChapter(c) {


	hideChapter(c);
	
	// get nav ID (same as section) from first digit of c
	navID = c.substring(0,1);
	// turn on or off stuff inside the specified nav
	p =document.getElementById('nav'+navID).getElementsByTagName('TD');
		
	for(i=0;i<p.length;i++){
			o = p.item(i);
			o.className = o.className.replace("on","off")
			
	}
	
	var myele = document.getElementById("chapter" + c);
	if(myele != null){
		document.getElementById("chapter" + c).style.display= "block";	
	}
	
	//get the current chapter and store it in the array. The first position of c gives 
	// you the section the second position gives you the chapter
	
	curChapter[c.substring(0,1)] = c.substring(1);
	
	hideNews(navID)
	showNews(0,navID);
	//reset page counter
	curNews[navID] =0 ;
	
	
	if (maxdivs != 0){
		for(i=0;i<=maxdivs;i++){
			changeState(i,0,0,navID);
		}
		
		// set the first one as active
	   changeState(0,0,1,navID);
	   
	}



}




function page(d,section){
	// curNews starts a 0 on page load or when the chapter changes
	// d = direction and is always = -1 or 1
	// add current div + direction to make sure there's content
	
	
	test = curNews[section] + d;

	for(i=0;i<=maxdivs;i++){
			changeState(i,1,0,section);
		}
	
	hideNews(section);
	
	
	if (test >= 0 && test <=  maxdivs) {
		
		// show the next news item	
		showNews(test,section);
		changeState(test,1,1,section);
		curNews[section] = test;
		
	} else if (test < 0 ){
	
		// show the last item
		showNews(maxdivs,section);
		changeState(maxdivs,1,1,section);
		curNews[section] = maxdivs;
		
	} else if (test >  maxdivs ){
	
		// show the first item
		showNews(0,section);
		changeState(0,1,1,section);
		curNews[section] = 0;
	
	}		
		
}

function showNews(d,section){
	//alert("currChapter" + section + currChapter);
	showMe = "p" + section + curChapter[section] + d;
	
	// show the news item
	var myele = document.getElementById(showMe);
	if(myele != null){
		document.getElementById(showMe).style.display= "block";	
	}
}



// changes dot 
//state == 0 = off, state == 1 =on
// d = dot ID
function changeState(d,state,to,section){
	
	
	dval = (to==0) ? "0" : "1" ;
	obj = "a" + section + d  ;
	//alert("obj= " +obj);
	 
	var myele = document.getElementById(obj);
	if(myele != null){
		document.getElementById(obj).className =  "r" + dval;
	}
	
}


//jump to news section (d)

function jumpNews(d,section){

	hideNews(section);
	
	if (maxdivs != 0){
		changeState(d,1,1,section);
	}
	
	showNews(d,section);
	//remember which one is hot	
	curNews[section] = d;

}

