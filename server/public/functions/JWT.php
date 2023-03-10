<?php

    class JWT
    {

        private static $SECRET_KEY = 'my-secret-key';

        static function encode(array $payload = []) {
            // Define the JWT header and payload
            $header = [
                'typ' => 'JWT', // JWT token type
                'alg' => 'sha256' // HMAC-SHA256 algorithm
            ];

            // Encode the JWT header and payload using Base64
            $encodedHeader = base64_encode(json_encode($header));
            $encodedPayload = base64_encode(json_encode($payload));

            // Concatenate the encoded header and payload with a period separator
            $token = $encodedHeader . '.' . $encodedPayload;

            // Generate a digital signature using HMAC-SHA256 and a secret key
            $signature = hash_hmac('sha256', $token, self::$SECRET_KEY, true);

            // Encode the signature using Base64
            $encodedSignature = base64_encode($signature);

            // Concatenate the encoded signature with the token using a period separator
            $jwtToken = $token . '.' . $encodedSignature;

            // Return the JWT token
            return $jwtToken;
        }

        static function decode($token) {
            // Split the token into its three parts
            $tokenParts = explode('.', $token);

            $header = json_decode(base64_decode($tokenParts[0]), true);
            $payload = json_decode(base64_decode($tokenParts[1]), true);
            $signature = base64_decode($tokenParts[2]);

            // Validation
            $computedSignature = base64_encode(hash_hmac('sha256', $tokenParts[0].".".$tokenParts[1], self::$SECRET_KEY, true));

            return $computedSignature === $tokenParts[2] ? array($header, $payload, $signature) : false;
        }
    }

?>