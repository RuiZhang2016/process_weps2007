
_menuCloseDelay=500					// The time delay for menus to remain visible on mouse out, was 1000
_menuOpenDelay=150					// The time delay before menus open on mouse over, was 150
_subOffsetTop=20						// Sub menu top offset
_subOffsetLeft=-15					// Sub menu left offset

/********************************** DO NOT MODIFY BELOW THIS LINE **********************************/
var menuTimer;

function ePopup(menuName,positionID,topOffset,leftOffset,positionAbsolute)
	{
		menuTimer = setTimeout("popup('" + menuName + "','" + positionID + "'," + topOffset + "," + leftOffset + "," + positionAbsolute + ")",_menuOpenDelay);
	}

function ePopdown()
	{
		window.clearInterval(menuTimer);
		popdown();
	}
/********************************** DO NOT MODIFY ABOVE THIS LINE **********************************/

//SUBCHANNEL STYLES

with(substyle=new mm_style()){
onbgcolor="#eee";
offbgcolor="#fff";
offcolor="#000";
//offcolor="#fff";
bordercolor="#333";
borderstyle="solid";
borderwidth=1;
separatorcolor="#999";
separatorsize="1";
padding=4;
fontsize="11px";
fontstyle="normal";
fontfamily="Arial, Verdana, Tahoma";
pagebgcolor="#ffffff";
headercolor="#ffffff";
headerborder="1";
subimage="/images/global/milonic_sub_icon.gif";
subimagepadding="2";
}

//SATNAV STYLES

with(satnavstyle=new mm_style()){
onbgcolor="#ffffff";
offbgcolor="#e4e4e4";
offcolor="#000";
bordercolor="#333";
borderstyle="solid";
borderwidth=1;
separatorcolor="#999";
separatorsize="1";
padding=5;
fontsize="11px";
fontstyle="normal";
fontfamily="Arial, Verdana, Tahoma";
pagebgcolor="#ffffff";
headercolor="#ffffff";
headerborder="1";
subimage="/images/global/milonic_sub_icon.gif";
subimagepadding="2";
subOffsetLeft=250;
overflow="scroll";
rawcss="@media print{display:none;}";
}

//Utilities menu STYLES

with(utilitystyle=new mm_style()){
onbgcolor="#d2d2d2";
offbgcolor="#d2d2d2";
offcolor="#000";
bordercolor="#333";
borderstyle="solid";
borderwidth=0;
separatorcolor="#999";
separatorsize="0";
padding=5;
fontsize="11px";
fontstyle="normal";
fontfamily="Arial, Verdana, Tahoma";
pagecolor="";
pagebgcolor="#82B6D7";
headercolor="#ffffff";
subimage="/images/global/milonic_sub_icon.gif";
subimagepadding="2px";
}

/*SATNAV MAIN MENU*/

with(milonic=new menuname("Main Menu"))
{
	style=satnavstyle;
	alwaysvisible=0;
	orientation="vertical";
	postition="absolute";
	top="30";
	left="60";
	aI("text=EDUCAUSE Home Page;onbgcolor=#990000;oncolor=#ffffff;pagebgcolor=#990000;pagecolor=#ffffff;url=/home/720;");
	aI("text=Major Initiatives;showmenu=EDUCAUSE MAJOR INITIATIVES;onbgcolor=#5A5C7E;oncolor=#ffffff;pagebgcolor=#5A5C7E;pagecolor=#ffffff;url=/majorinitiatives;");
	aI("text=Resources;showmenu=RESOURCES;onbgcolor=#6B869C;oncolor=#ffffff;pagebgcolor=#6B869C;pagecolor=#ffffff;url=/resources;");
	aI("text=Professional Development;showmenu=PROFESSIONAL DEVELOPMENT;onbgcolor=#002f55;oncolor=#ffffff;pagebgcolor=#002f55;pagecolor=#ffffff;url=/pd;");
	aI("text=Community;showmenu=COMMUNITY;onbgcolor=#005797;oncolor=#ffffff;pagebgcolor=#005797;pagecolor=#ffffff;url=/community;");
	aI("text=About EDUCAUSE;showmenu=ABOUT EDUCAUSE;onbgcolor=#990000;oncolor=#ffffff;pagebgcolor=#990000;pagecolor=#ffffff;url=/about;");
	
}

