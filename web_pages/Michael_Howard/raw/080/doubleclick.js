// dbl_ord is set in scripts.js (once per page)
// other variables are set inline
var dbl_profile = get_oas_query();
dbl_profile = dbl_profile.replace(/&/g,';'); // change ampersands to semicolons for doubleclick
var dbl_src = "http://ad.doubleclick.net/adj/linkedin.dart/" + dbl_page + ";" + dbl_profile + ";tile=" + dbl_tile + ";dcopt=ist;sz=" + dbl_sz + ";ord=" + dbl_ord +"?";
document.write('<script src="' + dbl_src + '" type="text/javascript"><\/script>');