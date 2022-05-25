clickCounter = 0;
easterEggActive = false;
/**
 * Activates or DeActivates the easter egg when logo is clicked 3 times
 */
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
/**
 * Adds the top navbar to the html page
 */
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
                <img src="../images/navlogo.png" onclick="activateEasterEgg()" style="max-width: 70px; max-height: 70px">
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">Menu</h4>
                    <span class="text-muted">
                        <ul>
                            <li><a href="./main.html"><span style="color: white">Home</span></a></li>
                            <li><a href="./suggestions.html"><span style="color: white">Suggestions</span></a></li>
                        </ul>
                    </span>

                </div>  
            </div>
        </div>`);
}
/**
 * Adds the bottom footer to the html page
 */
function addFooter() {
    $(".footerLocation").empty();
    $(".footerLocation").append(
        `
        <footer class="fixed-bottom navbar bg-dark d--none d-md-none" style="height: 75px; padding: 0px;">
            <div style="display: flex; flex-direction: row; justify-content: space-around; gap: 4em; margin: auto;">
                <div class="bottom-nav-button">
                    <div class="btn bg-dark"">
                        <a href="./suggestions.html" class="material-icons"
                            style="color: whitesmoke; text-decoration: unset; font-size: 35px; ">tips_and_updates</a>
                        <p style="color: white;">Activies</p>
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
                    <div class="btn bg-dark"onclick="history.back()">
                        <a class="material-icons"
                            style="color: whitesmoke; text-decoration: unset; font-size: 35px;">arrow_back</a>
                        <p style="color: whitesmoke;">Back</p>
                    </div>
                </div>
            </div>
    </footer>`);
}
/**
 * Initiates the addNavbar and addFooter functions
 */
function setup() {
    addNavbar();
    addFooter();
}

$(document).ready(setup)