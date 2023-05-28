<?php
/**
* Project: Hopuc Tool
* File: version.php
*
* @link https://hopuc.com
* @copyright 2023 Hopuc
* @author Hopuc <mail@hopuc.com>
* @version 1.0
* @date 2023-05-20
*
*/

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json;Charset=utf-8');

$time = date("Y-m-d H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];
$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : $_SERVER['HTTP_HOST'];
// $referer = isset($_POST['referer']) ? trim($_POST['referer']) : (isset($_SERVER['HTTP_REFERER']) ? base64_encode($_SERVER['HTTP_REFERER']) : false);

$data = array(
	// 'ip' => $ip,
	// 'time' => $time,
	'success' => true,
	'message' => '版本获取成功',
	'version' => '1.0.5',
	// 'server' => $_SERVER,
	'url' => [
		'https://cloud.hopuc.com/d/onedrive/%E5%BA%94%E7%94%A8/APP/OrepTool1.0.5.apk?sign=uah6hsU33b2ImvlvrTf3--kJ3x43LcWquTYltVjt17g=:0',
		'https://cloud.hopuc.com/d/123pan/Software/APP/OrepTool1.0.5.apk?sign=HeyDoGDh0gttHTsnn3Fnx2gM9r9vRTd7B-636keDr6M=:0',
		'https://cloud.hopuc.com/d/teambition/APP/OrepTool1.0.5.apk?sign=UbpAeuGB8MjOABL4xt7LIMskTXgjJHjCUL70VdsnX2M=:0',
		'https://cloud.hopuc.com/d/jianguoyun/APP/OrepTool1.0.5.apk?sign=aTNuVfscjtLLPXT4zjqi3QHOb9l-1MPBuuo5OGxh46c=:0',
		'https://cloud.hopuc.com/d/lanzou/Software/OrepTool1.0.5.apk?sign=9JCihJK-QJRZg7N1dRMdUOGVVNrMkKDs5Lx0ZvakxBE=:0',
		'https://cloud.hopuc.com/d/yandex/APP/OrepTool1.0.5.apk?sign=UVG6d9YEAcuhfEKTo3-xhox0Pq81vHkuM16bscDpxs4=:0',
		'https://cloud.hopuc.com/d/xunlei/Software/APP/OrepTool1.0.5.apk?sign=hrWfFgd3edR8EYhGQ_-iWG_KC-Fnk_QiKticvlssfF0=:0',
		'https://mp-91ba5704-d2b6-48e5-af7f-7a0ab635bff6.cdn.bspapp.com/cloudstorage/94fdbeab-9796-4f8f-89c0-043b7f1105dd.apk',
	]
);
echo json_encode($data,320);

?>