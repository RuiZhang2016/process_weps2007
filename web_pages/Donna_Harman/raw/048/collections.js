function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_changeProp(objName,x,theProp,theValue) { //v6.0
  var obj = MM_findObj(objName);
  if (obj && (theProp.indexOf("style.")==-1 || obj.style)){
    if (theValue == true || theValue == false)
      eval("obj."+theProp+"="+theValue);
    else eval("obj."+theProp+"='"+theValue+"'");
  }
}





// for the advanced search page
function addEvent(collectionsUser,criteriaPrefix,rowCount) {
var ni = document.getElementById('myDiv');
var numi = document.getElementById('theValue');
var num = (document.getElementById("theValue").value -1) + rowCount;
numi.value = num;
var rownum = num + 1;
var termnum = num + 2;
var divIdName = "my"+num+"Div";
var htmlPreDescriptors = '<table border="0" cellpadding="2" cellspacing="0">'+
'<tr>' +
'<td><select name="' + criteriaPrefix + 'row_operator' + termnum + '">' +
'<option selected="selected" value="and"> and </option>' +
'<option value="or">or</option>' +
'<option value="not">not</option>' +
'</select>       </td>' +
'<td>(</td>' +
'<td><input name="' + criteriaPrefix + 'term' + termnum + 'a" type="text" size="10"></td>' +
'<td><select name="' + criteriaPrefix + 'term_operator' + termnum + '">' +
'<option selected="selected" value="and"> and </option>' +
'<option value="or">or</option>' +
'<option value="not">not</option>' +
'</select>       </td>' +
'<td><input name="' + criteriaPrefix + 'term' + termnum + 'b" type="text" size="10"></td>' +
'<td>)</td>' +
'<td><select name="' + criteriaPrefix + 'location' + termnum + '">' +
'<option selected value="all">All fields</option>' +
'<option value="title">Title</option>' +
'<option value="author">Author</option>' +
'<option value="abstract">Abstract</option>' +
'<option value="fulltext">Full Text</option>' +
'<option value="keywords">Key Words</option>' +
'<option value="references">References</option>';
var htmlForDescriptors;
if (collectionsUser) { htmlForDescriptors = '<option value="descriptor_text">Descriptors</option>' ; }

var htmlPostDescriptors = '<option value="affiliation">Affiliation</option>' +
'<option value="doi">DOI</option>' +
'<option value="issn">ISSN</option>' +
'<option value="jnltitle">Journal Name</option>' +
'<option value="volume">Volume</option>' +
'<option value="issue">Issue</option>' +
'<option value="firstpage">First Page</option>' +
'<option value="pubdate_year">Year</option>' +
'</select></td>' +
"<td><a href=\"javascript:;\" onclick=\"removeEvent(\'"+divIdName+"\')\" class=\"button2\">- Remove Row</a></td>" +
'</tr>'+
'</table>';
var newdiv = document.createElement('div');
newdiv.setAttribute("id",divIdName);
newdiv.innerHTML = htmlPreDescriptors + htmlForDescriptors + htmlPostDescriptors;
ni.appendChild(newdiv);
}

function removeEvent(divNum) {
var d = document.getElementById('myDiv');
var olddiv = document.getElementById(divNum);
d.removeChild(olddiv);
}

// change the ItemIdentifier variable to whatever name you start radioboxes with
var itemIdentifier = 'collection';
var itemIdentifiertwo = 'journal';

function selectSrc(theForm,source, prefix) {
	for (i=0,n=theForm.elements.length;i<n;i++) {
		if (theForm.elements[i].name == prefix + 'src') {
			if (theForm.elements[i].value == source) {
				theForm.elements[i].checked = true;
				theForm.prevsrc.value = source;
				clearAll(theForm,source);
			}
		}
	}
}

// Used for SAGE Collections as a source in the advanced search.
function checkAll(theForm,selected,prefix) {
	var itemIdentifier = prefix + 'collection';
	var itemIdentifiertwo = prefix + 'journal';
	for (i=0,n=theForm.elements.length;i<n;i++) {
		if (theForm.elements[i].name.substring(0,itemIdentifier.length) == itemIdentifier) {
			// Check the collections checkboxes
			theForm.elements[i].checked = true;
		}
		if (theForm.elements[i].name.substring(0,itemIdentifiertwo.length) == itemIdentifiertwo) {
			// Uncheck the journals checkboxes
			theForm.elements[i].checked = false;
		}
	}
}

