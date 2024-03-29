function createCard(project_image_path, project_title, project_description, project_link, card_place_in_html) {
    // 1st div.
    let div1 = document.createElement("div");
    div1.classList = `d-flex justify-content-center col p-2 text-center`;
    div1.id = project_title;

    // 2nd div. card start here
    let div2 = document.createElement("div");
    div2.classList = "card";
    div2.setAttribute("style", "width:12rem");

    // image of the card/project
    let image = document.createElement("img");
    image.className = "card";
    image.setAttribute("src", `${project_image_path}`);
    image.setAttribute("alt", "image failed to load");

    // 3rd div. will contain all text and link type data
    let div3 = document.createElement("div");
    div3.classList = "card-body";

    // title of the card/project
    let title = document.createElement("h5");
    title.className = "card-title";
    title.setAttribute("style", "color:black; font-weight: bold;");
    title.textContent = project_title;

    // card/project discription
    let discription = document.createElement("p");
    discription.classList = "card-text";
    let dis_id = `${project_title}` + "_description_id"; // description id = project_title_description, and project_title = project_title
    discription.id = dis_id;
    discription.textContent = project_description;
    discription.style.display = "none"; // at first show, description will be hidden.

    // show hide description button
    let show_hide_button = document.createElement("button");
    show_hide_button.className = "btn btn-outline-info btn-sm";
    let button_id = `${project_title}` + "show_hide_button_id";
    show_hide_button.id = button_id;
    show_hide_button.setAttribute("onclick", `show_hide_tag(${dis_id}, ${button_id})`)
    show_hide_button.setAttribute("type", "button");
    show_hide_button.style.display = "block";
    show_hide_button.style.backgroundColor = '#9B59B6';
    show_hide_button.textContent = "Show Description";

    // div tag for place show_all_project_button inside it. it will help us to center the button
    let show_hide_button_div = document.createElement("div");
    show_hide_button_div.classList = "text-center d-flex justify-content-center"
    show_hide_button_div.appendChild(show_hide_button);

    // project link. this link will go to github
    let link_button = document.createElement("a");
    link_button.className = "btn btn-primary";
    link_button.setAttribute("href", `${project_link}`);
    link_button.setAttribute("target", "_blank");
    show_hide_button.style.display = "block";
    link_button.textContent = "See Project"


    // adding all tags
    div3.appendChild(title);
    div3.appendChild(discription);
    div3.appendChild(show_hide_button_div);
    div3.appendChild(link_button);

    div2.appendChild(image);
    div2.appendChild(div3);

    div1.appendChild(div2);

    // placing in index.html
    document.getElementById(`${card_place_in_html}`).appendChild(div1);
}