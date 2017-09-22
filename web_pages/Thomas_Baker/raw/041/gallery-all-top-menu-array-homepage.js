menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
effect = "Fade(duration=0);Alpha(style=0,opacity=88);Shadow(color='#003366', Direction=135, Strength=10)"

timegap=500
followspeed=5
followrate=40
suboffset_top=4;
suboffset_left=6;
closeOnClick = true

style1=[
"white","","white","","000000",10,"bold","bold",
"verdana,arial,helvetica,sans-serif",0,"",,
"66ffff","000099","","","","ffffff","000099","navy",
]

style2=[
"black","white","black","gold","",10,"normal","bold",
"verdana,arial,helvetica,sans-serif",2,"/nincludes/arrow.jpg",
,"66ffff","000099","","","","ffffff","000099","",
]

addmenu(menu=["mainmenu",
113,30,160,,"",style1,1,"left",,,1,,,,,,,,,,
,"<font class=font12bw>arts marketplace<font color=#006699> ></font></font>","show-menu=marketplace","http://wwar.com/artslocator/","Marketplace",0
,"<font class=font12bw>artist portfolios<font color=#006699> ></font></font>","show-menu=artistPortfolios","http://www.absolutearts.com/portfolios/","Artist Portfolios",0
,"<font class=font12bw>gallery portfolios<font color=#006699> ></font></font>","show-menu=galleryPortfolios","http://galleries.absolutearts.com/galleries/alphabetized.html","Gallery Portfolios",0
,"<font class=font12bw>arts news<font color=#006699> ></font></font>","show-menu=artsNews","http://www.absolutearts.com","Arts News",0
,"<font class=font12bw>arts search<font color=#006699> ></font></b></font>","show-menu=artsSearch","http://wwar.com/browse.html","Search the Arts",0
])

addmenu(menu=["marketplace",
,,170,1,,style2,0,"left",effect,0,,,,,,,,,,,
,"Myabsolutearts","http://www.absolutearts.com/myabsolutearts/",,,0
,"Contemporary Art","show-menu=artForSale",,,0
,"Premiere Artist Portfolios","show-menu=marketPremiere",,,0
,"Artist Portfolios","show-menu=marketPortfolios",,,0
,"Gallery Portfolios","show-menu=marketGalleries",,,0
,"Art History","http://wwar.com/arthistory/",,,0
,"Discussion Forums","http://christo.wwar.com/cgi-bin/artsforum/discus.cgi",,,0
,"Arts Locator","http://www.wwar.com/artslocator/",,,0
])

addmenu(menu=["marketPremiere",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Advanced Search", "http://www.absolutearts.com/cgi-bin/portfolio/art/search-by-all.cgi",,,0
,"Newest Artwork","http://www.absolutearts.com/portfolio/newest/index.html",,,0
,"Alphabetized","http://www.absolutearts.com/portfolio/premiere-portfolios/",,,0
,"Medium - Sorted A - Z","http://www.absolutearts.com/portfolio/medium.html",,,0
,"Medium - Sorted by Theme","http://www.absolutearts.com/portfolio/media/",,,0
,"Price","http://www.absolutearts.com/portfolio/price.html",,,0
,"Size","http://www.absolutearts.com/portfolio/size.html",,,0
,"Theme","http://www.absolutearts.com/portfolio/themes/premiere-portfolios/",,,0
,"Subject Matter","http://www.absolutearts.com/portfolio/themes/premiere-portfolios/",,,0
,"Country","http://www.absolutearts.com/portfolio/countries/",,,0
,"Visual Arts Cafe","http://wwar.com/forums.html",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
])

addmenu(menu=["marketPortfolios",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Advanced Search", "http://www.absolutearts.com/cgi-bin/portfolio/art/search-by-all.cgi",,,0
,"Newest Artwork","http://www.absolutearts.com/portfolio/newest/index.html",,,0
,"Alphabetized","http://www.absolutearts.com/portfolio/alphabetized.html",,,0
,"Medium - Sorted A - Z","http://www.absolutearts.com/portfolio/medium.html",,,0
,"Medium - Sorted by Theme","http://www.absolutearts.com/portfolio/media/",,,0
,"Price","http://www.absolutearts.com/portfolio/price.html",,,0
,"Size","http://www.absolutearts.com/portfolio/size.html",,,0
,"Theme","http://www.absolutearts.com/portfolio/themes/",,,0
,"Subject Matter","http://www.absolutearts.com/portfolio/themes/",,,0
,"Country","http://www.absolutearts.com/portfolio/countries/",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
])

