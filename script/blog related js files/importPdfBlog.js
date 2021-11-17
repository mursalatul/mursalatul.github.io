// this function will create pdf template and show the pdf. it needs the title of blog post and path of the pdf
function createPdfblog(title, pdf_drive_id) {
    // title
    let tag_h4 = document.createElement("h4"); // creating h4 for title
    tag_h4.innerHTML = "&#164  "; // adding a title logo
    let tag_b = document.createElement("b"); // creating b tag for bold the title
    tag_b.innerHTML = title; // inserting title inside b tag
    tag_h4.appendChild(tag_b); // inserting b tag into h4 tag

    // pdf blog
    let iframe = document.createElement("iframe");// iframe will show the pdf file from google drive
    iframe.setAttribute("src", `https://drive.google.com/file/d/${pdf_drive_id}/preview`); // adding pdf file
    iframe.setAttribute("width", "100%"); // pdf show width
    iframe.setAttribute("height", `${screen.height}`); // pdf show hight

    // download button
    let download_link = document.createElement("a");
    download_link.setAttribute("href", `https://drive.google.com/file/d/${pdf_drive_id}/view?usp=sharing`);
    let download_button = document.createElement("button");
    download_button.className = "btn btn-primary";
    download_button.innerHTML = "Download";
    download_link.appendChild(download_button);

    // seperator with a hr line
    let tag_p = document.createElement("p"); // creating p tag for having a space and a hr line after ever pdf post
    tag_p.innerHTML = `<hr>`;

    // adding all together
    let m_place = document.getElementById("sub_blog_show_place"); // this is the place where pdf file will be placed
    m_place.appendChild(tag_h4); // adding title into main frame of blog
    m_place.appendChild(iframe); // adding pdf into main frame of blog
    m_place.appendChild(download_link); // adding download button for download the pdf
    m_place.appendChild(tag_p); // adding space and hr tag
}



// give your file location and title here.
// this will be called from blog.js
function pdf() {
    // the quantum theory of light
    let pdf_drive_id = "1LcTr2FZ7kwfpiBdM2ETf_qWp0CPG-6gN"; // get this id from google drive
    let pdf_blog_title = "The Quantum Theory of Light"; // title of the post
    createPdfblog(pdf_blog_title, pdf_drive_id);

    // physics assignment 1
    pdf_blog_title = "Physics Assignment 1";
    pdf_drive_id = "1EyDK0kxYyZR1xFJyQGmPISPKeBqJfs1q";
    createPdfblog(pdf_blog_title, pdf_drive_id);
}