with(milonic=new menuname("ECAR")){
style=substyle;
aI("text=About ECAR;url=/AboutECAR/94;oncolor=#5A5C7E;");
aI("text=Research Publications;url=/ResearchPublications/172;oncolor=#5A5C7E;");
aI("text=Subscriptions and Subscribers;url=/SubscriptionsandSubscribers/98;oncolor=#5A5C7E;");
aI("text=Sponsorship and Sponsors;url=/SponsorshipandSponsors/1160;oncolor=#5A5C7E;");
aI("text=Research Agenda and Proposals;url=/ResearchAgendaandProposals/1444;oncolor=#5A5C7E;");
aI("text=Contact Us;url=/ContactUs/1326;oncolor=#5A5C7E;");
aI("text=Symposia;url=/Symposia/96;oncolor=#5A5C7E;");
}

with(milonic=new menuname("ELI")){
style=substyle;
aI("text=Learners;url=/Learners/5670;oncolor=#5A5C7E;");
aI("text=Learning Principles and Practices;url=/LearningPrinciplesandPractices/5671;oncolor=#5A5C7E;");
aI("text=Learning Technologies;url=/LearningTechnologies/5672;oncolor=#5A5C7E;");
aI("text=ELI Resources;url=/ELIResources/10220;oncolor=#5A5C7E;");
aI("text=ELI Events;url=/ELIEvents/5540;oncolor=#5A5C7E;");
aI("text=Membership;url=/Membership/70;oncolor=#5A5C7E;");
aI("text=ELI Community Exchange;url=/ELICommunityExchange/6797;oncolor=#5A5C7E;");
aI("text=About ELI;url=/AboutELI/5503;oncolor=#5A5C7E;");
aI("text=What Would You Like to Do?;url=/WhatWouldYouLiketoDo%3F/6698;oncolor=#5A5C7E;");
}

with(milonic=new menuname("Federal Policy Program")){
style=substyle;
aI("text=About Us;url=/AboutUs/1280;oncolor=#5A5C7E;");
aI("text=Advocacy Library;url=/AdvocacyLibrary/1297;oncolor=#5A5C7E;");
aI("text=Calendar;url=/Calendar/1053;oncolor=#5A5C7E;");
aI("text=Federal Policy Issues;url=/FederalPolicyIssues/1284;oncolor=#5A5C7E;");
aI("text=Federal Policy Resources;url=/FederalPolicyResources/1299;oncolor=#5A5C7E;");
aI("text=Legislative Tracking<br /><span class=small>[161 KB XLS]</span>;url=/ir/library/excel/net0015c.xls;oncolor=#5A5C7E;");
aI("text=Network Policy Council;url=/NetworkPolicyCouncil/10305;oncolor=#5A5C7E;");
aI("text=State Policy Resources;url=/StatePolicyResources/1306;oncolor=#5A5C7E;");
aI("text=Washington Update;url=/WashingtonUpdate/1311;oncolor=#5A5C7E;");
aI("text=Press Releases;url=/PressReleases/1196;oncolor=#5A5C7E;");
}

with(milonic=new menuname("Net@EDU")){
style=substyle;
aI("text=About Net@EDU;url=/AboutNet%40EDU/391;oncolor=#5A5C7E;");
aI("text=Membership;url=/Membership/397;oncolor=#5A5C7E;");
aI("text=Events;url=/Events/396;oncolor=#5A5C7E;");
aI("text=Resources;url=/Resources/943;oncolor=#5A5C7E;");
aI("text=Working Groups and Collaborations;url=/WorkingGroupsandCollaborations/412;oncolor=#5A5C7E;");
aI("text=Contact Us;url=/ContactUs/945;oncolor=#5A5C7E;");
}

with(milonic=new menuname("Security Task Force")){
style=substyle;
aI("text=About The Task Force;url=/AboutTheTaskForce/1202;oncolor=#5A5C7E;");
aI("text=Events;url=/Events/1054;oncolor=#5A5C7E;");
aI("text=Resources;url=/Resources/1225;oncolor=#5A5C7E;");
aI("text=Announcements;url=http://connect.educause.edu/featured_content_type/blogs/security_task_force_announcements;target=new;oncolor=#5A5C7E;");
aI("text=Contact Us;url=/ContactUs/1743;oncolor=#5A5C7E;");
}

