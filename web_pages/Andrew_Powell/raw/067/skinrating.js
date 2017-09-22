	c0 = new Image();
	c1 = new Image();
	c2 = new Image();
	c3 = new Image();
	c4 = new Image();
	c5 = new Image();
	c6 = new Image();
	c7 = new Image();
	c8 = new Image();
	c9 = new Image();
	c10 = new Image();
               
	c0.src = "http://images.stardock.com/wc/icons/rating/rating_00.gif"; 
	c1.src = "http://images.stardock.com/wc/icons/rating/rating_01.gif";
	c2.src = "http://images.stardock.com/wc/icons/rating/rating_02.gif";
	c3.src = "http://images.stardock.com/wc/icons/rating/rating_03.gif";
	c4.src = "http://images.stardock.com/wc/icons/rating/rating_04.gif";
	c5.src = "http://images.stardock.com/wc/icons/rating/rating_05.gif";
	c6.src = "http://images.stardock.com/wc/icons/rating/rating_06.gif";
	c7.src = "http://images.stardock.com/wc/icons/rating/rating_07.gif";
	c8.src = "http://images.stardock.com/wc/icons/rating/rating_08.gif";
	c9.src = "http://images.stardock.com/wc/icons/rating/rating_09.gif";
	c10.src = "http://images.stardock.com/wc/icons/rating/rating_10.gif";
	
function ShowRatingSaved(id)
{
	var RatebtnObj = document.getElementById('Rate_btn-' + id);
	var RateCommentObj = document.getElementById('Rate_Comment-' + id);
	RateCommentObj.innerHTML = "Rating Saved!";
	RatebtnObj.innerHTML = "";
}
function SetImageMapData(id, rating, location)
{
	var elementObj = document.getElementById(id);	
	var RatebtnObj = document.getElementById('Rate_btn-' + id);
	var RateCommentObj = document.getElementById('Rate_Comment-' + id);
	
		elementObj.src = "http://images.stardock.com/wc/icons/rating/rating_"+ rating + ".gif";
		if (location == '0')
		{
			//RatebtnObj.innerHTML = "";
			RatebtnObj.className='vis_off rateskinstatus';
			RateCommentObj.innerHTML = "";
		}
		else if (location == '1')
		{
			if(rating == "00"){
				sStatusText = "&nbsp;";
			}
			if(rating == "01"){
				sStatusText = "I hate it!";
			}
			if(rating == "02"){
				sStatusText = "I hate it!";
			}
			if(rating == "03"){
				sStatusText = "I don't like it";
			}
			if(rating == "04"){
				sStatusText = "I don't like it";
			}
			if(rating == "05"){
				sStatusText = "It's ok";
			}
			if(rating == "06"){
				sStatusText = "It's ok";
			}
			if(rating == "07"){
				sStatusText = "I like it";
			}
			if(rating == "08"){
				sStatusText = "I like it";
			}
			if(rating == "09"){
				sStatusText = "I love it!";
			}
			if(rating == "10"){
				sStatusText = "I love it!"; 
			}
			RateCommentObj.innerHTML = sStatusText;
			RatebtnObj.className='vis_on rateskinstatus';
			// RatebtnObj.innerHTML = "Submit a rating.";
		}
}