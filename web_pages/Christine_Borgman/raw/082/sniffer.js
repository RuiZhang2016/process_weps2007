<!--browser sniffer STARTS here-->


op = 0; ie4  = 0; ie5 = 0; nn4 = 0; nn6 = 0; isMac = 0;

if(document.images){

    if(navigator.userAgent.indexOf("Opera") != -1){

        op = 1;

    } else {
            ie4 = (document.all && !document.getElementById);

            nn4 = (document.layers);
          ie5 = (document.all && document.getElementById);

            nn6 = (document.addEventListener);

        	}

} 


if(navigator.userAgent.indexOf("Mac") != -1){

    isMac = 1;

}

if(op){document.write("<link rel='stylesheet' href='http://www.umich.edu/~urecord/record.css' type='text/css'>");
 
} 
 
if(ie4){document.write("<link rel='stylesheet' href='http://www.umich.edu/~urecord/record.css' type='text/css'>");
 
} 
 
if(ie5){document.write("<link rel='stylesheet' href='http://www.umich.edu/~urecord/record.css' type='text/css'>");
 
} 
 
if(nn4){document.write("<link rel='stylesheet' href='http://www.umich.edu/~urecord/recordnn.css' type='text/css'>");

}  

if(nn6){document.write("<link rel='stylesheet' href='http://www.umich.edu/~urecord/record.css' type='text/css'>");

} 

 
<!--browser sniffer ENDS here-->