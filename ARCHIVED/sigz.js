function wsignal() {
    var sig=prompt("SIGNAL:","0");
    var outmsg = "";
    if (sig !== null) {
        if (sig == 17) {
             c = document.getElementById("qu");
            c.src = "sigz/17.html";
        } else if (sig == 56) {
             c = document.getElementById("qu");
            c.src = "sigz/56.html";
        } else {
            outmsg = "That signal does not exist.";
        }
    } else {
        outmsg = "Please enter a signal.";
    }
}
	
function upd(valz){
	document.getElementById("resultz").text(('hello there'))
}
