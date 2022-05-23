var dataParsed;
/**
 * Sends ajax request to get the users favorited pages list
 */
function getStatus() {

    $.ajax({
        // url: "https://bridge-the-gap.herokuapp.com/checkFavoritePageStatus",
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
/**
 * Displays the meditation sticky note
 */
function displayMeditation() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header2">Meditation</div>
        <div class="card-body" id="card-body2">
            <a href="./content/meditation.html">
                <img src="../images/meditation.png" alt="placeholder" class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the journal sticky note
 */
function displayJournal() {
    $("#fav-box").append(`         
    <div class="card bg-light mb-3">
        <div id="card-header1" class="card-header border-0"> Journal</div>
        <div id="card-body1" class="card-body">
            <a href="./journal/journal_main_page.html">
                <img src="../images/journal.png" alt="placeholder" class="card-body-img"></a>
        </div>
    </div>`);
}
/**
 * Displays the yoga sticky note
 */
function displayYoga() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header3">Yoga</div>
        <div class="card-body" id="card-body3">
            <a href="./content/yoga.html">
                <img src="../images/yoga.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the resources sticky note
 */
function displayResources() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header5">Local Resources</div>
        <div class="card-body" id="card-body5">
            <a href="./content/find_an_expert.html">
                <img src="../images/map.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the nutrition sticky note
 */
function displayNutrition() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header4">Nutrition</div>
            <div class="card-body" id="card-body4">
                <a href="./content/diet.html">
                    <img src="../images/diet.PNG" alt="placeholder" class="card-body-img">
                </a>
            </div>
    </div>`);
}
/**
 * Displays the sleeping habits sticky note
 */
function displaySleepHabits() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header6">Sleep Habits </div>
        <div class="card-body" id="card-body6">
            <a href="./content/sleep_habit.html">
                <img src="../images/sleep.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the music sticky note
 */
function displayMusic() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header7">Music Suggestions</div>
        <div class="card-body" id="card-body7">
            <a href="./content/music.html">
                <img id="music-img" src="../images/music.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the quiz sticky note
 */
function displayQuiz() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header7">Self Assessing Quiz </div>
        <div class="card-body" id="card-body7">
            <a href="./content/self_assessment_quiz.html">
                <img id="music-img" src="../images/quiz.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}
/**
 * Displays the walks sticky note
 */
function displayWalks() {
    $("#fav-box").append(`
    <div class="card bg-light mb-3">
        <div class="card-header border-0" id="card-header7">Find local walks </div>
        <div class="card-body" id="card-body7">
            <a href="./content/walks.html">
                <img id="music-img" src="../images/walks.png" alt="placeholder"  class="card-body-img">
            </a>
        </div>
    </div>`);
}


$(document).ready(
    getStatus
)