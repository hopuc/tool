<?php
/**
* Project: Hopuc Tool
* File: version.php
*
* @link http://hopuc.com
* @copyright 2022 Hopuc
* @author Hopuc <mail@hopuc.com>
* @version 1.0
* @date 2023-05-20
*
*/

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json;Charset=utf-8');

$data = array(
	'ip' => $ip,
	'time' => $time,
	'message' => '你还未保存任何内容',
	'version' => '1.0.4',
);
echo json_encode($data,320);


?>