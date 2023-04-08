<?php

namespace core;

/**
 * Class Router.
 * 
 * Contains application routes.
 * 
 * @property array $routes Stores all defined paths and it's suported methods.
 */
class Router
{
	private array $routes;

	public function __construct()
	{
		$this->routes = [
			'GET' => [],
			'POST' => [],
			'PUT' => [],
			'DELETE' => []
		];
	}

	/**
	 * Adds a callback to a given route.
	 */
	public function add(string $method, string $path, array $callback): void
	{
		$this->routes[$method][$path] = $callback;
	}

	/**
	 * Getter routes
	 */
	public function routes(): array
	{
		return $this->routes;
	}
}
