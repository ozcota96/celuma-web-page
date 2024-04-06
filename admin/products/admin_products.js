function getProducts() {

    const Http = new XMLHttpRequest();
    const url='http://localhost:8090/celuma-webapi/api/products/all';
    const productsTable = document.getElementById("allProducts");


    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {

        if (Http.readyState == 4) {
            if (Http.status === 200) {
                var products = JSON.parse(Http.responseText);
                for (const product of products) {
                    
                    // Row creation
                    const tableRow = document.createElement("tr")
                    productsTable.appendChild(tableRow);

                    // Name display
                    const name = document.createElement("td");
                    name.textContent = product.name;

                    // ProductId display
                    const id = document.createElement("td");
                    id.className = "text-center"
                    id.textContent = product.productId;

                    // Status display
                    const status = document.createElement("td");
                    status.textContent = product.content;

                    const buttons = document.createElement("td");
                    buttons.className = "text-center"

                    // Delete button
                    var button_del = createButton(product.productId, "delete");
                    buttons.append(button_del);
                    button_del.addEventListener("click", function() {
                        var valueHolder = document.getElementById("button_" + product.productId)
                        const deletedText = documentgetElementById("eliminarBtn");
                        deletedText.value = valueHolder.value;
                    });

                    // Edit button
                    var button_edit = createButton(product.productId, "edit");
                    
                    buttons.append(button_edit);
                    button_edit.addEventListener("click", function() {
                        var setText = document.getElementById("editName");
                        setText.value = product.name;

                        var setCat = document.getElementById("editCategory");
                        setCat.value = product.categoryId;

                        var setContent = document.getElementById("editDescription");
                        setContent.value = product.content;

                        var setId = document.getElementById("editId");
                        setId.value = product.productId;
                    });

                    tableRow.appendChild(name);
                    tableRow.appendChild(id);
                    tableRow.appendChild(status);
                    tableRow.appendChild(buttons);


                }
            }
        }
    }

}

function createButton(productId, type){
    var button = document.createElement("button");
    if (type === "delete") {
        button.className = "btn  btn-outline-danger fa-solid fa-trash-can m-1";
        button.dataset.bsTarget = "#deleteButton";
        button.dataset.bsToggle = "modal";
    }
    else {
        button.className = "btn btn-outline-info fa-solid fa-pen-to-square";
        button.dataset.bsTarget = "#editButton";
        button.dataset.bsToggle = "modal";
        // 
    }
    
    button.value = productId;
    button.id = "button_" + productId;

    return button;
}

function newProduct() {

    // Nombre
    const name = document.getElementById("product_name");
    const inputName = name.value;

    // Descripción
    const description = document.getElementById("descriptionText");
    const inputDresc = description.value;

    // Categoría
    const categoria = document.getElementById("category_option");
    const inputCat = categoria.value;

    // Precio
    const price = document.getElementById("product_price");
    const inputPrice = price.value;

    // Endpoint conection
    const Http = new XMLHttpRequest();
    const url='http://localhost:8090/celuma-webapi/api/products/save';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const body = JSON.stringify(
        {
            "name": inputName,
            "categoryId": inputCat,
            "content": inputDresc,
            "instructions": null,
            "cautions": null,
            "active": 1
        }
    )

    Http.onload = () => {
        if (Http.readyState == 4 && Http.status >= 200) {
            console.log(JSON.parse(Http.responseText));
            location.reload();
        }
        else {
            console.log("Error")
        }
    }
    Http.send(body);

}

function editProduct() {

    // Getting new values
    var name = document.getElementById("editName");
    var newName = name.value;
    console.log(newName);

    var category = document.getElementById("editCategory");
    var newCategory = category.value;
    console.log(newCategory)

    var content = document.getElementById("editDescription");
    var newContent = content.value;
    console.log(newContent);

    var id = document.getElementById("editId");
    var editId = parseInt(id.value);
    console.log(editId);
    console.log(typeof editId);
    


    // Endpoint connection
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8090/celuma-webapi/api/products/update';
    Http.open('PUT', url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const body = JSON.stringify(
        {
            "name": newName,
            "categoryId": newCategory,
            "content": newContent,
            "productId" : editId

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

function getValue() {
    var deleteBtn = document.getElementById("eliminarBtn");
    deleteProduct(deleteBtn.value);

};

function deleteProduct(productId){
    var Http = new XMLHttpRequest();

    const id = productId;
    const url = 'http://localhost:8090/celuma-webapi/api/products/delete/' + id ;

    Http.open("DELETE", url);
    Http.setRequestHeader('Content-Type', 'application/json');

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