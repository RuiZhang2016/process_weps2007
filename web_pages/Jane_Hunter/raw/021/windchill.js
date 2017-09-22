<!-- Original:  James P. Dildine (jpd@wlsmail.com) -->
<!-- Web Site:  http://www.mste.uiuc.edu/dildine -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->


function windChill(form) {
wind=eval(form.wind.value);
temp=eval(form.temp.value);
chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+ 5.81-0.25*wind)*(temp-91.4)+91.4);
chill=chill*10;
chill=Math.round(chill);
chill=chill/10;
form.windchill.value = chill;
}
