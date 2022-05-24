$(document).ready(function () {

    /**
     * Sends post request to specified url using XMLHttp request
     * @param {String} url Url to send post request to
     * @param {Function} callback Function callback to handle response after post
     * @param {*} data Data to be included with request

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
                console.log(this.status);
            }
        }
        xhr.open("POST", url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
    /**
     * Checks the given string to ensure it matches the regular expression of an email
     * @param {String} email 
     * @returns True if email matches regex
     */
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    /**
     * Initiates post requset and includes users' inputted email, password, and user name
     */
    function beginPostSignUp() {
        let email = document.getElementById("login_email");
        let password = document.getElementById("password");
        var user_name_input = document.getElementById("user_name")
        let queryString = "email=" + email.value + "&password=" + password.value + "&uname=" + user_name_input.value;

        if (email.value.length > 0 && password.value.length > 0 && user_name_input.value.length > 0) {
            if (validateEmail(email.value)) {
                ajaxPOST("/signup", function (data) {
                    if (data) {
                        let dataParsed = JSON.parse(data);

                        if (dataParsed.status == "fail") {
                            document.getElementById("errorMsg").innerHTML = dataParsed.msg;

                        } else if (dataParsed.status == "success") {
                            sessionStorage.setItem("id", dataParsed.sessionid);
                            window.location.replace("/html/main.html");
                        }
                    }
                }, queryString);
            } else {
                document.getElementById("errorMsg").innerHTML = "Email Not Valid";
            }

        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }
    }
    /**
     * Creates on click listener on the login button to trigger beginPostSignUp function
     */
    document.querySelector("#login_button").addEventListener("click", function (e) {
        e.preventDefault();
        beginPostSignUp();
    });
    /**
     * Creates on click listener on the sign up button to load login page
     */
    document.querySelector("#sign_up").addEventListener("click", function (e) {
        window.location.replace("login.html");
    });

});