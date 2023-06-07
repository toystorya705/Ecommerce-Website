<?php

include('common.php'); //Linking File
outputHead("checkout_confirm"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<div class="ordercontainer" id="main_div" > <!--Using same class or id for div or other tags because using same layout on most of the pages -->

    <h1>Checkout</h1>

    <div class="order" id="action_product">
   

        <div class="dashbutton"  >
            
    
            <button type="button" onclick="  window.location.replace('index.php')" style="margin-left: 100px;margin-left:1100px;background-color:darkorange">Home</button>
       <!--Location replace location to checkout page-->
        </div>

        <p class="messagebox" id="Result" style="font-weight: bold;"></p>

    </div>

   <p  >Your Order will be shipped in 24 hours.</p>
</div>


<script src="../JavaScript/checkout_info.js"></script>

<?php
outputFooter(); // Calling Footer

?>