// Written by Mike Horn 01/07

function getTarget(e) {
	var target = new Array();

	if (window.event && window.event.srcElement)
		target['el'] = window.event.srcElement;
	else if (e && e.target)
		target['el'] = e.target;
	if (!target['el'])
		return false;

	while (target['el'] != document.body && target['el'].nodeName.toLowerCase() != 'a')
		target['el'] = target['el'].parentNode;
	if (target['el'].nodeName.toLowerCase() != 'a')
		return false;

	var nameSplit = new Array();

	nameSplit = target['el'].name.split('-');

	target['ref_type_id'] = nameSplit[0];
	target['ref_id'] = nameSplit[1];
	target['value'] = nameSplit[2];

	return target;
}

function handleHover(e) {
	var target = getTarget(e);
	var percent = target['value'] * 10;
	$('artist-vote').getElementsByTagName('div')[0].style.width = percent + '%';
}

function cancelVote() {
	if (!$('startAddVoteListeners').className) {
		$('artist-vote').getElementsByTagName('div')[0].style.width = $('artist-vote').getElementsByTagName('div')[0].className + "%";
	} else if ($('startAddVoteListeners').className != 'anon') {
		$('artist-vote').getElementsByTagName('div')[0].style.width = $('startAddVoteListeners').className;
	}
}

function handleVote(e) {
	var target = getTarget(e);
	$('artist-vote').getElementsByTagName('div')[0].style.width = $('startAddVoteListeners').className = target['value'] * 10 + "%";
	submitRating(target['ref_type_id'], target['ref_id'], target['value'], e);
	toggleListeners('none');
	return false;
}

function addVoteListeners() {

	if (!document.getElementById) return;

	var all_links = $('artist-vote').getElementsByTagName('a');

	for (var i=0;i<all_links.length; i++) {
		addEvent(all_links[i], 'mouseover', handleHover, false);
		addEvent(all_links[i], 'mouseout', cancelVote, false);
		if ($('startAddVoteListeners').className != 'anon') {
			all_links[i].onclick = handleVote;
		}
	}

}

function submitRating(item_type, item_id, user_rating, elem){
	params = 'action=erating&ref_id='+item_id+'&user_rating='+user_rating+'&ref_type_id='+item_type;

	url    = MP3_BASE_URL + '/index.php?type=10';
	
	if (typeof elem != 'undefined') {
        $('you-say').innerHTML = 'rating . . .'
	}
	
	new ajax(url, {method: 'post', postBody: params, onComplete:
		function(req) {
		    if (req.responseText == 1) {
		        
    			if (user_rating > 0) {
    				$('you-say').innerHTML = '<a href="#" onclick="resetRating('+item_type+', '+item_id+');return false;">reset</a>';
    			} else {
    				$('you-say').innerHTML = 'click on a star to rate';
    				original_vote = 0;
    				voted = false;
    			}
		    }
		    else {
		        $('artist-vote').getElementsByTagName('div')[0].style.width = 0;
		        $('you-say').innerHTML = '<span style="color: #d03600;">error, please try again.</span>';
		        setTimeout(function() { $('you-say').innerHTML = 'click on a star to rate'; }, 2000);
		    }
		} });

}

function resetRating(item_type, item_id){
    $('artist-vote').getElementsByTagName('div')[0].style.width = 0;
	submitRating(item_type, item_id, 0);    
	$('startAddVoteListeners').className = '0';
	toggleListeners('inline');
}

function toggleListeners(state) {
	var all_links = $('artist-vote').getElementsByTagName('a');

	for (var i=0;i<all_links.length; i++) {
		all_links[i].style.display = state;
	}
}

// let's get this party started!
if ($('artist-vote')) {
	addVoteListeners();

	// already voted
	if ($('startAddVoteListeners').className != '' && $('startAddVoteListeners').className != 'anon') {
		toggleListeners('none');
	}
}