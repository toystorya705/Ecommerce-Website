
let passinput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let check = false;

let lengthcheck = false;
let capitalcheck = false;
let numbercheck = false;
let lettercheck = false;





passinput.onblur = function () {// When the user clicks outside of the password field, hide the message box
  document.getElementById("message").style.display = "none";
}

passinput.onfocus = function () {// When the user presses the password field a the message box will be shown
  document.getElementById("message").style.display = "block";
}


passinput.onkeyup = function () {// When the user start typing something in password feild then it will be checked


  const newLocal = passinput.value.length >= 8;
  // Validation of length of password
  if (newLocal) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    lengthcheck = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");

  }

  // Validation capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (passinput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    capitalcheck = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");

  }

  // Validation of numbers
  let numbers = /[0-9]/g;
  if (passinput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    numbercheck = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");

  }

  // Validation of lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (passinput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    lettercheck = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");

  }


}
function checkboxcheck() {// True if all above conditons are true
  check = true;
}



function storeUser() {


  let emailcheck = document.getElementById("mailusrid").value;
  let pwd = document.getElementById("password").value;
  let repwd = document.getElementById("repassword").value;
  let phonecheck = document.getElementById("phone").value;
  let checkspace = "";

  if (emailcheck == checkspace || pwd == checkspace || repwd == checkspace || phonecheck == checkspace) {// check if any fields are empty
    document.getElementById("Result").innerHTML = "Please enter the fields";
    document.getElementById("Result").style.display = "block";
    setTimeout(function () {
      document.getElementById("Result").style.display = "none";
    }, 1000);// Time interval for display message box
  }
  else if (passinput.value.length >= 8 && numbercheck == true && capitalcheck == true && lettercheck == true) {// if not it will store player in local storage
    let usrObject = {};// declaring object
    usrObject.customer_id=""+(Math.random()+Math.random()+Math.random()+Math.random())*10;//Creating cutomer_id
    usrObject.email = emailcheck;
    usrObject.password = pwd;
    usrObject.repassword = repwd
    usrObject.phone = phonecheck;

    if (check == true) {// Check checkbox for user agremment

      //Store user
     

      senddata().catch(error => {
        console.error(error);
      });
  //Fetch API
      async function senddata() {
        const response = await fetch('add_customer_json.php', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json' //JSON
          },
          body: (JSON.stringify(usrObject))
        });
        const data = await response.text();
      
        if (data== 10000) {
          document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";
          document.getElementById("Result").style.display = "block";
          location.replace("index.php")// changing location to home index page after logged in
        }
        else{
          console.log(data);
          document.getElementById("Result").innerHTML = "<b>Error while adding error</b>";
          document.getElementById("Result").style.display = "block";
          setTimeout(function () {
              document.getElementById("Result").style.display = "none";
          }, 1000);// Time interval for display message box

        }

      }
       
    }
    else {
      document.getElementById("Result").innerHTML = "<b>Please Accept User Agreement.</b>";
      document.getElementById("Result").style.display = "block";
      setTimeout(function () {
        document.getElementById("Result").style.display = "none";
      }, 1000);// Time interval for display message box
    }


  }
  else {// if passsword not enterd in criteria
    document.getElementById("Result").innerHTML = "<b>Enter Password Under Certain Criteria</b>";
    document.getElementById("Result").style.display = "block";
    setTimeout(function () {
      document.getElementById("Result").style.display = "none";
    }, 1000);// Time interval for display message box


  }
}




