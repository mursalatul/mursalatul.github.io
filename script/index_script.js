class Project {
    /**
     * this method will create a new card node with proper porperties so that we can use it in site
     * @param {string} projectId  id of the new card
     * @returns the new card node
     */
    static createTemplate4AllProjectSection(projectId) {
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
     * create card for current working project template
     * @param {string} projectId id of the new card
     * @returns the card node
     */
    static createTemplate4CurrentProjectSection(projectId) {
        // creating first div tag
        let div1 = document.createElement("div");
        div1.className = "card m-1";
        div1.id = projectId;
        div1.setAttribute("style", "max-width: 540px;");
        // creatign 2nd div tag
        let div2 = document.createElement("div");
        div2.className = "row g-0";
        // creating 3rd-1 div tag
        let div3_1 = document.createElement("div");
        div3_1.className = "col-md-4";
        // creating img tag for div3_1
        let img3_1 = document.createElement("img");
        img3_1.className = "img-fluid rounded-start";
        img3_1.setAttribute("src", "");
        img3_1.setAttribute("alt", "Image not available now");
        // creating 3rd-2 div tag
        let div3_2 = document.createElement("div");
        div3_2.className = "col-md-8";
        // creaing 4th div tag
        let div4 = document.createElement("div");
        div4.className = "card-body";
        // creagting title for 4th div
        let h5 = document.createElement("h5");
        h5.className = "card-title";
        // creaging p1 for 4th div
        let p1 = document.createElement("p");
        p1.className = "card-text";
        // creating p2 for 4th div(update)
        let p2 = document.createElement("p");
        p1.className = "card-text";
        // creating small tag for p2
        let small1 = document.createElement("small");
        small1.className = "text-muted";

        // adding all element together
        p2.appendChild(small1);

        div4.appendChild(h5);
        div4.appendChild(p1);
        div4.appendChild(p2);

        div3_2.appendChild(div4);

        div3_1.appendChild(img3_1);

        div2.appendChild(div3_1);
        div2.appendChild(div3_2);

        div1.appendChild(div2);
        // returning the new card node
        return div1;

    }

    /**
     * this method will add a new card with provided id*(new_project_id) into the provided id's(target_place_id) element 
     * @param {string} project_type is = "All" or "Current". "All" means addProjectTemplate in "All Project" and current means addProjectTemplate in "Current working" section
     * @param {string} target_place_id id of the element where the new card will be placed.
     * @param {string} new_project_id id of the new card
     */
    static addProjectTemplate(project_type, target_place_id, new_project_id) {
        if (project_type == "All") {
            // adding template of new full created project card in All Project sector
            document.getElementById(target_place_id).appendChild(this.createTemplate4AllProjectSection(new_project_id));
        }
        else if (project_type == "Current") {
            // adding template of current working project card in Current working on sector
            document.getElementById(target_place_id).appendChild(this.createTemplate4CurrentProjectSection(new_project_id));
        }
        else {
            // if project type is invalid
            alert("You inputed a wrong project type in .js file");
        }

    }

    /**
     * add import data into the new created card.
     * @param {string} project_type is = "All" or "Current". "All" means addProjectTemplate in "All Project" and current means addProjectTemplate in "Current working" section
     * @param {string} new_project_id id of the new card(also used in addProjectTemplate() method)
     * @param {string} project_pic picture address of the new project
     * @param {string} project_title project name / title
     * @param {string} project_link github link of the project
     */
    static addProjectData(project_type, new_project_id, project_pic, project_title, project_link) {
        if (project_type == "All") {
            // adding user provided informations about the project into the new card in All Project sector
            let ele = document.getElementById(new_project_id);
            // adding picture in card
            ele.children[0].children[0].attributes.src.value = project_pic;
            // adding title
            ele.children[0].children[1].children[0].innerHTML = `<b>${project_title}</b>`;
            // adding button project_link
            ele.children[0].children[1].children[1].attributes.href.value = project_link;
        }
        else if (project_type == "Current") {
            // adding user provided informations about current working project data into the new card in Current working section
            console.log(document.getElementById(new_project_id));
            let ele2 = document.getElementById(new_project_id).children[0];
            // adding picture
            ele2.children[0].children[0].attributes.src.value = project_pic;
            // going further

            ele2 = ele2.children[1].children[0];
            // Title
            ele2.children[0].innerHTML = `<b>${project_title}</b>`;
            // about project(in current project we use project link as about)
            ele2.children[1].innerHTML = project_link;

        }
        else {
            // if project type is invalid
            alert("You inputed a wrong project type in .js file");
        }
    }
}




// adding projects (adding it in main js file cause this sector is permanant)
// project1 : Age Calculator
Project.addProjectTemplate("All", "project_list_1", "project1");
Project.addProjectData("All", "project1", "/pictures/age_calculator.png", "Age Calculator", "https://github.com/mursalatul/Age_Calculator")
// project2 : Portfolio
Project.addProjectTemplate("All", "project_list_1", "project2");
Project.addProjectData("All", "project2", "/pictures/project2_portfolio.png", "Portfolio", "https://github.com/mursalatul/mursalatul.github.io")
// project3 : Windows Shutdown Timer
Project.addProjectTemplate("All", "project_list_1", "project3");
Project.addProjectData("All", "project3", "/pictures/project3_shutdown.png", "Windows Shutdown Timer", "https://github.com/mursalatul/shutdown-timer-for-windows")

// -----------------------------> current woring <-------------------------------
// when i will work on a porject i will show that on this sector. this is temporay.
var current_about; // tell some about your project in this variable

// in addProjectTemplate,
    // argument 1 will be "Current"(it means we want template about current project sector)
    //  argument 2 will be "id_current_project" (place of the all current project. it is defined in index.html)
    //  argument 3 will be new id of the template (as user want)
// in addProjectData,
    // argument 1 will be the "Current" (means we will insert data in currect prject template)
    // argument 2 will be new template's id which we used in addProjectTemplate (means insert data into this place)
    // argument 3 will be picture path of the project
    // argument 4 will be title of the project
    // argument 5 will be current_about (discription of the project)

    // sky bank
current_about = "Sky Bank is a simple bank system website where i want to create a full banking system with security. The  main goal is to create a new virtual banking system";
Project.addProjectTemplate("Current", "id_current_project", "id_sky_bank");
Project.addProjectData("Current", "id_sky_bank", "/pictures/currentworking/sky_bank.png", "Sky Bank", current_about);

// portfolio
current_about = "I am updating my portfolio site every day.This is kinda finished + updating";
Project.addProjectTemplate("Current", "id_current_project", "id_portfolio");
Project.addProjectData("Current", "id_portfolio", "/pictures/cover2.jpg", "Portfolio", current_about);

// schooltemplate
current_about = "a website template for school and colleges. using this template any organization can create their own website.";
Project.addProjectTemplate("Current",'id_current_project', "id_schooltemplate");
Project.addProjectData("Current", "id_schooltemplate", "/pictures/currentworking/schooltemplate.png","School Template", current_about);