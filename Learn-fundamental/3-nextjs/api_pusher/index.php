<?php
require __DIR__ . '/vendor/autoload.php';//Define Key pusher
define('APP_KEY','332116290f279cf76db1');
define('APP_SECRET','50eedbd7523fee3817c7');
define('APP_ID','1544032');
//make object of pusher



  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL,'https://jsonplaceholder.typicode.com/photos/?_limit=10');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  $result = json_decode($response);
 // $data['message'] = $vlue;
 
 
 
$pusher = new  Pusher\Pusher(
    APP_KEY,
    APP_SECRET,
    APP_ID,
    [
        'cluster'   =>'ap1',
        'encrypted' => true
    ]
);

  $pusher->trigger('end-milk-4','my-event',$result);
  header("Content-Type: application/json");

  echo json_encode($result);
  exit();