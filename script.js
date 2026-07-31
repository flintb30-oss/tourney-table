// Tourney Table Functions

// Example tournament countdown
const eventDate = new Date("August 15, 2026 18:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s"
    );

}, 1000);


// Region converter
function showRegion() {

    const region = document.querySelector("select").value;

    alert(
        "Tournament times will be converted for: " + region
    );

}
