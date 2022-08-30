<?php
$customer = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);
    require __DIR__ . '../vendor/autoload.php';

    //Create instance of MongoDB clients
    $mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    //Select a database
    $db = $mongoClient->ecommerce;

    //Select a collection 
    $collection = $db->products;

    //Add the new product to the database
    $insertResult = $collection->insertOne($customer);
   

    //Echo result back to user
    if ($insertResult->getInsertedCount() == 1) {
        echo 'Product added.';
        echo ' New document id: ' . $insertResult->getInsertedId();
       $criteria=[
           "search_keyword"=>"text" //creating search index
       ];
        $insertResult = $collection->createIndex($criteria);

    } else {
        echo 'Error adding customer';
    }
 
?>
