<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class);

Route::group(['prefix' => 'administrator'], function (){
    Route::get('/masuk', [LoginController::class, 'index']);
    Route::post('/masuk', [LoginController::class, 'store']);
    Route::get('/keluar', [LoginController::class, 'logout']);

    Route::get('/', DashboardController::class);
});
