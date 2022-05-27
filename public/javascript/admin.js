$(document).ready(function () {
    /**
     * Sends post request to specified url using XMLHttp request
     * @param {String} url Url to send post request to
     * @param {Function} callback Function callback to handle response after post
     */
    function ajaxPOST(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(this.responseText);

            } else {}
        }
        xhr.open("POST", url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
    }
    /**
     * Creates html code containing the provided information and displays to user_card_container
     * @param {String} email Email of the user
     * @param {String} name Name of the user
     * @param {Number} currentIndex Random number, used to set div id
     */
    function buildUsers(email, name, currentIndex) {
        var temp = document.getElementsByTagName("template")[0];
        var cloneNode = temp.content.cloneNode(true);
        cloneNode.getElementById("usertempid").innerHTML = "New User " + currentIndex;
        cloneNode.getElementById("email_field").innerHTML = "Email: " + email;
        cloneNode.getElementById("name_field").innerHTML = "Name: " + name;

        $('#user_card_container').append(`<div class="col" id="${currentIndex}"></div>`);
        document.getElementById(currentIndex).appendChild(cloneNode);
    }
    /**
     * Initiates post request to get all the signed up users, and sends information to buildUsers function
     */
    function getAccountInformation() {
        ajaxPOST("/getuseraccounts", function (data) {
            if (data) {
                let dataParsed = JSON.parse(data);
                for (i = 0; i < dataParsed.length; i++) {
                    buildUsers(dataParsed[i].email, dataParsed[i].name, i);
                }
            }
        });
    }

    getAccountInformation()

});