function trim(objText)
{
  objText= objText.replace(/^\s+|\s+$/g,""); 
  return objText;
}
//get the path name and convert it to lower case
var theURLPath = window.location.pathname.toLowerCase();
//clean up the path by replacing //+ with /
theURLPath = theURLPath.replace(/\/(\/)*/g, "/");
theURLPath = trim(theURLPath);
//generate the random number
var rnum=Math.floor(99999999 * Math.random());

//split the folders into an array
sectLevel=theURLPath.split("/"); 

//for omniture
var firstFolderSect="";
var hierSections = "tsg";
//check if this is root folder or domain only
if (sectLevel.length > 1 && sectLevel[1] != "" && sectLevel[1] != " " && sectLevel[1].lastIndexOf('.') == -1)
{
	//not root, assign first folder
	firstFolderSect = sectLevel[1];
	//hierarchy variable, default it to first folder
	hierSections = hierSections + "," + sectLevel[1];
	//loop through the directory path from url
	for (var isect2 = 2; isect2 < sectLevel.length; isect2 ++)    
	{
		//if it is not empty and not a file then add it to the list
		if (sectLevel[isect2] != "" && sectLevel[isect2] != " " &&  sectLevel[isect2].lastIndexOf('.') == -1)
		{
			hierSections = hierSections + "," + sectLevel[isect2]        
		}
	}
}
else
{
	//is root, set it to static name
	firstFolderSect = "welcomepage";
}