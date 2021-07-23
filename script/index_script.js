/**
 * this function will assign data into new project card 
 * @param {*} html_id id of the new tag
 * @param {*} project_picture image of the picture
 * @param {*} project_title project title for show
 * @param {*} project_link github link of the image
 */
function import_project_data(html_id, project_picture, project_title, project_link) {
    let element = document.getElementById(html_id);
    element.firstElementChild.firstElementChild.attributes.src.value = project_picture;
    element.firstElementChild.children[1].children[0].innerHTML = project_title;
    // element.firstElementChild.children[1].children[1].innerHTML = "Project 2 about";
    element.firstElementChild.children[1].children[2].attributes.href.value = project_link;
}

// importing projects
// project 1(age_calculator)
import_project_data("project1", "/pictures/age_calculator.png", "Age Calculator", "https://github.com/mursalatul/Age_Calculator");

// project 2(portfolio)
import_project_data("project2", "/pictures/project2_portfolio.png", "Portfolio", "https://github.com/mursalatul/mursalatul.github.io");