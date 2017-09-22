//****************************************************************************/
//   CONFIDENTIAL AND PROPRIETARY PROPERTY OF MyFamily.COM                   */
// THIS PROGRAM IS AN UNPUBLISHED WORK FULLY PROTECTED BY THE UNITED STATES  */
// COPYRIGHT LAWS AND IS CONSIDERED A TRADE SECRET BELONGING TO THE COPY-    */
// RIGHT HOLDER.                                                             */
//****************************************************************************/

// Created by JBW to wrap code to support secure and non-secure sites.

function is_secure_site( URL ){
	var myURL = URL;
	var secureRE = /https/i;
	if( myURL.match( secureRE ) ){
		return true;
	} else {
		return false;
	}
}


// *** entry point ***

// Team 12660.  Temporarily removed 2/18/05 DJC.
//if( is_secure_site( document.URL ) ){
//	document.write( '<script language="Javascript" src="https://id.ancestry.com/html/script/TSpacer.js"></sc','ript>' );
//} else {
//	document.write( '<script language="Javascript" src="http://id.ancestry.com/html/script/TSpacer.js"></sc','ript>' );
//}

