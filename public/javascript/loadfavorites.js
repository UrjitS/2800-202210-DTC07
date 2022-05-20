var dataParsed;

function getStatus() {

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
            if (dataParsed.resources == "yes") {
                displayResources();
            }
            if (dataParsed.sleeping_habits == "yes") {
                displaySleepHabits();
            }
            if (dataParsed.music == "yes") {
                displayMusic();
            }
            if (dataParsed.self_assessment_quiz == "yes") {
                displayQuiz();
            }
            if (dataParsed.walks == "yes") {
                displayWalks();
            }
        }
    });

}

function displayMeditation() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header2">Meditation
    </div>
    <div class="card-body" id="card-body2">
        <a href="./meditation.html">
            <img src="./images/meditation.png" alt="placeholder" class="card-body-img">
        </a>
    </div>
</div>`);
}

function displayJournal() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
    <div id="card-header1" class="card-header border-0"> Journal</div>
    <div id="card-body1" class="card-body">
        <a href="./journal_main_page.html">
            <img src="./images/journal.png" alt="placeholder" class="card-body-img"></a>
    </div>
</div>`);
}

function displayYoga() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header3">Yoga
    </div>
    <div class="card-body" id="card-body3">
        <a href="./yoga.html">
            <img src="./images/yoga.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}

function displayResources() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header5">Local Resources
    </div>
    <div class="card-body" id="card-body5">
        <a href="./find_an_expert.html">
            <img src="./images/map.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}

function displayNutrition() {
    $("#fav-box").append(`


    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header4">Nutrition
    </div>
    <div class="card-body" id="card-body4">
        <a href="./diet.html">
            <img src="images/diet.PNG" alt="placeholder" class="card-body-img">
        </a>
    </div>
</div>`);
}

function displaySleepHabits() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header6">Sleep Habits
    </div>
    <div class="card-body" id="card-body6">
        <a href="./sleep_habit.html">
            <img src="./images/sleep.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}

function displayMusic() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header7">Music Suggestions
    </div>
    <div class="card-body" id="card-body7">
        <a href="./music.html">
            <img id="music-img" src="./images/music.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}
function displayQuiz() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header7">Self Assessing Quiz
    </div>
    <div class="card-body" id="card-body7">
        <a href="./self_assessment_quiz.html">
            <img id="music-img" src="./images/quiz.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}

function displayWalks() {
    $("#fav-box").append(`

    <div class="card bg-light mb-3">
    <div class="card-header border-0" id="card-header7">Find local walks
    </div>
    <div class="card-body" id="card-body7">
        <a href="./self_assessment_quiz.html">
            <img id="music-img" src="./images/walks.png" alt="placeholder"  class="card-body-img">
        </a>
    </div>
</div>`);
}


$(document).ready(
    getStatus
)