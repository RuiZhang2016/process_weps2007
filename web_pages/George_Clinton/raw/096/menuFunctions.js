var openMenu ='empty';
var openSubMenu='empty';

/** [ID,Name,URL,itemType,subMenuOf,]

Types:
	type1: red shading
	type2 : Main menu Item with out sub menu
	type3 : Main menu item with submenu and image
	type4 : subMenu Item
**/
 /**var menuItems = [
	[1,"OUR GUARANTEE ","http://www.gotvape.com/product.guarantee.php","type1",0],
    [2,"Low Price Guarantee","http://www.gotvape.com/guarantee.php","type2",0 ],
    [3,"Product Guarantee","http://www.gotvape.com/product.guarantee.php","type2",0 ],
    [4,"VAPORIZER STORE","http://www.gotvape.com/store/index.php","type1",0 ],
    [5,"Top rated vaporizers","http://vaporizer.gotvape.com/","type2",0  ],
    [6,"Volcano Vaporizer","http://www.gotvape.com/store/Volcano_Vaporizer.php","type3",5  ],
    [7,"Air One 4.0 Vaporizer","http://www.gotvape.com/store/vapir_air_one3_vaporizer.php","type3",5],

	];
All the functions for dynalicity of the menu*/
	
	function showSubMenu(number,cell,event,isChildMenu,parent){
	
		
		/*Close previous open menu if any*/
		if ( isChildMenu!=1 && openMenu !='empty' && openMenu !=number )
		{
			hideToolTip(openMenu);
		}
		else if (isChildMenu==1 && openSubMenu!='empty' && openSubMenu != number)
		{
			hideToolTip(openSubMenu);
		}
		if (isChildMenu==null && openSubMenu!='empty')
		{
			hideToolTip(openSubMenu);
		}
		
		/* Higlight the selected menu item */
		document.getElementById("dmI"+number).className='subHeaderFocus';
		document.getElementById("link"+number).className='subLinkFocus';

		/*Find the coordinates of the selected cell */
		if (cell!='none'){
			curleft = 0; 
			curtop = 0;
			obj= cell;
			if (obj.offsetParent) {
				curleft = obj.offsetLeft;
				curtop = obj.offsetTop;
				while (obj= obj.offsetParent) {
					curleft += obj.offsetLeft;
					//curtop += obj.offsetTop;
					}
				}
			/*set the image of the selected cell and display the submenu in the computed coordinates */
			document.getElementById("img"+number).src="/MenuFinal/image/arrv_anim_1o.gif";
			document.getElementById("dmI"+number+"Sub").style.left=curleft+cell.offsetWidth;
			document.getElementById("dmI"+number+"Sub").style.top=  event.clientY + 
document.body.scrollTop-12;//cell.offsetTop;
			if (isChildMenu==1)
				openSubMenu=number;			
			else
				openMenu =number;

			if (parent!=null)
				document.getElementById("dmI"+parent+"Sub").style.visibility = "visible"
	
			document.getElementById("dmI"+number+"Sub").style.visibility = "visible";

					
			}
	}
	
	function hideToolTip(number){
		/*set the the selected to normal view */

		document.getElementById("dmI"+number).className='';
		document.getElementById("link"+number).className='subHeaderStyle';

		/*If the selected cell had a menu then unhide it*/
		if(document.getElementById("img"+number)!=null){
			document.getElementById("img"+number).src="/MenuFinal/image/arr_double_1.gif";
			document.getElementById("dmI"+number+"Sub").style.visibility = "hidden";
			document.getElementById("link"+number).className="subHeaderStyle";
			openMenu='empty';
		}

	} 
	
	
	
	function closeSubMenu(number,event,childArray,root) {
	
	
			curleft = 0; 
			curtop = 0;
			curleft2 = 0;
			curtop2 = 0;
			childOpen = false;
			obj=document.getElementById("dmI"+number+"Sub");
			
			if (obj.offsetParent) {
				curleft = obj.offsetLeft;
				curtop = obj.offsetTop;
				while (obj= obj.offsetParent) {
					curleft += obj.offsetLeft;
					curtop = curtop+ obj.offsetTop+ document.body.scrollTop;
					}
				}
	
			curleft2 = curleft+document.getElementById("dmI"+number+"Sub").offsetWidth;
			
			curtop2 = curtop +document.getElementById("dmI"+number+"Sub").offsetHeight ;
			x = event.clientX;
			
			y = event.clientY +( document.body.scrollTop*2);
			

			if (childArray!=null)
			{
				var i=0;
				for(i=0;i<childArray.length;i++)
				{

					if (document.getElementById("dmI"+childArray[i]+"Sub").style.visibility == "visible")
					{
						childOpen = true;
						break;
					}
					
				}
			}
			if ( childOpen== false && !(x > curleft && x < curleft2 && y > curtop && y <curtop2 )) 
				{ 
				hideToolTip(number);
					if (root!=null)
						hideToolTip(root);
				
				}
				
	}
	
	function menuItemFocus(number)
	{
	/* Higlight the selected menu item */
		document.getElementById("dmI"+number).className='subHeaderFocus';
		document.getElementById("link"+number).className='menuItemFocus';

	}
	function menuItemReset(number)
	{
	/*set the the selected to normal view */
		document.getElementById("dmI"+number).className='';
		document.getElementById("link"+number).className='menuItemStyle ';
	}
	