<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   UpdatePassword.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePassword extends FormRequest
{
    
    public function authorize()
    {
        return true;
    }

    
    public function rules()
    {
        

        return [
            'current_password'      => 'current_password',
            'password'              => 'required|confirmed|min:6',
            'password_confirmation' => 'required'
        ];
    }
}
