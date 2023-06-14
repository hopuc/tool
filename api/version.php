<?php
/**
* Project: Hopuc Tool
* File: version.php
*
* @link https://hopuc.com
* @copyright 2023 Hopuc
* @author Hopuc <hopuc@outlook.com>
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
	'version' => '1.0.6',
	// 'server' => $_SERVER,
	'url' => [
		'https://cloud.hopuc.com/d/onedrive/%E5%BA%94%E7%94%A8/APP/OrepTool1.0.6.apk?sign=jExh4_oyTGmlAqceBDHsvuRRAXr31qJm7rkmRj3ZG1A=:0',
		'https://cloud.hopuc.com/d/123pan/Software/APP/OrepTool1.0.6.apk?sign=bvvPTRb1Pxlp0pEykg92kgoeQOocZMYd5Y0kCNhP9PM=:0',
		'https://cloud.hopuc.com/d/teambition/APP/OrepTool1.0.6.apk?sign=ozM9TlayuqBqxCbI_8p2SQmgjYKKIYKfnJmtQiMr6Mk=:0',
		'https://cloud.hopuc.com/d/jianguoyun/APP/OrepTool1.0.6.apk?sign=XB_t5DsOM9uCdSqm690dNbwB4LJPm9Iut1kObzPNrYc=:0',
		'https://cloud.hopuc.com/d/lanzou/Software/OrepTool1.0.6.apk?sign=4k-eJXToO6XJvii84Rb7XDiAFp6N7UhDqZQMjIeZDUg=:0',
		'https://cloud.hopuc.com/d/yandex/APP/OrepTool1.0.6.apk?sign=Vq350caanPTUjNzcIOKU7F8JPhi9cKlrep45drFF648=:0',
		'https://cloud.hopuc.com/d/xunlei/Software/APP/OrepTool1.0.6.apk?sign=NIRpsqtNT3AWcsgON-coIZntWxkAhF8WBvuLAqFsoVM=:0',
		'https://cloud.hopuc.com/d/baidu/Software/APP/OrepTool1.0.6.apk?sign=-pFMUh0EUxr7itQtXwchpyXnq89wa1RY5ZYRb-lBLuU=:0',
		// 'https://mp-91ba5704-d2b6-48e5-af7f-7a0ab635bff6.cdn.bspapp.com/cloudstorage/94fdbeab-9796-4f8f-89c0-043b7f1105dd.apk',
		'https://j66yd8-hopuc.oss.laf.run/OrepTool1.0.6.apk',
	]
);
echo json_encode($data,320);

?>