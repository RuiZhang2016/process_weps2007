function chSubmit(id, catId, act){
    document.chFrm.action = act;
    document.chFrm.id.value = id;
    document.chFrm.cat.value = catId;
    document.chFrm.submit();
    return false;
}