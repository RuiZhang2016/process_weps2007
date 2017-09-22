//_scrollAmount=3      // Used for Netscape 4 scrolling
//_scrollDelay=20	     // Used for Netscape 4 scrolling

_menuCloseDelay=350  // The delay for menus to remain visible on mouse off
_menuOpenDelay=200   // The delay for opening menus on mouse over
//_followSpeed=0       // Follow Scrolling speed (higher number makes the scrolling smoother but slower)
//_followRate=0        // Follow Scrolling Rate (use a minimum of 40 or you may experience problems)
_subOffsetTop=3;     // Sub menu offset Top position
_subOffsetLeft=-10;  // Sub menu offset Left position


with(mainStyle=new mm_style()){
     onbgcolor = "transparent";
       oncolor = "#ffffff";
    offbgcolor = "transparent";
      offcolor = "#ffffff";
   bordercolor = "";
   borderstyle = "";
separatorcolor = "";
 separatorsize = 0;
       padding = 0;
       //onborder="2px solid black"
      fontsize = 12;
     fontstyle = "normal";
    fontweight = "normal";
    fontfamily = "arial, helvetica, verdana";
   high3dcolor = null; // Not sure if this will be included in final release
    low3dcolor = null; // Not sure if this will be included in final release
   //  pagecolor = "purple";
   pagebgcolor = "#336799";
   topbarimage = "";
topbarimageloc = "center;middle"
      subimage = "";
   subimageloc = "left;middle"
  //ondecoration = "underline"
  //onbold = true;
  //onitalic = true;
}

with(style1=new mm_style()){
     onbgcolor = "#336799";
       oncolor = "#ffffff";
    offbgcolor = "#0A3D70";
      offcolor = "#ffffff";
   bordercolor = "#0A3D70";
   borderstyle = "solid";
separatorcolor = "#0A3D70";
 separatorsize = 0;
       padding = 2;	  
       //onborder="2px solid black"
      fontsize = 12;
     fontstyle = "normal";
    fontweight = "normal";
    fontfamily = "arial, helvetica, verdana";
   high3dcolor = null; // Not sure if this will be included in final release
    low3dcolor = null; // Not sure if this will be included in final release
    // pagecolor = "#336799";
   pagebgcolor = "#0A3D70";
   topbarimage = "";
topbarimageloc = "left;middle";
      subimage = "";
   subimageloc = "left;middle";
  //ondecoration = "underline"
  //onbold = true;
  //onitalic = true;
}


with(style1b=new mm_style()){
     onbgcolor = "#336799";
       oncolor = "#ffffff";
    offbgcolor = "#003366";
      offcolor = "#ffffff";
   bordercolor = "#003366";
   borderstyle = "solid";
separatorcolor = "#003366";
 separatorsize = 0;
       padding = 2;
       //onborder="2px solid black"
      fontsize = 12;
     fontstyle = "normal";
    fontweight = "normal";
    fontfamily = "arial, helvetica, verdana";
   high3dcolor = null; // Not sure if this will be included in final release
    low3dcolor = null; // Not sure if this will be included in final release
   //  pagecolor = "#336799";
   pagebgcolor = "#0A3D70";
   topbarimage = "";
topbarimageloc = "left;middle";
      subimage = "";
   subimageloc = "left;middle";
  //ondecoration = "underline"
  //onbold = true;
  //onitalic = true;
}

with(style2=new mm_style()){
     onbgcolor = "#336799";
       oncolor = "#ffffff";
    offbgcolor = "#0A3D70";
      offcolor = "#ffffff";
   bordercolor = "#0A3D70";
   borderstyle = "solid";
separatorcolor = "#0A3D70";
 separatorsize = 0;
       padding = 1;
       //onborder="2px solid black"
      fontsize = 11;
     fontstyle = "normal";
    fontweight = "normal";
    fontfamily = "arial, helvetica, verdana";
   high3dcolor = null; // Not sure if this will be included in final release
    low3dcolor = null; // Not sure if this will be included in final release
  //   pagecolor = "#336799";
   pagebgcolor = "#0A3D70";
   topbarimage = "";
topbarimageloc = "left;middle";
      subimage = "";
   subimageloc = "left;middle";
  //ondecoration = "underline"
  //onbold = true;
  //onitalic = true;
}

