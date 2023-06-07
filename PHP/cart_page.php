<?php
include('common.php'); //Linking File
outputHead("Cart"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>
<!--Using same class or id for div or other tags because using same layout on most of the pages -->
<div class="ordercontainer" id="main_div" ><!--This create rows of data -->

    <h1>Cart</h1>

    <div class="order" id="action_product">
   

        <div class="dashbutton"  >   
            <button type="button" onclick='window.location.href="checkout_info.php"' style="margin-left: 100px;margin-left:1100px;background-color:darkorange">Checkout</button>
        </div>
        <!--changing page location to checkout -->


    </div>

</div>


<script src="../JavaScript/cart_page.js"></script>

<?php
outputFooter(); // Calling Footer

?>