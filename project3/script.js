document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")

.then(reponse => reponse.json())
.then(data => {
   data.forEach(product => {
     console.log(product.id);
     console.log(product.title);
     console.log(product.price);
     console.log(product.description);
     console.log(product.category)
     console.log(product.image);
     
     
        const productCard = document.createElement("div")
        
        const id = document.createElement("p")
        const title = document.createElement("h2")
        const price = document.createElement("p")
        const description = document.createElement("div")
        const category = document.createElement("p")
        const image = document.createElement("img")

        id.textContent = `Id:  ${product.id}`
        title.textContent = `Title:  ${product.title}`
        price.textContent = `Price: - $${product.price}`
        description.textContent = `Description: ${product.description}`;
        category.textContent = `Category: ${product.category}`
        image.src = product.image
        
        image.style.width = "100px"
        image.style.height = "100px"

        productsContainer.appendChild(id)
        productsContainer.appendChild(title)
        productsContainer.appendChild(price);
        productsContainer.appendChild(description)
        productsContainer.appendChild(category)
        productsContainer.appendChild(image)

        productCard.appendChild(id)
        productCard.appendChild(title)
        productCard.appendChild(price);
        productCard.appendChild(description)
        productCard.appendChild(category)
        productCard.appendChild(image)
        
        productCard.classList.add("product-card")
        productsContainer.appendChild(productCard)

   });
})


})