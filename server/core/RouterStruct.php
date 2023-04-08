<?php

namespace core;

/**
 * Class RouterStruct.
 * 
 * Data structure for our application routes.
 */
class RouterStruct
{
    /**
     * Returns a pointer to router instance type GET.
     */
    public static function Get(string $path, string $callback): object
    {
        return self::RouterData('GET', $path, $callback);
    }

    /**
     * Returns a pointer to router instance type POST.
     */
    public static function Post(string $path, string $callback): object
    {
        return self::RouterData('POST', $path, $callback);
    }

    /**
     * Returns a pointer to router instance type PUT.
     */
    public static function Put(string $path, string $callback): object
    {
        return self::RouterData('PUT', $path, $callback);
    }

    /**
     * Returns a pointer to router instance type DELETE.
     */
    public static function Delete(string $path, string $callback): object
    {
        return self::RouterData('DELETE', $path, $callback);
    }

    /**
     * Returns a pointer to router data structure.
     */
    private static function RouterData(string $method, string $path, string $callback): object
    {
        return new class($method, $path, $callback)
        {
            public string $method;
            public string $path;
            public string $callback;

            public function __construct(string $method, string $path, string $callback)
            {
                $this->method = $method;
                $this->path = $path;
                $this->callback = $callback;
            }
        };
    }
}
