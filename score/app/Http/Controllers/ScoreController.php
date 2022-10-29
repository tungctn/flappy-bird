<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
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
            'score' => $score,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        return response()->json([
            'score' => $score,
            'username' => $username,
            'success' => true,

        ]);
    }
}