/* Function: popWindow
 * -------------------
 * Generic popup window function, can be called from pretty much anywhere.
 * opens a popup window with passed in url, height, width, and name.  The 
 * popup window should open centered on the computer screen.
 * 
 */
function popWindow(url, name, width, height) {
	var x = (screen.width - width)/2;
	var y = (screen.height - height)/2;
    var opts = 'height=' + height + ',width=' + width + ",screenX=" + x + ",left=" + x + ",screenY=" + y + ",top=" + y + ',location=no,scrollbars=yes,menubar=no,resizable=no,status=no,toolbar=no';

    var newWindow = window.open(url, name, opts);
    newWindow.focus();

}
