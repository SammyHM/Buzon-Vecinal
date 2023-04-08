<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

header("Content-type: application/json");

use core\Application;
use core\RouterStruct;

use app\controllers\PublicController;
use app\controllers\UserController;
use app\controllers\AdminController;

require_once '../autoloader.php';

$app = new Application();

$app->group(PublicController::class, [
	RouterStruct::Post('/login/user', 'LoginUser'),
	RouterStruct::Post('/login/admin', 'LoginAdmin'),
	RouterStruct::Get('/vecinos', 'ListVecinos'),
	RouterStruct::Post('/buzones', 'InsertCorreo')
]);

$app->group(UserController::class, [
	RouterStruct::Get('/buzones', 'ListCorreos'),
	RouterStruct::Delete('/buzones/:id', 'DeleteCorreo')
]);

$app->group(AdminController::class, [
	RouterStruct::Get('/admin/vecinos', 'ListVecinos'),
	RouterStruct::Post('/vecinos', 'InsertVecino'),
	RouterStruct::Put('/vecinos/:id', 'UpdateVecino'),
	RouterStruct::Delete('/vecinos/:id', 'DeleteVecino')
]);

$app->Run();
