oM=new makeCM("oM");
oM.resizeCheck=1;
oM.rows=1;
oM.onlineRoot="http://www.jesus.org.uk";
oM.offlineRoot="";
oM.pxBetween =1; 
oM.fillImg="/images/cm_fill.gif";
oM.fromTop=69;
oM.fromLeft=101;
oM.wait=400;
oM.zIndex=100;
oM.useBar=0;
oM.barWidth="750";
oM.barHeight="menu";
oM.barX=0;oM.barY="menu";
oM.barClass="clBar";
oM.barBorderX=0;
oM.barBorderY=0;

oM.level[0]=new cm_makeLevel(80,16,"clT","clTover",1,1,"clB",0,"bottom",0,0,0,0,0);
oM.level[0].borderY=0;
oM.level[0].borderX=0;

oM.level[1]=new cm_makeLevel(130,20,"clS","clSover",1,1,"clB",0,"right",0,0,"/vault/menu_arrow.gif",10,10);
oM.level[1].offsetX=-2
oM.level[1].offsetY=-1
oM.level[1].borderClass="clLevel1border"
oM.level[1].borderX=0 
oM.level[1].borderY=0
oM.level[1].roundBorder=1;

oM.level[2]=new cm_makeLevel(120,20,"clS2","clS2over");
oM.level[2].borderClass="clLevel2border"

oM.level[3]=new cm_makeLevel(120,20);
oM.level[3].borderClass="clLevel3border"


oM.makeMenu('top1','','Video','/vault/visual_index.shtml')
	oM.makeMenu('sub11','top1','&nbsp;24-7 Prayer Video','/vault/jgen_247video.shtml')
	oM.makeMenu('sub12','top1','&nbsp;Jesus Centres Video','/vault/jcentres_about_video.shtml')
	oM.makeMenu('sub13','top1','&nbsp;Glad&nbsp;to&nbsp;be&nbsp;Christian&nbsp;','/vault/ja_about_video.shtml')
	oM.makeMenu('sub15','top1','&nbsp;Multiply Network Video','/vault/multiply_about_video.shtml')
	oM.makeMenu('sub16','top1','&nbsp;NCCC Video','/vault/nccc_about_video.shtml')
	//oM.makeMenu('sub17','top1','&nbsp;On DVD & Video','/vault/visual_dvd.shtml')

oM.makeMenu('top2','','Library','/vault/library_index.shtml')
	oM.makeMenu('sub21','top2','&nbsp;Free e-Books','/vault/library_ebooks_index.shtml')
	oM.makeMenu('sub22','top2','&nbsp;Jesus Army e-Books','/vault/library_jabooks_index.shtml')
	oM.makeMenu('sub23','top2','&nbsp;Jesus Life &amp; Streetpaper','/vault/library_periodical_index.shtml')
	oM.makeMenu('sub24','top2','&nbsp;Hot Topics','/vault/library_hottopics.shtml')
	oM.makeMenu('sub25','top2','&nbsp;What others say','/vault/library_linkedarticles.shtml')
	oM.makeMenu('sub26','top2','&nbsp;Bible Cards','/vault/library_biblecards.shtml')
	oM.makeMenu('sub27','top2','&nbsp;Multilingual Bible','/vault/library_bible_index.shtml')
	oM.makeMenu('sub28','top2','&nbsp;More articles','/vault/library_more_index.shtml')
		oM.makeMenu('sub281','sub28','&nbsp;Magazine','/ja/mag_index.shtml')
		oM.makeMenu('sub282','sub28','&nbsp;The Network','http://www.multiply.org.uk/multiply/articles_index.shtml')
		oM.makeMenu('sub283','sub28','&nbsp;Community','http://www.newcreation.org.uk/nccc/articles_index.shtml')
		oM.makeMenu('sub284','sub28','&nbsp;Jesus Centres','http://www.jesuscentre.org.uk/heartcry/articles_index.shtml')

