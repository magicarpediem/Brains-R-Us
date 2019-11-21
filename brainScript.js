function fadeInSlideUp() {
    var brain = document.getElementById("brain");
    var spinner = document.getElementById("spinner");
    brain.style.display = "none";
    spinner.style.display = "block";
    setTimeout(function () {
        spinner.style.display = "none";
        brain.style.display = "block";
    }, 1500);
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});