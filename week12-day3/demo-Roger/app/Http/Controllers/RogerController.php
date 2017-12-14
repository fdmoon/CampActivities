<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RogerController extends Controller
{
    public function index(){
        //Before return 'Hello Roger!';
        return view('roger');
    }
}
