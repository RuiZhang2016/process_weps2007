 


// should convert this file to a more generic mouseover/out/down and attached and configured dynamically

var imgOnSufix = "_on.png";

img1_on = new Image;
img1_off = new Image;
img1_on.src = "/img/topnav/tab_downloads_over.png";
img1_off.src = "/img/topnav/tab_downloads.png";

img2_on = new Image;
img2_off = new Image;
img2_on.src = "/img/topnav/tab_textfun_over.png";
img2_off.src = "/img/topnav/tab_textfun.png";

img3_on = new Image;
img3_off = new Image;
img3_on.src = "/img/topnav/tab_mythumbplay_over.png";
img3_off.src = "/img/topnav/tab_mythumbplay.png";

img4_on = new Image;
img4_off = new Image;
img4_on.src = "/img/topnav/tab_perks_over.png";
img4_off.src = "/img/topnav/tab_perks.png";

img5_on = new Image;
img5_off = new Image;
img5_on.src = "/img/topnav/sub_home_over.png";
img5_off.src = "/img/topnav/sub_home.png";

img6_on = new Image;
img6_off = new Image;
img6_on.src = "/img/topnav/sub_ringtones_over.png";
img6_off.src = "/img/topnav/sub_ringtones.png";

img7_on = new Image;
img7_off = new Image;
img7_on.src = "/img/topnav/sub_graphics_over.png";
img7_off.src = "/img/topnav/sub_graphics.png";

img8_on = new Image;
img8_off = new Image;
img8_on.src = "/img/topnav/sub_games_over.png";
img8_off.src = "/img/topnav/sub_games.png";

img9_on = new Image;
img9_off = new Image;
img9_on.src = "/img/topnav/sub_locker_over.png";
img9_off.src = "/img/topnav/sub_locker.png";

img10_on = new Image;
img10_off = new Image;
img10_on.src = "/img/topnav/sub_wishlist_over.png";
img10_off.src = "/img/topnav/sub_wishlist.png";

img11_on = new Image;
img11_off = new Image;
img11_on.src = "/img/topnav/sub_tellafriend_over.png";
img11_off.src = "/img/topnav/sub_tellafriend.png";

img12_on = new Image;
img12_off = new Image;
img12_on.src = "/img/topnav/sub_accountsettings_over.png";
img12_off.src = "/img/topnav/sub_accountsettings.png";

function swapImg(imgField,newImg)	{
	var imgSrc = document[imgField].src;
	if (imgSrc.lastIndexOf(imgOnSufix) == -1) {
		document[imgField].src = eval(newImg+".src");
	}
}
