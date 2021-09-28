// this function will import data from json file
function getFetchData(json_loction, post_place) {
    try {
        fetch(json_loction).then(response => {
            return response.json();
        }).then(data => {
            processData(data, post_place);
        })
    }
    catch {
        alert("Fatch Import Error");
    }
}

// show posts into location
function processData(importedData, post_place) {
    if (importedData.message != "Not Found") {
        
        let data = importedData;
        let dd = Object.values(importedData); // converting into list for easy looping
        let post_count = 0;
        
        for (i in data) {
            createPost(dd[post_count].title, dd[post_count].text);
            post_count += 1;
        }
        
    }
    else {
        alert("Fatch Import Error");
    }
}

// creating post and show on page
function createPost(title, text) {
    let tag_h4 = document.createElement("h4"); // creating h4
    let tag_b = document.createElement("b"); // creating b
    tag_b.innerHTML = title; // inserting title inside b tag
    tag_h4.appendChild(tag_b); // inserting b tag into h4 tag

    let tag_p = document.createElement("p"); // creating p
    tag_p.innerHTML = text;

    let m_place = document.getElementById("sub_blog_show_place");
    m_place.appendChild(tag_h4);
    m_place.appendChild(tag_p);
}