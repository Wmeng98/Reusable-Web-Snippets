function myFunction() {
    console.log("works");
    var x = document.getElementById("navBar");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
