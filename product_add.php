<?php

include('commonstaff.php'); //Linking File
outputHead("addproduct"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar

?>


<div class="displayproduct">
    
<!--Using same class or id for div or other tags because using same layout on most of the pages -->

    <div class="product1">


        <div class="image_drop">
            <span class="drop-zone__prompt">Drop file here or click to upload</span>
            <input type="file" name="myFile" class="drop-zone__input">
        </div>

        <div class="data" >
            <p class="messagebox" id="Result" style="font-weight: bold; font-size:20px;"></p>
            <input type="text" id="product_heading" style="background-color: #fff;" placeholder="Example: Nike Men Footwear"></input>

            <div class="rating" style="margin-top: 20px;">
                <!-- Creating Rating -->

                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>

            </div>

            <input type="number" id="detail1" placeholder="£30"></input>
            <input type="number" contentEditable="true" id="product_stock" style="background-color: #fff;font-size: 20px;" placeholder="Please enter stock(this will not displayed to customer)"></input>
            <input contentEditable="true" id="product_style" style="background-color: #fff;font-size: 20px;" placeholder="Please enter product style(this will not displayed to customer)"></input>
            <input contentEditable="true" id="search_keyword" style="background-color: #fff;font-size: 20px;" placeholder="Please enter product search keyword(this will not displayed to customer)"></input>
            <!-- Product Description -->

            <textarea id="add_product_description" class="detail2" style="background-color: #fff;" placeholder="Example: The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most-tested shoes, designed to help you feel the potential when your foot hits the pavement. "></textarea>
            <div class="button">

                <button onclick="product_add()" type="button"> ADD PRODUCT</button>
                <button onclick="reset_data()" type="button">RESET</button>
            </div>

        </div>
    </div>
</div>

<script src="../JavaScript/product_add.js"></script>

<?php
outputFooter(); // Calling Footer

?>