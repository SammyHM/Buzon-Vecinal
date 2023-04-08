<?php

namespace core;

use core\DataBase;
use core\Router;

/**
 * Class Application.
 */
class Application
{
	private Router $router;

	public function __construct()
	{
		$this->router = new Router();
		DataBase::Init("db", "buzon_vecinal", "admin", "admin");
	}

	/**
	 * Adds a list of routes corresponding to a given controller.
	 */
	public function group(string $className, array $routeList): void
	{
		foreach ($routeList as $route) {
			$this->router->add($route->method, $route->path, array($className, $route->callback));
		}
	}

	/**
	 * Executes page function if requested route is defined
	 */
	public function run(): void
	{
		if ($callback = Request::Match($this->router->routes())) {
			call_user_func_array($callback['function'], $callback['params']);
		} else {
			Request::SetResponse(404);
		}
		DataBase::Close();
	}
}