with(style2b=new mm_style()){
     onbgcolor = "#336799";
       oncolor = "#ffffff";
    offbgcolor = "#003366";
      offcolor = "#ffffff";
   bordercolor = "#003366";
   borderstyle = "solid";
separatorcolor = "#003366";
 separatorsize = 0;
       padding = 1;
       //onborder="2px solid black"
      fontsize = 11;
     fontstyle = "normal";
    fontweight = "normal";
    fontfamily = "arial, helvetica, verdana";
   high3dcolor = null; // Not sure if this will be included in final release
    low3dcolor = null; // Not sure if this will be included in final release
  //   pagecolor = "#336799";
   pagebgcolor = "#0A3D70";
   topbarimage = "";
topbarimageloc = "left;middle";
      subimage = "";
   subimageloc = "left;middle";
  //ondecoration = "underline"
  //onbold = true;
  //onitalic = true;
}

with(milonic=new menuname("mainmenu2")){
top = 8;
left = 8;
//itemwidth=60
//menuwidth="99%";
borderwidth = 0;
//screenposition = "left;top";
//alignment="center";
style = mainStyle;
alwaysvisible = 1;
orientation="horizontal"
//filter = null;
//followscroll = null;
//keepalive = 1;
//overallwidth = null;
//righttoleft = null;
//itemheight=200;
//openonclick = null;
//bgimage="winxp_back.gif";
//position="relative"
//separatorcolor="green";
aI("itemwidth=0;text=<img src=http://www.usaid.gov/images/main/blueness.gif border=0 hspace=0 vspace=0 height=27 width=1 alt=\"Skip navigation menu\">;url=\"#content\"");
aI("itemwidth=89;text=<img src=http://www.usaid.gov/images/main/aboutusaid.gif alt=\"About USAID\" border=0 width=90 height=27>;url=http://www.usaid.gov/about_usaid/;showmenu=about_usaid");
aI("text=<img src=http://www.usaid.gov/images/main/work.gif alt=\"Our Work\" border=0 width=90>;showmenu=our_work;itemwidth=90;url=http://www.usaid.gov/our_work/");
aI("text=<img src=http://www.usaid.gov/images/main/locations.gif alt=Locations border=0 width=90>;showmenu=locations;url=http://www.usaid.gov/locations/;itemwidth=90");
aI("text=<img src=http://www.usaid.gov/images/main/policy.gif alt=Policy border=0 width=86>;showmenu=policy;url=http://www.usaid.gov/policy/;itemwidth=86");
aI("text=<img src=http://www.usaid.gov/images/main/press.gif alt=Public Affairs border=0 width=94>;showmenu=press;url=http://www.usaid.gov/press/;itemwidth=94");
aI("text=<img src=http://www.usaid.gov/images/main/business.gif alt=Business border=0 width=86>;showmenu=business;url=http://www.usaid.gov/business/;itemwidth=86");
aI("text=<img src=http://www.usaid.gov/images/main/careers.gif alt=Careers border=0 width=90>;showmenu=careers;url=http://www.usaid.gov/careers/;itemwidth=90");
}

	with(milonic=new menuname("about_usaid")){
	borderwidth = 0;
	itemwidth = 220;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
	style = style1b;
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;This Is USAID;url=http://www.usaid.gov/about_usaid/");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Frequently-Asked Questions;url=http://www.usaid.gov/faqs.html");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;USAID Primer;url=http://www.usaid.gov/about_usaid/primer.html");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Our History;url=http://www.usaid.gov/about_usaid/usaidhist.html");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Inspector General;url=http://www.usaid.gov/oig/");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Key Documents;url=http://www.usaid.gov/policy/budget/");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Organization;url=http://www.usaid.gov/about_usaid/usaidorg.html");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Staff Directory;url=http://gemini.info.usaid.gov/directory/dirSearch.cfm");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Presidential Initiatives;url=http://www.usaid.gov/about_usaid/presidential_initiative/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Advisory Committee;url=http://www.usaid.gov/about_usaid/acvfa/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Speeches/Testimony;url=http://www.usaid.gov/press/speeches/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;PVO Registry;url=http://pvo.usaid.gov/usaid/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;USAID Library;url=http://library.info.usaid.gov");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Transforming Business;url=http://www.usaid.gov/about_usaid/bus_trans/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Disability Policy;url=http://www.usaid.gov/about_usaid/disability/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Branding Guidelines;url=http://www.usaid.gov/branding/");
	}
	
		with(milonic=new menuname("our_work")){
	borderwidth = 0;
	itemwidth = 220;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
	style = style1;
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Agriculture;url=http://www.usaid.gov/our_work/agriculture/;showmenu=agri");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10  border=0 alt=\"\">&nbsp;Democracy &amp; Governance;url=http://www.usaid.gov/our_work/democracy_and_governance/;showmenu=dg");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Economic Growth &amp; Trade;url=http://www.usaid.gov/our_work/economic_growth_and_trade/;showmenu=egt");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Education &amp; Universities;url=http://www.usaid.gov/our_work/education_and_universities/;showmenu=eu");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Environment;url=http://www.usaid.gov/our_work/environment/;showmenu=env");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Global Partnerships;url=http://www.usaid.gov/our_work/global_partnerships/;showmenu=gp");
	aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Health;url=http://www.usaid.gov/our_work/global_health/;showmenu=gh");
aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Humanitarian Assistance;url=http://www.usaid.gov/our_work/humanitarian_assistance/;showmenu=ha");
aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Cross-Cutting Programs;url=http://www.usaid.gov/our_work/;showmenu=oa");
	}
	
		
				with(milonic=new menuname("locations")){
		itemwidth=220;
		style = style1b;
		overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Sub-Saharan Africa;url=http://www.usaid.gov/locations/sub-saharan_africa/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Asia & the Near East;url=http://www.usaid.gov/locations/asia_near_east/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Europe & Eurasia;url=http://www.usaid.gov/locations/europe_eurasia/;");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Latin America & the Caribbean;url=http://www.usaid.gov/locations/latin_america_caribbean/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Mission Directory;url=http://www.usaid.gov/locations/missiondirectory.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Mission Web Sites;url=http://www.usaid.gov/missions/");
		}
		
		with(milonic=new menuname("policy")){
		itemwidth=220;
		style=style1;
		overfilter="Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Presidential Initiatives;url=http://www.usaid.gov/about_usaid/presidential_initiative/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Government Coordination;url=http://www.usaid.gov/policy/coordination/us_gov_coordination.html;");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Donor Coordination;url=http://www.usaid.gov/policy/coordination/donor.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Budget;url=http://www.usaid.gov/policy/budget/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Evaluations;url=http://evalweb.usaid.gov");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Performance & Accountability Report;url=http://www.usaid.gov/policy/par06/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Information Quality;url=http://www.usaid.gov/policy/info_quality/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Automated Directives System;url=http://www.usaid.gov/policy/ads/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Competitive Sourcing;url=http://www.usaid.gov/policy/cs.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;USAID Library;url=http://library.info.usaid.gov/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Knowledge for Development;url=http://knowledge.usaid.gov");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Development Experience Clearinghouse;url=http://dec.usaid.gov");



		}
		

		with(milonic=new menuname("press")){
		itemwidth=220;
		style = style1b;
		overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Press Releases;url=http://www.usaid.gov/press/releases/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Mission Press Releases;url=http://www.usaid.gov/press/missions/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Fact Sheets;url=http://www.usaid.gov/press/factsheets/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Media Advisories;url=http://www.usaid.gov/press/mediaadvisories/;");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Speeches &amp; Testimony;url=http://www.usaid.gov/press/speeches/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;FrontLines;url=http://www.usaid.gov/press/frontlines/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Telling Our Story;url=http://www.usaid.gov/stories/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Branding Guidelines;url=http://www.usaid.gov/branding/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Contact USAID;url=http://www.usaid.gov/contact.html");
		}
	

	
		with(milonic=new menuname("business")){
		itemwidth=220;
		style = style1;
		overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Acquisition &amp; Assistance;url=http://www.usaid.gov/business/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Business Opportunities;url=http://www.usaid.gov/business/business_opportunities/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Regulations and Policy;url=http://www.usaid.gov/business/regulations/;");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Ocean Transportation;url=http://www.usaid.gov/business/ocean/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Small &amp; Disadvantaged Businesses;url=http://www.usaid.gov/business/small_business/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Indefinite Quantity Contracts (IQCs);url=http://www.usaid.gov/business/business_opportunities/iqc/index.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Private &amp; Voluntary Cooperation;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;University Partnerships;url=http://www.usaid.gov/university/");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Ombudsman;url=http://www.usaid.gov/business/ombudsman.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Business Forms;url=http://www.usaid.gov/forms/");
		aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0 alt=\"\">&nbsp;Additional Resources ;url=http://www.usaid.gov/business/;showmenu=procs");
		}
		
		with(milonic=new menuname("procs")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Evaluations;url=http://www.dec.org/partners/eval.cfm");
	aI("text=&nbsp;&nbsp;&nbsp;Sourcebook on Grants & Cooperative Agreements;url=http://www.usaid.gov/pubs/sourcebook/usgov/");
	aI("text=&nbsp;&nbsp;&nbsp;Washington Government Credit Card Holders (pdf);url=http://www.usaid.gov/business/business_opportunities/washington_cc.pdf");
	aI("text=&nbsp;&nbsp;&nbsp;Yellow Book;url=http://www.usaid.gov/business/yellowbook/");
	aI("text=&nbsp;&nbsp;&nbsp;FAIR Act Report;url=http://www.usaid.gov/procurement_bus_opp/usaid_fair_02.html");
aI("text=&nbsp;&nbsp;&nbsp;USAID Forecast;url=http://www.usaid.gov/business/business_opportunities/forecast/forecast.html");
	}
	
					with(milonic=new menuname("careers")){
		itemwidth=220;
		style=style1b;
		overfilter="Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=5)";
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Civil Service;url=http://www.usaid.gov/careers/gscover.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Fellows Programs;url=http://www.usaid.gov/about/employment/fellows/");
		aI("text=<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0 alt=\"\">&nbsp;Foreign Service;url=http://www.usaid.gov/careers/;showmenu=jorbs");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Inspector General;url=http://www.usaid.gov/oig/job_ann/jobs.htm");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Personal Services Contractor (PSC);url=http://www.usaid.gov/procurement_bus_opp/procurement/psc_solicit/");
aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Senior Executive Service;url=http://www.usaid.gov/careers/sescover.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Student Internships;url=http://www.usaid.gov/careers/studentprograms.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;TAACS Program;url=http://www.usaid.gov/about/employment/taacs/taacs.html");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Personnel Directory;url=http://gemini.info.usaid.gov/directory/dirSearch.cfm");
		aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Frequently-Asked Questions;url=http://www.usaid.gov/careers/cpfaqn.html");
				aI("text=&nbsp;&nbsp;&nbsp;&nbsp;Employment Forms;url=http://www.usaid.gov/forms/");
		}
	
		with(milonic=new menuname("procs")){	
	borderwidth = 0;
	itemwidth = 190;
	style = style2b;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Evaluations;url=http://www.dec.org/partners/eval.cfm");
	aI("text=&nbsp;&nbsp;&nbsp;Sourcebook on Grants & Cooperative Agreements;url=http://www.usaid.gov/pubs/sourcebook/usgov/");
	aI("text=&nbsp;&nbsp;&nbsp;Washington Government Credit Card Holders (pdf);url=http://www.usaid.gov/business/business_opportunities/washington_cc.pdf");
	aI("text=&nbsp;&nbsp;&nbsp;Overseas Government Credit Card Holders;url=http://www.usaid.gov/procurement_bus_opp/procurement/mcc.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Yellow Book;url=http://www.usaid.gov/business/yellowbook/");
aI("text=&nbsp;&nbsp;&nbsp;USAID Forecast;url=http://www.usaid.gov/business/business_opportunities/forecast/forecast.html");
aI("text=&nbsp;&nbsp;&nbsp;FAIR Act Report;url=http://www.usaid.gov/business/regulations/fair/");
	}
		
			with(milonic=new menuname("jorbs")){		
	borderwidth=0;
	itemwidth=190;
	style=style2b;
	overfilter="Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;New Entry Professional (NEP);url=http://www.usaid.gov/careers/nepanno2.html");
	aI("text=&nbsp;&nbsp;&nbsp;International Development Intern (IDI);url=http://www.usaid.gov/careers/nepanno2.html");
	aI("text=&nbsp;&nbsp;&nbsp;Foreign Service Mid-Career;url=http://www.usaid.gov/careers/fmidlvls.html");
	}
		
	with(milonic=new menuname("agri")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/agriculture/");
	aI("text=&nbsp;&nbsp;&nbsp;Agricultural Markets;url=http://www.usaid.gov/our_work/agriculture/ag_markets_trade.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Biotechnology;url=http://www.usaid.gov/our_work/agriculture/biotechnology/");
	aI("text=&nbsp;&nbsp;&nbsp;Environmental Compliance;url=http://www.usaid.gov/our_work/environment/compliance/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Farmer to Farmer;url=http://www.usaid.gov/our_work/agriculture/farmer_to_farmer.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Food For Peace;url=http://www.usaid.gov/our_work/humanitarian_assistance/ffp/");
	aI("text=&nbsp;&nbsp;&nbsp;Food Security;url=http://www.usaid.gov/our_work/agriculture/food_security.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Forestry;url=http://www.usaid.gov/our_work/environment/forestry/");
	aI("text=&nbsp;&nbsp;&nbsp;Irrigation/Water;url=http://www.usaid.gov/environment/water/");
	aI("text=&nbsp;&nbsp;&nbsp;Land Management;url=http://www.usaid.gov/our_work/agriculture/landmanagement/");
	aI("text=&nbsp;&nbsp;&nbsp;Livestock;url=http://www.usaid.gov/our_work/agriculture/livestock.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Outreach;url=http://www.usaid.gov/our_work/agriculture/outreach_training.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Policy Development;url=http://www.usaid.gov/our_work/agriculture/policy_development.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Research;url=http://www.usaid.gov/our_work/agriculture/research.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Sustainable Agriculture;url=http://www.usaid.gov/our_work/agriculture/sustainable_ag.htm");
	}
	
		with(milonic=new menuname("dg")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/democracy_and_governance/");
	aI("text=&nbsp;&nbsp;&nbsp;Rule of Law;url=http://www.usaid.gov/our_work/democracy_and_governance/rol.html");
	aI("text=&nbsp;&nbsp;&nbsp;Elections;url=http://www.usaid.gov/our_work/democracy_and_governance/epp.html");
	aI("text=&nbsp;&nbsp;&nbsp;Civil Society;url=http://www.usaid.gov/our_work/democracy_and_governance/civ.html");
	aI("text=&nbsp;&nbsp;&nbsp;Governance;url=http://www.usaid.gov/our_work/democracy_and_governance/gov.html");
	aI("text=&nbsp;&nbsp;&nbsp;Anti-Corruption;url=http://www.usaid.gov/our_work/democracy_and_governance/technical_areas/anti-corruption/");
	}
	
	with(milonic=new menuname("egt")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/economic_growth_and_trade/");
	aI("text=&nbsp;&nbsp;&nbsp;Agricultural Markets &amp; Trade;url=http://www.usaid.gov/our_work/agriculture/ag_markets_trade.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Development Credit;url=http://www.usaid.gov/our_work/economic_growth_and_trade/development_credit/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Economic Policy;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/econ_pol.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Energy;url=http://www.usaid.gov/our_work/economic_growth_and_trade/energy/");
	aI("text=&nbsp;&nbsp;&nbsp;Enterprise Development;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/ent_devt.html");
	aI("text=&nbsp;&nbsp;&nbsp;Financial Markets;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/financial_markets.html");
	aI("text=&nbsp;&nbsp;&nbsp;Information Technology;url=http://www.usaid.gov/our_work/economic_growth_and_trade/info_technology/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Legal &amp; Institutional Reform;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/lir.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Microenterprise Development;url=http://www.usaid.gov/our_work/economic_growth_and_trade/poverty_reduction/microenterprise_development.html");
	aI("text=&nbsp;&nbsp;&nbsp;Privatization;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/privatization.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Technology Transfer;url=http://www.usaid.gov/our_work/economic_growth_and_trade/tech-transfer/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Trade &amp; Investment;url=http://www.usaid.gov/our_work/economic_growth_and_trade/eg/trade.html");
	aI("text=&nbsp;&nbsp;&nbsp;Urban Programs;url=http://www.usaid.gov/our_work/economic_growth_and_trade/urban_programs/index.html");
	}
	
		with(milonic=new menuname("eu")){	
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/education_and_universities/");
	aI("text=&nbsp;&nbsp;&nbsp;Basic Education;url=http://www.usaid.gov/our_work/education_and_universities/basic-ed.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Educational Partnerships;url=http://www.usaid.gov/our_work/education_and_universities/partnerships.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Higher Education;url=http://www.usaid.gov/our_work/education_and_universities/higher-ed.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Participant Training;url=http://www.usaid.gov/our_work/education_and_universities/ptraining.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Workforce Development;url=http://www.usaid.gov/our_work/education_and_universities/workforce-dev.htm");
aI("text=&nbsp;&nbsp;&nbsp;American Schools and Hospitals Abroad;url=http://www.usaid.gov/our_work/cross-cutting_programs/asha/");
	}
		
