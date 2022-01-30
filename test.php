<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';

$client = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

$db = $client->ecommerce;

