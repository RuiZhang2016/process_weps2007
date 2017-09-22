		var iCurTab = 3;  //{{CURTAB}}

		<!--{{beg:header:script}}-->
		function ResizeQ()
		{
			if (navigator.appName != "Netscape")
				document.QForm.q.size = 25;
		}
		var imgAdvS0 = new Image(20,22);         imgAdvS0.src = "/images/lcd-advanced0.gif";
		var imgAdvS1 = new Image(20,22);         imgAdvS1.src = "/images/lcd-advanced1.gif";
		var imgCart0 = new Image(32,31);         imgCart0.src = "/images/btn-cart0.gif";
		var imgCart1 = new Image(32,31);         imgCart1.src = "/images/btn-cart1.gif";

		function Rollover (imagename,objectsrc)
		{
			if (document.images)
				document.images[imagename].src = eval (objectsrc   + ".src");
		}
		function CART(strURL)
		{
			window.open(strURL,'CART','menubar=yes,toolbar=yes,location=no,status=yes,scrollbars=yes,resizable=yes,width=520,height=450');
		}
		function POPUP(strURL,strTag)
		{
			window.open(strURL,strTag,'menubar=yes,toolbar=yes,location=yes,status=yes,scrollbars=yes,resizable=yes,toolbar=no,width=645,height=550');
		}
		<!--{{end:header:script}}-->

		<!--{{beg:navscript}}-->
		var imgTab1Over = new Image(100,25);    imgTab1Over.src = "/images/tab1over.gif";
		var imgTab2Over = new Image(100,25);    imgTab2Over.src = "/images/tab2over.gif";
		var imgTab3Over = new Image(100,25);    imgTab3Over.src = "/images/tab3over.gif";
		var imgTab4Over = new Image(100,25);    imgTab4Over.src = "/images/tab4over.gif";
		var imgTab5Over = new Image(100,25);    imgTab5Over.src = "/images/tab5over.gif";

		var imgTab1Off  = new Image(100,25);    imgTab1Off.src  = "/images/tab1off.gif";
		var imgTab2Off  = new Image(100,25);    imgTab2Off.src  = "/images/tab2off.gif";
		var imgTab3Off  = new Image(100,25);    imgTab3Off.src  = "/images/tab3off.gif";
		var imgTab4Off  = new Image(100,25);    imgTab4Off.src  = "/images/tab4off.gif";
		var imgTab5Off  = new Image(100,25);    imgTab5Off.src  = "/images/tab5off.gif";

		function KNAV (iTabNum, Action)
		{
			if (Action == 'in')
			{
				if (iTabNum != iCurTab)
					document.images["Tab"+iTabNum+"img"].src = eval("imgTab"+iTabNum+"Over").src;
			}
			else if (Action == 'out')
			{
				if (iTabNum != iCurTab)
					document.images["Tab"+iTabNum+"img"].src = eval("imgTab"+iTabNum+"Off").src;
			}
		} // KNAV
		<!--{{end:navscript}}-->

