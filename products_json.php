<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$product = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// getting or sending data

    if ($product == 4000) {

        //Find all of the products that match  this criteria
        $cursor = $db->products->find();
    }else if($product == "ascending"){
        $filter = [];
        $options = ['sort' => ['price' => 1]];

          //Find all of the products that match  this criteria
        $cursor = $db->products->find($filter, $options);
    }else if($product == "descending"){
        $filter = [];
        $options = ['sort' => ['price' => -1]];

          //Find all of the products that match  this criteria
        $cursor = $db->products->find($filter, $options);
    }else if($product == "A-Z"){
        $filter = [];
        $options = ['sort' => ['heading' => 1]];

          //Find all of the products that match  this criteria
        $cursor = $db->products->find($filter, $options);
    }else if($product=="Z-A"){
        $filter = [];
        $options = ['sort' => ['heading' => -1]];

          //Find all of the products that match  this criteria
        $cursor = $db->products->find($filter, $options);
    } else if ($product["command"]==3902){

        $findCriteria = [
            '$text' => [ '$search' => $product["search_data"] ] 
         ];
         $cursor = $db->products->find($findCriteria);
      
    }


    //Output each products as a JSON object with comma in between
    $jsonStr = '['; //Start of array of products in JSON

    //Work through the products
    foreach ($cursor as $products) {
        $jsonStr .= json_encode($products); //Convert PHP representation of products into JSON 
        $jsonStr .= ','; //Separator between products
    }

    //Remove last comma
    $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

    //Close array
    $jsonStr .= ']';

    //Echo final string
    echo $jsonStr;

    ?>