with(milonic=new menuname("env")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/environment/");
	aI("text=&nbsp;&nbsp;&nbsp;Biodiversity;url=http://www.usaid.gov/our_work/environment/biodiversity/");
	aI("text=&nbsp;&nbsp;&nbsp;Biotechnology;url=http://www.usaid.gov/our_work/agriculture/biotechnology/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Climate Change;url=http://www.usaid.gov/our_work/environment/climate/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Environmental Compliance;url=http://www.usaid.gov/our_work/environment/compliance/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Energy;url=http://www.usaid.gov/our_work/economic_growth_and_trade/energy/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Forestry;url=http://www.usaid.gov/our_work/environment/forestry/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Land Management;url=http://www.usaid.gov/our_work/agriculture/landmanagement/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Policy Development;url=http://www.usaid.gov/our_work/environment/policy_development.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Pollution Prevention;url=http://www.usaid.gov/our_work/environment/pollution/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Research;url=http://www.usaid.gov/our_work/agriculture/research.htm");
	aI("text=&nbsp;&nbsp;&nbsp;Water;url=http://www.usaid.gov/our_work/environment/water/index.html");
	}		
	
		with(milonic=new menuname("gp")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/global_partnerships/");
	aI("text=&nbsp;&nbsp;&nbsp;Global Development Alliance;url=http://www.usaid.gov/our_work/global_partnerships/gda/");
	aI("text=&nbsp;&nbsp;&nbsp;Faith Based &amp; Community Initiatives;url=http://www.usaid.gov/our_work/global_partnerships/fbci/");
	aI("text=&nbsp;&nbsp;&nbsp;Matching Grants;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/mg.html");
	aI("text=&nbsp;&nbsp;&nbsp;NGO Sector Strengthening;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/ngo.html");
	aI("text=&nbsp;&nbsp;&nbsp;Cooperative Development;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/coop.html");
	aI("text=&nbsp;&nbsp;&nbsp;Capable Partners;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/cap.html");
	}
	
	with(milonic=new menuname("gh")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/global_health/");
	aI("text=&nbsp;&nbsp;&nbsp;HIV/AIDS;url=http://www.usaid.gov/our_work/global_health/aids/");
		aI("text=&nbsp;&nbsp;&nbsp;Infectious Diseases;url=http://www.usaid.gov/our_work/global_health/id/");
	aI("text=&nbsp;&nbsp;&nbsp;Maternal &amp; Child Health;url=http://www.usaid.gov/our_work/global_health/mch/");
	aI("text=&nbsp;&nbsp;&nbsp;Family Planning;url=http://www.usaid.gov/our_work/global_health/pop/");
	aI("text=&nbsp;&nbsp;&nbsp;American Schools &amp; Hospitals Abroad;url=http://www.usaid.gov/our_work/cross-cutting_programs/asha/");
	}
	
	with(milonic=new menuname("ha")){	
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/humanitarian_assistance/");
	aI("text=&nbsp;&nbsp;&nbsp;Disaster Assistance;url=http://www.usaid.gov/our_work/humanitarian_assistance/disaster_assistance/");
	aI("text=&nbsp;&nbsp;&nbsp;Food For Peace;url=http://www.usaid.gov/our_work/humanitarian_assistance/ffp/");
	aI("text=&nbsp;&nbsp;&nbsp;Transition Assistance;url=http://www.usaid.gov/our_work/humanitarian_assistance/transition_assistance/");
	aI("text=&nbsp;&nbsp;&nbsp;Ocean Freight;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/ofr.html");
	aI("text=&nbsp;&nbsp;&nbsp;Denton;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/denton.html");
	aI("text=&nbsp;&nbsp;&nbsp;The Funds;url=http://www.usaid.gov/our_work/humanitarian_assistance/the_funds/");
}

with(milonic=new menuname("oa")){		
	borderwidth = 0;
	itemwidth = 190;
	style = style2;
	overfilter = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777',Direction=135,Strength=7)";
	aI("text=&nbsp;&nbsp;&nbsp;Home;url=http://www.usaid.gov/our_work/");
//	aI("text=&nbsp;&nbsp;&nbsp;Conflict Management;url=http://www.usaid.gov/our_work/cross-cutting_programs/conflict/");
aI("text=&nbsp;&nbsp;&nbsp;Information Technology;url=http://www.usaid.gov/our_work/economic_growth_and_trade/info_technology/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Private &amp; Voluntary Cooperation;url=http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/");
	aI("text=&nbsp;&nbsp;&nbsp;Transition Initiatives;url=http://www.usaid.gov/our_work/cross-cutting_programs/transition_initiatives/");
	aI("text=&nbsp;&nbsp;&nbsp;Urban Programs;url=http://www.usaid.gov/our_work/economic_growth_and_trade/urban_programs/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Water;url=http://www.usaid.gov/our_work/environment/water/index.html");
	aI("text=&nbsp;&nbsp;&nbsp;Women In Development;url=http://www.usaid.gov/our_work/cross-cutting_programs/wid/");
	}
	
drawMenus();