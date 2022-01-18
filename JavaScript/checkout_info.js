
let dataobj = ""; //Declaring globaly and use it, depends on the functionality of functions

function perform_tasks() {

    let name = document.getElementById("name").value;

    let address1 = document.getElementById("address_1").value;

    let address2 = document.getElementById("address_2").value;

    let postcode = document.getElementById("postcode").value;
    //checking inputs
    if (name == "" || address1 == "" || address2 == "" || postcode == "" || name == null || address1 == null || address2 == null || postcode == null) {
        document.getElementById("Result").innerHTML = "Please enter the feilds";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
    }
    else {

        user_detail_send();
        function user_detail_send() {

            let data = {}
            data.name = name;
            data.address1 = address1;
            data.address2 = address2;
            data.postcode = postcode;
            data.command = 5600;//command for if statement
            dataobj = JSON.stringify(data);//adding data to object to object and converting to json
            senddata().catch(error => {
                console.error(error);
            });

        }
        order_detail_send()
        function order_detail_send() {

            let data = JSON.parse(sessionStorage.getItem("checkout"));// extracting data from sessionStorage stored by cart page
            let i;
            for (i = 0; i < data.length; i++) {

                let productObject = {}
                productObject.product_id = data[i].product_id;
                productObject.heading = data[i].heading;
                productObject.price = data[i].price;
                productObject.stock = data[i].stock;
                productObject.description = data[i].description;
                productObject.image_name = data[i].image_name;
                productObject.product_style = data[i].product_style;
                productObject.search_keyword = data[i].search_keyword;
                productObject.count_number = data[i].count_number;
                productObject.order_id = "" + (Math.random() + Math.random() + Math.random() + Math.random()) * 10;//creating order_id
                productObject.command = 7000;//command for if statement


                dataobj = JSON.stringify(productObject);//creating object for cutomers_order and converting to json
                senddata().catch(error => {
                    console.error(error);
                });
            }

        }
        cart_detail_remove()
        function cart_detail_remove() {

            let data = {}
            data.command = 8000;//command for if statement
            dataobj = JSON.stringify(data);//converting to json
            senddata().catch(error => {
                console.error(error);
            });

        }
        window.location.replace("checkout_confirm.php");// Replacing to confirmation page


    }

}
//Fetch API
async function senddata() {
    const response = await fetch('checkout_info_json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'//json
        },
        body: dataobj
    });
}

