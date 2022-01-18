<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server

$productdata = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// receiving/sending data

if (count($productdata) > 1) {
    echo $productdata["price"];
    print_r($productdata);
    $replaceCriteria = [
        "product_id" => $productdata["product_id"]
    ];


    //Replace product data for this ID
    $updateRes = $db->products->replaceOne($replaceCriteria, $productdata);

    //Echo result back to user
    if ($updateRes->getModifiedCount() == 1)
        echo 'Customer document successfully replaced.';
    else
        echo "not working";
} else {

    //Find all of the product that match  this criteria
    $cursor = $db->products->find($productdata);

    //Output each product as a JSON object with comma in between
    $jsonStr = '['; //Start of array of product in JSON

    //Work through the product
    foreach ($cursor as $product) {
        $jsonStr .= json_encode($product); //Convert PHP representation of product into JSON 
        $jsonStr .= ','; //Separator between product
    }

    //Remove last comma
    $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

    //Close array
    $jsonStr .= ']';

    //Echo final string
    echo $jsonStr;
}
