

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/getUserName",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id")
        },
        success: function (result) {
            console.log(result);
            $("#nameTag").text("Hello, "+result[0].name + "!");
        }
    });
});