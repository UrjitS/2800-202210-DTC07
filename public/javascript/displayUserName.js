/**
 * Sends post request to get the current logged in users name and displays that in a welcome text
 */
$(document).ready(function () {
    $.ajax({
        url: "https://bridge-the-gap.herokuapp.com/getUserName",
        // url: "http://localhost:3000/getUserName",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id")
        },
        success: function (result) {
            $("#nameTag").text("Hello, " + result[0].name + "!");
        }
    });
});