<?php

include('common.php'); //Linking File
outputHead("productdisplay"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>



<div class="displayproduct">
    <!--This create produc tview page-->

    <div class="product1">

    <p class="messagebox" id="Result" style="font-weight: bold;"></p>
        <img id="img_product" >


        <div class="data">
            <p id="product_heading"></p>

            <div class="rating">
                <!-- Creating Rating -->

                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>

            </div>
            <p id="detail1"></p>

            <!-- Product Description -->
            <p id="product_description"></p>

            <div class="displayproduct_button" >

                <button id="diplay_buy" type="button"> BUY NOW</button>
              <button id="display_add_to_cart" onclick="" type="button"> ADD TO CART</button>
            </div>

        </div>
    </div>
</div>

<script src="../JavaScript/productdisplay.js"></script>
<?php
outputFooter(); // Calling Footer

?>