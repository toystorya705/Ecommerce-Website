
function checkUser() {  //Login function


    let emailid = document.getElementById("mailusrid").value;
    let pwd = document.getElementById("password").value;
    let check = "";

    datacheckobj = {}
    datacheckobj.email = emailid;
    datacheckobj.password = pwd;


    getuser().catch(error => {
        console.error(error);
    });

    async function getuser() {


        if (emailid == check || pwd == check) {// If the user forget to enter any field 
            document.getElementById("Result").innerHTML = "Please enter the feilds";
            document.getElementById("Result").style.display = "block";
            setTimeout(function () {
                document.getElementById("Result").style.display = "none";
            }, 1000);// Time interval for display message box
        }
        else {
              //Fetch API
            const response = await fetch('find_customer_json.php', {
                method: 'POST', //JSON
                headers: {
                    'Content-Type': 'application/json'
                },
                body: (JSON.stringify(datacheckobj))//Sending object for if statement
            });
            const result = await response.text();//Receiving response

            if (result == 0) {// checking password
                document.getElementById("Result").innerHTML = "<b>Login successful.</b>";
                document.getElementById("Result").style.display = "block";
  location.replace("index.php");
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