oM.makeMenu('top3','','Audio','/vault/audio_index.shtml')
oM.makeMenu('sub31','top3','&nbsp;MP3 Downloads','/vault/audio_mp3_index.shtml')
//	oM.makeMenu('sub32','top3','&nbsp;Songs & Lyrics','/vault/audio_songs_index.shtml')

oM.makeMenu('top4','','Images','/vault/images_index.shtml')
	oM.makeMenu('sub41','top4','&nbsp;Desktop Wallpaper','/vault/images_wallpaper.shtml')
	oM.makeMenu('sub42','top4','&nbsp;Photo Galleries','/vault/images_galleries.shtml')

oM.makeMenu('top5','','Freeware','/vault/freeware_index.shtml')
//	oM.makeMenu('sub51','top5','&nbsp;Direct Downloads','/vault/downloads_index.shtml')
	oM.makeMenu('sub52','top5','&nbsp;Bible','/vault/freeware_bible.shtml')
	oM.makeMenu('sub53','top5','&nbsp;Business Software','/vault/freeware_business.shtml')
	oM.makeMenu('sub54','top5','&nbsp;Email','/vault/freeware_email.shtml')
	oM.makeMenu('sub57','top5','&nbsp;Fun','/vault/freeware_fun.shtml')
	oM.makeMenu('sub58','top5','&nbsp;Graphics Software','/vault/freeware_graphics.shtml')
	oM.makeMenu('sub59','top5','&nbsp;Images','/vault/freeware_images.shtml')
	oM.makeMenu('sub5a','top5','&nbsp;PDF Tools','/vault/freeware_pdf.shtml')
	oM.makeMenu('sub5b','top5','&nbsp;Sound & Multimedia','/vault/freeware_sound.shtml')
	oM.makeMenu('sub5c','top5','&nbsp;Speech Software','/vault/freeware_speech.shtml')
	oM.makeMenu('sub5d','top5','&nbsp;Text & Wordprocessing','/vault/freeware_text.shtml')
	oM.makeMenu('sub5e','top5','&nbsp;Web Related','/vault/freeware_web.shtml')
	oM.makeMenu('sub5f','top5','&nbsp;For Webmasters','/vault/freeware_webmasters.shtml')
	oM.makeMenu('sub5g','top5','&nbsp;Windows Enhancements','/vault/freeware_win.shtml')
	oM.makeMenu('sub5h','top5','&nbsp;Windows Tweaks & Utils','/vault/freeware_tweaks.shtml')
	oM.makeMenu('sub5i','top5','&nbsp;Other Freeware Sites','/vault/freeware_sites.shtml')

oM.makeMenu('top6','','Searches','/vault/searches_index.shtml')
	oM.makeMenu('sub61','top6','&nbsp;Open Directory','/pod')
	oM.makeMenu('sub611','sub61','&nbsp;Entire Directory','/pod')
	oM.makeMenu('sub612','sub61','&nbsp;Christianity section','/pod/Society/Religion_and_Spirituality/Christianity/')
	oM.makeMenu('sub62','top6','&nbsp;Select Your Search','/vault/searches_select.shtml')
	oM.makeMenu('sub63','top6','&nbsp;Search the Bible','/bible')
	oM.makeMenu('sub64','top6','&nbsp;Site Search','/vault/searches_site.shtml')
	oM.makeMenu('sub65','top6','&nbsp;Shop, Books, CDs','/shop/search.html','_blank')

oM.makeMenu('top7','','Links','/vault/links_index.shtml')
//	oM.makeMenu('sub70','top7','&nbsp;J Generation','/vault/links_jgen.shtml')
	oM.makeMenu('sub71','top7','&nbsp;Christian Communities','http://www.newcreation.org.uk/nccc/links_index.shtml')
	oM.makeMenu('sub72','top7','&nbsp;Revival','/vault/links_revival.shtml')
	oM.makeMenu('sub73','top7','&nbsp;Hot Links','/vault/links_hot.shtml')
	oM.makeMenu('sub74','top7','&nbsp;Suggest a Link','/vault/links_suggest.shtml')
	oM.makeMenu('sub75','top7','&nbsp;Link to us','/vault/links_images.shtml')

oM.menuPlacement="left"

oM.construct()