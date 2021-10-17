// this function will create pdf template and show the pdf. it needs the title of blog post and path of the pdf
function createPdfblog(title, pdf_path) {
    // title
    let tag_h4 = document.createElement("h4"); // creating h4 for title
    tag_h4.innerHTML = "&#164  "; // adding a title logo
    let tag_b = document.createElement("b"); // creating b tag for bold the title
    tag_b.innerHTML = title; // inserting title inside b tag
    tag_h4.appendChild(tag_b); // inserting b tag into h4 tag
    
    // pdf blog
    let embed = document.createElement('embed'); // embed will show the pdf file
    embed.setAttribute("width", "100%"); // pdf show width
    embed.setAttribute("height", "1000px"); // pdf show hight
    embed.setAttribute("src", `${pdf_path}`); // adding pdf file

    let tag_p = document.createElement("p"); // creating p tag for having a space and a hr line after ever pdf post
    tag_p.innerHTML = `<hr>`;

    let m_place = document.getElementById("sub_blog_show_place"); // this is the place where pdf file will be placed
    m_place.appendChild(tag_h4); // adding title into main frame of blog
    m_place.appendChild(embed); // adding pdf into main frame of blog
    m_place.appendChild(tag_p); // adding space and hr tag
}



// give your file location and title here.
// this will be called from blog.js
function pdf() {
    let pdf_location = "/pdf/blog/npc/post_set_1/physics presentation_quantum theory of light.pdf";
    let pdf_blog_title = "The Quantum Theory of Light";
    createPdfblog(pdf_blog_title, pdf_location);
}

