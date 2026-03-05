document.addEventListener('DOMContentLoaded', function () {

    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');
    var button = document.getElementById('button');
    var skip = document.getElementById('skipIntro');

function showContent() {

    navbar.style.display = 'block';
    footer.style.display = 'block';
    button.style.display = 'block';

    navbar.style.opacity = 0;
    footer.style.opacity = 0;

    setTimeout(function(){
        navbar.style.transition = "opacity 0.8s";
        footer.style.transition = "opacity 0.8s";

        navbar.style.opacity = 1;
        footer.style.opacity = 1;
    },10);

    if(skip){
        // fade out instead of instantly disappearing
        skip.classList.add("hidden");
    }
}

    // automatic intro finish
    setTimeout(showContent, 9040);

    // skip intro click
    if(skip){
        skip.addEventListener("click", showContent);
    }

});