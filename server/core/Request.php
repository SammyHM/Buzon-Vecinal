<?php

namespace core;

/*
 *         Method               Uri
 * [GET|POST|PUT|DELETE]:https://path?query
 */

/**
 * Class Request.
 * 
 * Helper functions for everything related to server request.
 */
class Request
{
	/**
	 * Returns request method.
	 */
	public static function Method(): string
	{
		return $_SERVER['REQUEST_METHOD'];
	}

	/**
	 * Returns request uri.
	 */
	public static function Uri(): array | string | int | false | null
	{
		return parse_url($_SERVER['REQUEST_URI']);
	}

	/**
	 * Returns request path.
	 */
	public static function Path(): string
	{
		return self::Uri()['path'];
	}

	/**
	 * Returns request query.
	 */
	public static function Query(): string | null
	{
		return self::Uri()['query'] ?? null;
	}

	/**
	 * Returns request body.
	 */
	public static function Body(): array | null
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	/**
	 * Returns request authorization.
	 */
	public static function Auth(): string | null
	{
		return $_SERVER['HTTP_AUTHORIZATION'] ?? null;
	}

	/**
	 * Sets http response code
	 */
	public static function SetResponse(int $code): void
	{
		http_response_code($code);
	}

	/**
	 * Searches for requested route in routes
	 * 
	 * @return array|null Returns callback if matched
	 */
	public static function Match(array $routes): array | null
	{
		$callback = null;

		$requestPath = Request::Path();
		$requestMethod = Request::Method();

		foreach ($routes[$requestMethod] as $path => $function) {
			$explodedPath = explode(':', $path);

			$basePath = $explodedPath[0];
			$paramsName = $explodedPath[1] ?? null;

			$regexString = $basePath . ($paramsName ? '.+' : '');
			$regexString = str_replace('/', '\/', $regexString);

			$regex = "/^$regexString$/";

			if (preg_match($regex, $requestPath)) {
				$callback = [
					'function' => $function,
					'params' => $paramsName ? [substr($requestPath, strlen($basePath))] : []
				];
				break;
			}
		}

		return $callback;
	}
}
