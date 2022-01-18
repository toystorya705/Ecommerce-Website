
let cust_info = 9090;// default status to get cutomer info

document.getElementById("button_a").style.display = "none";//diable save change and reset button
senddata().catch(error => {
    console.error(error);
});
function update_customer_data() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let address1 = document.getElementById("address_1").value;
    let address2 = document.getElementById("address_2").value;
    let postcode = document.getElementById("postcode").value;

    if (name == "" || email == "" || password == "" || phone == "" || address1 == "" || address2 == "" || postcode == "") {
        document.getElementById("Result").innerHTML = "Please enter the feilds";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
    } else {
        let customer_Object = {};
        customer_Object.name = name;
        customer_Object.email = email;
        customer_Object.password = password;
        customer_Object.phone = phone;
        customer_Object.address1 = address1;
        customer_Object.address2 = address2;
        customer_Object.postcode = postcode;
   
        cust_info = JSON.stringify(customer_Object);//converting into json
        senddata("update_data").catch(error => { 
            console.error(error);
        });
    }

}


//Fetch API
async function senddata(command = "") {
    const response = await fetch('customer_info_json.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'//json
        },
        body: cust_info
    });
    const data = await response.text();

    if (command != "update_data") {// receiving and filling customer details
        let productObject = JSON.parse(data);

        document.getElementById("name").value = productObject[0].name;
        document.getElementById("email").value = productObject[0].email;
        document.getElementById("password").value = productObject[0].password;
        document.getElementById("phone").value = productObject[0].phone;
        document.getElementById("address_1").value = productObject[0].address1;
        document.getElementById("address_2").value = productObject[0].address2;
        document.getElementById("postcode").value = productObject[0].postcode;
    } else {

        document.getElementById("Result").innerHTML = "Save changes made";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 2000);// Time interval for display message box
        window.location.replace("index.php");


    }

}

function reset_data() {// reseting textfields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address_1").value = "";
    document.getElementById("address_2").value = "";
    document.getElementById("postcode").value = "";

}



document.addEventListener('click', function (e) {// Start displaying button when user clicks on any of the text fields
    if (e.target.tagName == "TEXTAREA" || e.target.tagName == "INPUT" || e.target.tagName == "P") {

        document.getElementById("button_a").style.display = "flex";


    }
})

