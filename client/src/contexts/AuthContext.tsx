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
    name: string;
    email: string;
}

type  AuthProviderProps= {
    children: ReactNode;
}

type SignUpProps = {
    nome: string,
    email: string,
    senha: string,
    instituicao: string, 
    cpf: string,
    celular: string,
    municipio: string,
    dataNasc: string,
    sexo: string,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()

    async function signIn({email, password} : SignInProps){
       try{
        const response = await api.post('/login', {
            email, password
        })

        console.log(response.data)
       }catch(err){
        console.log("Erro:", err)
       }
    }

    async function signUp({nome, email, senha, cpf, celular, instituicao, municipio, dataNasc, sexo}: SignUpProps){
        try{
            const response = await api.post('/cadastro', {
                nome, email, senha, cpf, celular, instituicao, municipio, dataNasc, sexo
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