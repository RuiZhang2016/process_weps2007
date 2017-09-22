// *** BUG - DO NOT DELETE THIS LINE ***

// store past ratings in case the request fails
var save = { };

// make the request to the server - also save the current rating and display a spinner
function addStar(id)
{ var v = document.getElementsByClassName('instantrating_'+id);
  for (var i=0; i<v.length; i++)
  { save[id] = v[i].innerHTML;
    v[i].innerHTML = '<img src="/abcimages/spinner.gif">';
  }

  //save[id] = $('instantrating_'+id).innerHTML;
  //$('instantrating_'+id).innerHTML = '<img src="/abcimages/spinner.gif">';

  var myAjax = new Ajax.Request( getInstantRatingURL(id),
                                 { method: 'POST',
                                   //parameters: 'someParameter=ABC',
                                   onSuccess: eval('isSuccess_'+id),
                                   onFailure: eval('isFailure_'+id) }
                               );
} 
  
// obtain the url for this id
function getInstantRatingURL(id)
{ return eval('getInstantRatingURL_'+id+'()');
} 
     
// request was a success - if there was an error alert the user and display the saved rating otherwise just update the rating
function isSuccess(id, request)
{ var v = document.getElementsByClassName('instantrating_'+id);
  var errors = request.responseXML.getElementsByTagName('error'); 
  if (errors.length)
  { for (var i=0; i<v.length; i++)
    { v[i].innerHTML = save[id];
    }
    //$('instantrating_'+id).innerHTML = save[id];
    alert('ERROR: '+errors[0].firstChild.nodeValue);
  } else
  { var ratings = request.responseXML.getElementsByTagName('rating');
    for (var i=0; i<v.length; i++)
    { v[i].innerHTML = ratings[0].firstChild.nodeValue;
    }
    //$('instantrating_'+id).innerHTML = ratings[0].firstChild.nodeValue;
  } 
}   
  
// request failed - alert the user and display the saved rating
function isFailure(id, request)
{ var v = document.getElementsByClassName('instantrating_'+id);
  for (var i=0; i<v.length; i++)
  { v[i].innerHTML = save[id];
  }
  //$('instantrating_'+id).innerHTML = save[id];
  alert('An error occurred...');
} 
