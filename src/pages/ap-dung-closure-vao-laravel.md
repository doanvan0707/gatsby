---
title: "Áp dụng closure vào laravel"
date: "2020-9-03"
---

#### Query data

$someVariable = 1;

DB::table('users)
  ->where('name', 'john')
  ->orWhere(function($query) use ($someVariable) {
    $query->where('votes', '>', '$someVariable')
          ->where('title', '<>', 'Admin');
  })->get();