with(milonic=new menuname("EDUCAUSE Profile Home")){
style=substyle;overflow="scroll";
aI("text=Preferences;url=/Preferences/718;");
aI("text=Peer Profile;url=/PeerProfile/709;");
aI("text=Alerts;url=/Alerts/1638;");
aI("text=MyLinks;url=/MyLinks/714;");
aI("text=About Me;url=/AboutMe/715;");
}

with(milonic=new menuname("Private Access Applications")){
style=substyle;overflow="scroll";
aI("text=Generate PDF Dues Invoices;url=/GeneratePDFDuesInvoices/6780;");
}

with(milonic=new menuname("About EDUCAUSE")){
style=substyle;overflow="scroll";
aI("text=Membership;showmenu=MENU5;url=/Membership/5;oncolor=#990000;");
aI("text=Organization;showmenu=MENU54;url=/Organization/54;oncolor=#990000;");
aI("text=Corporate Participation;showmenu=MENU6;url=/CorporateParticipation/6;oncolor=#990000;");
aI("text=Press Releases;url=/PressReleases/661;oncolor=#990000;");
aI("text=Frequently Asked Questions;url=/FrequentlyAskedQuestions/660;oncolor=#990000;");
aI("text=Privacy Policy;url=/PrivacyPolicy/1440;oncolor=#990000;");
aI("text=Copyright;url=/Copyright/1439;oncolor=#990000;");
aI("text=Downloadable Logos;url=/DownloadableLogos/10563;oncolor=#990000;");
aI("text=Web Site Tour;url=/WebSiteTour/4943;oncolor=#990000;");
aI("text=Contact Us;url=/ContactUs/577;oncolor=#990000;");
}

with(milonic=new menuname("Community")){
style=substyle;overflow="scroll";
aI("text=;image=/images/nav/nav_connect.gif;url=http://connect.educause.edu/;target=new;oncolor=#005797;");
aI("text=Constituent and Discussion Groups;showmenu=MENU318;url=/ConstituentandDiscussionGroups/318;oncolor=#005797;");
aI("text=Member Directory;showmenu=MENU672;url=/MemberDirectory/672;oncolor=#005797;");
aI("text=Peer Directory;showmenu=MENU575;url=/PeerDirectory/575;oncolor=#005797;");
aI("text=Collaborations and Affiliations;url=/CollaborationsandAffiliations/586;oncolor=#005797;");
}

with(milonic=new menuname("Professional Development")){
style=substyle;overflow="scroll";
aI("text=Mentoring Information Kit;url=/mentoring;oncolor=#002F55;");
aI("text=Management and Leadership Offerings ;url=/ManagementandLeadershipOfferings/10285;oncolor=#002F55;");
aI("text=Conferences, Seminars, and Institutes;showmenu=MENU31;url=/ConferencesSeminarsandInstitutes/31;oncolor=#002F55;");
aI("text=Fellowship and Scholarship Opportunities;showmenu=MENU37;url=/FellowshipandScholarshipOpportunities/37;oncolor=#002F55;");
aI("text=Higher Education IT Events Calendar;showmenu=MENU1011;url=/HigherEducationITEventsCalendar/1011;oncolor=#002F55;");
aI("text=Awards;showmenu=MENU312;url=/Awards/312;oncolor=#002F55;");
aI("text=Job Opportunities;showmenu=MENU38;url=/JobOpportunities/38;oncolor=#002F55;");
aI("text=Volunteer Opportunities;showmenu=MENU861;url=/VolunteerOpportunities/861;oncolor=#002F55;");
}

