/*
 Milonic DHTML Website Navigation Menu - Version 3.x
 Written by Andy Woolley - Copyright 2002 (c) Milonic Solutions Limited. All Rights Reserved.
 Please visit http://www.milonic.co.uk/menu or e-mail menu3@milonic.com for more information.
 
 The Free use of this menu is only available to Non-Profit, Educational & Personal web sites.
 Commercial and Corporate licenses  are available for use on all other web sites & Intranets.
 All Copyright notices MUST remain in place at ALL times and, please keep us informed of your 
 intentions to use the menu and send us your URL.
 
 License Number: 188934
*/


//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<scr"+"ipt language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/scr"+"ipt>";_d.write(mt)} 
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.


////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
effect = "Fade(duration=0.2);Alpha(style=0,opacity=96);Shadow(color='#777777', Direction=135, Strength=5)"

timegap=250;			
followspeed=5;		
followrate=40;		
suboffset_top=4;	
suboffset_left=6;	
closeOnClick = true;

style1=[			
"ffffff",				
"0A3D70",			
"ffffff",			
"336799",			
"0A3D70",			
12,					
"normal",			
"normal",				
"Arial, Helvetica, Verdana",	
2,					
"",		
,					
"",			
"",			
"",			
"",				
"",		
"",			
"",			
"",				
]

style1b=[			
"ffffff",				
"003366",			
"ffffff",			
"336799",			
"003366",			
12,					
"normal",			
"normal",				
"Arial, Helvetica, Verdana",	
2,					
"",		
,					
"",			
"",			
"",			
"",				
"",		
"",			
"",			
"",				
]

style2=[			
"ffffff",				
"0A3D70",			
"ffffff",			
"336799",			
"0A3D70",				
11,					
"normal",			
"normal",				
"Arial, Helvetica, Verdana",	
1,					
"",		
,					
"",			
"",			
"",			
"",				
"",		
"",			
"",			
"",			
]

style0=[			
"ffffff",				
"transparent",			
"ffffff",			
"transparent",			
"",			
11,				
"normal",			
"normal",				
"Arial, Helvetica, Verdana",	
0,					
"",		
,					
"",			
"",			
"",			
"",				
"",		
"",			
"",			
"",				
]

addmenu(menu=[		
"mainmenu",			// 
0,					// 
0,				// 
90,					// 
0,					//
,					//  "center:middle"
style0,				// 
1,					// 
"left",				// 
,					// 
,					// 
1, 					// 
,					// 
,					// 
,					// 
,					// R
,					// 
,					// 
,					// 
,					// 
,					// 
,"<a href=#content><img src=http://www.usaid.gov/images/main/blueness.gif border=0 hspace=0 vspace=0 height=1 width=90 alt=\"Skip navigation menu\"></a><a href=http://www.usaid.gov/about_usaid/><img src=http://www.usaid.gov/images/main/about.gif alt=\"About USAID\" border=0 width=90 height=26></a>","show-menu=about","http://www.usaid.gov/about_usaid/","About USAID",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"<a href=/our_work/><img src=http://www.usaid.gov/images/main/work.gif alt=\"Our Work\" border=0 width=90></a>","show-menu=work","http://www.usaid.gov/our_work/","Our Work",1
,"<a href=http://www.usaid.gov/locations/><img src=http://www.usaid.gov/images/main/locations.gif alt=Locations border=0 width=90></a>","show-menu=locations","/locations/","Locations",1
,"<a href=http://www.usaid.gov/policy/><img src=http://www.usaid.gov/images/main/policy.gif alt=Policy border=0 width=90></a>","show-menu=policy","http://www.usaid.gov/policy/","Policy",1
,"<a href=http://www.usaid.gov/press/><img src=http://www.usaid.gov/images/main/press.gif alt=Press border=0 width=90></a>","show-menu=press","http://www.usaid.gov/press/","Press",1
,"<a href=http://www.usaid.gov/business/><img src=http://www.usaid.gov/images/main/business.gif alt=Business border=0 width=90>","show-menu=business","http://www.usaid.gov/business/","Business",1
,"<a href=http://www.usaid.gov/careers/><img src=http://www.usaid.gov/images/main/careers2.gif alt=Careers border=0 width=80></a>","show-menu=careers","http://www.usaid.gov/careers/","Careers",1
])

	addmenu(menu=["about",
	,,220,1,"",style1b,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;This Is USAID","http://www.usaid.gov/about_usaid/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Frequently-Asked Questions","http://www.usaid.gov/faqs.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Our History","http://www.usaid.gov/about_usaid/usaidhist.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Inspector General","http://www.usaid.gov/oig/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Budget & Key Documents","http://www.usaid.gov/policy/budget/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Telling Our Story","http://www.usaid.gov/stories/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Organization","http://www.usaid.gov/about_usaid/usaidorg.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;U.S. Foreign Assistance Reform","http://www.usaid.gov/about_usaid/dfa/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Presidential Initiatives","http://www.usaid.gov/about_usaid/presidential_initiative/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Advisory Committee (ACVFA)","http://www.usaid.gov/about_usaid/acvfa/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Speeches/Testimony","http://www.usaid.gov/press/speeches/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;PVO Registry","http://www.pvo.net/usaid/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;USAID Library","http://library.info.usaid.gov",,,1

	])
	


	addmenu(menu=["locations",
	,,220,1,"",style1b,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;Sub-Saharan Africa","http://www.usaid.gov/locations/sub-saharan_africa/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Asia &amp; the Near East","http://www.usaid.gov/locations/asia_near_east/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Latin America &amp; the Caribbean","http://www.usaid.gov/locations/latin_america_caribbean/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Europe and Eurasia","http://www.usaid.gov/locations/europe_eurasia/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Mission Directory","http://www.usaid.gov/locations/missiondirectory.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Mission Web Sites","http://www.usaid.gov/missions/",,,1
	])
	
