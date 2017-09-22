//opens a gallery in a new window
function launchGallery (section_id) {
	url = "/gallery.asp?section_id=" + section_id;
	galleryWindow = window.open(url,'galleryWindow','width=472,height=528,resizable=0,TOOLBAR=0,LOCATION=0,DIRECTORIES=0,STATUS=0,menubar=0');
}

