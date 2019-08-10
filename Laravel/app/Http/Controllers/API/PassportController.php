<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;
use DB;

class PassportController extends Controller
{
    public $successStatus = 200;

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:10', //o campo nome é obrigatório e seu tamanho mínimo são 10 caracteres
            'username' => 'required|alpha_dash', //o campo nome de usuário é obrigatório e os caracteres aceitos são os alfanuméricos, underline e dash, mais conhecido como traçinho
            'email' => 'required|email', //o campo e-mail é obrigatório e seu formato deve ser nome@email.com
            'password' => 'required|min:8' //o campo senha é obrigatório e seu tamanho mínimo são 8 caracteres
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401); //caso o usuário preencha algum campo com algum dado inválido, o cadastro não será realizado e será retornada uma mensagem de erro ao usuário
            //obs: as mensagens serão personalizadas de acordo com o tipo de erro mais pra frente
        }
        $user = new User;
        $user->name = $request->name;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role = 'common_user'; //sempre que o usuário criar uma conta ele será um usuário comum, pois os visitantes são as pessoas que não possuem uma conta e os bloggers terão seu cargo atribuído diretamente no banco de dados
        $success['token'] = $user->createToken('FriendFlix')->accessToken;
        $success['name'] = $user->name;
        $user->save();
        return response()->json(['success' => $success], $this->successStatus);
    }
}