with(milonic=new menuname("EDUCAUSE Major Initiatives")){
style=substyle;overflow="scroll";
aI("text=Featured Initiatives;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#5A5C7E;oncolor=#5A5C7E;");
aI("text=;image=/images/nav/nav_ecar.gif;showmenu=ECAR;url=/ecar;oncolor=#5A5C7E;");
aI("text=;image=/images/nav/nav_eli.gif;showmenu=ELI;url=/eli;oncolor=#5A5C7E;");
aI("text=;image=/images/nav/nav_netatedu.gif;showmenu=NET@EDU;url=/netatedu;oncolor=#5A5C7E;");
aI("text=;image=/images/nav/nav_coredata.gif;url=/apps/coredata/index.asp;oncolor=#5A5C7E;");
aI("text=Networking;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#5A5C7E;oncolor=#5A5C7E;");
aI("text=.edu Administration;url=/edudomain/;oncolor=#5A5C7E;");
aI("text=Other Networking Initiatives;showmenu=MENU621;url=/OtherNetworkingInitiatives/621;oncolor=#5A5C7E;");
aI("text=Policy;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#5A5C7E;oncolor=#5A5C7E;");
aI("text=Federal Policy Program;showmenu=FEDERAL POLICY PROGRAM;url=/policy;oncolor=#5A5C7E;");
aI("text=Campus Policy Initiatives;showmenu=MENU332;url=/CampusPolicyInitiatives/332;oncolor=#5A5C7E;");
aI("text=Security;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#5A5C7E;oncolor=#5A5C7E;");
aI("text=Security Task Force;showmenu=SECURITY TASK FORCE;url=/security;oncolor=#5A5C7E;");
}

with(milonic=new menuname("Resources")){
style=substyle;overflow="scroll";
aI("text=Resource Center;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#6B869C;oncolor=#6B869C;");
aI("text=Search;url=/Search/644;oncolor=#6B869C;");
aI("text=Browse;showmenu=MENU647;url=/Browse/647;oncolor=#6B869C;");
aI("text=Contribute;showmenu=MENU646;url=/Contribute/646;oncolor=#6B869C;");
aI("text=Help;showmenu=MENU482;url=/Help/482;oncolor=#6B869C;");
aI("text=EDUCAUSE Publications;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#6B869C;oncolor=#6B869C;");
aI("text=;image=/images/nav/nav_eq.gif;url=/apps/eq/index.asp;oncolor=#6B869C;");
aI("text=;image=/images/nav/nav_er.gif;url=/apps/er/index.asp;oncolor=#6B869C;");
aI("text=Additional Resources;showmenu=MENU47;url=/AdditionalResources/47;oncolor=#6B869C;");
aI("text=Syndicate;url=/Syndicate/1586;oncolor=#6B869C;");
}

with(milonic=new menuname("Advanced Search")){
style=substyle;overflow="scroll";
aI("text=Other Google Searches;padding=0;fontweight=bold;type=header;align=center;");
aI("text=Job Search;url=/JobSearch/1230;");
aI("text=Resource Center Search;url=/SearchOurResources/644;");
aI("text=Help Information;padding=0;fontweight=bold;type=header;align=center;");
aI("text=Search Help;url=/SearchHelp/1588;");
}

with(milonic=new menuname("MENU5")){
style=substyle;overflow="scroll";
aI("text=Institutional Membership;url=/InstitutionalMembership/581;oncolor=#990000;");
aI("text=International Principles;url=/InternationalPrinciples/10547;oncolor=#990000;");
aI("text=International Membership;url=/InternationalMembership/10307;oncolor=#990000;");
aI("text=Corporate Membership;url=/CorporateMembership/689;oncolor=#990000;");
aI("text=Make the Most of Your Membership;url=/MaketheMostofYourMembership/857;oncolor=#990000;");
aI("text=Membership Demographics;url=/MembershipDemographics/686;oncolor=#990000;");
aI("text=Member Directory;url=/MembershipDirectory/672;oncolor=#990000;");
aI("text=Membership Testimonials;url=/MembershipTestimonials/687;oncolor=#990000;");
aI("text=Membership Application;url=https://www.educause.edu/MembershipApplication/773;oncolor=#990000;");
aI("text=Request Mailing Labels;url=/RequestMailingLabels/1018;oncolor=#990000;");
}

