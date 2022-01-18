
window.onload = displaydata(); //calling function onload
function displaydata() {


    let product_id = sessionStorage.getItem("displayproduct_id");// extracting product id from session storage stored by products page
    if (sessionStorage.getItem("displayproduct_id") == null || sessionStorage.getItem("displayproduct_id") == "undefined") {
        document.getElementById("Result").innerHTML = "<b>There is some error while fetching data</b>";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
            window.history.back();
        }, 1000);
    } else {
        getdata().catch(error => {
            console.error(error);
        });
//fetch API
//Advance Ajax
        async function getdata() {
            let productdetail = {};
            productdetail.product_id = product_id;
            const response = await fetch('productdisplay_json.php', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'//json
                },
                body: (JSON.stringify(productdetail))// sending product_id in json
            });
            const data = await response.text();

            if (data == "]") {//checking error while fetching
                document.getElementById("Result").innerHTML = "Getting Error While fetching Details";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box
                return; //Do nothing else
            }
            else {
                let productObject = JSON.parse(data);// Converting  to javascript form

      // seting data to text fields
                document.getElementById("product_heading").innerHTML = productObject[0].heading;
                document.getElementById("detail1").innerHTML = "£" + productObject[0].price;
                document.getElementById("product_description").innerHTML = productObject[0].description;
                document.getElementById("img_product").src = "../IMG/" + productObject[0].image_name;
                document.getElementById("display_add_to_cart").onclick = onclick;
                function onclick() {
                    add_to_cart(productObject[0].product_id);
                }



            }
        }
    }
}
