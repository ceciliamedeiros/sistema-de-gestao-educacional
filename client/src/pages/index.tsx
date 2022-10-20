import React, { FormEvent, useState } from "react";
import Head from 'next/head'
import logo from '../../public/logo.png'
import logorecife from '../../public/logo-recife.png'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import {Input} from '../components/ui/input'
import {Button} from '../components/ui/button'
import Link from 'next/link'
import {AuthContext} from '../contexts/AuthContext'
import { useContext } from "react";

export default function Home() {
  const {signIn} = useContext(AuthContext)

  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  
  async function handleLogin(event: FormEvent){
    event.preventDefault();
    let data={
      email,
      password
    }
    await signIn(data)
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
                        <li><Link href={"/cadastro"}><a>Cadastro</a></Link></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
            </div>
        
            <div className={styles.banner_image}>
                <div className={styles.banner_content}>
                  <Image src={logorecife}/>
                    <h1>Prefeitura do Recife<br/> Secretaria da Educação</h1>
                </div>
                <div className={styles.listra1}>
                </div>
                <div className={styles.listra2}>
                    <div id="form">
                      <form onSubmit={handleLogin}>
                        <Input
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <Input
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                          <br></br>
                          <br></br>
                        <Button
                        type="submit"
                        >
                          Acessar
                        </Button>
                      </form>

                      <Link href="/cadastro">
                      <a className={styles.text}>Cadastre-se</a>
                      </Link>
                    </div>
                </div>
            </div>
        
        </div>

    </>
  )
}
