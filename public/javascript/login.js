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

    function beginPostLogin() {
        let email = document.getElementById("login_email");
        let password = document.getElementById("password");
        let queryString = "email=" + email.value + "&password=" + password.value;

        if (email.value.length > 0 || password.value.length > 0) {
            ajaxPOST("/login", function (data) {

                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        document.getElementById("errorMsg").innerHTML = dataParsed.msg;
                    } else if (dataParsed.status == "admin"){
                        window.location.replace("admin.html");
                    } else {
                        window.location.replace("main.html");
                    }
                }
            }, queryString);
        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }

    }

    function beginPostSignUp() {
        let email = document.getElementById("login_email");
        let password = document.getElementById("password");
        var user_name_input = document.getElementById("user_name")
        let queryString = "email=" + email.value + "&password=" + password.value + "&uname=" + user_name_input.value;

        if (email.value.length > 0 || password.value.length > 0 || user_name_input.value.length > 0) {
            ajaxPOST("/signup", function (data) {

                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        document.getElementById("errorMsg").innerHTML = dataParsed.msg;
                    } else {
                        window.location.replace("main.html");
                    }
                }
            }, queryString);
        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }
    }

    document.querySelector("#login_button").addEventListener("click", function (e) {
        e.preventDefault();

        var sign_up_button = document.getElementById("sign_up");
        if (sign_up_button.textContent == 'Sign Up?') {
            beginPostLogin();
        } else {
            beginPostSignUp();
        }
    });


    document.querySelector("#sign_up").addEventListener("click", function (e) {
        document.getElementById("errorMsg").innerHTML = "";
        var sign_up_button = document.getElementById("sign_up");
        var log_in_button = document.getElementById("login_button");
        var user_name_input = document.getElementById("user_name")

        var currently_changing_text = false
        if (!currently_changing_text & sign_up_button.textContent == 'Sign Up?') {
            currently_changing_text = true
            user_name_input.style.display = 'inline-block'
            sign_up_button.textContent = 'Log In?'
            log_in_button.value = 'Sign Up'
        }

        if (!currently_changing_text & sign_up_button.textContent == 'Log In?') {
            currently_changing_text = true
            user_name_input.style.display = 'none'
            sign_up_button.textContent = 'Sign Up?'
            log_in_button.value = 'Log In'
        }
        currently_changing_text = false

    });

});