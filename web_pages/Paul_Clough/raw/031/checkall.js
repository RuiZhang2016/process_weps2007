//Function: 	checkall()
//Description: 	This script checks and unchecks boxes on a form
//Author: 		Antje Parnitzke
//Date: 		07.07.2005

function checkall()
{
	var parent = document.forms[0].check;
	var target = document.forms[0].eprintid;
	
	if (parent.checked == true)
	{
		for (var i=0; i < target.length; i++)
		{
			target[i].checked = true;
		}
	}else
	{
		for (var i=0; i < target.length; i++)
		{
			target[i].checked = false;
		}
	}
}
