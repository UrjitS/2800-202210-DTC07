$(document).ready(function () {

    function ajaxPOST(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(this.responseText);

            } else {
                console.log(this.status);
            }
        }
        xhr.open("POST", url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
    }

    function buildUsers(email, name, currentIndex) {
        var temp = document.getElementsByTagName("template")[0];
        var cloneNode = temp.content.cloneNode(true);
        console.log(cloneNode.getElementById("email_field").innerHTML);
        cloneNode.getElementById("usertempid").innerHTML = "New User " + currentIndex;
        cloneNode.getElementById("email_field").innerHTML = "Email: " + email;
        cloneNode.getElementById("name_field").innerHTML = "Name: " + name;

        $('#user_card_container').append(`<div class="col" id="${currentIndex}"></div>`);
        document.getElementById(currentIndex).appendChild(cloneNode);
    }
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