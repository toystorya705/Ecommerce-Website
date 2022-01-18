<?php

include('common.php'); //Linking File
outputHead("Login/Sign up"); // Calling Header Portion
outputNavigation("Login/Sign up"); // Calling Navigation Bar
?>

<div class="logsinform">
    <!--Login Box-->
    <form method="post">
        <img src="../IMG/userimage.png" alt="userimage">
        <input type="email" id="mailusrid" placeholder="Username" pattern=".+@gmail.com" size="30" required>
        <input type="password" id="password" placeholder="Password">
        <button type="button" onclick="checkUser()" name="login">Login</button>
        <a href="CreateAcc.php">Create a New Account</a>

    </form>
</div>

<p class="messagebox" id="Result" style="font-weight: bold;"></p>
<!--Message Box-->


<script src="../JavaScript/login.js"></script>


<?php
outputFooter(); // Calling Footer

?>