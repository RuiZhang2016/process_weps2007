// Netscape 3.0 compatibility (image swapping)
compat = false;
if( parseInt( navigator.appVersion ) >= 3 ) {
	compat = true; 
}

// cache images 
if( compat ) {
	l_home = new Image();l_home.src = "/img/nav/l_home.gif";
	lo_home = new Image();lo_home.src = "/img/nav/lo_home.gif";
	
	l_contact = new Image();l_home.src = "/img/nav/l_home.gif";
	lo_contact = new Image();lo_home.src = "/img/nav/lo_home.gif";
	
	l_about = new Image();l_about.src = "/img/nav/l_about.gif";
	lo_about = new Image();lo_about.src = "/img/nav/lo_about.gif";
	
	l_firmhistory = new Image();l_firmhistory.src = "/img/nav/l_firmhistory.gif";
	lo_firmhistory = new Image();lo_firmhistory.src = "/img/nav/lo_firmhistory.gif";
	
	l_publicservice = new Image();l_publicservice.src = "/img/nav/l_publicservice.gif";
	lo_publicservice = new Image();lo_publicservice.src = "/img/nav/lo_publicservice.gif";
	
	l_mediacenter = new Image();l_mediacenter.src = "/img/nav/l_mediacenter.gif";
	lo_mediacenter = new Image();lo_mediacenter.src = "/img/nav/lo_mediacenter.gif";
	
	l_practice = new Image();l_practice.src = "/img/nav/l_practice.gif";
	lo_practice = new Image();lo_practice.src = "/img/nav/lo_practice.gif";
	
	l_professionals = new Image();l_professionals.src = "/img/nav/l_professionals.gif";
	lo_professionals = new Image();lo_professionals.src = "/img/nav/lo_professionals.gif";
	
	l_offices = new Image();l_offices.src = "/img/nav/l_offices.gif";
	lo_offices = new Image();lo_offices.src = "/img/nav/lo_offices.gif";
	
	l_lawyerrecruiting = new Image();l_lawyerrecruiting.src = "/img/nav/l_lawyerrecruiting.gif";
	lo_lawyerrecruiting = new Image();lo_lawyerrecruiting.src = "/img/nav/lo_lawyerrecruiting.gif";
	
	l_lawstudent = new Image();l_lawstudent.src = "/img/nav/l_lawstudent.gif";
	lo_lawstudent = new Image();lo_lawstudent.src = "/img/nav/lo_lawstudent.gif";
	
	l_firmculture = new Image();l_firmculture.src = "/img/nav/l_firmculture.gif";
	lo_firmculture = new Image();lo_firmculture.src = "/img/nav/lo_firmculture.gif";
	
	l_summerassoc = new Image();l_summerassoc.src = "/img/nav/l_summerassoc.gif";
	lo_summerassoc = new Image();lo_summerassoc.src = "/img/nav/lo_summerassoc.gif";
	
	l_profdevelopment = new Image();l_profdevelopment.src = "/img/nav/l_profdevelopment.gif";
	lo_profdevelopment = new Image();lo_profdevelopment.src = "/img/nav/lo_profdevelopment.gif";
	
	l_diversity = new Image();l_diversity.src = "/img/nav/l_diversity.gif";
	lo_diversity = new Image();lo_diversity.src = "/img/nav/lo_diversity.gif";
	
	l_benefits = new Image();l_benefits.src = "/img/nav/l_benefits.gif";
	lo_benefits = new Image();lo_benefits.src = "/img/nav/lo_benefits.gif";
	
	l_recruitingresources = new Image();l_recruitingresources.src = "/img/nav/l_recruitingresources.gif";
	lo_recruitingresources = new Image();lo_recruitingresources.src = "/img/nav/lo_recruitingresources.gif";
	
	l_ouroffice = new Image();l_ouroffice.src = "/img/nav/l_ouroffice.gif";
	lo_ouroffice = new Image();lo_ouroffice.src = "/img/nav/lo_ouroffice.gif";
	
	l_opportunities = new Image();l_opportunities.src = "/img/nav/l_opportunities.gif";
	lo_opportunities = new Image();lo_opportunities.src = "/img/nav/lo_opportunities.gif";
	
	l_laterals = new Image();l_laterals.src = "/img/nav/l_laterals.gif";
	lo_laterals = new Image();lo_laterals.src = "/img/nav/lo_laterals.gif";
	
	l_admincareers = new Image();l_admincareers.src = "/img/nav/l_admincareers.gif";
	lo_admincareers = new Image();lo_admincareers.src = "/img/nav/lo_admincareers.gif";
	
	l_newsstand = new Image();l_newsstand.src = "/img/nav/l_newsstand.gif";
	lo_newsstand = new Image();lo_newsstand.src = "/img/nav/lo_newsstand.gif";
	
	l_events = new Image();l_events.src = "/img/nav/l_events.gif";
	lo_events = new Image();lo_events.src = "/img/nav/lo_events.gif";
	
	l_extranet = new Image();l_extranet.src = "/img/nav/l_extranet.gif";
	lo_extranet = new Image();lo_extranet.src = "/img/nav/lo_extranet.gif";
	
	l_webresources = new Image();l_webresources.src = "/img/nav/l_webresources.gif";
	lo_webresources = new Image();lo_webresources.src = "/img/nav/lo_webresources.gif";

	
	}


// swap cached images
function swap(x, y) {
	if( compat ) {
		document.images[x].src = eval(y+'.src'); 
	}
}


// Function that swaps images.
function change(id, newSrc) {
    var theImage = FWFindImage(document, id, 0);
    if (theImage) {
        theImage.src = newSrc;
    }
}


// Functions that track and set toggle group button states.
function FWFindImage(doc, name, j) {
    var theImage = false;
    if (doc.images) {
        theImage = doc.images[name];
    }
    if (theImage) {
        return theImage;
    }
    if (doc.layers) {
        for (j = 0; j < doc.layers.length; j++) {
            theImage = FWFindImage(doc.layers[j].document, name, 0);
            if (theImage) {
                return (theImage);
            }
        }
    }
    return (false);
}