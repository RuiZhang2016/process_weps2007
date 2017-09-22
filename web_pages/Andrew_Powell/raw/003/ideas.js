//
// Various scripts for IDEAS
//


//
// obscur email addresses (inspired by Sune Karlsson's work)
//


function liame2 () {

// iterate through arguments
          address=liame2.arguments[0];
          for (var i = 1; i < liame2.arguments.length; i++){
              if (liame2.arguments[i] == 'm7i7') {
                address=liame2.arguments[i+1] + "@" + address;
                i++;
                }
              else { 
              address=liame2.arguments[i] + "." + address;
                }
              }  
  document.write( '<a href="mailto:' + address + '">' + address + '</a>' );
}

function liame () {

// iterate through arguments
          address=liame.arguments[1];
          for (var i = 2; i < liame.arguments.length; i++){
              if (liame.arguments[i] == 'm7i7') {
                address=liame.arguments[i+1] + "@" + address;
                i++;
                }
              else { 
              address=liame.arguments[i] + "." + address;
                }
              }  
  document.write( '<a href="mailto:' + address + '">' + liame.arguments[0] + '</a>' );
}


function liame3( b, a ) {
  
  document.write( '<a href="mailto:' + a + '&#64;' + b + '">' + a + 
'&#64;' + b + '</a>' );
}

