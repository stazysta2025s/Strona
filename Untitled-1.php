<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $ip = $_SERVER['REMOTE_ADDR'];
    $os = $data['os'];
    $timestamp = $data['timestamp'];

    $logEntry = "IP: $ip | OS: $os | Czas: $timestamp\n";

    file_put_contents('log.txt', $logEntry, FILE_APPEND);
}
?>