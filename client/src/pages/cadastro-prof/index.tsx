import React, { FormEvent } from "react";
import Head from 'next/head'
import logo from '../../../public/logo.png'
import styles from '../../../styles/home.module.scss'
import Image from 'next/image'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'
import Link from 'next/link'
import {useState} from 'react'
import {AuthContext} from '../../contexts/AuthContext'
import { useContext } from "react";

export default function Cadastro() {
  const {signUpProfessor} =  useContext(AuthContext)
  const [nome, setNome]= useState('')
  const [email, setEmail]= useState('')
  const [senha, setSenha]= useState('')
  const [cpf, setCPF]= useState('')
  const [celular, setCelular]= useState('')
  const [nomeInstituicao, setInstituicao]= useState('')
  const [municipio, setMunicipio]= useState('')
  const [dataDeNascimento, setdataDeNascimento]= useState('')
  const [sexo, setSexo]= useState('')

  async function handleSignUp(event: FormEvent){
    event.preventDefault();

    if(nome === '' || email == '' || senha === '' || cpf === '' || celular === ''
    || nomeInstituicao === '' || municipio === '' || dataDeNascimento === '' || sexo === ''){
      alert("PREENCHA TODOS OS CAMPOS")
      return
    }

    let data = {
      nome, 
      cpf,
      email,
      senha, 
      nomeInstituicao,
      celular,
      municipio,
      dataDeNascimento,
      sexo
    }
    await signUpProfessor(data)
  }
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
      
    <div className= {styles.main_container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src={logo} width={270} height={95}/>
                </div>
                <div className={styles.navbar_items}>
                    <ul>
                        <li><Link href={"/"}><a>home  </a></Link></li>
                        <li><Link href={"/confirma-usuario"}><a>Cadastro</a></Link></li>
                    </ul>
                </div>
            </div>
  
            <div className={styles.banner_image2}>
                <div>
                <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                    <div className={styles.form}>
                      <form onSubmit={handleSignUp}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                        <h1>
                          Dados Cadastrais
                        </h1>
                        <br></br>
                        <br></br>
                        <Input
                        placeholder="Nome completo"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                         <Input
                        placeholder="E-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                         <Input
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}/>
                        <Input
                        placeholder="Nome da Instituição"
                        type="text"
                        value={nomeInstituicao}
                        onChange={(e) => setInstituicao(e.target.value)}/>
                        <Input
                        placeholder="CPF"
                        type="text"
                        value={cpf}
                        onChange={(e) => setCPF(e.target.value)}/>
                      </form>
                      <div>
                      <form onSubmit={handleSignUp}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                       <br></br>
                        <br></br>
                        <Input
                        placeholder="Celular"
                        type="text"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}/>
                         <Input
                        placeholder="Município"
                        type="text"
                        value={municipio}
                        onChange={(e) => setMunicipio(e.target.value)}/>
                         <Input
                        placeholder="Data de Nascimento"
                        type="text"
                        value={dataDeNascimento}
                        onChange={(e) => setdataDeNascimento(e.target.value)}/>
                        <Input
                        placeholder="Sexo"
                        type="text"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}/>
                         <br></br>
                       <br></br>
                         <Button 
                        type="submit"
                        >
                          Cadastrar
                        </Button>
                        
                      </form>
                      </div>
                      
                    </div>
                    
              </div>
            </div>
        
        </div>

    </>

  )
}
