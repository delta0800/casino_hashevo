<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2021_04_20_000000_create_multiplayer_games_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('multiplayer_games', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('provably_fair_game_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->morphs('gameable'); 
            $table->timestamp('start_time', 3)->nullable();
            $table->timestamp('end_time', 3)->nullable();
            $table->timestamps();
            
            $table->index('end_time');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('multiplayer_games');
    }
};
