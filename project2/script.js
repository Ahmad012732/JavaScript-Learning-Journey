document.addEventListener("DOMContentLoaded", () => {

 const  products = [
        {id: 1, name: "Iphone 17pro", price: 1500.99},
        {id: 2, name: "Samsung Ultral+",price: 1600.99},
        {id: 3, name: "Xiamo pro", price: 500.99},
        {id: 4, name: "Tecno pro", price: 400.29},
        {id: 5, name: "Infinix pro", price: 399.99},
        
    ]
  
  const cart = []

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-item");
const cartMessage = document.getElementById("empty-cart");
const cartTotal = document.getElementById("cart-total");
const totalPrice = document.getElementById("total-price");
const checkOutBtn = document.getElementById("checkout-btn");

products.forEach(product => {
    const productCard = document.createElement("div")
    productCard.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button id="data-id">add to cart</button>
    `
    productList.appendChild(productCard)
    productCard.classList.add("product")

    productCard.addEventListener('click', (event) =>{
        if(event.target.tagName === 'BUTTON') {
            
            const productId = Number(event.target.getAttribute("data-id"))
            const selectedProduct = products.find(p => p.id === product.id)
            console.log(selectedProduct); 
        }
        renderCar(product)
        totalProduct(product)
        addToCart(product)

        
    })
})
   function renderCar(product) {
   const  productDisplay = products.find(p => {
        if (p.id === product.id) {
            
            const itemDisplay = document.createElement("div")
            cartItems.appendChild(itemDisplay)
            itemDisplay.textContent = `${product.name} - $${product.price.toFixed(2)}`
        }
        
    })
   }
    let total = 0
   function totalProduct(item) {
    total += item.price
    totalPrice.textContent = `$${total.toFixed(2)}`
    cartTotal.classList.remove("hidden")
    cartMessage.classList.add("hidden")
    addToCart(item)
   }

   function addToCart(item) {
    cart.push(item)
   }

   checkOutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        return
    }
    alert("Checkout Successiful")
   })
})