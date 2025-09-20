<?php
// Logic Interview: Find the first non-repeating character in a string

function firstNonRepeatingChar($str) {
    $charCount = [];
    $length = strlen($str);

    // Count occurrences of each character
    for ($i = 0; $i < $length; $i++) {
        $char = $str[$i];
        if (isset($charCount[$char])) {
            $charCount[$char]++;
        } else {
            $charCount[$char] = 1;
        } 
    }

    // Find the first character with count 1
    for ($i = 0; $i < $length; $i++) {
        if ($charCount[$str[$i]] === 1) {
            return $str[$i];
        }
    }

    return null; // No non-repeating character found
}

// Example usage
$input = "logicinterview";
$result = firstNonRepeatingChar($input);
echo "First non-repeating character: " . ($result ?? "None");