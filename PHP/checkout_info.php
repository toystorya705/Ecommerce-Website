<?php

include('common.php'); //Linking File
outputHead("checkout_info"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<div class="ordercontainer" id="main_div" > <!--Using same class or id for div or other tags because using same layout on most of the pages -->

    <h1>Checkout</h1>

    <div class="order" id="action_product">
   

        <div class="dashbutton"  >
            
    <!--calling function -->

            <button type="button" onclick="perform_tasks()" style="margin-left: 100px;margin-left:1100px;background-color:darkorange">Checkout</button>
        </div>

        <p class="messagebox" id="Result" style="font-weight: bold;"></p>

    </div>
<!--Taking Inputs -->
    <div class="checkout_page_input1"  >
    <p>Name</p>
    <input id="name"  type="text"></input>
    <p>Address 1</p>
    <input  id="address_1" type="text"></input>
    </div>
    <div class="checkout_page_input2" >
    <p>Address 2</p>
    <input id="address_2"  type="text"></input>
    <p>PostCode</p>
    <input id="postcode"  type="text"></input>
    </div>
</div>




<script src="../JavaScript/checkout_info.js"></script>

<?php
outputFooter(); // Calling Footer

?>