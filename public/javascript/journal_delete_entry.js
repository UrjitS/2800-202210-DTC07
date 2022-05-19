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
//----------------------------Delete Journal Entry Function ------------------------------//
    function deleteJournalEntry() {
        let id = document.getElementById("id");
        let title = document.getElementById("title");
        let entry = document.getElementById("entry");
        let user_id = document.getElementById("user_id")
        let queryString = "id=" + id.value + "user_id=" + user_id.value;

        

        if (id.value.length > 0 || user_id.value.length > 0) {
            ajaxPOST("/deleteJournalEntry", function (data) {

                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        document.getElementById("errorMsg").innerHTML = dataParsed.msg;
                    } else if (dataParsed.status == "admin") {
                        window.location.replace("journal_entries_page.html");
                    } else {
                        window.location.replace("journal_deletion_confirmation_page.html");
                    }
                }
            }, queryString);
        } else {
            document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
        }

    }



    document.querySelector("#delete_button").addEventListener("click", function (e) {
        e.preventDefault();

        beginPostLogin();

    });


    document.querySelector("#delete_button").addEventListener("click", function (e) {
        window.location.replace("journal_deletion_confirmation_page.html");

    });

});