
window.location.reload = displaydata();//function call on page load
let productsobject;
function SelectAll() {
    let select = document.getElementsByName('CheckBox');// se;ect all check boxes
    let i;

    if (select[0].checked == false) {

        for (i = 0; i < select.length; i++) {
            if (select[i].type == 'checkbox')
                select[i].checked = true;
        }
    }
    else {
        for (i = 0; i < select.length; i++) {
            if (select[i].type == 'checkbox')
                select[i].checked = false;
        }
    }
}


function displaydata(data, command = '') { // this function perform multiple tasks depend on the command passed while calling

    let main_div = document.getElementById("main_div");
    let data_send = 3490;

    if (command == "DELETE") {
        data_send = data;

        data_send = JSON.stringify(data_send);

    }

    getuser().catch(error => {
        console.error(error);
    });
//fetch API
    async function getuser() {
        const response = await fetch('orderstaff_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //json
            },
            body: data_send
        });
        const data = await response.text();

        if (command == "DELETE") {

            if (data == "Document deleted") {
                main_div.innerHTML = "";// removing previous data
                // adding main header which contains button
                main_div.innerHTML = ' <h1>Customers Orders</h1><div class="order" id="action_product"> <input type="checkbox" class="useragg"  name="CheckAll" onclick="SelectAll()"><p class="selectall">Select All</p><div class="dashbutton"> <button type="button" onclick=' + "delete_edit_product('DELETE')" + ' style="margin-left: 800px;">Delete Order</button>   </div> </div>';
                displaydata();
                document.getElementById("Result").innerHTML = "Document Deleted Successfull";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box
            } else {
                document.getElementById("Result").innerHTML = "Error while deleting";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box
            }


        }

        else if (data == "]") {// check for error

            document.getElementById("Result").innerHTML = "Error Please check console?";
            document.getElementById("Result").style.display = "block";
            setTimeout(function () {
                document.getElementById("Result").style.display = "none";
            }, 1000);// Time interval for display message box
            return; //Do nothing else
        } else {
            productsobject = JSON.parse(data)
            let i;
            //adding data
            for (i = 0; i < productsobject.length; i++) {

                main_div.innerHTML += '  <div class="order"><input type="checkbox" name="CheckBox" class="useragg" /><img src="../IMG/' + productsobject[i].image_name + '"><div class="orderdetail"><p>Brand: ' + productsobject[i].heading + '</p> <p>Style: ' + productsobject[i].product_style + '</p><p>Quantity: ' + productsobject[i].count_number + '</p> <p>Price: £' + productsobject[i].price + '</p></div></div>';
            }
        }
    }

}



function delete_edit_product(task = "", obj) {

    let select = document.getElementsByName('CheckBox');
//check the selected box based on that gets the product id and store it to perform tasks
    let delete_data = [];

    for (i = 0; i < select.length; i++) {
        if (select[i].checked == true) {

            delete_data.push(productsobject[i].product_id);
        }

    }

    if (delete_data.length > 0) {

        displaydata(delete_data, "DELETE")
    }

    else {
        document.getElementById("Result").innerHTML = "Please make a selection";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
    }
}

