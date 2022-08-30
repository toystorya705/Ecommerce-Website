<?php

include('common.php'); //Linking File
outputHead("Profile"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<div class="ordercontainer" id="main_div" style="height: 72vh;">
<!--Using same class or id for div or other tags because using same layout on most of the pages -->
      <!--This create rows of data -->

    <h1>Profile</h1>

    <div class="order" id="action_product">

        <p class="messagebox" id="Result" style="font-weight: bold;"></p>

    </div>
    <!--Customer info form-->
    <div class="infodiv">
        <div class="checkout_page_input1">
            <p>Name</p>
            <input id="name" type="text"></input>
            <p>Email</p>
            <input id="email" type="text"></input>
            <p>Password</p>
            <input id="password" type="text"></input>
            <p>Phone</p>
            <input id="phone" type="text"></input>
        </div>

        <div class="checkout_page_input2">
            <p>Address 1</p>
            <input id="address_1" type="text"></input>
            <p>Address 2</p>
            <input id="address_2" type="text"></input>
            <p>PostCode</p>
            <input id="postcode" type="text"></input>

        </div>
    </div>

    <div class="button" id="button_a">

        <button onclick="update_customer_data()" type="button"> SAVE CHANGES</button>
        <button onclick="reset_data()" type="button">RESET</button>
    </div>
</div>






<script src="../JavaScript/customer_info.js"></script>

<?php
outputFooter(); // Calling Footer

?>