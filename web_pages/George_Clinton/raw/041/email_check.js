var fieldstocheck = new Array();
fieldnames = new Array();
function checkform() {
        for (i=0;i<fieldstocheck.length;i++) {
                if (eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].value") == "") {
                        alert("Please enter your "+fieldnames[i]);
                        eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].focus()");
                        return false;
                }
        }
        if(! compareEmail()) {
                alert("Email addresses you entered do not match");
                return false;
        }
        return true;
}
function addFieldToCheck(value,name) {
        fieldstocheck[fieldstocheck.length] = value;
        fieldnames[fieldnames.length] = name;
}
function compareEmail() {
        return (document.subscribeform.elements["email"].value == document.subscribeform.elements["emailconfirm"].value);
}
