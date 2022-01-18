

window.onload = checksession();
function checksession() {// Logged in session

    let checkobj = {};
    checkobj.command = "CHECK";
    multi_tasks(checkobj, "CHECK")


}
function logout() {// Logged out session
    let logoutobj = {};
    logoutobj.command = "LOGOUT";
    multi_tasks(logoutobj, "LOGOUT")
}


function multi_tasks(object, command = "") {
    senddata().catch(error => {
        console.error(error);
    });

    async function senddata() {
        const response = await fetch('common_staff_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //json
            },
            body: (JSON.stringify(object)) //converting to json
        });
        const data = await response.text();




        if (data == 4598) {
            //set the origanl loction if the user is logged in

            let login = document.getElementById("login");
            let dashboardbutton = document.getElementById("dashboardbutton");
            dashboardbutton.setAttribute("href", "dashboardstaff.php");// calling function 
            let orderstaffbutton = document.getElementById("orderstaffbutton");
            orderstaffbutton.setAttribute("href", "orderstaff.php");// calling function 
            login.innerHTML = "Logout";
            login.setAttribute("onclick", "logout()");// calling function 

        }
        else {
            if (data == 4000) {
                //set the login page loction if the user is not logged in
                let dashboardbutton = document.getElementById("dashboardbutton");
                dashboardbutton.setAttribute("onclick", "staff_login.php");// calling function 
                let orderstaffbutton = document.getElementById("orderstaffbutton");
                orderstaffbutton.setAttribute("href", "staff_login.php");// calling function 
                let login = document.getElementById("login");
                login.setAttribute("onclick", "staff_login.php");//Change location to login page to product page if logged out
                login.innerHTML = "Login/Sign up";

                if (window.location.href != "http://localhost/PHP/staff_login.php") {
                    window.location.replace("staff_login.php");

                }

            }

        }

    }
}