var new_comment = { is_active: false };

function reveal_post_comment_inline(clear, edit) {
  var i, name, message, focus_set;
  var elem = document.getElementById('img_captcha_url');

  if (clear == true) clear_post_comment_inline();
  if (edit == false && elem) get_captcha();
  
  document.getElementById('inline_error_message').innerHTML = '';
  document.getElementById('post_comment_inline').style.display='block';

  focus_set = false;
  for (i=0; !focus_set && i<bw_list_of_fields.length; i++) {
    name = bw_list_of_fields[i];
    message = bw_form_errors[name];
    if (message != "") {
      window.setTimeout('document.comment.' + name + '.focus();', 1000);
      focus_set = true;
    }
  }

  if (!focus_set)
    window.setTimeout('document.comment.body.focus();', 1000);

  return true;
}

function clear_post_comment_inline() {
  var i;
  var elem = document.getElementById('img_captcha_url');

  if (elem) elem.src="/_images/blank_captcha.gif";
  document.comment.reset();
  document.getElementById('post_comment_inline').style.display='none';

  for (i=0; i<bw_list_of_fields.length; i++) {
    // response code is error.xxx, like error.contact_url
    // the corresponding element id is error_contact_url
    set_field_error_message(bw_list_of_fields[i], false);
  }
}

function get_captcha() {
  var myAjax = new Ajax.Request( "/ajax/index.cgi", {method: 'post', parameters: 'cmd=get_captcha', onLoading: get_captcha_busy, onComplete: get_captcha_response});
}

function get_captcha_busy() {
  if($('systemWorking') && Ajax.activeRequestCount>0)
    Effect.Appear('systemWorking',{duration:0.5,queue:'end'})
}

function get_captcha_response(originalRequest) {
  if($('systemWorking') && Ajax.activeRequestCount>0)
    Effect.Fade('systemWorking',{duration:0.5,queue:'end'});
	
  if (originalRequest.responseText.indexOf('JSON Response')) {
    eval(originalRequest.responseText);	// sets the img src and the form field captcha key value
    Effect.BlindDown('img_captcha_url_div');
  }   
}

function do_post_busy() {
  if($('systemPosting') && Ajax.activeRequestCount>0)
    Effect.Appear('systemPosting',{duration:0.5,queue:'end'})
}

function ajax_do_post_comment() {
  var i;

  if (new_comment.is_active) return false;
  new_comment.is_active = true;

  var finf = Form.getElements( document.comment );

  var fval = { };
  var fe;
  var t_parameters = 'cmd=post_comment&';
  
  for (i=0; i<finf.length; i++) {
    fe = finf[i];
    t_parameters += (i>0 ? '&' : '') + encodeURIComponent(fe.name) + '=' + encodeURIComponent($F(fe));

    fval[ fe.name ] = $F(fe);
  }

  fval.indent = 0;
  fval.publish_time = (new Date()).toLocaleString();

  var myAjax = new Ajax.Request( "/ajax/index.cgi",
    { method: 'post',
      parameters: t_parameters,
      onLoading: do_post_busy,
      onComplete: get_post_comment_response
      });

  return false;
}

function set_field_error_message(form_element_name, errormessage) {
  var error_div_id_name = "error_" + form_element_name;
  try {
    if (errormessage) {
      document.getElementById(error_div_id_name).innerHTML = errormessage;
      window.location.hash = error_div_id_name;

      document.comment[form_element_name].focus();
    }
    else {
      document.getElementById(error_div_id_name).innerHTML = '';
    }
  }
  catch(e) {
  }
}

