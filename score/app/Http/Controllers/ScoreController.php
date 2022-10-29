<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScoreController extends Controller
{
    public function store(Request $request)
    {
        $username = $request->username;
        $score = $request->score;

        DB::table('score')->insert([
            'username' => $username,
            'score' => $score
        ]);

        return response()->json([
            'score' => $score,
            'username' => $username,
            'success' => true,
            
        ]);
    }
}