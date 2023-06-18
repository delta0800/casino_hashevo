<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2019_11_03_000000_create_games_baccarat_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('games_baccarat', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->string('deck', 280);
            $table->unsignedInteger('player_bet');
            $table->decimal('player_win', 16, 2);
            $table->unsignedInteger('banker_bet');
            $table->decimal('banker_win', 16, 2);
            $table->unsignedInteger('tie_bet');
            $table->decimal('tie_win', 16, 2);
            
            $table->string('player_hand', 30);
            $table->unsignedTinyInteger('player_score');
            
            $table->string('banker_hand', 30);
            $table->unsignedTinyInteger('banker_score');
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_baccarat');
    }
};
