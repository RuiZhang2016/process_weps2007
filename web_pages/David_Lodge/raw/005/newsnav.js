arrowState = new Array("/icons/2004/a/nav_arrow_up.gif","/icons/2004/a/nav_arrow.gif")
smenuState = new Array("/icons/2004/a/minus_menu.gif","/icons/2004/a/plus_menu.gif")
divState = new Array("block","none")
sdivState = new Array("block","none")
arrow01=0
arrow02=1
arrow03=1
arrow04=0
imgCt = arrowState.length
simgCt = smenuState.length
smenu01=1
function showNews() {
	arrow01++
	if (arrow01 == imgCt) {
		arrow01=0
	}
	document.newsArrow.src=arrowState[arrow01]
	document.getElementById('newsList').style.display = divState[arrow01]
}
function showRev() {
	arrow02++
	if (arrow02 == imgCt) {
		arrow02=0
	}
	document.revArrow.src=arrowState[arrow02]
	document.getElementById('revList').style.display = divState[arrow02]
}
function showJobs() {
	arrow03++
	if (arrow03 == imgCt) {
		arrow03=0
	}
	document.jobsArrow.src=arrowState[arrow03]
	document.getElementById('jobsList').style.display = divState[arrow03]
}
function showServ() {
	arrow04++
	if (arrow04 == imgCt) {
		arrow04=0
	}
	document.servArrow.src=arrowState[arrow04]
	document.getElementById('servList').style.display = divState[arrow04]
}
function showSup() {
	smenu01++
	if (smenu01 == simgCt) {
		smenu01=0
	}
	document.supMenu.src=smenuState[smenu01]
	document.getElementById('supList').style.display = sdivState[smenu01]
}
