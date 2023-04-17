<?php

namespace dev;

class Debug
{
	/**
	 * Shows pretty data, with abort application option.
	 * 
	 * @param type $data
	 * @param bool $exit
	 */
	public static function Show($data, bool $exit = true): void
	{
		echo '<pre>';
		var_dump($data);
		echo '</pre>';
		if ($exit) exit;
	}
}
