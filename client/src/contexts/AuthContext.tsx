import {createContext, ReactNode, useState} from 'react';
import {api} from '../services/apiClient';
import Router from 'next/router';

type AuthContextData = {
    user: UserProps;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type SignInProps ={
    email: string;
    password: string;
}


type UserProps={
    id: string;
    nome: string;
    email: string;
}

type  AuthProviderProps= {
    children: ReactNode;
}

type SignUpProps = {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    instituicao: string, 
    celular: string,
    municipio: string,
    dataNasc: string,
    sexo: string,
}

export const AuthContext = createContext({} as AuthContextData)
export var usuario

export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<UserProps>()
    var flag = true
    async function signIn({email, password} : SignInProps){
       try{
        const response = await api.get('/alunos')
        for(var i = 0; i<response.data.length; i++){
            if((response.data[i].email == email) && (response.data[i].senha == password)){
                usuario = response.data[i]
                Router.push('/portal-aluno')
                flag = true
                break
            }else{
                flag = false
            }
        }
        if(flag == false){
            alert("VOCÊ NÃO ESTÁ CADASTRADO!")
        }
       }catch(err){
        console.log("Erro:", err)
       }
    }

    async function signUp({nome, cpf, email, senha, instituicao, celular, municipio, dataNasc, sexo}: SignUpProps){
        try{
            const response = await api.post('/cadastro', {
                nome, cpf, email, senha, instituicao, celular, municipio, dataNasc, sexo
            })


            console.log("CADASTRADO COM SUCESSO")

            Router.push('/')
        }catch(err){
            console.log("ERRO:", err)
        }
    }
    return(
        <AuthContext.Provider value={{user, signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}