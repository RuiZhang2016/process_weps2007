
function enableStyleSheet(title) 
{
    toggleStyleSheet(title, false);
}

function disableStyleSheet(title) 
{
    toggleStyleSheet(title, true);
}

function toggleStyleSheet(title, varDisabled) 
{
    var i, a, main;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
    {    
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) 
        {            
            if (a.getAttribute("title") == title) 
            {
                a.disabled = varDisabled;
            }
        }
    }
}
