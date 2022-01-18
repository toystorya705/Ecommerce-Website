<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
//Create instance of MongoDB client
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

$productdata = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);//receiving product id

$cursor = $db->products->find($productdata);


//Output each products as a JSON object with comma in between
$jsonStr = '['; //Start of array of products in JSON

//Work through the products
foreach ($cursor as $product){

    $jsonStr .= json_encode($product);//Convert PHP representation of products into JSON 
    $jsonStr .= ',';//Separator between products
}

//Remove last comma
$jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

//Close array
$jsonStr .= ']';

//Echo final string
echo $jsonStr;

