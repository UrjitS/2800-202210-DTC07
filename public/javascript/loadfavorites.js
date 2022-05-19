const { links, header } = require("express/lib/response");

var dataParsed;

function getStatus() {
    links.rel = 'stylesheet';
    links.type = 'text/css';
    links.href = 'main.css';

head.appendChild(link);
    $.ajax({
        url: "http://localhost:3000/checkFavoritePageStatus",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id"),
            page: "null"
        },
        success: function (result) {
            dataParsed = JSON.parse(result[0].favoritepages);
            console.log(dataParsed);
            if (dataParsed.yoga == "yes") {
                displayYoga();
            }
            if (dataParsed.meditation == "yes") {
                displayMeditation();
            }
            if (dataParsed.journal == "yes") {
                displayJournal();
            }
            if (dataParsed.nutrition == "yes") {
                displayNutrition();
            }
            if (dataParsed.resource == "yes") {
                displayResources();
            }
            if (dataParsed.sleep == "yes") {
                displaySleepHabits();
            }
            if (dataParsed.music == "yes") {
                displayMusic();
            }
        }
    });

}

function displayMeditation() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Meditation
        </div>
        <div class="card-body">
            <a href="./meditation.html">
                <img src="./images/meditation.png" alt="placeholder">
            </a>
        </div>
    </div>`);
}

function displayJournal() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">
            Journal</div>
        <div class="card-body">
            <a href="./journal_main_page.html">
                <img src="./images/journal.png" alt="placeholder">
            </a>
        </div>
    </div>`);
}

function displayYoga() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Yoga
        </div>
        <div class="card-body">
            <a href="./yoga.html">
                <img src="./images/yoga.png" alt="placeholder">
            </a>
        </div>
    </div>`);
}

function displayResources() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Local Resources
        </div>
        <div class="card-body">
            <a href="./find_an_expert.html">
                <img src="images/map.png" alt="placeholder">
            </a>
        </div>
    </div>`);
}

function displayNutrition() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Nutrition
        </div>
        <div class="card-body">
            <a href="./diet.html">
                <img src="images/diet.PNG">
            </a>
        </div>
    </div>`);
}

function displaySleepHabits() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Sleep Habits
        </div>
        <div class="card-body">
            <a href="....">
                <img src="images/sleep.png">
            </a>
        </div>
    </div>`);
}

function displayMusic() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0">Music
        </div>
        <div class="card-body">
            <a href="....">
                <img src="images/music.png">
            </a>
        </div>
    </div>`);
}

$(document).ready(
    getStatus
)