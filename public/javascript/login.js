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
                    } else if (dataParsed.status == "admin") {
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



    document.querySelector("#login_button").addEventListener("click", function (e) {
        e.preventDefault();

        beginPostLogin();

    });


    document.querySelector("#sign_up").addEventListener("click", function (e) {
        window.location.replace("signup.html");

    });

});