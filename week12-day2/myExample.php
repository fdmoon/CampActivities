<?php

echo "the first command-line argument is .\n";

echo str_repeat("=", 20) . "\n";

$associative_arr = [
    "Moon" => ["Felix", 40],
    "Last" => ["First", 10]
];

foreach($associative_arr as $last_name => $data) {
    treatName("$data[0] $last_name");
    treatAge($data[1]);
    echo str_repeat("=", 20) . "\n";
}

function treatName($full_name) {
    echo "My name is $full_name.\n"; 
    
    if(strlen($full_name) > 12) {
        echo "It's a long name\n";
    }
    else {
        echo "It's a short name\n";
    }
}

function treatAge($age) {
    echo "I'm $age years old.\n";
    
    if($age > 21) {
        echo "Sake! Sake! Sake!\n";
    }
    elseif($age < 21) {
        echo "No Sake for me :(\n";
    }
    else {
        echo "Just slipped by! Sake! Sake! Sake!\n";
    }
}

