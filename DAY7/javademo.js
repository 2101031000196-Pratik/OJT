function demoExternalAlert() {
    alert("External Alert.");
}
function demoExternalConfirm() {
    if (confirm("Are You Sure..??")) {
        alert("Yesss");
    }
    else {
        alert("NOOO");
    }
}
function demoExternalPrompt() {
    var fname = prompt("Enter Firstname Here")
    var lname = prompt("Enter Lastname Here")
    alert(fname + " " + lname);
}