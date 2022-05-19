//----------------------------Create Journal Entry Function ------------------------------//
function createJournalEntry() {
    let title = document.getElementById("title");
    let entry = document.getElementById("entry");
    let user_id = sessionStorage.getItem("id");
    console.log(title.value);
    console.log(entry.value);
    console.log(user_id);

    if (title.value.length > 0 && entry.value.length > 0) {
        console.log("dwa");
        $.ajax({
            url: "http://localhost:3000/createJournalEntry",
            type: "post",
            data: {
                contentTitle: title.value,
                contentEntry: entry.value,
                contentUID: user_id
            },
            success: function (result) {
                console.log(result);
            }
        });
    } else {
        document.getElementById("errorMsg").innerHTML = "Please fill out the Fields";
    }

}


