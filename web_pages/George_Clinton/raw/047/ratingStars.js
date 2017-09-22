// this function will translate a numeric rating to stars:

function seeStars(rating, maxRating)
{
    var i;
	document.write("<table border='0' cellspacing='0' cellpadding='0' height='8'><tr>");
	for(i=0; i < rating; i++)
	{
		document.write("<td><img src='/i/swap/darkStar.gif' width='8' height='8'></td>");
	}
	for(i=rating; i < maxRating; i++)
	{
		document.write("<td><img src='/i/swap/lightStar.gif' width='8' height='8'></td>");
	}
	document.write("</tr></table>");
}