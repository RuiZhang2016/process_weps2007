if (document.images) {
  ti_1		= new Image();
  ti_1.src      = "/Images/bnavnews.gif";
  ti_2  	= new Image();
  ti_2.src      = "/Images/bnavstaff.gif";
  ti_3		= new Image();
  ti_3.src      = "/Images/bnavteaching.gif";
  ti_4		= new Image();
  ti_4.src      = "/Images/bnavresearch.gif";
  ti_5		= new Image();
  ti_5.src      = "/Images/bnavservices.gif";
  ti_6		= new Image();
  ti_6.src      = "/Images/bnavlinks.gif";

  ti_1h		= new Image();
  ti_1h.src     = "/Images/bnavnewshi.gif";
  ti_2h  	= new Image();
  ti_2h.src     = "/Images/bnavstaffhi.gif";
  ti_3h		= new Image();
  ti_3h.src     = "/Images/bnavteachinghi.gif";
  ti_4h		= new Image();
  ti_4h.src     = "/Images/bnavresearchhi.gif";
  ti_5h		= new Image();
  ti_5h.src     = "/Images/bnavserviceshi.gif";      
  ti_6h		= new Image();
  ti_6h.src     = "/Images/bnavlinkshi.gif";
}

function imgOn(imgName)
{
  if(document.images)
  {
    document[imgName].src = eval(imgName + ".src");
  }
}

function imgOff(imgName)
{
  if(document.images)
  {
    document[imgName].src = eval(imgName + "h.src");
  }
}


