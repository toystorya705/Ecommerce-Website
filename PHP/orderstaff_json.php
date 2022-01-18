<?php

require __DIR__ . '../vendor/autoload.php';

//Create instance of MongoDB clients
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

$orders = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);

if($orders==3490){
        $cursor = $db->customers_orders->find();

    //Output each customer as a JSON object with comma in between
    $jsonStr = '['; //Start of array of customers in JSON

    //Work through the customers
    foreach ($cursor as $customer) {
      
        $jsonStr .= json_encode($customer); //Convert PHP representation of customer into JSON 
        $jsonStr .= ','; //Separator between customers
    }

    //Remove last comma
    $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

    //Close array
    $jsonStr .= ']';
    echo $jsonStr;
    //Echo final string
}else{

    $check = 0;

    foreach ($orders as $key => $value) {


        $cursor = $db->customers_orders->deleteOne(

            ["product_id" => $value]

        );
        $check += $cursor->getDeletedCount();
    }

    if ($check == count($orders)) {// checking order deleted correctly
        printf("Document deleted");
    } else {
        printf("Document not deleted");
      
    }
    
}
?>