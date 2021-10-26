// "More" button status
let button ;
// import data from github
getFetchData("3"); // display 1st 3 cards when page load
let more_button = document.getElementById("more_project"); // active this section when click "More" button under projects section 
more_button.addEventListener("click", manage_more_button_click); // catch events

// this function will show and hide description about a project when click the "Show Description" or "Hide Description" button
function manage_desciption(des, btn) {
    if (des.style.display === "none") {
        des.style.display = "block";
        btn.textContent = "Hide Description"; // when description is showen ask for hide
    } else {
        des.style.display = "none";
        btn.textContent = "Show Description"; // when description is hidden ask for show
    }
}

// collapse card section when "More" button will be "Less". when all cards will be displayed
function reverse_more_button() {

}

function manage_more_button_click(e) {
    console.log(e.target.innerHTML);
    // e.target.innerHTML = "Less";
    if (e.target.innerHTML === "More") {
        getFetchData();
    }
    else {
        let allCardsAfterMain3Cards = document.querySelectorAll(".cards_after3"); // cards_after3 is a common class of the card which will be showen after the 3 main cards. this class is used in import_porject_from_github.js file
        console.log(allCardsAfterMain3Cards)
        for (var i = 0; i < allCardsAfterMain3Cards.length; i++) {
            (allCardsAfterMain3Cards[i].remove);
        }
        e.target.innerHTML = "More";
    }
}