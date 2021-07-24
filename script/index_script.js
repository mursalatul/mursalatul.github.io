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
// import_project_data("project1", "/pictures/age_calculator.png", "Age Calculator", "https://github.com/mursalatul/Age_Calculator");

// // project 2(portfolio)
// import_project_data("project2", "/pictures/project2_portfolio.png", "Portfolio", "https://github.com/mursalatul/mursalatul.github.io");

class Project {
    /**
     * this method will create a new card node with proper porperties so that we can use it in site
     * @param {string} projectId  id of the new card
     * @returns the new card node
     */
    static createProjectTemplate(projectId) {
        // if you dont understant this part of the code create a simple card and compare this code with that
        // creating first div of the card
        let div1 = document.createElement("div");
        div1.className = "col-md-4 col-xs-12 p-2 d-flex justify-content-center text-center";
        div1.id = projectId;
        // creating 2nd div of card
        let div2 = document.createElement("div");
        div2.className = "card";
        div2.setAttribute("style", "width: 18rem;");
        // creating img for div2
        let _img = document.createElement("img");
        _img.className = "card";
        _img.setAttribute("src", "");
        _img.setAttribute("alt", "image failed to load");
        // creating div3 after img (img of the project)
        let div3 = document.createElement("div");
        div3.className = "card-body";
        // creating h5 for div3 (Project Title)
        let _h5 = document.createElement("h5");
        _h5.className = "card-title";
        _h5.setAttribute("style", "color: black; font-weight: bold;")
        // creating a for div3 (Project Link Button)
        let _a = document.createElement("a");
        _a.className = "btn btn-primary";
        _a.setAttribute("href", "#");
        _a.setAttribute("target", "_black");
        _a.innerHTML = `<b>Project Link</b>`;

        // grouping all created elements
        div3.appendChild(_h5);
        div3.appendChild(_a);

        div2.appendChild(_img);
        div2.appendChild(div3);

        div1.appendChild(div2);
        // returning the new card node
        return div1;
    }
    /**
     * this method will add a new card with provided id*(new_project_id) into the provided id's(target_place_id) element 
     * @param {string} target_place_id id of the element where the new card will be placed.
     * @param {string} new_project_id id of the new card
     */
    static addProjectTemplate(target_place_id, new_project_id) {
        document.getElementById(target_place_id).appendChild(this.createProjectTemplate(new_project_id));
    }
    /**
     * add import data into the new created card.
     * @param {string} new_project_id id of the new card(also used in addProjectTemplate() method)
     * @param {string} project_pic picture address of the new project
     * @param {string} project_title project name / title
     * @param {string} project_link github link of the project
     */
    static addProjectData(new_project_id, project_pic, project_title, project_link) {
        let ele = document.getElementById(new_project_id);
        // adding picture in card
        ele.children[0].children[0].attributes.src.value = project_pic;
        // adding title
        ele.children[0].children[1].children[0].innerHTML = `<b>${project_title}</b>`;
        // adding button project_link
        ele.children[0].children[1].children[1].attributes.href.value = project_link;
    }
}
// adding projects
// project1 : Age Calculator
Project.addProjectTemplate("project_list_1", "project1");
Project.addProjectData("project1", "/pictures/age_calculator.png", "Age Calculator", "https://github.com/mursalatul/Age_Calculator")
// project2 : Portfolio
Project.addProjectTemplate("project_list_1", "project2");
Project.addProjectData("project2", "/pictures/project2_portfolio.png", "Portfolio", "https://github.com/mursalatul/mursalatul.github.io")
// project3 : Windows Shutdown Timer
Project.addProjectTemplate("project_list_1", "project3");
Project.addProjectData("project3", "/pictures/project3_shutdown.png", "Windows Shutdown Timer", "https://github.com/mursalatul/shutdown-timer-for-windows")