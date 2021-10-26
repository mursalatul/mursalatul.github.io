getFetchData("3"); // creating 3 cards in "all_projects_list_1_id"

getFetchData(); // creating rest of the cards in "all_projects_list_2_id"

// "Show All Project" button from index.html
let show_all_project_button = document.getElementById("show_all_project_button_id");
console.log("in button click");
// show and hide row2 of project showing section in index.html when click "Show All Project" button
show_all_project_button.addEventListener("click", ()=> {
    let tag = document.getElementById("all_projects_list_2_id"); // the main row("all")
    let btn = show_all_project_button;
    console.log("in button click");
    if (tag.style.display === "none") {
        tag.style.display = "block"; // showing tag
        btn.textContent = "Minimize"; // when tagcription is showen ask for hide
    } else {
        tag.style.display = "none"; // hidding tag
        btn.textContent = "Show All Projects"; // when tagcription is hidden ask for show
    }
});

// this function will mainly show and hide description on a indivitual project
function show_hide_tag(tag, btn) {
    if (tag.style.display === "none") {
        tag.style.display = "block"; // showing tag
        btn.textContent = "Hide "; // when tagcription is showen ask for hide
    } else {
        tag.style.display = "none"; // hidding tag
        btn.textContent = "Show"; // when tagcription is hidden ask for show
    }
}   