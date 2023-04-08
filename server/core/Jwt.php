<?php

namespace core;

/*
*                Header                    Payload                   Signature
* JWT = *************************.*************************.*************************
*/

/**
 * Class Jwt.
 * 
 * Encodes, decodes and signs our tokens.
 */
class Jwt
{
	private static $SECRET_KEY = '_LNP$.#,^2L9vG>}Hu3d8m`\Yzhz=2MH';

	/**
	 * Encodes our jwt given a payload.
	 */
	public static function Encode(array $payload): string
	{
		$header = [
			'typ' => 'JWT',
			'alg' => 'sha256'
		];

		$encodedHeader = self::base64url_encode(json_encode($header));
		$encodedPayload = self::base64url_encode(json_encode($payload));
		$encodedSignature = self::base64url_encode(self::Sign($encodedHeader, $encodedPayload));

		return "$encodedHeader.$encodedPayload.$encodedSignature";
	}

	/**
	 * Decodes token and validates it.
	 */
	public static function Decode(string $token): array | null
	{
		$tokenParts = explode('.', $token);

		if (count($tokenParts) !== 3) return null;

		$header = json_decode(self::base64url_decode($tokenParts[0]), true);
		$payload = json_decode(self::base64url_decode($tokenParts[1]), true);
		$signature = base64_decode($tokenParts[2]);


		$computedSignature = self::base64url_encode(self::Sign($tokenParts[0], $tokenParts[1]));

		return $computedSignature === $tokenParts[2] ? [$header, $payload, $signature] : null;
	}

	/**
	 * Signs a header and payload with our key.
	 * 
	 * @return string 
	 */
	private static function Sign(string $header, string $payload): string
	{
		return hash_hmac('sha256', "$header.$payload", self::$SECRET_KEY, true);
	}

	/**
	 * Url encoding
	 */
	private static function base64url_encode(string $data): string | bool
	{
		return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
	}

	/**
	 * Url decoding.
	 */
	private static function base64url_decode(string $data): string
	{
		return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
	}
}
