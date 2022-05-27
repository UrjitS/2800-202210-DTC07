$(document).ready(function () {
    /**
     * Sends post request to specified url using XMLHttp request
     * @param {String} url Url to send post request to
     * @param {Function} callback Function callback to handle response after post
     * @param {String} data Data to be included with the request
     */
    function ajaxPOST(url, callback, data) {
        let params = typeof data == 'string' ? data : Object.keys(data).map(
            function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }
        ).join('&');

        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(this.responseText);

            } else {
            }
        }
        xhr.open("POST", url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
    /**
     * Initiates post requset and includes users' inputted email, and password
     */
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
                        window.location.replace("/html/admin.html");
                    } else if (dataParsed.status == "success") {
                        localStorage.setItem("id", dataParsed.sessionid);
                        window.location.replace("/html/main.html");
                    }
                }
            }, queryString);
        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }

    }
    /**
     * Creates on click listener on the login button to trigger beginPostLogin function
     */
    document.querySelector("#login_button").addEventListener("click", function (e) {
        e.preventDefault();
        beginPostLogin();

    });
    /**
     * Creates on click listener on the sign up button to load sign up page
     */
    document.querySelector("#sign_up").addEventListener("click", function (e) {
        window.location.replace("signup.html");
    });

});