<?php

include('./common.php'); //Linking File
outputHead("Home"); // Calling Header Portion
outputNavigation("Home"); // Calling Navigation Bar
?>


<div class="bannerVideo">
    <!--This create video background-->

  <video autoplay muted loop>
      <source src="../Mp4/ad1.mp4" type="video/mp4">
    </video> 

</div>



<div class="home">

    <a id="explorebutton" href="./products.php">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Explore ></a>
    <!--Transition-->

</div>

<div class="products" id="productid" style="margin-top:600px;"><!--This create products card-->
       <!-- Products Data card -->
    
       </div>

<script src="../JavaScript/index.js"></script>

<?php
outputFooter(); // Calling Footer

?>