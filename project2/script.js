document.addEventListener("DOMContentLoaded", () => {

 const  products = [
        {id: 1, name: "product 1", price: 199.99},
        {id: 2, name: "product 2", price: 299.99},
        {id: 3, name: "product 3", price: 499.99},
        {id: 4, name: "product 4", price: 599.99},
        
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
    <span>${product.name} -  $${product.price}</span>
    <button data-id="${product.id}">add to cart</button>
    `
    productCard.classList.add("product")
    productList.appendChild(productCard)

    productCard.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
  const productId = Number(e.target.dataset.id);
            
            renderCart(product);
            totalProduct(product);
            addToCart(product);
        }
        
    })
    });
  function renderCart (product){
   const productDisplay = products.find(p => {
    if (p.id === product.id) {
        const displayProduct = document.createElement("div")
        displayProduct.textContent = `${product.name}- $${product.price}`
        cartItems.appendChild(displayProduct)


}
   })
  }
  let total = 0
  function totalProduct(item) {
    total  += item.price

    totalPrice.textContent = `$${total.toFixed(2)}`;

    cartTotal.classList.remove("hidden")
    totalPrice.classList.remove("hidden")
    addToCart(item)
    
   }

   function addToCart(item){
      cart.push(item)
     updateCartMessage()
   }

   function updateCartMessage() {
    if (cart.length === 0) {
        cartMessage.classList.remove("hidden");
    } else {
        cartMessage.classList.add("hidden");
    }
}

   checkOutBtn.addEventListener('click', () => {
   if (cart.length === 0) {
     
   }
   alert("checkout successiful")
   return cart.length === 0

   })
})