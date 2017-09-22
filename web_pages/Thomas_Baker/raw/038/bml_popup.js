/* Function: generic_popupBML
 * -------------------
 * Generic popup window function, can be called from pretty much anywhere.
 * opens a popup window with passed in url, height, width, and name.  The 
 * popup window should open centered on the computer screen.
 * 
 */
function open_popupWindow(url,name,width, height){
        window.open(url,name,'toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=yes, resizable=yes, '+ 'width='+width+' height='+height);
}