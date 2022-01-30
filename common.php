<?php

//Ouputs the header for the page and opening body tag
function outputHead($title) //Header Function
{
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>'; //title;
    echo '<!-- Link to external style sheet -->';
    // Calling Stylesheet

   echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta charset="utf-8">
   <link rel="shortcut icon" href="/assets/favicon.ico">';
    echo '<link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet">'; //Font 
    echo '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">';

    echo '<script  src="../JavaScript/common.js"></script>

    <script type="module" src="../JavaScript/save_recommendation.js"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1460719726713266"
     crossorigin="anonymous"></script>';
    echo '</head>';
    echo '<body>';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name letiable */
function outputNavigation($pageName) //Navigation Function
{
    //Output banner and first part of navigation


    echo '<div class="navbar">';

    echo '<div class="logo">
            <img src="../IMG/Logo3.png" alt="Logo">
        </div>';

    //Array of pages to link to
    $linkNames = array("Home", "Categories", "About", "Contact Us", "Account");
    $linkAddresses = array("index.php", "", "About.php", "contactUs.php", "#");
    echo '<ul>';
    //Output navigation bar
    for ($x = 0; $x < count($linkNames); $x++) { //For Loop for active class 
        echo '<li>';
        echo '<a ';
        if ($linkNames[$x] == $pageName) {
            echo 'class="active" ';
        }

        if ($linkNames[$x] == $linkNames[4]) { // set id if page match, this is used for login session
            echo '
            href="' . $linkAddresses[$x] . '">' . $linkNames[$x] .
                '</a>' . '<ul id= dropmenu>' .
                '<li><a onclick="customer_info_page()" style="cursor:pointer;"> Profile </a></li>'.
                '<li><a onclick="order_page()" style="cursor:pointer;"> Orders </a></li>'  .
                '<li  ><a id="login" href="Login.php" >Login/SignUp</a></li>' . '</ul>' . '</li>';//Creating Dropdown Menu
        } else if ($linkNames[$x] == $linkNames[1]) { 
            echo '
            >' . $linkNames[$x]  . '</a>'

                . '<ul id= dropmenu>' .
                '<li><a href="#"> Woman </a></li>'  .  //Creating Dropdown Menu
                '<li><a href="#"> Men </a></li>' .
                '<li><a href="#"> Kids </a></li>'  . '</ul>'  . '</li>';
        } else {
            echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x]  . '</a>' . '</li>';
        }
    } // for loop
    echo '</ul> <div class="cart"></div>';

    echo '<div class="cartimg">
    <div class="cart_number_div">
    <p id="cart_number">0</p>
    </div>
   <a onclick="cart_click()" style=" cursor: pointer;"> <img src="../IMG/cart.png" alt="Logo"></a> 
 
</div>
';

// Page Banner and button
    echo ' 
<div class="searchbar">

    <div class="magnifineicon">
       <a id="click_search"> <img src="../IMG/magnifineicon.png" alt="Logo"></a>  
    </div>
     
    <input id="searcfield" type="text" placeholder="Search"></input>

 </div>';

    echo '</div>';

    echo '<link rel="stylesheet" type="text/css" href="../CSS/style.css">';
}


function outputFooter() //Footer Function
{
    echo '<footer>';

    echo '<span> Footer</span>';
    echo '</footer>';
    echo '</body>';
    echo '</html>';
}