addmenu(menu=["work",
	,,220,1,"",style1,,"left",effect,,,,,,,,,,,,
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Agriculture","show-menu=agri","http://www.usaid.gov/our_work/agriculture/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10  border=0 alt=\"\">&nbsp;Democracy & Governance","show-menu=dg","http://www.usaid.gov/our_work/democracy_and_governance/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Economic Growth & Trade","show-menu=egt","http://www.usaid.gov/our_work/economic_growth_and_trade/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Education & Universities","show-menu=eu","http://www.usaid.gov/our_work/education_and_universities/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Environment","show-menu=env","http://www.usaid.gov/our_work/environment/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Global Partnerships","show-menu=gp","http://www.usaid.gov/our_work/global_partnerships/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Global Health","show-menu=gh","http://www.usaid.gov/our_work/global_health/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Humanitarian Assistance","show-menu=ha","http://www.usaid.gov/our_work/humanitarian_assistance/",,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0  alt=\"\">&nbsp;Cross-Cutting Programs","show-menu=oa","http://www.usaid.gov/our_work/",,1
	])
	
		addmenu(menu=["policy",
	,,220,1,"",style1,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;Budget &amp; Strategic Plan (CBJ)","http://www.usaid.gov/policy/budget/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Policies &amp; Procedures (ADS)","http://www.usaid.gov/policy/ads/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Government Coordination","http://www.usaid.gov/policy/us_gov_coordination.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Donor Coordination","http://www.usaid.gov/policy/donor.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Development Partners Resources","http://www.dec.org/partners/",,,1	
	,"&nbsp;&nbsp;&nbsp;&nbsp;National Security Strategy","http://www.whitehouse.gov/nsc/nss.html",,,1	
	,"&nbsp;&nbsp;&nbsp;&nbsp;Foreign Aid in the National Interest","http://www.usaid.gov/fani/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Presidential Initiatives","http://www.usaid.gov/about_usaid/presidential_initiative/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;USAID Publications (DEC)","http://www.dec.org/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Evaluations (EvalWeb)","http://www.dec.org/partners/evalweb/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Knowledge for Development","http://knowledge.usaid.gov",,,1
	])
	
		addmenu(menu=["press",
	,,220,1,"",style1b,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;Press Releases","http://www.usaid.gov/press/releases/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Fact Sheets","http://www.usaid.gov/press/factsheets/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Media Advisories","http://www.usaid.gov/press/mediaadvisories/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Speeches &amp; Testimony","http://www.usaid.gov/press/speeches/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;FrontLines","http://www.usaid.gov/press/frontlines/",,,1
	])
	
	addmenu(menu=["business",
	,,220,0,"",style1,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;Acquisition &amp; Assistance","http://www.usaid.gov/business/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Business Opportunities","http://www.usaid.gov/business/business_opportunities/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Regulations and Policy","http://www.usaid.gov/business/regulations/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Ocean Transportation","http://www.usaid.gov/business/ocean/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Small &amp; Disadvantaged Businesses","http://www.usaid.gov/business/small_business/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Private &amp; Voluntary Cooperation","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;University Partnerships","http://www.usaid.gov/university/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Ombudsman","http://www.usaid.gov/business/ombudsman.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Business Forms","http://www.usaid.gov/forms/",,,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0 alt=\"\">&nbsp;Additional Resources ","show-menu=procs",,,1
	])
	
	addmenu(menu=["careers",
	,,220,1,"",style1b,,"left",effect,,,,,,,,,,,,
	,"&nbsp;&nbsp;&nbsp;&nbsp;Civil Service","http://www.usaid.gov/about/employment/gscover.htm",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Fellows Programs","http://www.usaid.gov/about/employment/fellows/",,,1
	,"<img src=http://www.usaid.gov/images/leftpoparrow.gif align=bottom width=10 height=10 border=0 alt=\"\">&nbsp;Foreign Service ","show-menu=jorbs",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Inspector General","http://www.usaid.gov/oig/job_ann/jobs.htm",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Personal Services Contracts (PSC)","http://www.usaid.gov/procurement_bus_opp/procurement/psc_solicit/",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Senior Executive Service","http://www.usaid.gov/about/employment/sescover.htm",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Student Internships","http://www.usaid.gov/about/employment/studentprograms.htm",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;TAACS Program","http://www.usaid.gov/about/employment/taacs/taacs.html",,,1
	,"&nbsp;&nbsp;&nbsp;&nbsp;Frequently-Asked Questions","http://www.usaid.gov/about/employment/cpfaqn.htm",,,1
	])
	

		addmenu(menu=["jorbs",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;New Entry Professional (NEP)","http://www.usaid.gov/about/employment/nepanno2.htm",,,0
		,"&nbsp;&nbsp;&nbsp;International Development Intern (IDI)","http://www.usaid.gov/about/employment/nepanno2.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Foreign Service Mid-Career","http://www.usaid.gov/about/employment/fmidlvls.htm",,,0
		])
	
		addmenu(menu=["procs",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Evaluations","http://www.dec.org/partners/eval.cfm",,,0
		,"&nbsp;&nbsp;&nbsp;Sourcebook on Grants & Cooperative Agreements","http://www.usaid.gov/pubs/sourcebook/usgov/",,,0
		,"&nbsp;&nbsp;&nbsp;Washington Government Credit Card Holders (pdf)","http://www.usaid.gov/business/business_opportunities/washington_cc.pdf",,,0
		,"&nbsp;&nbsp;&nbsp;Yellow Book","http://gemini.info.usaid.gov/yellowbook/",,,0
		,"&nbsp;&nbsp;&nbsp;FAIR Act Report","http://www.usaid.gov/procurement_bus_opp/usaid_fair_02.html",,,0
,"&nbsp;&nbsp;&nbsp;USAID Forecast","http://www.usaid.gov/business/business_opportunities/forecast/forecast.html",,,0
		])
	
		addmenu(menu=["agri",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/agriculture/",,,0
		,"&nbsp;&nbsp;&nbsp;Agricultural Markets &amp; Trade","http://www.usaid.gov/our_work/agriculture/ag_markets_trade.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Biotechnology","http://www.usaid.gov/our_work/agriculture/biotechnology/",,,0		
		,"&nbsp;&nbsp;&nbsp;Farmer To Farmer","http://www.usaid.gov/our_work/agriculture/farmer_to_farmer.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Food For Peace","http://www.usaid.gov/our_work/humanitarian_assistance/ffp/",,,0
		,"&nbsp;&nbsp;&nbsp;Food Security","http://www.usaid.gov/our_work/agriculture/food_security.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Forestry","http://www.usaid.gov/our_work/environment/forestry/",,,0
		,"&nbsp;&nbsp;&nbsp;Irrigation/Water","http://www.usaid.gov/our_work/environment/water/",,,0
		,"&nbsp;&nbsp;&nbsp;Land Management","http://www.usaid.gov/our_work/agriculture/landmanagement/",,,0
		,"&nbsp;&nbsp;&nbsp;Livestock","http://www.usaid.gov/our_work/agriculture/livestock.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Outreach &amp; Training","http://www.usaid.gov/our_work/agriculture/outreach_training.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Policy Development","/our_work/agriculture/policy_development.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Research","/our_work/agriculture/research.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Sustainable Agriculture","/our_work/agriculture/sustainable_ag.htm",,,0
		])

		addmenu(menu=["dg",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/democracy_and_governance/",,,0
		,"&nbsp;&nbsp;&nbsp;Rule of Law","http://www.usaid.gov/our_work/democracy_and_governance/rol.html",,,0
		,"&nbsp;&nbsp;&nbsp;Elections","http://www.usaid.gov/our_work/democracy_and_governance/epp.html",,,0
		,"&nbsp;&nbsp;&nbsp;Civil Society","http://www.usaid.gov/our_work/democracy_and_governance/civ.html",,,0
		,"&nbsp;&nbsp;&nbsp;Governance","http://www.usaid.gov/our_work/democracy_and_governance/gov.html",,,0
	,"&nbsp;&nbsp;&nbsp;Anti-Corruption","http://www.usaid.gov/our_work/democracy_and_governance/technical_areas/anti-corruption/",,,0
		])

					addmenu(menu=["egt",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/economic_growth_and_trade/",,,0
		,"&nbsp;&nbsp;&nbsp;Agricultural Markets &amp; Trade","http://www.usaid.gov/our_work/agriculture/ag_markets_trade.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Development Credit","http://www.usaid.gov/our_work/economic_growth_and_trade/development_credit/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Economic Policy","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/econ_pol.html",,,0
		,"&nbsp;&nbsp;&nbsp;Energy","http://www.usaid.gov/our_work/economic_growth_and_trade/energy/",,,0
		,"&nbsp;&nbsp;&nbsp;Enterprise Development","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/ent_devt.html",,,0
		,"&nbsp;&nbsp;&nbsp;Financial Markets","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/financial_markets.html",,,0
		,"&nbsp;&nbsp;&nbsp;Information Technology","http://www.usaid.gov/our_work/economic_growth_and_trade/info_technology/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Legal &amp; Institutional Reform","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/lir.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Microenterprise Development","http://www.usaid.gov/our_work/economic_growth_and_trade/poverty_reduction/microenterprise_development.html",,,0
		,"&nbsp;&nbsp;&nbsp;Privatization","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/privatization.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Technology Transfer","http://www.usaid.gov/our_work/economic_growth_and_trade/tech-transfer/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Trade &amp; Investment","http://www.usaid.gov/our_work/economic_growth_and_trade/eg/trade.html",,,0
		,"&nbsp;&nbsp;&nbsp;Urban Programs","http://www.usaid.gov/our_work/economic_growth_and_trade/urban_programs/index.html",,,0
		])

					addmenu(menu=["eu",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/education_and_universities/",,,0
		,"&nbsp;&nbsp;&nbsp;Basic Education","http://www.usaid.gov/our_work/education_and_universities/basic-ed.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Educational Partnerships","http://www.usaid.gov/our_work/education_and_universities/partnerships.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Higher Education","http://www.usaid.gov/our_work/education_and_universities/higher-ed.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Participant Training","http://www.usaid.gov/our_work/education_and_universities/ptraining.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Workforce Development","http://www.usaid.gov/our_work/education_and_universities/workforce-dev.htm",,,0
		,"&nbsp;&nbsp;&nbsp;American Schools and Hospitals Abroad","http://www.usaid.gov/our_work/cross-cutting_programs/asha/",,,0
		])
		
					addmenu(menu=["env",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/environment/",,,0
		,"&nbsp;&nbsp;&nbsp;Biodiversity","http://www.usaid.gov/our_work/environment/biodiversity/",,,0
		,"&nbsp;&nbsp;&nbsp;Biotechnology","http://www.usaid.gov/our_work/agriculture/biotechnology/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Climate Change","http://www.usaid.gov/our_work/environment/climate/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Energy","http://www.usaid.gov/our_work/economic_growth_and_trade/energy/index.html",,,0
	,"&nbsp;&nbsp;&nbsp;Environmental Compliance","http://www.usaid.gov/our_work/environment/compliance/index.html",,,0	,"&nbsp;&nbsp;&nbsp;Forestry","http://www.usaid.gov/our_work/environment/forestry/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Land Management","http://www.usaid.gov/our_work/agriculture/landmanagement/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Policy Development","http://www.usaid.gov/our_work/environment/policy_development.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Pollution Prevention","http://www.usaid.gov/our_work/environment/pollution/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Research","http://www.usaid.gov/our_work/agriculture/research.htm",,,0
		,"&nbsp;&nbsp;&nbsp;Water","http://www.usaid.gov/our_work/environment/water/index.html",,,0
		])
		
					addmenu(menu=["gp",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/global_partnerships/",,,0
		,"&nbsp;&nbsp;&nbsp;Global Development Alliance","http://www.usaid.gov/our_work/global_partnerships/gda/",,,0
		,"&nbsp;&nbsp;&nbsp;Faith Based &amp; Community Initiatives","http://www.usaid.gov/our_work/global_partnerships/fbci/",,,0
		,"&nbsp;&nbsp;&nbsp;Matching Grants","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/mg.html",,,0
		,"&nbsp;&nbsp;&nbsp;NGO Sector Strengthening","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/ngo.html",,,0
		,"&nbsp;&nbsp;&nbsp;Cooperative Development","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/coop.html",,,0
		,"&nbsp;&nbsp;&nbsp;Capable Partners","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/cap.html",,,0
		])

					addmenu(menu=["gh",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/global_health/",,,0
		,"&nbsp;&nbsp;&nbsp;American Schools &amp; Hospitals Abroad","http://www.usaid.gov/our_work/cross-cutting_programs/asha/",,,0
		])

					addmenu(menu=["ha",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/humanitarian_assistance/",,,0
		,"&nbsp;&nbsp;&nbsp;Disaster Assistance","http://www.usaid.gov/our_work/humanitarian_assistance/disaster_assistance/",,,0
		,"&nbsp;&nbsp;&nbsp;Food For Peace","http://www.usaid.gov/our_work/humanitarian_assistance/ffp/",,,0
		//,"&nbsp;&nbsp;&nbsp;Transition Assistance","http://www.usaid.gov/our_work/humanitarian_assistance/transition_assistance/",,,0
		,"&nbsp;&nbsp;&nbsp;Ocean Freight","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/ofr.html",,,0
		,"&nbsp;&nbsp;&nbsp;Denton","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/denton.html",,,0
		,"&nbsp;&nbsp;&nbsp;The Funds","http://www.usaid.gov/our_work/humanitarian_assistance/the_funds/",,,0
		])

					addmenu(menu=["oa",
		,,190,1,"",style2,,"left",effect,,,,,,,,,,,,
		,"&nbsp;&nbsp;&nbsp;Home","http://www.usaid.gov/our_work/cross-cutting_programs/",,,0
		,"&nbsp;&nbsp;&nbsp;Conflict Management","http://www.usaid.gov/our_work/cross-cutting_programs/conflict/",,,0
		,"&nbsp;&nbsp;&nbsp;Private &amp; Voluntary Cooperation","http://www.usaid.gov/our_work/cross-cutting_programs/private_voluntary_cooperation/",,,0
		,"&nbsp;&nbsp;&nbsp;Transition Initiatives","http://www.usaid.gov/our_work/cross-cutting_programs/transition_initiatives/",,,0
		,"&nbsp;&nbsp;&nbsp;Urban Programs","http://www.usaid.gov/our_work/economic_growth_and_trade/urban_programs/index.html",,,0			
		,"&nbsp;&nbsp;&nbsp;Water","http://www.usaid.gov/our_work/environment/water/index.html",,,0
		,"&nbsp;&nbsp;&nbsp;Women In Development","http://www.usaid.gov/our_work/cross-cutting_programs/wid/",,,0
		])

		
		
dumpmenus()