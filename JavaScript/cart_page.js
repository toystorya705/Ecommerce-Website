
window.location.reload = cart_data();//calling functio everytime page load

let store = [];
function cart(dataobj, command = "", count_number) {// Function passing parameters 
    senddata().catch(error => {
        console.error(error);
    });
  //Fetch API
  //Advance Ajax
    async function senddata() {//Sending and receiving appropriate data 
        const response = await fetch('cart_page_json.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'//JSON
            },
            body: dataobj//Sending or object  number for if statement
        });
        const data = await response.text();// receiving response
        let main_div = document.getElementById("main_div");

        if (command == "cart_detail") {
     
            let details = JSON.parse(data);// converting cart details in  javascript form
            cart_data(details, "call_product_data")// calling function and passing parameters after receiving cart detail passing it to display product based on product_id
        } else {

            let productsobject = JSON.parse(data);// converting product details in  javascript form
            productsobject[0].count_number = count_number;// adding count variable to store stock
         
            let i;
            for (i = 0; i < productsobject.length; i++) {
            // displaying data
                main_div.innerHTML += '  <div class="order"><img src="../IMG/' + productsobject[i].image_name + '"><div class="orderdetail"><p>Brand: ' + productsobject[i].heading + '</p> <p>Style: ' + productsobject[i].product_style + '</p><p>Quantity: ' + count_number + '</p> <p>Price: £' + productsobject[i].price + '</p></div></div>';
                store.push(productsobject[i]);

            }
            sessionStorage.setItem("checkout", JSON.stringify(store));// storing data in session storage for checkout page
        }

    }//Sending and receiving appropriate through
}

function cart_data(data, command = "") {
    if (command == "call_product_data") {// calling function and passing parameters
        product_data(data);//calling function and passing parameters to diplay products
      
    }
    else {
        let temp = {};
        temp.check = 2000;
        cart(2000, "cart_detail", ""); // Loading cart details like customer_id, product_id and etc to diplay products
     
    }
}

function product_data(details) {//Running for loop for each items related to customer in the cart  
    let i, store = {};
    for (i = 0; i < details.length; i++) {
        let temp = {};
        temp.product_id = details[i].product_id;
        temp.command = "product_detail";
        store += details;
        cart(JSON.stringify(temp), "product_detail", details[i].count_number);//sending product id one by one and dsplaying id
    }


}