with(milonic=new menuname("MENU54")){
style=substyle;overflow="scroll";
aI("text=Governance and Leadership;url=/GovernanceandLeadership/578;oncolor=#990000;");
aI("text=Operations and Background;url=/OperationsandBackground/579;oncolor=#990000;");
aI("text=Collaborations and Affiliations;url=/CollaborationsandAffiliations/586;oncolor=#990000;");
aI("text=Staff;url=/Staff/842;oncolor=#990000;");
}

with(milonic=new menuname("MENU6")){
style=substyle;overflow="scroll";
aI("text=Corporate Membership;url=/CorporateMembership/689;oncolor=#990000;");
aI("text=Corporate Partner Program;url=/CorporatePartnerProgram/583;oncolor=#990000;");
aI("text=Conferences Including Corporate Participation;url=/ConferencesIncludingCorporateParticipation/704;oncolor=#990000;");
aI("text=Opportunities for Advertising ;url=/apps/er/media-kit.asp;oncolor=#990000;");
aI("text=Guiding Principles;url=/GuidingPrinciples/1627;oncolor=#990000;");
aI("text=Corporate Press Release Service;url=/CorporatePressReleaseService/585;oncolor=#990000;");
}

with(milonic=new menuname("MENU318")){
style=substyle;overflow="scroll";
aI("text=Program Description;url=/ProgramDescription/890;oncolor=#005797;");
aI("text=Participation Guidelines;url=/ParticipationGuidelines/892;oncolor=#005797;");
aI("text=Constituent and Discussion Group Lists;url=/ConstituentandDiscussionGroups/318#size;oncolor=#005797;");
}

with(milonic=new menuname("MENU672")){
style=substyle;overflow="scroll";
aI("text=Associations;url=/Associations/808;oncolor=#005797;");
aI("text=Corporations;url=/Corporations/806;oncolor=#005797;");
aI("text=Institutions;url=/Institutions/807;oncolor=#005797;");
aI("text=By Carnegie Classification;url=/ByCarnegieClassification/786;oncolor=#005797;");
aI("text=By Geographic Location;url=/ByGeographicLocation/785;oncolor=#005797;");
aI("text=New Members;url=/NewMembers/810;oncolor=#005797;");
}

with(milonic=new menuname("MENU575")){
style=substyle;overflow="scroll";
aI("text=Search;url=/Search/748;oncolor=#005797;");
}

with(milonic=new menuname("MENU31")){
style=substyle;overflow="scroll";
aI("text=Annual Conference;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=EDUCAUSE Annual Conference;url=/EDUCAUSEAnnualConference/1352;oncolor=#002F55;");
aI("text=Leadership Development Events;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=EDUCAUSE Institute Learning Technology Leadership Program;url=/TheEDUCAUSEInstituteLearningTechnologyLeadershipProgram/6273;oncolor=#002F55;");
aI("text=EDUCAUSE Institute Leadership Program ;url=/TheEDUCAUSEInstituteLeadershipProgram/1733;oncolor=#002F55;");
aI("text=EDUCAUSE Institute Management Program;url=/TheEDUCAUSEInstituteManagementProgram/1734;oncolor=#002F55;");
aI("text=The Frye Leadership Institute ;url=http://www.fryeinstitute.org;target=new;oncolor=#002F55;");
aI("text=Special Topic Conferences and Events;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=Campus Architectural Middleware Planning (CAMP) Workshops;url=/CampusArchitecturalMiddlewarePlanning%28CAMP%29Workshops/1607;oncolor=#002F55;");
aI("text=ECAR Symposia;url=/Symposia/96;oncolor=#002F55;");
aI("text=EDUCAUSE/Cornell Institute for Computer Policy and Law Annual Seminar;url=http://www.sce.cornell.edu/exec/cpl.php;target=new;oncolor=#002F55;");
aI("text=EDUCAUSE Live!;url=/live;oncolor=#002F55;");
aI("text=EDUCAUSE Enterprise Technology Conference;url=/enterpriseconference;oncolor=#002F55;");
aI("text=EDUCAUSE Policy Conference (formerly Networking);url=/EDUCAUSEPolicyConference%28formerlyNetworking%29/1477;oncolor=#002F55;");
aI("text=EDUCAUSE Learning Initiative Meetings;url=/Activities/5540;oncolor=#002F55;");
aI("text=Key to Competitiveness (An AASCU/EDUCAUSE/University of Central Florida Event);url=/KeytoCompetitiveness%28AnAASCUEDUCAUSEUniversityofCentralFloridaEvent%29/7341;oncolor=#002F55;");
aI("text=Net@EDU Annual Meeting;url=/Net%40EDUAnnualMeeting/3092;oncolor=#002F55;");
aI("text=Security Professionals Conference;url=/securityconference;oncolor=#002F55;");
aI("text=Seminars on Academic Computing;url=/sac;oncolor=#002F55;");
aI("text=StateNets Working Group;url=/6875;oncolor=#002F55;");
aI("text=Regional Conferences and Seminars;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=EDUCAUSE Seminars;url=/content.asp?Section_ID=122;oncolor=#002F55;");
aI("text=Mid-Atlantic Regional Conference;url=/marc;oncolor=#002F55;");
aI("text=Midwest Regional Conference;url=/mwrc;oncolor=#002F55;");
aI("text=Southeast Regional Conference;url=/serc;oncolor=#002F55;");
aI("text=Southwest Regional Conference;url=/swrc;oncolor=#002F55;");
aI("text=Western Regional Conference;url=/wrc;oncolor=#002F55;");
aI("text=NERCOMP Annual Conference;url=/nercomp;oncolor=#002F55;");
aI("text=International Events;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=CAUDIT-EDUCAUSE Institute;url=http://www.caudit.edu.au/institute/index.html;target=new;oncolor=#002F55;");
aI("text=EDUCAUSE Australasia;url=http://www.caudit.edu.au/educauseaustralasia07/;target=new;oncolor=#002F55;");
aI("text=Archived Affiliate Conference Proceedings;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=CUMREC Annual Conference (An EDUCAUSE Affiliate);url=/CUMRECAnnualConference%28AnEDUCAUSEAffiliate%29/3089;oncolor=#002F55;");
}

