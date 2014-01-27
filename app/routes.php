<?php

Route::get('/', 'HomeController@index');

Route::get('/user/{name}', function($username)
{
	var_dump('hola '.$username);
	#return View::make('hello');
});