<?php

include('common.php'); //Linking File
outputHead("Order"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>

<!--Using same class or id for div or other tags because using same layout on most of the pages -->
<div class="ordercontainer" id="main_div">

  <h1>Orders</h1>

  <div class="order" id="action_product">
    <!--This create rows of order -->
  </div>

</div>

<script src="../JavaScript/order.js"></script>

<?php
outputFooter(); // Calling Footer

?>