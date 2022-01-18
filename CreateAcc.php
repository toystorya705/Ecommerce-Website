<?php

include('common.php'); //Linking File
outputHead("Login/Sign up"); // Calling Header Portion
outputNavigation("Login/Sign up"); // Calling Navigation Bar

?>


<div class="logsinform" id="form">
    <!--Create Account Box-->
    <form method="post" action="Login.php">
        <img src="../IMG/userimage.png" alt="userimage">
        <input type="email" id="mailusrid" placeholder="Username" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
        <!--Validation-->
        <input type="password" id="password" name="psw" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
        <!--Validation-->
        <input type="password" id="repassword" placeholder="Renter-Password">
        <input type="tel" id="phone" placeholder="Enter Phone Number">
        <input type="checkbox" id="check" class="useragg" onclick="checkboxcheck()">
        <label for="check">Accept User Agreement</label>
        <button type="button" onclick="storeUser()" name="signup">Sign up</button>
    </form>
</div>

<p class="messagebox" id="Result" style="font-weight: bold;"></p>
<!--Message Box-->

<div id="message">
    <!--Criteria Box-->
    <h3>Password must contain the following:</h3>
    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
    <p id="number" class="invalid">A <b>number</b></p>
    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
<script src="../JavaScript/createAccount.js"></script>
<?php
outputFooter(); // Calling Footer

?>