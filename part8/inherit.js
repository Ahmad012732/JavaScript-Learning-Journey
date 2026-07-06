class User {
    constructor(name, email,password) {
        this.name = name;
        this.email = email;
        this.password = password
    }

    login(){
         console.log(`${this.name} logged in`);
    }
    changePassword(){}


    logout(){
         console.log(`${this.name} logged out`);
    }
}

class Customer extends User {
   
    login(){
        console.log(`${this.name} logged in`);
    }
    order(){}
    addToCart(){}
    viewMenu(){}
                                      
    logout(){
        console.log(`${this.name} logged out`);
    }
}

class Seller extends User {
    
    login(){
        console.log(`${this.name} logged in`);
    }
    dilivery(){}
    calculateTotal(){}
    addNewItem(){}
    updateItem(){}

    logout(){
        console.log(`${this.name} logged out`);
    }
}

const Ahmad = new User("Ahmad","Ahmad@gmail.com", 3456);
Ahmad.login()
console.log(Ahmad);
Ahmad.logout()
