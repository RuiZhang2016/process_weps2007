
var SendDemocracy = "/wp-content/plugins/democracy/democracy.php?demSend=true";
var GetDemocracy = "/wp-content/plugins/democracy/democracy.php?demGet=true";

function initDemocracy() {
	// initiates the two objects for sending and receiving data
	httpReceiveVotes = dem_getHTTPObject();
	httpSendVotes = dem_getHTTPObject();
		    
    view_results = document.getElementById('view-results');
    
    if (view_results) {
      view_results.href = "javascript: SeeResults();";
    }
    
    addAnswer = document.getElementById('jalAddAnswer');
    
    if (addAnswer) {
    	addAnswer.onclick = function () {
    	this.style.display = "none";
		document.getElementById('jalAddAnswerRadio').style.display = "inline";
		document.getElementById('jalAddAnswerRadio').checked = true;
		document.getElementById('jalAddAnswerInput').style.display = "inline";
    
    	all_inputs = document.getElementsByTagName('input');
    
    	for (var i = 0; i < all_inputs.length; i++) {
    		if (all_inputs[i].getAttribute('name') == "poll_aid" && all_inputs[i].getAttribute('id') != "jalAddAnswerRadio") {
    			all_inputs[i].onclick = function () {
    			
					document.getElementById('jalAddAnswerRadio').style.display = "none";
					document.getElementById('jalAddAnswerInput').style.display = "none";
					document.getElementById('jalAddAnswerInput').value = "";
					document.getElementById('jalAddAnswer').style.display = "inline";
				    		
    			}
    		}
    	}
        return false;
		}
    }
    
}

function ReadVote () {
  var the_vote;
  the_poll = document.getElementById("democracyForm");
  for (x = 0; x < the_poll.poll_aid.length; x++) {
	 if (the_poll.poll_aid[x].checked) {
	   the_vote = the_poll.poll_aid[x].value;
	 }
   }
  if (!the_vote) {
    alert ("You must vote first!");
  } else {
    SendVote(the_vote);
  }
  return false;
}

function SeeResults() {
    poll_id = document.getElementById("poll_id").value;
	if (httpReceiveVotes.readyState == 4 || httpReceiveVotes.readyState == 0) {
  		httpReceiveVotes.open("GET",GetDemocracy + '&poll_id='+poll_id+'&rand='+Math.floor(Math.random() * 1000000), true);
		httpReceiveVotes.onreadystatechange = function () {
			if (httpReceiveVotes.readyState == 4) {
				results = httpReceiveVotes.responseText;
		    	the_poll = document.getElementById("democracy");
		    	height = the_poll.offsetHeight;
		    	the_poll.style.minHeight = height + "px";
    			the_poll.innerHTML = results;
    		}
		}
  		httpReceiveVotes.send(null);
  	} else {
  	setTimeout('SeeResults()', 500);
  	}
}


function jal_getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function SendVote (the_vote) {
    poll_id = document.getElementById("poll_id").value;
    cookie = jal_getCookie('demVoted_'+poll_id);
    if (cookie) {
        alert("Go stuff the ballot box elsewhere!");
        return;
    } else {
    	
    	new_vote = document.getElementById('jalAddAnswerInput');
		
		if (new_vote && new_vote.value != "")
			param = 'vote='+encodeURIComponent(new_vote.value)+'&new_vote=true&poll_id='+poll_id;
		else
			param = 'vote='+the_vote+'&poll_id='+poll_id;
		
		date = new Date();
		date.setTime(date.getTime()+(90*24*60*60*1000));
		var expires = "expires="+date.toGMTString();";"		
		document.cookie = "demVoted_"+poll_id+"="+the_vote+";"+expires+";path=/;";
		if (httpSendVotes.readyState == 4 || httpSendVotes.readyState == 0) {
			httpSendVotes.open("POST", SendDemocracy, true);
			httpSendVotes.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  			httpSendVotes.send(param);
  		} else {
  		    setTimeout('SendVote('+the_vote+')', 400)
  		}
  	}
   	
   	// Let the query take some time to run..
  	setTimeout('SeeResults()', 400);
  	
}

// brothercake's generic onload
// http://www.brothercake.com/site/resources/scripts/onload/

if(typeof window.addEventListener != 'undefined')
{
	//.. gecko, safari, konqueror and standard
	window.addEventListener('load', initDemocracy, false);
}
else if(typeof document.addEventListener != 'undefined')
{
	//.. opera 7
	document.addEventListener('load', initDemocracy, false);
}
else if(typeof window.attachEvent != 'undefined')
{
	//.. win/ie
	window.attachEvent('onload', initDemocracy);
}

//initiates the XMLHttpRequest object
//as found here: http://www.webpasties.com/xmlHttpRequest
function dem_getHTTPObject() {
  var xmlhttp;
  /*@cc_on
  @if (@_jscript_version >= 5)
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xmlhttp = false;
      }
    }
  @else
  xmlhttp = false;
  @end @*/
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
    try {
      xmlhttp = new XMLHttpRequest();
    } catch (e) {
      xmlhttp = false;
    }
  }
  return xmlhttp;
}