<?php

// $mahasiswa = [
//     [
//         "nama" => "Slamet Mulyadi",
//         "nim" => "3984634",
//         "Semester" => 2
//     ],
//     [
//         "nama" => "Denny setiawan",
//         "nim" => "98563",
//         "Semester" => 7
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=nomads', 'root', 'root');
$db = $dbh->prepare('SELECT * FROM galleries');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;