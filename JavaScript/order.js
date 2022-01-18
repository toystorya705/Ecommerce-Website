
window.location.reload = order(); // call on load

function order() {
    senddata().catch(error => {
        console.error(error);
    });
 //fetch API
    async function senddata() {
        const response = await fetch('order_json.php', {
            method: 'POST', // json
            headers: {
                'Content-Type': 'application/json'
            },
            body: ""
        });
        const data = await response.text();
    
        let main_div = document.getElementById("main_div");
        let productsobject = JSON.parse(data);// converting to javascript form
        let i;
        for (i = 0; i < productsobject.length; i++) {

            main_div.innerHTML += '  <div class="order"><img src="../IMG/' + productsobject[i].image_name + '"><div class="orderdetail"><p>Brand: ' + productsobject[i].heading + '</p> <p>Style: ' + productsobject[i].product_style + '</p><p>Quantity: ' +  productsobject[i].count_number + '</p> <p>Price: £' + productsobject[i].price + '</p></div></div>';
      //displaying orders of logged in user


        }

    }



}
