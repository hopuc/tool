<?php
/**
* Project: Hopuc Tool
* File: concentration.php
*
* @link http://hopuc.com
* @copyright 2022 Hopuc
* @author Hopuc <mail@hopuc.com>
* @version 1.0
* @date 2022-06-12
*
*/

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json;Charset=utf-8');

// $file = 'data/concentration.json';

$date = date("Y-m-d");
$shift = date("Ymd").(date("H")>7&&date("H")<19?'d':'n');
$time = date("Y-m-d H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];
// $filename = '../data/statistics/'.$date.$shift.'.json';
	
if(isset($_POST['data'])){
	
	$filename = $_POST['file_name'];
	$content = array(
		'ip' => $ip,
		'name' => $filename,
		'date' => $date,
		'time' => $time,
		'ua' => $ua,
		'data' => $_POST['data'],
	);
	
	$json = json_encode($content,320);
	
	/* $file = fopen('note.json','w+');
	fwrite($file,$json);
	fclose($file); */
	file_put_contents('../data/statistics/'.$filename.'.json',$json);
	
	$result = array(
		'success' => true,
		'message' => '保存成功',
		'name' => $filename,
		'data' => $content,
	);
	echo json_encode($result,320);
}else{
	$filename = isset($_GET['file_name'])?$_GET['file_name']:$shift;
	$json_string = @file_get_contents('../data/statistics/'.$filename.'.json');
	if($json_string==null||$json_string==''){
		$content = array(
			'ip' => $ip,
			'name' => $filename,
			'date' => $date,
			'time' => $time,
			'message' => '你还未保存任何内容',
			'data' => [],
		);
		echo json_encode($content,320);
	}else{
		echo $json_string;
	}
}
?>