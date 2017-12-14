<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function author()
    {
        return $this->hasOne('App\User', 'id', 'user_id');
    }
}
