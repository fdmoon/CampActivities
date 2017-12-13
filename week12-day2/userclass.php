<?php

class User {
    public $first_name;
    private $last_name;
    private $email_address;
    public $profile_image;

    public static $created = 0;

    public function __construct($fname, $lname, $email, $image="default") {
        $this->first_name = $fname;
        $this->last_name = $lname;
        $this->email_address = $email;
        $this->profile_image = $image;

        self::$created += 1;

        echo "This is " . self::$created . "'th user.\n";
    }

    public function setProfileImage($image) {
        $this->profile_image = $image;
    }

    public function getFullName() {
        return "$this->first_name $this->last_name\n";
    }
}

$user = new User('Felix', 'Moon', 'daekeun.moon@gamil.com');

echo $user->getFullName();

echo User::$created . "\n";
echo $user->profile_image . "\n";