with(milonic=new menuname("MENU37")){
style=substyle;overflow="scroll";
aI("text=Jane N. Ryland Fellowship Program;url=/JaneN%2ERylandFellowshipProgram/796;oncolor=#002F55;");
aI("text=SAC Scholarships;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#002F55;oncolor=#002F55;");
aI("text=Diane Balestri Memorial Scholarship;url=/DianeBalestriMemorialScholarship/854;oncolor=#002F55;");
aI("text=SAC Founders Scholarship;url=/SACFoundersScholarship/6110;oncolor=#002F55;");
}

with(milonic=new menuname("MENU1011")){
style=substyle;overflow="scroll";
aI("text=Browse;url=/Browse/1012;oncolor=#002F55;");
aI("text=Search;url=/Search/1015;oncolor=#002F55;");
aI("text=Submit;url=/Submit/1019;oncolor=#002F55;");
}

with(milonic=new menuname("MENU312")){
style=substyle;overflow="scroll";
aI("text=Award Recipients;url=/AwardRecipients/12131;oncolor=#002F55;");
aI("text=EDUCAUSE Catalyst Award;url=/EDUCAUSECatalystAward/9522;oncolor=#002F55;");
aI("text=EDUCAUSE Leadership Award;url=/EDUCAUSELeadershipAward/769;oncolor=#002F55;");
aI("text=<em>EDUCAUSE Quarterly</em> Contribution of the Year Award;url=/EDUCAUSEQuarterlyContributionoftheYearAward/768;oncolor=#002F55;");
aI("text=Paul Evan Peters Award;url=/PaulEvanPetersAward/852;oncolor=#002F55;");
aI("text=Archived Awards;url=/ArchivedAwards/12132;oncolor=#002F55;");
}

with(milonic=new menuname("MENU38")){
style=substyle;overflow="scroll";
aI("text=Browse;url=/Browse/1219;oncolor=#002F55;");
aI("text=Search;url=/Search/1230;oncolor=#002F55;");
aI("text=Submit;url=/Submit/1258;oncolor=#002F55;");
}

with(milonic=new menuname("MENU861")){
style=substyle;overflow="scroll";
aI("text=Volunteer Now!;url=/VolunteerNow%21/870;oncolor=#002F55;");
}

