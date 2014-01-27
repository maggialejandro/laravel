<?php

class HomeController extends BaseController {

	public function index()
	{
		return View::make('hello');
	}

	public function showWelcome()
	{
		return View::make('hello');
	}

}