addmenu(menu=["marketGalleries",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Alphabetized","http://galleries.absolutearts.com/galleries/alphabetized.html",,,0
,"Artists Represented","http://galleries.absolutearts.com/galleries/alphabetized/artists/",,,0
,"Medium","http://galleries.absolutearts.com/galleries/medium.html",,,0
//,"Medium - Sorted by Theme","http://galleries.absolutearts.com/galleries/media/",,,0
,"Price","http://galleries.absolutearts.com/galleries/price.html",,,0
,"Size","http://galleries.absolutearts.com/galleries/size.html",,,0
,"Theme","http://galleries.absolutearts.com/galleries/themes/artwork/",,,0
,"Subject Matter","http://galleries.absolutearts.com/galleries/themes/artwork/",,,0
,"Country","http://galleries.absolutearts.com/galleries/countries/",,,0
,"Newest Additions","http://galleries.absolutearts.com/galleries/newest/",,,0
,"SEARCH BY KEYWORDS","http://galleries.absoltuearts.com/galleries/search.html",,,0
])

addmenu(menu=["artForSale",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Advanced Search", "http://www.absolutearts.com/cgi-bin/portfolio/art/search-by-all.cgi",,,0
,"Alphabetized","http://www.absolutearts.com/portfolio/alphabetized.html",,,0
,"Medium - Sorted A - Z","http://www.absolutearts.com/portfolio/medium.html",,,0
,"Medium - Sorted by Theme","http://www.absolutearts.com/portfolio/media/",,,0
,"Price","http://www.absolutearts.com/portfolio/price.html",,,0
,"Size","http://www.absolutearts.com/portfolio/size.html",,,0
,"Theme","http://www.absolutearts.com/portfolio/themes/",,,0
,"Subject Matter","http://www.absolutearts.com/portfolio/themes/",,,0
,"Country","http://www.absolutearts.com/portfolio/countries/",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
])

addmenu(menu=["artistPortfolios",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Premiere Artist Portfolios","show-menu=premiere",,,0
,"Artist Portfolios","show-menu=portfolios",,,0
,"","",,,0
,"Myabsolutearts","http://www.absolutearts.com/myabsolutearts/",,,0
,"Portfolio Sign Up","http://wwar.com/portfolio.html",,,0
,"SIGN UP FOR A PORTFOLIO","http://www.wwar.com/portfolio.html",,,0
,"Testimonials From Artists","http://www.wwar.com/ads/testimonials.html",,,0
,"Direct Portfolio Address","http://www.absolutearts.com/yourlogin/",,,0
])

addmenu(menu=["premiere",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Advanced Search", "http://www.absolutearts.com/cgi-bin/portfolio/art/search-by-all.cgi",,,0
,"Newest Artwork","http://www.absolutearts.com/portfolio/newest/index.html",,,0
,"Alphabetized","http://www.absolutearts.com/portfolio/premiere-portfolios/",,,0
,"Medium - Sorted A - Z","http://www.absolutearts.com/portfolio/medium.html",,,0
,"Medium - Sorted by Theme","http://www.absolutearts.com/portfolio/media/",,,0
,"Price","http://www.absolutearts.com/portfolio/price.html",,,0
,"Size","http://www.absolutearts.com/portfolio/size.html",,,0
,"Theme","http://www.absolutearts.com/portfolio/themes/premiere-portfolios/",,,0
,"Subject Matter","http://www.absolutearts.com/portfolio/themes/premiere-portfolios/",,,0
,"Country","http://www.absolutearts.com/portfolio/countries/",,,0
,"USA - by State", "http://www.absolutearts.com/portfolio/usa/states/",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
])

