
function sfgate_un() {
    var start = document.cookie.indexOf('hd=')
    if (start == -1) {
        return '';
    }
    start +=3 ;
    var username = document.cookie.substr(start);
    var end = username.indexOf(';');
    if ( end != -1 ) {
        username = username.substr(0,end);
    }
    if ( username.length == 0 ) {
        return '';
    }
    end = username.indexOf('|');
    if ( end == -1 ) {
        return '';
    }

    return username.substr(0,end);
}

function print_sfgate_un() {
    var encodedURL = escape(window.location);
    var sfgate_user = sfgate_un();
    if (sfgate_user) {
        document.write('Hello, <a href="/cgi-bin/webreg/user/account?user=' +
                       sfgate_user + '">' + sfgate_user + '</a>');
        document.write(' | <a href="/cgi-bin/webreg/user/loaccount">Sign Out</a>');
    } else {
        document.write('<a href="/cgi-bin/webreg/user/xaccount">Sign In</a>');
        document.write(' | <a href="/cgi-bin/webreg/user/reg">Register</a>');
    }
}
