var icstring ="://www.ic-live.com/goat.php?cID=1204&cdid=2713&campID=8";
var pageAction, sale, price, sku, order_code, currency_id, user_defined1, user_defined2, urlA, prefix; var refVar = (document.referrer); var locURL = location.href; var locHttp = locURL.split(":")[0];
                                                                                                                                                            
if (!sale) { sale=""; }
if (!price) { price=""; }
if (!sku) { sku=""; }
if (!order_code) { order_code=""; }
if (!currency_id) { currency_id=""; }
if (!user_defined1) { user_defined1=""; }
if (!user_defined2) { user_defined2=""; }
                                                                                                                                                            
if (locHttp.toLowerCase( ) == "https")  { prefix="https"+icstring+"";} if (locHttp.toLowerCase( ) == "http")  { prefix="http"+icstring+"";}
                                                                                                                                                            
if (pageAction > 0)  {
                                                                                                                                                            
urlA = "<img src= '"+prefix+"&convID="+pageAction+"&sl="+sale+"&convP="+price+"&curID="+currency_id+"&ordID="+escape(order_code)+"&ud1="+escape(user_defined1)+"&ud2="+escape(user_defined2)+"&sku="+escape(sku)+"&refVar="+escape(refVar)+"' height='1' width='1'>"; ; } else  {
                                                                                                                                                            
urlA = "<img src = '"+prefix+"&refVar="+escape(refVar)+"' height = '1' width = '1'>";
                                                                                                                                                            
}
document.write(urlA);
