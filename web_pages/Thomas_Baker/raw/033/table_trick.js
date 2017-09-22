function correct_tbl_ht(){
	if (document.getElementById('tbl') && document.getElementById('left_tbl')) {
		// ensure both document elements exist before getting or setting their properties!
		var height = (document.getElementById('tbl').offsetHeight) - (document.getElementById('left_tbl').offsetHeight);
		if (height > 0){
			document.getElementById('left_tbl').height = (document.getElementById('tbl').offsetHeight);
		}
	}
}