addmenu(menu=["portfolios",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Advanced Search", "http://www.absolutearts.com/cgi-bin/portfolio/art/search-by-all.cgi",,,0
,"Newest Artwork","http://www.absolutearts.com/portfolio/newest/index.html",,,0
,"Alphabetized","http://www.absolutearts.com/portfolio/alphabetized.html",,,0
,"Medium - Sorted A - Z","http://www.absolutearts.com/portfolio/medium.html",,,0
,"Medium - Sorted by Theme","http://www.absolutearts.com/portfolio/media/",,,0
,"Price","http://www.absolutearts.com/portfolio/price.html",,,0
,"Size","http://www.absolutearts.com/portfolio/size.html",,,0
,"Theme","http://www.absolutearts.com/portfolio/themes/",,,0
,"Subject Matter","http://www.absolutearts.com/portfolio/themes/",,,0
,"Country","http://www.absolutearts.com/portfolio/countries/",,,0
,"USA - by State", "http://www.absolutearts.com/portfolio/usa/states/",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
])

addmenu(menu=["galleryPortfolios",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Alphabetized","http://galleries.absolutearts.com/galleries/alphabetized.html",,,0
,"Artists Represented","http://galleries.absolutearts.com/galleries/alphabetized/artists/",,,0
,"Medium","http://galleries.absolutearts.com/galleries/medium.html",,,0
//,"Medium - Sorted by Theme","http://galleries.absolutearts.com/galleries/media/",,,0
,"Price","http://galleries.absolutearts.com/galleries/price.html",,,0
,"Size","http://galleries.absolutearts.com/galleries/size.html",,,0
,"Theme","http://galleries.absolutearts.com/galleries/themes/artwork/",,,0
,"Subject Matter","http://galleries.absolutearts.com/galleries/themes/artwork/",,,0
,"Country","http://galleries.absolutearts.com/galleries/countries/",,,0
,"Newest Additions","http://galleries.absolutearts.com/galleries/newest/",,,0
,"SEARCH BY KEYWORDS","http://galleries.absolutearts.com/galleries/search.html",,,0
,"","",,,0
,"Sign In for Members","http://galleries.absolutearts.com/sign-in.html",,,0
,"SIGN UP FOR A PORTFOLIO","http://galleries.absolutearts.com/signup.html",,,0
,"Testimonials From Artists","http://wwar.com/ads/testimonials.html",,,0
])

addmenu(menu=["artsNews",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"ABSOLUTEARTS.COM","http://www.absolutearts.com",,,0
,"International Arts News","http://www.absolutearts.com",,,0
,"Archive 1999 - 2006","http://www.absolutearts.com/artsnews/archive/",,,0
,"Art Blogs - 2004 - 2006","http://blog.absolutearts.com/",,,0
,"RSS Feed - Art Blogs", "http://blogs.absolutearts.com/blogs/absolutearts.xml",,,0
,"Discussion Forums","http://christo.wwar.com/cgi-bin/artsforum/discus.cgi",,,0
,"Free Subscription","http://www.wwar.com/news/subscription1.html",,,0
,"Live Feed of Headlines on Your Site","http://www.absolutearts.com/news-generator-form.html",,,0
])

addmenu(menu=["artsSearch",
,,170,1,"",style2,,"left",effect,,,,,,,,,,,,
,"Visual Arts Cafe","http://wwar.com/forums.html",,,0
,"Visual Artists","http://www.wwar.com/categories/Artists/",,,0
,"Art History (22,000+ Artists)","http://www.wwar.com/artists/",,,0
,"Artists Portfolios","http://www.absolutearts.com/portfolios/",,,0
,"Museums","http://www.wwar.com/categories/Museums/",,,0
,"Galleries, Agents, Dealers","http://www.wwar.com/categories/Commercial/",,,0
,"Online Exhibitions","http://www.wwar.com/categories/Online_Exhibitions/",,,0
,"Funding, Grants, Workshops","http://www.wwar.com/categories/Agencies/",,,0
,"Publications","http://www.wwar.com/categories/Publications/",,,0
,"Education, Academia","http://www.wwar.com/categories/Academic/",,,0
,"Art Supplies","http://www.wwar.com/categories/Commercial/Art_Supplies/",,,0
,"Employment Websites","http://www.wwar.com/employment/",,,0
,"","",,,0
,"Performance Arts","http://www.wwar.com/categories/Dance/",,,0
,"Antiques","http://www.wwar.com/categories/Antiques/",,,0
,"Architecture","http://www.wwar.com/categories/Architecture/",,,0
,"","",,,0
,"SEARCH BY KEYWORDS","http://www.wwar.com/search.html",,,0
,"SEARCH BY LOCATION","http://www.wwar.com/artslocator/index-locator.html",,,0
])

dumpmenus()