// Used for the other sources in the advanced search
function clearAll(theForm,selected,prefix) {
	var itemIdentifier = prefix + 'collection';
	var itemIdentifiertwo = prefix + 'journal';
    for (i=0,n=theForm.elements.length;i<n;i++) {
		if (selected != 'sagecoll') 
		{
			if (theForm.elements[i].name.substring(0,itemIdentifier.length) == itemIdentifier) {
				theForm.elements[i].checked = false;
			}
		}
		if (selected != 'selected')
		{
			if (theForm.elements[i].name.substring(0,itemIdentifiertwo.length) == itemIdentifiertwo) {
				theForm.elements[i].checked = false;
			}
		}
	}
}








function checkAllFields(itemID) {
	var item =  document.getElementById(itemID);
 for (i = 0; i < item.length; i++)
	item[i].checked = true ;
}

function uncheckAllFields(itemID) {
	var item =  document.getElementById(itemID);
    for (i = 0; i < item.length; i++)
	item[i].checked = false ;
}





// toggle visibility
function toggleAll(itemname,state) {
   tmp = document.getElementsByTagName('div');
    for (i=0;i<tmp.length;i++) {
         if (tmp[i].className == itemname) {
			var id = tmp[i].id;
			var number = id.substr(2,4);
//            if (tmp[i].style.display != state && !(tmp[i].style.display == '' && state == 'none')  ) {
			  toggle(id);
//			}
		 }
    }
	return false;
}
function toggle(idname,linkId) {
	document.getElementById(idname).style.display = (document.getElementById(idname).style.display != '') ? '' : 'block';
	document.getElementById("tlink").innerHTML = (document.getElementById(idname).style.display != '') ? 'Hide All Abstracts' : 'Show All Abstracts';

}


// enable/disable buttons
function enableButtons() {
   var tmp = new Array("bba","bbd","bbt");
	for (i=0;i<tmp.length;i++) {
		var buttons = tmp[i];
		document.getElementById(buttons).className="formbutton";
		document.getElementById(buttons).onclick=null;
	}
}

function disableButtons() {
   var tmp = new Array("bba","bbd","bbt");
	for (i=0;i<tmp.length;i++) {
		var buttons = tmp[i];
		document.getElementById(buttons).onclick=ignoreClick;
		document.getElementById(buttons).className="formbutton_hidden";
	}
}

function ignoreClick() { return false; } 

// --- Highwire additions go after this line ---- 
function changeFormAction (itemname,action) {
    var theform =  document.getElementById(itemname);

    theform.action = action;
    theform.submit();
}

function submitForm(itemname) {
    var theform = document.getElementById(itemname);
    theform.submit();
	
}


// changes made by ian:
// renamed functions "addSearchRow" and "removeSearchRow"
// renamed "myDiv" div element "optionalSearchRows"
// renamed "theValue" element "maxOptionalRowNum"

// for the advanced search page
function addSearchRow(collectionsUser,criteriaPrefix,rowCount) {
var ni = document.getElementById('optionalSearchRows');
var maxRowEl = document.getElementById('maxOptionalRowNum');
var nextOptionalRowNum = (document.getElementById("maxOptionalRowNum").value -1) + rowCount;
maxRowEl.value = nextOptionalRowNum;
var termnum = nextOptionalRowNum + 2;
var divIdName = "optionalRow"+nextOptionalRowNum;
var htmlPreDescriptors = '<table border="0" cellpadding="2" cellspacing="0">'+
'<tr>' +
'<td><select name="' + criteriaPrefix + 'row_operator' + termnum + '">' +
'<option selected="selected" value="and"> and </option>' +
'<option value="or">or</option>' +
'<option value="not">not</option>' +
'</select>       </td>' +
'<td>(</td>' +
'<td><input name="' + criteriaPrefix + 'term' + termnum + 'a" type="text" size="10"></td>' +
'<td><select name="' + criteriaPrefix + 'term_operator' + termnum + '">' +
'<option selected="selected" value="and"> and </option>' +
'<option value="or">or</option>' +
'<option value="not">not</option>' +
'</select>       </td>' +
'<td><input name="' + criteriaPrefix + 'term' + termnum + 'b" type="text" size="10"></td>' +
'<td>)</td>' +
'<td><select name="' + criteriaPrefix + 'location' + termnum + '">' +
'<option selected value="all">All fields</option>' +
'<option value="title">Title</option>' +
'<option value="author">Author</option>' +
'<option value="abstract">Abstract</option>' +
'<option value="fulltext">Full Text</option>' +
'<option value="keywords">Key Words</option>' +
'<option value="references">References</option>';
var htmlForDescriptors;
if (collectionsUser) { htmlForDescriptors = '<option value="descriptor_text">Descriptors</option>' ; }

var htmlPostDescriptors = '<option value="affiliation">Affiliation</option>' +
'<option value="doi">DOI</option>' +
'<option value="issn">ISSN</option>' +
'<option value="jnltitle">Journal Name</option>' +
'<option value="volume">Volume</option>' +
'<option value="issue">Issue</option>' +
'<option value="firstpage">First Page</option>' +
'<option value="pubdate_year">Year</option>' +
'</select></td>' +
"<td><a href=\"javascript:;\" onclick=\"removeSearchRow(\'"+divIdName+"\')\" class=\"button2\">- Remove Row</a></td>" +
'</tr>'+
'</table>';
var newdiv = document.createElement('div');
newdiv.setAttribute("id",divIdName);
newdiv.innerHTML = htmlPreDescriptors + htmlForDescriptors + htmlPostDescriptors;
ni.appendChild(newdiv);
}

