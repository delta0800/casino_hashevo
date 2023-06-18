<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2019_10_03_100000_create_social_profiles_table.php
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
        Schema::create('social_profiles', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('provider_name', 50);
            $table->string('provider_user_id');
            $table->timestamps();
            
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            
            $table->unique(['provider_name','provider_user_id']);
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('social_profiles');
    }
};
