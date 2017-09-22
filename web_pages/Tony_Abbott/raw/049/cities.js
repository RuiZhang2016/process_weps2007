function showMenu(menu_id)
{
	var menu = document.getElementById(menu_id);

	if (menu.style.display == "block")
	{
		menu.style.display = "none";
	}
	else
	{
		menu.style.display = "block";
	}
}