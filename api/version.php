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

$time = date("Y-m-d H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];

$data = array(
	'ip' => $ip,
	'time' => $time,
	'success' => true,
	'message' => '版本获取成功',
	'version' => '1.0.4',
	'url' => ['https://cloud.hopuc.com/d/onedrive/%E5%BA%94%E7%94%A8/APP/OrepTool1.0.3.apk?sign=GUZXivc4dQJPLgOicDqcUUvAQn8msV_Z-_OTt5qEdwk=:0','https://cloud.hopuc.com/d/aliyundrive/Software/APP/OrepTool1.0.3.apk?sign=-PybcvCxRrvXCBzjayh4QBtjIoBQpWxdL8vuyzyDIk4=:0','https://cloud.hopuc.com/d/123pan/Software/APP/OrepTool1.0.3.apk?sign=m_TXfhPBvcHVyyEkIx9DXKhUbf2gkdz6iBlocNovdVM=:0','https://cloud.hopuc.com/d/lanzou/Software/OrepTool1.0.3.apk?sign=vlI10phCtVgk7vwxYyZMrOHHQd51JJ9x_wRv3mEzmEM=:0']
);
echo json_encode($data,320);

?>