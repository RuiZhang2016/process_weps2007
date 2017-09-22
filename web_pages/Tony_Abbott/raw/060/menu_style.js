function topMenuOn (el) {
	el.style.backgroundColor = "#CD000D";
}

function topMenuOff (el) {
	el.style.backgroundColor = "";
}

function mainMenuOn (el) {
	el.style.backgroundColor = "#741416";
	el.childNodes[0].childNodes[0].style.color = "#FFFFFF";
}

function mainMenuOff (el) {
	el.style.backgroundColor = "#FFFFE8";
	el.childNodes[0].childNodes[0].style.color = "#484848";
}

function subMenuOn (el) {
	el.style.backgroundColor = "#333A66";
	el.childNodes[0].childNodes[0].style.color = "#FFFFFF";
}

function subMenuOff (el) {
	el.style.backgroundColor = "#741416";
	el.childNodes[0].childNodes[0].style.color = "#FFFFE8";
}