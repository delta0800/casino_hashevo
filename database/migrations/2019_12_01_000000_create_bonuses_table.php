<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2019_12_01_000000_create_bonuses_table.php
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
        Schema::create('bonuses', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->unsignedBigInteger('account_id');
            $table->unsignedTinyInteger('type');
            $table->decimal('amount', 20, 2);
            $table->timestamps();
            
            $table->foreign('account_id')->references('id')->on('accounts')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('bonuses');
    }
};
