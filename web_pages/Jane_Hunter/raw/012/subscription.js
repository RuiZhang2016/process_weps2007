function sendToForm()
{
    var s =  document.forms['subscribeform'];
	var v_form = escape(s.NavList.options[s.NavList.selectedIndex].value);
    v_Link="&i_name=" + escape(s.iSubName.value);

    if(v_form == "FAD")
    {
        location.href="https://secure.palmcoastd.com/pcd/document?ikey=05547GFAD" + v_Link;
    }
    else if(v_form == "FAC")
    {
        location.href="https://secure.palmcoastd.com/pcd/document?ikey=05547GFAC" + v_Link;
    }
    else if(v_form == "FAI")
    {
        location.href="https://secure.palmcoastd.com/pcd/document?ikey=05547GFAI" + v_Link;
    }
    else if(v_form == "GF2")
    {
        location.href="https://secure.palmcoastd.com/pcd/drenew?ikey=05547GGF2";
    }
    else
    {
        location.href="http://www.foreignaffairs.org/Subscribe/Military.html";
    }
}