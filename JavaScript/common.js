let session_check = false;// session check for this page
sessionStorage.setItem("session_status", 1000);//status for recommender page
window.onload = checksession();
function checksession() {// Logged in session
  let checkobj = {};
  checkobj.command = "CHECK_SESSION";
  multi_tasks(checkobj, "CHECK_SESSION")
}

function customer_info_page() {//Checking status of login session then only allows to access the page
  if (session_check == true) {
    window.location.href = "customer_info.php";
  } else {
    window.location.href = "Login.php";
  }
}

function order_page() {//Checking status of login session then only allows to access the page

  if (session_check == true) {
    window.location.href = "order.php";
  } else {
    window.location.href = "Login.php";
  }
}
function cart_click() {

  if (session_check == true) {//Checking status of login session then only allows to access the page
    window.location.href = "cart_page.php";
  } else {
    window.location.href = "Login.php";
  }
}

function product_search(data) {//This function is being called from recommender page, searching data function first check the status and then replace location to products page

  if (window.location.href != "https://ecommerce-website99.herokuapp.com/products.php") {
    sessionStorage.setItem("search_data", data);// storeing search term inside session storage
    window.location.href = "products.php";
  } else {
    search_data(data);// if the location of the page is products page it will call function of products page
  }
}
function logout() {// Logged out session
  let logoutobj = {};
  logoutobj.command = "LOGOUT";
  multi_tasks(logoutobj, "LOGOUT")
  session_check = false;
  sessionStorage.setItem("session_status", 1000);
}

function cart_reaload() {// check cart everytime cart reload
  session_check = true;
  let cart_reload_obj = {};
  cart_reload_obj.command = "CART_RELOAD";
  multi_tasks(cart_reload_obj, "CART_RELOAD");
}


function add_to_cart(cart_product_id) {//adding product to cart
  if (session_check == true && cart_product_id != null && cart_product_id != undefined) {
    let cart_product_obj = {};
    cart_product_obj.cart_product_id = "" + cart_product_id;
    cart_product_obj.command = "ADD_TO_CART";
    cart_product_obj.cart_id = "" + (Math.random() + Math.random() + Math.random() + Math.random()) * 10;//creating cart_id
    multi_tasks(cart_product_obj, "ADD_TO_CART");
  }
  else {
    window.location.href = "Login.php"
  }
}


function multi_tasks(object, command = "") {
  senddata().catch(error => {
    console.error(error);
  });

  async function senddata() {
    const response = await fetch('common_json.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //json
      },
      body: (JSON.stringify(object))//converting to json
    });
    const data = await response.text(); //receiving response


    if (command == "CHECK_SESSION") {
      if (data == 5000) {
        let login = document.getElementById("login");
        login.innerHTML = "Logout";
        login.setAttribute("onclick", "logout()");// calling function 
        sessionStorage.setItem("session_status", 999);
        cart_reaload();

      }

      else {
        if (data == 5999) {//changing login button attribute
          let login = document.getElementById("login"); //
          login.setAttribute("onclick", "staff_login.php");//Change location to login page to product page if logged out
          login.innerHTML = "Login/Sign up";
        }
      }
    } else if (command == "ADD_TO_CART" || command == "CART_RELOAD") {
      document.getElementById("cart_number").innerHTML = data;// Setting cart number

    }
  }


}

