/*
This script enables FastRatings currently supported in PrintResource
function in SPTUI--[InterfaceName]/include/SPT--Common.html
The HTML half of this functionality is provided by the PrintFastRating
function in the same file.
*/

var RateResource = new Image();
var SavedRatings = new Array(); 

function SwapStars( ResourceId, NumStars, Out )
{

    Extra = 0;
    // If this was a onmouseout event we need to check which
    //  star image will be loaded
    if ( Out && SavedRatings[ ResourceId ] )
        NumStars = SavedRatings[ ResourceId ];

    // Grab the image and change it
    ImageHolder = document.images[ "Stars" + ResourceId ];
    ImageHolder.src = Interface + "/images/BigStars--" + NumStars 
                    + "_0.gif";
}

function Rate( ResourceId, NumStars )
{
    // Rate the resource
    RateResource.src = "SPT--RateResource.php?" 
                     + "F_ResourceId=" + ResourceId
                     + "&F_Rating=" + (NumStars*20);

    // Save the rating for onmouseout events
    SavedRatings[ResourceId] = NumStars;

    // Change the background image to indicate that the rating has been saved
    Holder = document.getElementById( "RatingLabelDiv" + ResourceId );
    Holder.style.color = "";
}

