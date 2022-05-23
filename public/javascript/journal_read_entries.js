/**
 * Deletes the journal with the matching specified ID
 * @param {String} entryID 
 */
function deleteEntry(entryID) {
    console.log(entryID);
    $.ajax({
        // url: "https://bridge-the-gap.herokuapp.com/deleteJournalEntry",
        url: "http://localhost:3000/deleteJournalEntry",
        type: "post",
        data: {
            jID: entryID
        },
        success: function (result) {
            console.log(result);
            window.location.replace("journal_deletion_confirmation_page.html");
        }
    });
}

//----------------------------Read Journal Entry Function ------------------------------//
/**
 * Sends ajax request to read journals of the current user and displays them to journalRow
 */
function readJournalEntry() {
    $("#journalRow").empty();
    $.ajax({
        // url: "https://bridge-the-gap.herokuapp.com/readJournalEntry",
        url: "http://localhost:3000/readJournalEntry",
        type: "post",
        data: {
            userid: sessionStorage.getItem("id")
        },
        success: function (result) {
            // Here you will get the entries and display them in the page
            console.log(result);
            for (i = 0; i < result.length; i++) {
                $("#journalRow").append(
                    `
                    <div class="col">
                        <div class="card h-100">
                            <img src="../../images/Journal_logo.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                                width="150" height="75" loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title">${result[i].title}</h5>
                                <p class="card-text">${result[i].entry}</p>
                                <a href="#" class="btn btn-primary stretched-link" onclick="deleteEntry('${result[i].ID}')">Delete</a>
                            </div>
                            <div class="card-footer">
                                
                            </div>
                        </div>
                    </div>
                    `
                );
                console.log(result[i].title);
                console.log(result[i].entry);
            }
        }
    });


}