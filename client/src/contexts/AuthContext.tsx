import {createContext, ReactNode, useState} from 'react';
import {api} from '../services/apiClient';
import Router from 'next/router';

type AuthContextData = {
    user: UserProps;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
    signUpProfessor: (credentials: SignUpProfProps) => Promise<void>;
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
    nomeInstituicao: string, 
    celular: string,
    municipio: string,
    dataDeNascimento: string,
    sexo: string,
}

type SignUpProfProps = {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    nomeInstituicao: string, 
    celular: string,
    municipio: string,
    dataDeNascimento: string,
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
        if (!flag){
            const responseprof = await api.get('/professores')
            for(var i = 0; i<responseprof.data.length; i++){
            if((responseprof.data[i].email == email) && (responseprof.data[i].senha == password)){
                usuario = responseprof.data[i]
                Router.push('/portal-professor')
                flag = true
                break
            }else{
                flag = false
            }
        }
        }
        if(flag == false){
            alert("VOCÊ NÃO ESTÁ CADASTRADO!")
        }
       }catch(err){
        console.log("Erro:", err)
       }
    }

    async function signUp({nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo}: SignUpProps){
        try{
            const response = await api.post('/alunos', {
                nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo
            })


            console.log("CADASTRADO COM SUCESSO")

            Router.push('/')
        }catch(err){
            console.log("ERRO:", err)
        }
    }

    async function signUpProfessor({nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo}: SignUpProps){
        try{
            const response = await api.post('/professores', {
                nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo
            })


            console.log("CADASTRADO COM SUCESSO")

            Router.push('/')
        }catch(err){
            console.log("ERRO:", err)
        }
    }

    return(
        <AuthContext.Provider value={{user, signIn, signUp, signUpProfessor}}>
            {children}
        </AuthContext.Provider>
    )
}