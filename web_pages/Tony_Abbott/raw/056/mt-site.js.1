// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

function setCookie (name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") +
        (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function getCookie (name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie (name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function fixDate (date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

function rememberMe (f) {
    var now = new Date();
    fixDate(now);
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    now = now.toGMTString();
    if (f.author != undefined)
       setCookie('mtcmtauth', f.author.value, now, '/', '', '');
    if (f.email != undefined)
       setCookie('mtcmtmail', f.email.value, now, '/', '', '');
    if (f.url != undefined)
       setCookie('mtcmthome', f.url.value, now, '/', '', '');
}

function forgetMe (f) {
    deleteCookie('mtcmtmail', '/', '');
    deleteCookie('mtcmthome', '/', '');
    deleteCookie('mtcmtauth', '/', '');
    f.email.value = '';
    f.author.value = '';
    f.url.value = '';
}

function hideDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function showDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

var commenter_name;

function individualArchivesOnLoad(commenter_name) {


    if (commenter_name) {
        hideDocumentElement('name-email');
        showDocumentElement('comments-open-text');
        showDocumentElement('comments-open-footer');
    } else {
        hideDocumentElement('comments-open-data');
        hideDocumentElement('comments-open-text');
        hideDocumentElement('comments-open-footer');
    }




    if (document.comments_form) {
        if (document.comments_form.email != undefined &&
            (mtcmtmail = getCookie("mtcmtmail")))
            document.comments_form.email.value = mtcmtmail;
        if (document.comments_form.author != undefined &&
            (mtcmtauth = getCookie("mtcmtauth")))
            document.comments_form.author.value = mtcmtauth;
        if (document.comments_form.url != undefined && 
            (mtcmthome = getCookie("mtcmthome")))
            document.comments_form.url.value = mtcmthome;
        if (mtcmtauth || mtcmthome) {
            document.comments_form.bakecookie.checked = true;
        } else {
            document.comments_form.bakecookie.checked = false;
        }
    }
}

function writeTypeKeyGreeting(commenter_name, entry_id) {
    if (commenter_name) {
        document.write('<p>Thanks for signing in, ' + commenter_name +
          '. Now you can comment. '+
          '(<a href="http://www.mariposa.com.au/mt/mt-comments.cgi?__mode=handle_sign_in&amp;static=1&amp;logout=1&entry_id=' + entry_id + '">sign out</a>)</p>');
    } else {
        document.write('<p>You are not signed in. You need to be registered to comment on this site. '+
          '<a href="https://www.typekey.com/t/typekey/login?&amp;lang=en&amp;t=z76vxOj8AcSHiGNEyv9Y&amp;v=1.1&amp;_return=http://www.mariposa.com.au/mt/mt-comments.cgi%3f__mode=handle_sign_in%26static=1%26entry_id=' + entry_id + '">Sign in</a></p>');


    }

}

if ('www.mariposa.com.au' != 'www.mariposa.com.au') {
    document.write('<script src="http://www.mariposa.com.au/mt/mt-comments.cgi?__mode=cmtr_name_js"></script>');
} else {
    commenter_name = getCookie('commenter_name');
}