with(milonic=new menuname("MENU621")){
style=substyle;overflow="scroll";
aI("text=AN-MSI;url=http://www.anmsi.org;target=new;oncolor=#5A5C7E;");
aI("text=Evolving Technologies Reports;url=/EvolvingTechnologiesReports/869;oncolor=#5A5C7E;");
aI("text=HEBCA;url=/HEBCA/623;oncolor=#5A5C7E;");
aI("text=Higher Education PKI;url=/HigherEducationPKI/931;oncolor=#5A5C7E;");
aI("text=Identification and Authorization;url=/IdentificationandAuthorization/864;oncolor=#5A5C7E;");
aI("text=Middleware;url=/Middleware/624;oncolor=#5A5C7E;");
aI("text=Peer-to-Peer;url=/Peer%2Dto%2DPeer/868;oncolor=#5A5C7E;");
}

with(milonic=new menuname("MENU332")){
style=substyle;overflow="scroll";
aI("text=EDUCAUSE/Cornell Institute for Computer Policy and Law Home;url=/EDUCAUSECornellInstituteforComputerPolicyandLawHome/863;oncolor=#5A5C7E;");
}

with(milonic=new menuname("MENU647")){
style=substyle;overflow="scroll";
aI("text=New and Popular Content;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#6B869C;oncolor=#6B869C;");
aI("text=New Content;url=/NewContent/2657;oncolor=#6B869C;");
aI("text=Popular Content;url=/PopularContent/2658;oncolor=#6B869C;");
aI("text=Topical Content;padding=0;fontweight=bold;type=header;align=center;headerbgcolor=#6B869C;oncolor=#6B869C;");
aI("text=Cybersecurity;url=/Cybersecurity/645?parent_id=702;oncolor=#6B869C;");
aI("text=Information Systems and Services;url=/InformationSystemsAndServices/645?parent_id=106;oncolor=#6B869C;");
aI("text=Information Technology Management;url=/ITManagementAndLeadership/645?parent_id=101;oncolor=#6B869C;");
aI("text=Networking and Emerging Technologies;url=/NetworkingAndEmergingTech/645?parent_id=105;oncolor=#6B869C;");
aI("text=Policy &amp; Law;url=/PolicyandLaw/645?parent_id=104;oncolor=#6B869C;");
aI("text=Teaching &amp; Learning;url=/TeachingAndLearning/645?parent_id=107;oncolor=#6B869C;");
}

with(milonic=new menuname("MENU646")){
style=substyle;overflow="scroll";
aI("text=Contribute a Resource;url=/ContributeaResource/6224;oncolor=#6B869C;");
aI("text=Contribute an Effective Practice;url=/ContributeanEffectivePractice/656;oncolor=#6B869C;");
}

with(milonic=new menuname("MENU482")){
style=substyle;overflow="scroll";
aI("text=About Resource Center Browse Pages;url=/AboutResourceCenterBrowsePages/1459;oncolor=#6B869C;");
aI("text=Ask the Librarian;url=/AsktheLibrarian/6590;oncolor=#6B869C;");
aI("text=Help With E-mail Alerts;url=/HelpWithE%2DmailAlerts/1674;oncolor=#6B869C;");
aI("text=Resource Center Advanced Search Help;url=/ResourceCenterAdvancedSearchHelp/2694;oncolor=#6B869C;");
}

with(milonic=new menuname("MENU47")){
style=substyle;overflow="scroll";
aI("text=Books;url=/Books/635;oncolor=#6B869C;");
aI("text=Current Issues;url=/CurrentIssues/875;oncolor=#6B869C;");
aI("text=Electronic Newsletters;url=/ElectronicNewsletters/638;oncolor=#6B869C;");
aI("text=Executive Resources;url=/ExecutiveResources/6445;oncolor=#6B869C;");
aI("text=Monographs and Reports;url=/MonographsandReports/636;oncolor=#6B869C;");
aI("text=<em>Student Guide to IT</em>;url=/StudentGuidetoIT/873;oncolor=#6B869C;");
aI("text=<em>Pocket Guide to Higher Ed</em>;url=/PocketGuidetoHigherEd/874;oncolor=#6B869C;");
}

