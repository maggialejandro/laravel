<?php

class HomeController extends BaseController {

	public function index()
	{
		return View::make('index');
	}

	public function showWelcome()
	{
		return View::make('hello');
	}

}