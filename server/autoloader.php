<?php

  spl_autoload_register(function (string $className): void {
    $path = __DIR__.'/'.str_replace('\\', '/', $className).'.php';
    if (file_exists($path)) {
      include_once $path;
    } else {
      echo "The file $path does not exist";
      exit;
    }
  });
