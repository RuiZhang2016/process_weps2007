var Today = new Date();
var Year = Today.getYear();
var COPYRIGHT = "&copy; Copyright, 1999-";

if(Year >= 100 && Year <= 1999){
     Year = Year + 1900;
    }

document.write(COPYRIGHT + Year + ", United Negro College Fund, Inc. All rights reserved.");