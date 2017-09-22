var remote = null;
window.name = 'mainWindow';
function oI(url){
window.open(url,'surf','width=200,height=240,scrollbars=yes,resizable=yes')
if (remote != null) {
if (remote.opener == null)
remote.opener = self;
remote.location.href = url;
}
}