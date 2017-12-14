<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'user_id' => rand(1,50)
    ];
});