function get_post_comment_response(originalRequest) {
  var pos, i, show_message;

  if($('systemPosting') && Ajax.activeRequestCount>0)
    Effect.Fade('systemPosting',{duration:0.5,queue:'end'});
    
  if (-1 == (pos = originalRequest.responseText.indexOf('JSON Response')) ||
    -1 == (pos = originalRequest.responseText.indexOf("\n", pos))
  ) {
    return false;
  }

  var resp;
  eval("resp = " + originalRequest.responseText.substr(pos+1));

  if (resp['error']) {
    document.getElementById('captcha_key').value = '';
    get_captcha();
    if (resp['error_message']) {
      document.getElementById('inline_error_message').innerHTML = resp['error_message'];
      window.location.hash='inline_error_message';
    }
    else {
      for (i=0; i<bw_list_of_fields.length; i++) {
	// response code is error.xxx, like error.contact_url
	// the corresponding element id is error_contact_url

	set_field_error_message(bw_list_of_fields[i], resp['error.' + bw_list_of_fields[i]]);
      }
    }
  }
  else {
    var elem = document.getElementById('img_captcha_url');
    document.getElementById('inline_error_message').innerHTML = '';
    if (elem) elem.src="/_images/blank_captcha.gif";

    clear_post_comment_inline();

    show_message = document.getElementById('message_display');
    if (show_message) {
      if (resp['message']) {
        show_message.innerHTML = resp['message'];
        show_message.style.display = 'block';
      }
      else {
        show_message.innerHTML = '';
        show_message.style.display = 'none';
      }
    }

    if (resp['no_post']) {
      new_comment.is_active = false;
      return false;
    }

    var html = '<a name="' + resp['marker'] + '"></a>' + "\r\n";
    html +=  '<div id="cid_' + resp['marker'] + '" class="comment" >' + "\r\n";
    html += '<div class="commentIndent' + resp['indent'] + '">' + "\r\n";

    html += '<div class="commentTitle">';
    html += resp['title'];
    html += '</div>' + "\r\n";

    html += '<div class="commentAuthor">';
    html += ' ' + translator.gettext('by') + ' ';

    if (resp['author']) {
      if (resp['contact_url']) {
        html += '<a href="javascript:openWindow(' + "'" + resp['contact_url'] + "', 'info', 450, 600);" + '">';
        html += resp['author'] + '</a>' + "\r\n";
      }
      else {
        html += resp['author'];
      }
      html += ' ' + translator.gettext('on') + ' ';
      html += resp['publish_time'] + '&nbsp;|&nbsp; <a href="javascript:openWindow(' + "'" + resp['view_user_url'] + "', 'info', 450, 600);" + '">' + translator.gettext('Profile') + '</a>&nbsp;|&nbsp; <a href="#' + resp['marker'] + '">' + translator.gettext('Permanent Link') + '</a>' + "\r\n";
    }
    else {
      if (resp['contact_name']) {
        if (resp['contact_url']) {
          html += '<a href="javascript:openWindow(' + "'" + resp['contact_url'] + "', 'info', 450, 600);" + '">';
  	  html += resp['contact_name'] + '</a>' + "\r\n";
        }
        else {
          html += resp['contact_name'];
        }
      }
      else {
        html += translator.gettext('Anonymous');
      }
      html += ' ' + translator.gettext('on') + ' ';
      html += resp['publish_time'] + '&nbsp;|&nbsp; <a href="#' + resp['marker'] + '">' + translator.gettext('Permanent Link') + '</a>' + "\r\n";
    }

    html += '</div>' + "\r\n"; // end commentAuthor div

    html += '<div class="commentBody">';
    html += resp['body'];
    html += '</div>' + "\r\n";

    html += '<div class="commentReply"><a href="' + resp['post_reply_url'] + '">' + translator.gettext('Reply') + '</a></div>';

    html += '</div>' + "\r\n";
    html += '</div>' + "\r\n";

    var comments_div;
    comments_div = document.getElementById('no_comments');
    if (comments_div) {
      new_comment.div = comments_div;
      new_comment.div.setAttribute('class', 'comment');
      new_comment.div.setAttribute('id', 'comments');
      new_comment.div.innerHTML = html;
    }
    else {
      var result;
      comments_div = document.getElementById('comments_block_id');

      new Insertion.Bottom(comments_div, '<div id="wrap_cid_' + resp['marker'] + '" class="comment" >' + html + '</div>' );
      new_comment.div = document.getElementById('wrap_cid_' + resp['marker']);

      location.hash = 'cid_' + resp['marker'];
    }

    var finf = Form.getElements( document.comment );

    var fval = { };
    var fe;
    var t_parameters = 'cmd=post_comment&';
  
    for (i=0; i<finf.length; i++) {
      fe = finf[i];
      t_parameters += (i>0 ? '&' : '') + encodeURIComponent(fe.name) + '=' + encodeURIComponent($F(fe));

      fval[ fe.name ] = $F(fe);
    }
  }

  new_comment.is_active = false;

  return false;
}
