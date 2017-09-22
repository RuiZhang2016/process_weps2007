//Global Variables
	var arraymax;
	var arraycount;
	var element;

	function addPhoto(filename, aCovers) {
	//
	//This procedure will load a photo image into the image array
	//
	//Set the name property
		this.name = filename;
	//Call the function to preload the image
		imageLoad(filename, aCovers);
	//Return the picture
		return this;
	}
	
	function imageLoad(filename, aCovers) {
	//
	//This function will add the filename to the array
	//
	//Create a new element of the array
		aCovers[aCovers.length] = filename;
	}
	
	function imageSwap(direc, webpage) {
	//
	//This function will be called from the buttons to change the pikky
	//
	
	//Check if we are at the end of the Array
		if (direc=="down") {
			if (element!=0) {
				element-=1;
			}
		}
		else {
			if (element!=arraymax) {
				element+=1;
			}
		}
		
	//Set the picture
		webpage.cover.src = aCovers[element];
		
	}
	function loadImage(aImage,im, sBack){
		aImage[im]=new Image();
		aImage[im][0]=new Image();
		aImage[im][0].src=sBack+"images/"+im+"0.jpg";
		aImage[im][1]=new Image();
		aImage[im][1].src=sBack+"images/"+im+"1.jpg";
	}
	function imageStart(aImage,sBack){
		loadImage(aImage,"chronicle",sBack);
		loadImage(aImage,"contactus",sBack);
		loadImage(aImage,"books",sBack);
		loadImage(aImage,"editors", sBack);
		loadImage(aImage,"lists",sBack);
		loadImage(aImage,"aboutus",sBack);
		loadImage(aImage,"awards",sBack);
		loadImage(aImage,"links",sBack);
		loadImage(aImage,"webrings",sBack);
		loadImage(aImage,"short",sBack);
		loadImage(aImage,"tv",sBack);
		loadImage(aImage,"artbooks",sBack);
		loadImage(aImage,"series",sBack);
	}
	function chronicleImageStart(aImage,sBack){
		loadImage(aImage,"current",sBack);
		loadImage(aImage,"previous",sBack);
		loadImage(aImage,"fiction",sBack);
		loadImage(aImage,"sample", sBack);
		loadImage(aImage,"interviews",sBack);
		loadImage(aImage,"aboutus",sBack);
		loadImage(aImage,"release",sBack);
		loadImage(aImage,"forums",sBack);
		loadImage(aImage,"webrings",sBack);
		loadImage(aImage,"archive",sBack);
		loadImage(aImage,"contactus",sBack);
		loadImage(aImage,"links",sBack);
		loadImage(aImage,"diary",sBack);
	}

function ImageButtons(dPage,sBack)
{
	dPage.write("<tr>");
	dPage.write("<td width=\"240\" align=\"center\">");
	dPage.write("<form id=\"form1\" name=\"form1\">");
	dPage.write("<input type=\"button\" onclick=\"imageButton('down')\" value=\"&lt;&lt;\" id=\"button1\" name=\"button1\" />");
	dPage.write("&nbsp;&nbsp;Covers&nbsp;&nbsp;");
	dPage.write("<input type=\"button\" onclick=\"imageButton('up')\" value=\"&gt;&gt;\" id=\"button2\" name=\"button2\" />");
	dPage.write("</form>");
	dPage.write("</td>");
	dPage.write("<td>");
	dPage.write("&nbsp;");
	dPage.write("</td>");
	dPage.write("</tr>");
}
	function addPhotoPlus(sFilename, aCovers, sDesc, aDesc, iHeight, aHeight, iWidth, aWidth)
	{
					
	//
	//This procedure will load a photo image into the image array
	//
	//Set the name property
		this.name = sFilename;
					
	//Call the function to preload the image
		aCovers[arraycount] = sFilename;
						
	//Now add the description
		aDesc[arraycount] = sDesc;
						
	//Dimensions
		aHeight[arraycount]=iHeight;
		aWidth[arraycount]=iWidth;
		
	//Increment
		arraycount+=1;

	//Return the picture
		return this;
	}

	function imageSwapPlus(direc, webpage) {
	//
	//This function will be called from the buttons to change the pikky
	//
		var sHTML;
	//Check if we are at the end of the Array
		if (direc=="down") {
			if (element!=0) {
				element-=1;
			}
		}
		else {
			if (element!=arraymax) {
				element+=1;
			}
		}
							
		sHTML="<img src=\""+aCovers[element]+"\" alt=\""+aDesc[element]+"\" border=\"0\" height=\""+aHeight[element]+"\" width=\""+aWidth[element]+"\" /><br />"
		imageCount.innerText='Image '+(element+1)+' of '+(arraymax+1);
		imageJPG.innerHTML = sHTML;
		imageDescription.innerText=aDesc[element];
	}
