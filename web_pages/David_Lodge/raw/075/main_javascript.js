// JavaScript Document

// Redirects Google images to the correct page minus the google images bullshit on top.


//Banner Rotation code!
var min_num = 1;  
var max_num = 2;  // Changed to 5
var diff = max_num-min_num+1 ;  
var rnd_number=1; 
//the refresh delay in seconds 
var r_delay = 6;  
//one for each image 
var banner_image = new Array(2); 
banner_image[1]="http://www.moviesonline.ca/graphics_2/chumscrubbers.gif"; 
banner_image[2]="http://www.moviesonline.ca/graphics_2/bloodrayne.gif"; 
banner_image[3]="http://www.moviesonline.ca/graphics_2/dick_jane.gif"; 
banner_image[4]="http://www.moviesonline.ca/graphics_2/munich.gif"; 
banner_image[5]="http://www.moviesonline.ca/graphics_2/dudes_top2005.gif"; 
banner_image[6]="http://www.moviesonline.ca/graphics_2/dudes_top2005.gif"; 
  
//one for each image 
var banner_link = new Array(2); 
banner_link[1]="http://www.moviesonline.ca/movienews_6902.html"; 
banner_link[2]="http://www.moviesonline.ca/movienews_6760.html"; 
banner_link[3]="http://www.moviesonline.ca/movienews_6754.html"; 
banner_link[4]="http://www.moviesonline.ca/movienews_6754.html"; 
banner_link[5]="http://www.moviesonline.ca/movie_review_detail.php?id=1243"; 
banner_link[6]="http://www.moviesonline.ca/movienews_6844.html"; 
 
  
//one for each image leave as "" for current window 
var banner_target = new Array(2); 
banner_target[1]=""; 
banner_target[2]=""; 
banner_target[3]=""; 
banner_target[4]=""; 
banner_target[5]="";  
banner_target[6]=""; 
r_delay=r_delay*1000; 
  
function get_img()
{ 
rnd_number=Math.floor(Math.random()*diff + min_num);  
eval("document.images.the_banner.src=banner_image[" + rnd_number + "]"); 
//remove this line if you only want the banner rotated at load 
setTimeout("get_img();",r_delay); 
} 

var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'name','height=400,width=400');
	if (window.focus) {newwindow.focus()}
}


// -->  