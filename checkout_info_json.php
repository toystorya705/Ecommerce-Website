<?php

session_start();//Starting session

require __DIR__ . '../vendor/autoload.php';

//Create instance of MongoDB clients
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

$command = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// receiving command and data
echo $command["command"];
echo json_encode($command);
if ($command["command"] == 5600) {
    unset($command["command"]);//removing command from data
    $productdata = [
        '$set' => $command//data to updata
    ];

    $replacecriteria = [
        "customer_id" => $_SESSION["loggedInUserEmail"]

    ];
    //Replace customer data for this ID
    $updateRes = $db->customers->updateOne($replacecriteria, $productdata);

} else if ($command["command"] == 7000) {
    unset($command["command"]);//removing command from data
    $criteria = [
        "customer_id" => $_SESSION["loggedInUserEmail"]
    ];


    $merge = array_merge($command, $criteria);
    $insertResult = $db->customers_orders->insertOne($merge);
} else {

    $cursor = $db->cart->deleteMany(//Deleting cart items

        ["customer_id" => $_SESSION["loggedInUserEmail"]]

    );
}

?>