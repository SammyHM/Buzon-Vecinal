<?php

namespace core;

/**
 * Class Controller.
 * 
 * Controller parent.
 */
abstract class Controller
{
	public static function PageNotRegistered(): callable
	{
		return function () {
			echo json_encode(['response' => false, 'status' => 'PageNotRegistered']);
		};
	}
}
