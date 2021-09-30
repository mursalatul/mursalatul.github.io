// importing
let algo = document.getElementById("algo");
let c = document.getElementById("c");
let py = document.getElementById("py");
let js = document.getElementById("js");
let npc = document.getElementById("npc");

// // knowing which element is clicked
algo.addEventListener("click", clearData)
c.addEventListener("click", clearData)
py.addEventListener("click", clearData)
js.addEventListener("click", clearData)
npc.addEventListener("click", clearData)

// clearing posting place
function clearData(event) {
    let post_place = document.getElementById("blog_show_place"); // place where post will show
    post_place.firstElementChild.remove(); // clearing tag

    // creating new div for show posts inside this div
    let tag_div = document.createElement("div");
    tag_div.classList = "row";
    tag_div.id = "sub_blog_show_place";
    post_place.appendChild(tag_div); // adding new div in post_place

    whichPost(event.target.id); // calling post managing function
}

// managing target post by finding right json
let json_loction;
function whichPost(target) { // target = the name of the id, which was clicked
    json_loction = `/json/blog/${target}/post_set1.json`;
    // importing json data
    getFetchData(json_loction);
}