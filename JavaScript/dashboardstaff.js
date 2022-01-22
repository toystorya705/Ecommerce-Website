let productsobject; //this variable used funtions depends on the use

window.onload = displaydata();// calling function
function SelectAll() {// checkbox select all function
    let select = document.getElementsByName('CheckBox');
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
    let data_send = "";
    if (command == "DELETE") {
        data_send = data;
        data_send = JSON.stringify(data_send);
      
    }
    else if (command == "SORT") {
        main_div.innerHTML = "";// removing previous data
        main_div.innerHTML = ' <h1>Dashboard</h1><div class="order" id="action_product"> <input type="checkbox" class="useragg"  name="CheckAll" onclick="SelectAll()"><p class="selectall">Select All</p><div class="dashbutton"> <button type="button" onclick=' + "window.location.href='product_add.php'" + '>Add Product</button> <button type="button" onclick=' + "delete_edit_product('EDIT')" + '>Edit Product</button><button type="button" onclick=' + "delete_edit_product('DELETE')" + '>Delete Product</button>   <button type="button" onclick=' + "displaydata('','SORT')" + '>Sort</button> </div> </div>';

        data_send = JSON.stringify(command);//converting to json

    }

    getuser().catch(error => {
        console.error(error);
    });
//fetch API
    async function getuser() {

        const response = await fetch('dashboardstaff_json.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' //json
            },
            body: data_send
        });
        const data = await response.text();


        if (command == "DELETE") {

            if (data == "Document deleted") {
                main_div.innerHTML = "";//removing previous data
                // adding main bar which contains tasks buttons
                main_div.innerHTML = ' <h1>Dashboard</h1><div class="order" id="action_product"> <input type="checkbox" class="useragg"  name="CheckAll" onclick="SelectAll()"><p class="selectall">Select All</p><div class="dashbutton"> <button type="button" onclick=' + "window.location.href='product_add.php'" + '>Add Product</button> <button type="button" onclick=' + "delete_edit_product('EDIT')" + '>Edit Product</button><button type="button" onclick=' + "delete_edit_product('DELETE')" + '>Delete Product</button>   <button type="button" onclick=' + "displaydata('','SORT')" + '>Sort</button> </div> </div>';
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

        else if (data == "]") {

            document.getElementById("Result").innerHTML = "Error Please check console?";
            document.getElementById("Result").style.display = "block";
            setTimeout(function () {
                document.getElementById("Result").style.display = "none";
            }, 1000);// Time interval for display message box
            return; //Do nothing else
        } else {
            productsobject = JSON.parse(data)
            let i;
            for (i = 0; i < productsobject.length; i++) {
                //diplaying all the products

                main_div.innerHTML += '  <div class="order"><input type="checkbox" name="CheckBox" class="useragg" /><img src="../IMG/' + productsobject[i].image_name + '"><div class="orderdetail"><p>Brand: ' + productsobject[i].heading + '</p> <p>Style: ' + productsobject[i].product_style + '</p><p>Quantity: ' + productsobject[i].stock + '</p> <p>Price: £' + productsobject[i].price + '</p></div></div>';
            }
        }
    }

}


function delete_edit_product(task = "", obj) {

    let select = document.getElementsByName('CheckBox');

    let delete_data = [];
//check the selected box based on that gets the product id and store it to perform tasks
    for (i = 0; i < select.length; i++) {
        if (select[i].checked == true) {
            delete_data.push(productsobject[i].product_id);

        }

    }

    if (delete_data.length > 0) {//check if the box is not empty

        if (task == "DELETE") {
            displaydata(delete_data, "DELETE")
        }
        else if (task = "EDIT") {// check if only one box is selected of editing
            if (delete_data.length == 1) {
                sessionStorage.setItem("edit_product_id", delete_data[0]);// storing product id which will be extracted by edit page
                window.location.href = ("product_edit.php");
            } else {
                document.getElementById("Result").innerHTML = "Please choose one box at a time to edit";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box
            }
        }
    } else {
        document.getElementById("Result").innerHTML = "Please make a selection";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
    }
}
