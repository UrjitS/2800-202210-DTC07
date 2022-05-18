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
        }
    });

}

function displayMeditation() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;  box-shadow: 0 0 1em gray; border-radius: 30px;">
        <div class="card-header border-0" style="background-color: #4df1c6; font-weight: bold;">Meditation
        </div>
        <div class="card-body" style="background-color: #06D6A0">
            <a href="./meditation.html">
                <img src="./images/meditation.png" alt="placeholder" style="object-fit: cover; max-width: 100%">
            </a>
        </div>
    </div>`);
}

function displayJournal() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;  box-shadow: 0 0 1em gray;">
        <div class="card-header border-0" style="background-color: hsl(48, 100%, 66%); font-weight: bold;">
            Journal</div>
        <div class="card-body" style="background-color: #FFD116">
            <a href="./journal_main_page.html">
                <img src="./images/journal.png" alt="placeholder"
                style="object-fit: cover; max-width: 100%; border-radius: 30px">
            </a>
        </div>
    </div>`);
}

function displayYoga() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;  box-shadow: 0 0 1em gray; border-radius: 30px;">
        <div class="card-header border-0" style="background-color: #f75e82; font-weight: bold;">Yoga
        </div>
        <div class="card-body" style="background-color: #EF476F">
            <a href="./yoga.html">
                <img src="./images/yoga.png" alt="placeholder" style="object-fit: cover; max-width: 100%">
            </a>
        </div>
    </div>`);
}

function displayResources() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;  box-shadow: 0 0 1em gray; border-radius: 30px;">
        <div class="card-header border-0" style="background-color: #5f9dd3; font-weight: bold;">Resources
        </div>
        <div class="card-body" style="background-color: #3e8bce">
            <a href="">
                <img src="images/diet.PNG" alt="placeholder" style="object-fit: cover; max-width: 100%">
            </a>
        </div>
    </div>`);
}

function displayNutrition() {
    $("#cardContent").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;  box-shadow: 0 0 1em gray; border-radius: 30px;">
        <div class="card-header border-0" style="background-color: #5f9dd3; font-weight: bold;">Nutrition
        </div>
        <div class="card-body" style="background-color: #3e8bce">
            <a href="./diet.html">
                <img src="images/diet.PNG" alt="placeholder" style="object-fit: cover; max-width: 100%">
            </a>
        </div>
    </div>`);
}

$(document).ready(
    getStatus
)