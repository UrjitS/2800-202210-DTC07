$(document).ready(function () {

    function ajaxPOST(url, callback, data) {
        let params = typeof data == 'string' ? data : Object.keys(data).map(
            function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }
        ).join('&');
        console.log("params in ajaxPOST", params);

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
        xhr.send(params);
    }

   
    function beginPostSignUp() {
        let email = document.getElementById("login_email");
        let password = document.getElementById("password");
        var user_name_input = document.getElementById("user_name")
        let queryString = "email=" + email.value + "&password=" + password.value + "&uname=" + user_name_input.value;

        if (email.value.length > 0 || password.value.length > 0 || user_name_input.value.length > 0) {
            ajaxPOST("/signup", function (data) {

                if (data) {
                    if (data == "success") {
                        window.location.replace("main.html");
                    } else {
                        document.getElementById("errorMsg").innerHTML = "Error Could Not Create Account";
                    }
                }
            }, queryString);
        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }
    }

    document.querySelector("#login_button").addEventListener("click", function (e) {
        e.preventDefault();
        beginPostSignUp();
    });


    document.querySelector("#sign_up").addEventListener("click", function (e) {
        window.location.replace("login.html");
    });

});