<?php

include('common.php'); //Linking File
outputHead("Poducts"); // Calling Header Portion
outputNavigation(""); // Calling Navigation Bar
?>
<!--Using same class or id for div or other tags because using same layout on most of the pages -->
<div class="ordercontainer" id="main_div" style="padding-bottom:10px;height:20vh;margin-top:-20px;"><!--This create box of products  -->

    <h1>Products</h1>

    <div class="order" id="action_product" style="margin-top:-20px;">
   

        <div class="dashbutton" style="margin-left: 100px;" >
            
            <button type="button" onclick="sort_data('ascending')">Ascending SORT</button>
            <button type="button" onclick="sort_data('descending')">Descending SORT</button>
            <button type="button" onclick="sort_data('A-Z')">A-Z</button>
            <button type="button" onclick="sort_data('Z-A')" >Z-A</button>
        </div>


    </div>

</div>
<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1460719726713266"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1460719726713266"
     data-ad-slot="5408601169"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> --> 


<div class="products" id="productid" style="margin-top:-100px;padding-bottom:30px;"><!--This create pruducts card-->
       <!-- Products Data -->
    
       </div>
    
<script  src="../JavaScript/products.js"></script>


<?php
outputFooter(); // Calling Footer

?>