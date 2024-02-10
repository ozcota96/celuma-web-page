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
                console.log(products)
                for (const product of products) {
                    
                    const tableRow = document.createElement("tr")
                    productsTable.appendChild(tableRow);

                    const name = document.createElement("td");
                    name.textContent = product.name;
                    const id = document.createElement("td");
                    id.textContent = product.productId;
                    const status = document.createElement("td");
                    status.textContent = product.active;

                    tableRow.appendChild(name);
                    tableRow.appendChild(id);
                    tableRow.appendChild(status);
                }
            }
        }
    }

}

function newProduct() {

    // Nombre
    const name = document.getElementById("product_name");
    const inputName = name.value;

    // Descripción
    const description = document.getElementById("descriptionText");
    const inputDresc = description.value;

    // Precio
    const price = document.getElementById("product_price");
    const inputPrice = price.value;

    const Http = new XMLHttpRequest();
    const url='http://localhost:8090/celuma-webapi/api/products/all';
    Http.open("POST", url);
    Http.send();
    
    console.log(inputName);
    console.log(inputDresc);
    console.log(inputPrice);
}
