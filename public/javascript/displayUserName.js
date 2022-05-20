

$(document).ready(function () {
    $.ajax({
        url: "https://bridge-the-gap.herokuapp.com/getUserName",
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