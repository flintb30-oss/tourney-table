const SUPABASE_URL = "https://pmjujeqratksybfmilsw.supabase.co";
const SUPABASE_KEY = "sb_publishable_4raKS97uix90GfqxMwLz4w_mLdCbbV0";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
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
async function loadTournaments() {
    const { data, error } = await supabaseClient
        .from("tournaments")
        .select("*");

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
}

loadTournaments();
