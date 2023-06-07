<?php

include('commonstaff.php'); //Linking File
outputHead("dashboardstaff"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<!--Using same class or id for div or other tags because using same layout on most of the pages -->
<p class="messagebox" id="Result" style="font-weight: bold;"></p>
<div class="ordercontainer" id="main_div"><!--This create rows of products which can be add/modify -->

    <h1>Dashboard</h1>

    <div class="order" id="action_product">
        <input type="checkbox" class="useragg"  name="CheckAll" onclick="SelectAll()">
       

        <p class="selectall">Select All</p>

        <div class="dashbutton">
            <button type="button" onclick="window.location.href='../PHP/product_add.php'">Add Product</button>
            <button type="button" onclick="delete_edit_product('EDIT')">Edit Product</button>
            <button type="button" onclick="delete_edit_product('DELETE')">Delete Product</button>
            <button type="button" onclick="displaydata('','SORT')">Sort</button>
        </div>


    </div>

</div>


<script src="../JavaScript/dashboardstaff.js"></script>
<?php
outputFooter(); // Calling Footer

?>