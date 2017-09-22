// JS FILE TO DO MPU ADVERTS
// AD SPACE ID
var mpuspace = "mpu";

// SET UNIQUE TRANSACTION ID
var d = new Date();
var mputransid = d.getTime();

// WRITE AD SCRIPT TAG 
if (mpuls == "t") {

  // USER LOGGED IN
  document.write("<scr"+"ipt language='JavaScript' src='http://ads.telegraph.co.uk/js.ng/site=" + mpusitename + "&spaceid=" + mpuspace + mpusizes + "&ls=" + mpuls + "&transactionID=" + mputransid + "&Section=" + mpupageclass + "&view=" + mpuview + "&gn=" + mpugn + "&postcode=" + mpupostcode + "&ag=" + mpuag + "&ms=" + mpums + "&city=" + mpucity + "&country=" + mpucountry + "&xml=" + mpuxml + "'></scr"+"ipt>");

} else {

  // USER NOT LOGGED IN
  document.write("<scr"+"ipt language='JavaScript' src='http://ads.telegraph.co.uk/js.ng/site=" + mpusitename + "&spaceid=" + mpuspace + mpusizes + "&ls=" + mpuls + "&transactionID=" + mputransid + "&Section=" + mpupageclass + "&view=" + mpuview + "&xml=" + mpuxml + "'></scr"+"ipt>");

} 