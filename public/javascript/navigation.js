function addNavbar() {
    $(".navbarLocation").append(
        `       <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h4 style="color: black; display: inline-block; margin: 0 auto">Bridge the Gap</h4>
            <img src="images/navlogo.png" style="max-width: 70px; max-height: 70px">
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h4 class="text-white">Menu</h4>
                <span class="text-muted">
                    <ul>
                        <li><a href="./suggestions.html><span class="text-muted" style="color: white">Suggestions</span></a></li>
                        <li><span class="text-muted">Personal Tools</span></li>
                        <li><a class="text-muted" href="./journal_main_page.html">Wellness Journal</a></li>
                    </ul>
                </span>

            </div>
        </div>
    </div>`);
}

function addFooter() {
    $(".footerLocation").append(
        `       <footer class="fixed-bottom navbar bg-dark d--none d-md-none"
        style="height: 75px; padding: 0px;">

        <div class="bottom-nav-button">
            <div class="btn bg-dark" onclick="window.location.href='main.html'" style="padding-left:4em">
                <a href="main.html" class="material-icons"
                    style="color: whitesmoke; text-decoration: unset; font-size: 35px; ">person</a>
                <p style="color: white;">Profile</p>
            </div>
        </div>
        <div class="bottom-nav-button">
            <div class="btn bg-dark" onclick="window.location.href='main.html'">
                <a href="main.html" class="material-icons"
                    style="color: whitesmoke; text-decoration: unset; font-size: 35px;">home</a>
                <p style="color: whitesmoke;">Home</p>
            </div>
        </div>
        <div class="bottom-nav-button">
            <div class="btn bg-dark" onclick="history.back()" style="padding-right:4em">
                <a class="material-icons" style="color: whitesmoke; text-decoration: unset; font-size: 35px;"
                    onclick="history.back()">arrow_back</a>
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