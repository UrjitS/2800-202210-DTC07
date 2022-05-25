//----------------------------Create Journal Entry Function ------------------------------//
/**
 * Sends ajax request with the users input to create a new journal entry
 */
function createJournalEntry() {
    let title = document.getElementById("title");
    let entry = document.getElementById("entry");
    let user_id = sessionStorage.getItem("id");

    if (title.value.length > 0 && entry.value.length > 0) {
        $.ajax({
            url: "https://bridge-the-gap.herokuapp.com/createJournalEntry",
            // url: "http://localhost:3000/createJournalEntry",
            type: "post",
            data: {
                contentTitle: title.value,
                contentEntry: entry.value,
                contentUID: user_id
            },
            success: function (result) {
                //------------Takes users to html page that confirms their New Journal Entry Submission ----------------------//
                window.location.replace("journal_submission_confirmation_page.html");
            }
        });
    } else {
        alert("Please fill out the Fields");
    }

}