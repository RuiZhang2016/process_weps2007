
function btn(a,b){
	var c=document.getElementById('td'+b);
	var d=document.getElementById('link'+b);
	if(a<3)c.style.borderColor = '#999';
	if(a==1)c.style.backgroundColor = '#ccc';
	if(a==2)c.style.backgroundColor = '#999';
	if(a<3)d.style.color = '#000';
	if(a==3){ if(b != actief){
		c.style.borderColor = '#002973';
		c.style.backgroundColor = '#002973';
		d.style.color = '#fff';
	}else{
		c.style.backgroundColor = '#fff';
		d.style.color = '#000';
	}}
}

function addbookmark(){ 
	if (document.all) window.external.AddFavorite(bookmarkurl,bookmarktitle);
}
