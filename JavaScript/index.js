
let main_div = document.getElementById("productid");
function search_recom(search_data = "") {

    main_div.innerHTML = "";// removing previous data
    send = {}
    send.command = 3902;// if statement status
    send.search_data = search_data;
    let data_send = JSON.stringify(send);
    getdata(data_send).catch(error => {
        console.error(error);
    });
}
//fetch API
async function getdata(data_send) {

    const response = await fetch('products_json.php', {// using the product class because it meet the criteria of extracting data from server
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' //json
        },
        body: data_send
    });
    const data = await response.text();

    if (data == "]") {
        document.getElementById("Result").innerHTML = "Error Please check console?";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box
        return; //Do nothing else
    } else {

        productsobject = JSON.parse(data)
 //adding product card
        let i;
        for (i = 0; i < productsobject.length; i++) {

            main_div.innerHTML += '<div class="img1"><img style="cursor:pointer;" onclick="take_to_productdisplay(' + productsobject[i].product_id + ')" src="../IMG/' + productsobject[i].image_name + ' "> <p>' + productsobject[i].heading + '</p>' + ' <div class="rating"> <!-- Creating Rating --> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>' + '</div><p>£' + productsobject[i].price + '</p><div class="button"> <button onclick=' + "location.href='productdisplay.php'" + ' type="button"> BUY NOW</button> <button onclick="add_to_cart(' + productsobject[i].product_id + ')" type="button"> ADD TO CART</button> </div> ';
        }
    }
}




