function removeSearchRow(divNum) {
  var exRowNum = parseInt(divNum);
  var d = document.getElementById('optionalSearchRows');
  var olddiv = document.getElementById("optionalRow" + divNum);
  d.removeChild(olddiv);
  var maxRowEl = document.getElementById('maxOptionalRowNum');
  var maxRowNum = parseInt(maxRowEl.value);
  for (var i = exRowNum; i < maxRowNum; i++) {
  	var rowToMove = i + 1;
  	var divEl = document.getElementById('optionalRow'+rowToMove);
  	if (divEl != null) {
  		renumberRowDivElement(divEl, i);
  	}
  }
  maxRowEl.value = maxRowNum - 1;
}

function renumberRowDivElement(divEl, moveToNum) {
  // moveToNum is the additional (optional) row num-- 1..n
  var rowOperatorNum = moveToNum + 2;
  // update row identifier in select elements
  var mySelects = divEl.getElementsByTagName("select");
  var replaceSelectRegEx = new RegExp("([a-z_]+)\\d+","i");
  for (var i = 0; i < mySelects.length; i++) {
    var selectEl = mySelects[i];
    var origName = selectEl.getAttribute("name");
    var newName = origName.replace(replaceSelectRegEx,"$1"+rowOperatorNum);
    if (newName != origName) {
      selectEl.setAttribute("name", newName);
    }
  }
  // update row identifier in input elements
  var myInputs = divEl.getElementsByTagName("input");
  var replaceInputRegEx = new RegExp("([a-z_]*term)\\d+([ab])","i");
  for (var i = 0; i < myInputs.length; i++) {
    var inputEl = myInputs[i];
    var origName = inputEl.getAttribute("name");
    var newName = origName.replace(replaceInputRegEx,"$1"+rowOperatorNum+"$2");
    if (newName != origName) {
      inputEl.setAttribute("name", newName);
    }
  }
  // update row identifier in anchor elements
  var myAnchors = divEl.getElementsByTagName("a");
  var replaceAnchorRegEx = new RegExp("removeSearchRow[^\\d]+\\d+.*","i");
  for (var i = 0; i < myAnchors.length; i++) {
    var anchorEl = myAnchors[i];
    var origOnClick = anchorEl.getAttribute("onclick");
    if (origOnClick != null) {
      var newOnClick = origOnClick.replace(replaceAnchorRegEx,
        "removeSearchRow(\'"+ moveToNum +"\')");
      if (newOnClick != origOnClick) {
        anchorEl.setAttribute("onclick", newOnClick);
      }
    }
  }

  // update div name
  divEl.setAttribute("id","optionalRow" + moveToNum);
}


// ~~~~~~~ Search History ~~~~~~~~~~~~ //

function history_enableSearch() {
	document.getElementById("searchhistory_search").className="formbutton";
	document.getElementById("searchhistory_search").onclick=null;
}

function history_disableSearch() {
	document.getElementById("searchhistory_search").onclick=ignoreClick;
	document.getElementById("searchhistory_search").className="formbutton_disabled";
}
