clickCounter = 0;
easterEggActive = false;

function activateEasterEgg() {
    clickCounter++;
    if (clickCounter == 3 && easterEggActive) {
        // deActivate
        easterEggActive = false;
        clickCounter = 0;
        document.body.style.removeProperty("-webkit-transform");
        document.getElementById("appName").className = "";
        var list = document.getElementsByTagName("p");
        for (i = 0; i < list.length; i++) {
            list[i].className = "";
        }
    } else if (clickCounter == 3 && !easterEggActive) {
        // activate
        document.body.setAttribute("style", "-webkit-transform: rotate(-180deg);");
        easterEggActive = true;
        clickCounter = 0;
        document.getElementById("appName").className = "rainbow rainbow_text_animated";
        var list = document.getElementsByTagName("p");
        for (i = 0; i < list.length; i++) {
            list[i].className = "rainbow rainbow_text_animated";
        }
    }
}

function addNavbar() {
    $(".navbarLocation").empty();
    $(".navbarLocation").append(
        `<div class="pos-f-t">
            <nav class="navbar navbar-dark bg-white">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h3 id="appName" class="" style="display: inline-block; margin: 0 auto">Bridge the Gap</h3>
                <img src="images/navlogo.png" onclick="activateEasterEgg()" style="max-width: 70px; max-height: 70px">
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">Menu</h4>
                    <span class="text-muted">
                        <ul>
                            <li><a href="./suggestions.html"><span style="color: white">Suggestions</span></a></li>
                            <li><span class="text-muted">Personal Tools</span></li>
                            <li><a class="text-muted" href="./journal_main_page.html">Wellness Journal</a></li>
                        </ul>
                    </span>

                </div>  
            </div>
        </div>`);
}

function addFooter() {
    $(".footerLocation").empty();
    $(".footerLocation").append(
        `
        <footer class="fixed-bottom navbar bg-dark d--none d-md-none" style="height: 75px; padding: 0px;">

            <div class="bottom-nav-button">
                <div class="btn bg-dark" style="padding-left:4em">
                    <a href="./main.html" class="material-icons"
                        style="color: whitesmoke; text-decoration: unset; font-size: 35px; ">person</a>
                    <p style="color: white;">Profile</p>
                </div>
            </div>
            <div class="bottom-nav-button">
                <div class="btn bg-dark">
                    <a href="./main.html" class="material-icons"
                        style="color: whitesmoke; text-decoration: unset; font-size: 35px;">home</a>
                    <p style="color: whitesmoke;">Home</p>
                </div>
            </div>
            <div class="bottom-nav-button">
                <div class="btn bg-dark" style="padding-right:4em" onclick="history.back()">
                    <a class="material-icons"
                        style="color: whitesmoke; text-decoration: unset; font-size: 35px;">arrow_back</a>
                    <p style="color: whitesmoke;">Back</p>
                </div>
            </div>

    </footer>`);
}

function setup() {
    addNavbar();
    addFooter();
}

$(document).ready(setup)