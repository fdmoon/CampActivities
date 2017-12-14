<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Post;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/roger', 'RogerController@index');

// Route::get('/posts', function(){
//     // Give me all my posts
//     return Post::all();
// });

Route::resource('/posts', "PostsController");

// Route::get('/posts', function(){
//    $posts = Post::all();
//    return view('posts.index')->with('posts', $posts);
// });

// // Route::get('/post/{post}',function($post){
// //     var_dump($post);
// // });

// Route::get('/posts/{post}',function($post){
//     $thePost = Post::find($post);
//     return $thePost;
// });
