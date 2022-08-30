<?php

include('commonstaff.php'); //Linking File
outputHead("dashboardstaff"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<div class="logsinform">
    <!--Login Box-->
    <form method="post">
        <img src="../IMG/userimage.png" alt="userimage">
        <input type="email" id="mailusrid" placeholder="Username"  size="30" pattern=".+@gmail.com" required>
        <input type="password" id="password" placeholder="Password">
        <button type="button" onclick="checkUser()" name="login">Login</button>
    </form>
</div>

<p class="messagebox" id="Result" style="font-weight: bold;"></p>
<!--Message Box-->


<script src="../JavaScript/staff_login.js"></script>


<?php
outputFooter(); // Calling Footer

?>