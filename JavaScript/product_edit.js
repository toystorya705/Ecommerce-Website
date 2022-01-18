window.onload = edit_product();//call function onload

function edit_product(command = "") {
    let productObject = {};
    let destination = 'product_edit_json.php';
    productObject.product_id = sessionStorage.getItem("edit_product_id");
    if (sessionStorage.getItem("edit_product_id") == null || sessionStorage.getItem("edit_product_id") == "undefined") {//Extracting product product id form session storage for the product to be edited 
        document.getElementById("Result").innerHTML = "<b>There is some error while fetching data</b>";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
            window.location.replace("dashboardstaff.php");
        }, 1000);
    }

    document.getElementById("button_a").style.display = "none";// diable save change and reset button until user presses text fields

    let heading = document.getElementById("product_heading").value;
    let price = document.getElementById("detail1").value;
    let stock = document.getElementById("product_stock").value;
    let description = document.getElementById("add_product_description").value;
    let product_style = document.getElementById("product_style").value;
    let search_keyword = document.getElementById("search_keyword").value;
    let image_src = document.getElementById("edit_product_image").src;
//extracting data from form

    senddata().catch(error => {
        console.error(error);
    });

    if (command == "save_changes") {
        let temp = productObject.product_id;
       // checking fields are filled
        if (heading == "" || price == "" || stock == "" || description == "" || image_src == "" || search_keyword == "" || product_style == "") {
            document.getElementById("Result").innerHTML = "Please enter the fields";
            document.getElementById("Result").style.display = "block";
            setTimeout(function () {
                document.getElementById("Result").style.display = "none";
            }, 1000);// Time interval for display message box

        } else {

            productObject = {}
            productObject.product_id = temp;
            productObject.heading = heading;
            productObject.price = price;
            productObject.stock = stock;
            productObject.description = description;
            productObject.image_name = image_src.split("http://localhost/IMG/").pop(); //extracting only name of the image
            productObject.product_style = product_style;
            productObject.search_keyword = search_keyword;

            senddata().catch(error => {
                console.error(error);
            });
        }
    }

//fetch API
    async function senddata() {
        const response = await fetch(destination, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' //json
            },
            body: (JSON.stringify(productObject))// converting to json
        });
        const data = await response.text();
        if (command == "save_changes") {

            let checkstore = data.includes("Customer document successfully replaced.");
            if (checkstore == true) {
                document.getElementById("Result").innerHTML = "<b>Product save change Successful.</b>";
                document.getElementById("Result").style.display = "block";
              
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                    window.location.replace("dashboardstaff.php");
                }, 1000);
            }
            else {
                document.getElementById("Result").innerHTML = "<b>Product save change Unsuccessful.</b>";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);
            }

        }

        else {
            if (data == "]") {// checking error
                document.getElementById("Result").innerHTML = "<b>There is some error while loading data.</b>";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                    window.location.replace("dashboardstaff.php");
                }, 1000);
            } else {
                //filling product data into the form to edit
                let receive_data = JSON.parse(data);
                document.getElementById("product_heading").value = receive_data[0].heading;
                document.getElementById("detail1").value = receive_data[0].price;
                document.getElementById("add_product_description").value = receive_data[0].description;
                document.getElementById("product_stock").value = receive_data[0].stock;
                document.getElementById("product_style").value = receive_data[0].product_style;
                document.getElementById("search_keyword").value = receive_data[0].search_keyword;
                document.getElementById("edit_product_image").src = "../IMG/" + receive_data[0].image_name;
            }
        }
    }



}

document.addEventListener('click', function (e) {// enable buttons
    if (e.target.tagName == "TEXTAREA" || e.target.tagName == "INPUT" || e.target.tagName == "P") {

        document.getElementById("button_a").style.display = "block";


    }
})



function reset_data() {// reset form

    document.getElementById("product_heading").value = "";
    document.getElementById("detail1").value = "";
    document.getElementById("add_product_description").value = "";
    document.getElementById("product_stock").value = "";
    document.getElementById("product_style").value = "";
    document.getElementById("search_keyword").value = "";

}



