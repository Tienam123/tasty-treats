<?php

use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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
Route::get('/',function () {
    return redirect('/home');
});


Route::get('/home', [HomeController::class,'index'])->name('home.index');
Route::get('/favorites', [FavoritesController::class,'index'])->name('favorites.index');

