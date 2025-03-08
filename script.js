document.getElementById("toggleText").addEventListener("click", function() {
    var extraText = document.getElementById("extraText");
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        this.textContent = "Show Less";
    } else {
        extraText.style.display = "none";
        this.textContent = "Show More";
    }
});
