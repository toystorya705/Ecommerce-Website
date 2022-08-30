<?php

include('commonstaff.php'); //Linking File
outputHead("orderstaff"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>
<!--Using same class or id for div or other tags because using same layout on most of the pages -->

<div class="ordercontainer" id="main_div">
    <!--This create rows of cudtomer order-->

    <h1>Customers Orders</h1>

    <!--Products Data-->


    <div class="order" >
    <input type="checkbox" class="useragg"  name="CheckAll" onclick="SelectAll()">
       

        <p class="selectall">Select All</p>

        <div class="dashbutton">
            
            <button type="button" onclick="delete_edit_product('DELETE')" style="margin-left: 800px;">Delete Order</button>
            
        </div>


    </div>




</div>


<script src="../JavaScript/orderstaff.js"></script>

<?php
outputFooter(); // Calling Footer

?>