// functions
function getFetchData(show_all) {
    try {
        fetch(`https://api.github.com/users/mursalatul/repos`).then(response => {
            return response.json();
        }).then(data => {
            processData(data, show_all);
        })
    }
    catch {
        console.log("Fatch Import Error");
    }
}

function processData(importedData, show_all) {
    if (importedData.message != "Not Found") {
        console.log(importedData);
        // show 3 projects
        if (show_all === false) {
            for (var i = 0; i < 3; i++) {
                createCard("/pictures/all projects/age_calculator.png", importedData[i].name, importedData[i].description, importedData[i].html_url);
            }
        }
        // show all project 
        else {
            for (var i = 3; i < importedData.length; i++) {
                createCard("/pictures/all projects/age_calculator.png", importedData[i].name, importedData[i].description, importedData[i].html_url);
            }
            document.getElementById("more_project").textContent = "Less";
            
        }
    }
    else {
        alert("No User Found with this name");
    }
}

getFetchData(false);
let searchButton = document.getElementById("more_project");
// catch events
searchButton.addEventListener("click", getFetchData);