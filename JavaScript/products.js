 let main_div = document.getElementById("productid");
 data_send=4000;// default status for if statement

 if(sessionStorage.getItem("search_data")==null){// check if there is any search data in session storage
getuser().catch(error => {
    console.error(error);
});
 }else{
     search_data(sessionStorage.getItem("search_data"));
     sessionStorage.removeItem("search_data");// After searching removing item from session storage
 }

function sort_data(command=""){//sort data
    data_send="";
   main_div.innerHTML="";  //removing previous data 
    data_send =JSON.stringify(command);
    getuser().catch(error => {
        console.error(error);
    });
}

function search_data(search_data=""){// search data 
    main_div.innerHTML=""; //removing previous data 
send={}
send.command=3902;// status
send.search_data=search_data;
data_send=JSON.stringify(send);// converting to json
sessionStorage.removeItem("search_data");// After searching removing item from session storage
getuser().catch(error => {
    console.error(error);
});
}
//fetch API
async function getuser() {
    const response = await fetch('products_json.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'//json
        },
        body: data_send
    });
    const data = await response.text();// receiving data


    if (data == "]") {//checking error
      
        document.getElementById("Result").innerHTML = "Error Please check console?";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
        return; //Do nothing else
    } else {
        
        productsobject = JSON.parse(data);//converting to javascript
        let i;
        for (i = 0; i < productsobject.length; i++) {
//display data
            main_div.innerHTML += '<div class="img1"><img style="cursor:pointer;" onclick="take_to_productdisplay(' + productsobject[i].product_id + ')" src="../IMG/' + productsobject[i].image_name + ' "> <p>' + productsobject[i].heading + '</p>'+' <div class="rating"> <!-- Creating Rating --> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>'+ '</div><p>£' + productsobject[i].price + '</p><div class="button"> <button onclick=' + "location.href='../PHP/productdisplay.php'" + ' type="button"> BUY NOW</button> <button onclick="add_to_cart('+productsobject[i].product_id+')" type="button"> ADD TO CART</button> </div> ';
        }
    }
}

function take_to_productdisplay(product_id = "") {

    sessionStorage.setItem("displayproduct_id", product_id);// store product id for product display page
    window.location.href = ("../PHP/productdisplay.php");

}