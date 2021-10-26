// functions
function getFetchData(show = "") {
    try {
        fetch(`https://api.github.com/users/mursalatul/repos`).then(response => {
            return response.json();
        }).then(data => {
            processData(data, show);
        })
    }
    catch {
        console.log("Fatch Import Error");
    }
}

function processData(importedData, show) {
    if (importedData.message != "Not Found") {
        // console.log(importedData);
        // show 3 projects
        if (show === "3") {
            for (var i = 0; i < 3; i++) {
                createCard("/pictures/all projects/age_calculator.png", importedData[i].name, importedData[i].description, importedData[i].html_url, "all_projects_list_1_id");
            }
        }
        // show rest of the projects
        else {
            for (var i = 3; i < importedData.length; i++) {
                createCard("/pictures/all projects/age_calculator.png", importedData[i].name, importedData[i].description, importedData[i].html_url, "all_projects_list_2_id");
            }
        }
    }
    else {
        alert("No User Found with this name");
    }
}