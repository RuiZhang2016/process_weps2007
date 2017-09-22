// replaces all ad place holders with real ads. The placeholder should be an empty div,
// with ad id like 'adSpot1' (must start with "adSpot". The actual ad must have the same, with "swap-"
// appended, eg: "swap-adSpot1", be wrapped in a comment tag, and be an iframe ad tag only.


function adReplace(spotId, adId) {
    var spot = document.getElementById(spotId);
    var ad   = document.getElementById(adId);
    
    // iterate through the spot child nodes, find the comment, set its val as spots content
    for (var i in ad.childNodes) {
        var obj  = ad.childNodes.item(i);
        if (!obj) { continue;} 
        if (obj.nodeType == 8) { // comment
            spot.innerHTML = obj.nodeValue;
            break;
        }        
    }
        
};

function swapAllAds() {
    var d = document;
    if (!d.getElementsByTagName) return;
    divs = d.getElementsByTagName('div');
    // move all the ads up
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (div.id && div.id.indexOf('adSpot') == 0) {
            var swap = d.getElementById("swap-" + div.id);
            if (swap != null) adReplace(div.id, swap.id);
        }
        else if (div.id && div.id.indexOf('swap-adSpot') == 0) {
            // verify all ads are hidden, in case they weren't swapped
            div.style.visibility = 'hidden';
        }
    }

};

swapAllAds();
