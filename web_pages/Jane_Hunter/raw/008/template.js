/************************************************************************/
/*                          template.js                                 */
/*                                                                      */
/* Generic JavaScript functions for use on the UQ template.             */
/* Version 1.0                                                          */
/* 5th October 2003                                                     */
/*                                                                      */
/************************************************************************/


// For the Quick links pulldown-menu of the left hand side menu of the site
function changepage(formObject)
{
    var url;
    
    url = formObject.options[formObject.options.selectedIndex].value;

    if(url != "empty")
        {
        window.location = url;
        url = "";
        }
}   

// For the Header Search form
function goto_url(form) 
{

    if (form.search_text.value == "") 
    {
        alert("Please enter some text and then press Search");
        return false;
    }

    var url = form.search_select[form.search_select.selectedIndex].value +
    escape(form.search_text.value);


    // Uncomment this lines if you want the current window to change
    document.location = url;

    // Uncomment this line if you want the search in a new window
    //search_window = window.open(url);

    return false;
}

// Add any more functions below