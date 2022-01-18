function checkUser() {  //Login function

    let emailid = document.getElementById("mailusrid").value;
    let pwd = document.getElementById("password").value;
    let check = "";

    datacheckobj = {}
    datacheckobj.email = emailid;
    datacheckobj.password=pwd;

    getuser().catch(error => {
        console.error(error);
    });
//fetch API
    async function getuser() {
        if (emailid == check || pwd == check) {// If the user forget to enter any field 
            document.getElementById("Result").innerHTML = "Please enter the feilds";
            document.getElementById("Result").style.display = "block";
            setTimeout(function () {
                document.getElementById("Result").style.display = "none";
            }, 1000);// Time interval for display message box
        }
        else {
            const response = await fetch('staff_login_json.php', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'//json
                },
                body: (JSON.stringify(datacheckobj))//converting to json
            });
            const result= await response.text();
          

            if (result == 1) {// checking password
                document.getElementById("Result").innerHTML = "<b>Login successful.</b>";
                document.getElementById("Result").style.display = "block";
              window.location.replace("dashboardstaff.php");
            }

            else if (result == "Password incorrect.") {// If password is Incorrect
                document.getElementById("Result").innerHTML = "<b>Incorrect Username or Password.</b>";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box

            }
            else if (result == 'Database error: Multiple users have same email address.') {

                document.getElementById("Result").innerHTML = result;
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box


            }
            else if (result == 'User email not found') {

                document.getElementById("Result").innerHTML = "Email not recognized. Do you have an account?";
                document.getElementById("Result").style.display = "block";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                }, 1000);// Time interval for display message box
                return; //Do nothing else

            }

        }

    }
}
