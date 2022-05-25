var dataParsed;
/**
 * Sends ajax request to get the users favorited pages list
 * @param {String} currentPage Name of the current page loaded
 */
function getStatus(currentPage) {
    addContentFooter()
    let currentpage = currentPage.split("-")[0];
    $.ajax({
        url: "https://bridge-the-gap.herokuapp.com/checkFavoritePageStatus",
        // url: "http://localhost:3000/checkFavoritePageStatus",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id"),
            page: currentpage
        },
        success: function (result) {
            dataParsed = JSON.parse(result[0].favoritepages);
            console.log(dataParsed);
            // console.log(dataParsed.temText);
            switch (currentpage) {
                case "meditation": {
                    if (dataParsed.meditation == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "yoga": {
                    if (dataParsed.yoga == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "journal": {
                    if (dataParsed.journal == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "nutrition": {
                    if (dataParsed.nutrition == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "resources": {
                    if (dataParsed.resources == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "walks": {
                    if (dataParsed.walks == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "music": {
                    if (dataParsed.music == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "sleeping_habits": {
                    if (dataParsed.sleeping_habits == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
                case "self_assessment_quiz": {
                    if (dataParsed.self_assessment_quiz == "no") {
                        addContentPageNavbar(currentPage);
                    } else {
                        addFilledContentPageNavbar(currentPage);
                    }
                    break;
                }
            };
        }
    });

}
/**
 * Updates the users favorited pages list
 * @param {String} currentPage Name of the current page loaded
 */
function savePage(currentPage) {
    let currentpage = currentPage.split("-")[0];
    switch (currentpage) {
        case "meditation": {
            if (dataParsed.meditation == "no") {
                dataParsed.meditation = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.meditation = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "yoga": {
            if (dataParsed.yoga == "no") {
                dataParsed.yoga = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.yoga = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "journal": {
            if (dataParsed.journal == "no") {
                dataParsed.journal = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.journal = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "nutrition": {
            if (dataParsed.nutrition == "no") {
                dataParsed.nutrition = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.nutrition = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "resources": {
            if (dataParsed.resources == "no") {
                dataParsed.resources = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.resources = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "walks": {
            if (dataParsed.walks == "no") {
                dataParsed.walks = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.walks = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "music": {
            if (dataParsed.music == "no") {
                dataParsed.music = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.music = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "sleeping_habits": {
            if (dataParsed.sleeping_habits == "no") {
                dataParsed.sleeping_habits = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.sleeping_habits = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
        case "self_assessment_quiz": {
            if (dataParsed.self_assessment_quiz == "no") {
                dataParsed.self_assessment_quiz = "yes";
                addFilledContentPageNavbar(currentPage);
            } else {
                dataParsed.self_assessment_quiz = "no";
                addContentPageNavbar(currentPage);
            }
            break;
        }
    };
    console.log(JSON.stringify(dataParsed));
    $.ajax({
        url: "https://bridge-the-gap.herokuapp.com/changeUserFavoritePageStatus",
        // url: "http://localhost:3000/changeUserFavoritePageStatus",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id"),
            newData: JSON.stringify(dataParsed)
        },
        success: function (result) {
            console.log("Saved Preference");
        }
    });
}
/**
 * Adds the top navbar with a filled star
 * @param {String} currentPage Name of the current loaded page
 */
function addFilledContentPageNavbar(currentPage) {
    $(".contentNavbarLocation").empty();
    $(".contentNavbarLocation").append(
        `    <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h3 id="appName" class="" style="display: inline-block; margin: 0 auto">Bridge the Gap</h3>
            <svg id="${currentPage}" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" 
            viewBox="0 0 16 16" onclick="savePage('${currentPage}')">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">Menu</h4>
                    <span class="text-muted">
                        <ul>
                            <li><a href="../suggestions.html"><span style="color: white">Suggestions</span></a></li>
                        </ul>
                    </span>

                </div>  
            </div>
    </div>`);
}
/**
 * Adds the top navbar with a un-filled star
 * @param {String} currentPage Name of the current loaded page
 */
function addContentPageNavbar(currentPage) {
    $(".contentNavbarLocation").empty();
    $(".contentNavbarLocation").append(
        `    <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h3 id="appName" class="" style="display: inline-block; margin: 0 auto">Bridge the Gap</h3>
            <svg id="${currentPage}" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill"
                viewBox="0 0 16 16" onclick="savePage('${currentPage}')">
                <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
            <h4 class="text-white">Menu</h4>
            <span class="text-muted">
            <ul>
                <li><a href="../main.html"><span style="color: white">Home</span></a></li>
                <li><a href="../suggestions.html"><span style="color: white">Suggestions</span></a></li>
            </ul>
            </span>

        </div>  
    </div>
    </div>`);
}
/**
 * Adds the bottom footer
 * @param {String} currentPage Name of the current loaded page
 */
function addContentFooter(currentPage) {
    $(".contentFooterLocation").empty();
    $(".contentFooterLocation").append(
        `
        <footer class="fixed-bottom navbar bg-dark d--none d-md-none" style="height: 75px; padding: 0px;">
            <div style="display: flex; flex-direction: row; justify-content: space-around; gap: 4em; margin: auto;">
                <div class="bottom-nav-button">
                    <div class="btn bg-dark"">
                        <a href="../suggestions.html" class="material-icons"
                            style="color: whitesmoke; text-decoration: unset; font-size: 35px; ">tips_and_updates</a>
                        <p style="color: white;">Activies</p>
                    </div>
                </div>
                <div class="bottom-nav-button">
                    <div class="btn bg-dark">
                        <a href="../main.html" class="material-icons"
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