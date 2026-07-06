const orderProduct = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if (success) {
         resolve =  console.log("Your T-Shirt oder has arrived.");
            
        } else {
            reject = console.log("Oops Something wrong...");
            
        }
    }, 2000);
})
orderProduct
.then((result) => console.log(result));
