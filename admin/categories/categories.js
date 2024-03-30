function getCategories() {
    const Http = new XMLHttpRequest;
    const url = 'http://localhost:8090/celuma-webapi/api/categories/all';
    const categoriesTable = document.getElementById("allCategories");

    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4) {
            if (Http.status === 200) {
                var categories = JSON.parse(Http.responseText);
                for (const category of categories) {

                    // Row creation
                    const tableRow = document.createElement("tr");
                    categoriesTable.appendChild(tableRow);

                    // Name
                    const name = document.createElement("td");
                    name.textContent = category.description; 

                    // Id
                    const id = document.createElement("td");
                    id.textContent = category.categoryId;

                    // Buttons
                    const buttons = document.createElement("td");
                    buttons.className = "text-center";

                    // Delete button
                    const del_button = createButton(category.categoryId, "delete");
                    buttons.append(del_button);
                    del_button.addEventListener("click", function() {
                        var valueHolder = document.getElementById("button_" + category.categoryId);
                        const deletedText = document.getElementById("eliminarBtn");
                        deletedText.value = valueHolder.value;
                    })

                    // Edit button
                    const edit_button = createButton(category.categoryId, "edit");
                    buttons.append(edit_button);   
                    edit_button.addEventListener("click", function() {
                        var newId = document.getElementById("editId");
                        newId.value = category.categoryId;

                        var newName = document.getElementById("editName");
                        newName.value = category.description;
                    })                 

                    tableRow.appendChild(name);
                    tableRow.appendChild(id);
                    tableRow.appendChild(buttons)


                }
            }
        }
    }
    
}   

function createButton(categoryId, type){
    var button = document.createElement("button");
    if (type === "delete") {
        button.className = "btn btn-outline-danger fa-solid fa-trash-can m-1";
        button.dataset.bsTarget = "#deleteButton";
        button.dataset.bsToggle = "modal";
    }
    else {
        button.className = "btn btn-outline-info fa-solid fa-pen-to-square";
        button.dataset.bsTarget = "#editButton";
        button.dataset.bsToggle = "modal";
    }
    
    button.value = categoryId;
    button.id = "button_" + categoryId;

    return button;
}

function newCategory() {

    // Get name
    const name = document.getElementById("category_name");
    const setName = name.value;


    //Endpoint connection 
    const Http =  new XMLHttpRequest;
    const url = 'http://localhost:8090/celuma-webapi/api/categories/save';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");


    const body = JSON.stringify(
        {
        "description": setName,
        "active": 1
    }
    )

    Http.onload = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(JSON.parse(Http.responseText));
            location.reload();
        }
        else {
            console.log("Error")
        }
    }
    Http.send(body);

}

function getValue() {
    var deleteBtn = document.getElementById("eliminarBtn");
    deleteCategory(deleteBtn.value);
}

function deleteCategory(categoryId) {
    const Http = new XMLHttpRequest();

    const id = categoryId;
    const url = 'http://localhost:8090/celuma-webapi/api/categories/delete/' + id;
    
    Http.open("DELETE", url);
    Http.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    Http.onreadystatechange = function() {
        if (Http.readyState == 4) {
            if (Http.status = 200) {
                console.log(Http.responseText);
                location.reload();
            }
            else {
                console.log('DELETE request failed');
            }
        }
    }


    Http.send();
}

function editCategory(categoryId) {

    // New name
    const name = document.getElementById("editName");
    const newName = name.value;

    // Get id
    const id = document.getElementById("editId");
    const newId = id.value;

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8090/celuma-webapi/api/categories/update';
    Http.open('PUT', url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const body = JSON.stringify(
        {
            "description": newName,
            "categoryId" : newId
        }
    )

    Http.onload = () => {
        if (Http.readyState == 4 && Http.status >= 200) {
            location.reload();
        }
        else {
            console.log("Error")
        }
    }
    Http.send(body);
}