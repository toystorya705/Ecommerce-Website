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


    echo '<script src="../JavaScript/common_staff.js"></script>';
    echo '<link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet">'; //Font 
    echo '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">';

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
    $linkNames = array("Dashboard", "Orders", "help", "Account");
    $linkAddresses = array("dashboardstaff.php", "orderstaff.php",  "contactUs.php", "#");
    echo '<ul>';
    //Output navigation bar
    for ($x = 0; $x < count($linkNames); $x++) { //For Loop for active class 
        echo '<li>';
        echo '<a ';
        if ($linkNames[$x] == $pageName) {
            echo 'class="active" ';
        }

        if ($linkNames[$x] == $linkNames[3]) { // set id if page match, this is used for login session
            echo '
            href="' . $linkAddresses[$x] . '">' . $linkNames[$x] .
                '</a>' . '<ul id= dropmenu>'   .
                '<li  ><a id="login" href="../PHP/staff_login.php" >Login/SignUp</a></li>' . '</ul>' . '</li>'; //Creating Dropdown Menu
        } else if ($linkNames[$x] == $linkNames[1]) {
            echo '
           id="orderstaffbutton" href="../PHP/staff_login.php ">' . $linkNames[$x]  . '</a>' . '</li>';
        }
        else if ($linkNames[$x] == $linkNames[0])
        {
            echo ' id="dashboardbutton" href="../PHP/staff_login.php ">' . $linkNames[$x]  . '</a>' . '</li>';
        } 
        else {
            echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x]  . '</a>' . '</li>';
        }
    } // for loop
    echo '</ul>';

    echo '<div class="cartimg">
   <a href="#"> <img src="../IMG/cart.png" alt="Logo"></a>
</div>';

    // Page Banner and button
    echo ' 
<div class="searchbar">

    <div class="magnifineicon">
       <a href="#"> <img src="../IMG/magnifineicon.png" alt="Logo"></a>  
    </div>
     
    <input id="searcfield" placeholder="Search"></input>

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
