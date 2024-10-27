function validate() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;


    if (password1.length < 8) {
        alert("The first password is less than 8 letters")
    } else if (password2.length < 8) {
        alert("The second password is less than 8 letters")
    } else if (password1 != password2) {
        alert("The passwords don't match")
    } else {
        alert("Passwords validated")
    }
}

function alert_paragraph_color() {
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var borderWidth = document.getElementById("borderWidth").value;
    var bgR = document.getElementById("bgR").value;
    var bgG = document.getElementById("bgG").value;
    var bgB = document.getElementById("bgB").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    tag.style.borderWidth = borderWidth
    tag.style.backgroundColor = `rgb(${bgR},${bgG},${bgB})`;
}
