// *** BUG - DO NOT DELETE THIS LINE ***

// make the request to the server
function testMethod(form)
{ alert(form.blog_subscription_blog_id.value);
  alert(form.blog_subscription_email.value);
  //alert(form.blog_subscription_email);
}

function subscribe(form)
{ var blog_id = form.blog_subscription_blog_id.value
  var email = form.blog_subscription_email.value

  var url = getSubscribeURL(blog_id) + '&email=' + email;

  var myAjax = new Ajax.Request( url,
                                 { method: 'POST',
                                   //parameters: 'someParameter=ABC',
                                   onSuccess: eval('isSubscribeSuccess_' + blog_id),
                                   onFailure: eval('isSubscribeFailure_' + blog_id)
                                 }
                               );
} 
  
// obtain the url for this blog_id
function getSubscribeURL(blog_id)
{ return eval('getSubscribeURL_' + blog_id + '()');
} 
     
// request was a success - alert the user whether an error occurred or if they have been added successfully
function isSubscribeSuccess(blog_id, request)
{ var errors = request.responseXML.getElementsByTagName('error'); 
  if (errors.length)
  { alert('ERROR: '+errors[0].firstChild.nodeValue);
  } else
  { var successes = request.responseXML.getElementsByTagName('success');
    alert('SUCCESS: '+successes[0].firstChild.nodeValue);
  } 
}   
  
// request failed - alert the user
function isSubscribeFailure(blog_id, request)
{ alert('An error occurred...');
} 
