<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$product = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);

if ($product == "" || $product == "SORT") {
    if ($product == "") {

        //Find all of the products that match  this criteria
        $cursor = $db->products->find();
    } else {
        $filter = [];
        $options = ['sort' => ['price' => 1]];

        //Replace product data for this ID
        $cursor = $db->products->find($filter, $options);
    }

    //Output each product as a JSON object with comma in between
    $jsonStr = '['; //Start of array of products in JSON

    //Work through the products
    foreach ($cursor as $product) {
      
        $jsonStr .= json_encode($product); //Convert PHP representation of product into JSON 
        $jsonStr .= ','; //Separator between products
    }

    //Remove last comma
    $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

    //Close array
    $jsonStr .= ']';

    //Echo final string
    echo $jsonStr;
} else {
    $check = 0;

    foreach ($product as $key => $value) { //deleting product one by one


        $cursor = $db->products->deleteOne(

            ["product_id" => $value]

        );
        $check += $cursor->getDeletedCount();
    }

    if ($check == count($product)) {
        printf("Document deleted");
    } else {
        printf("Document not deleted");
 
    }
}

?>
