import React, { FormEvent } from "react";
import logo from '../../../public/logo.png'
import styles from './home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'



export default function ConfirmaUsuario() {
 

  return (
    <>
    <Head>
      <title>Confirmar Usuario</title>
    </Head>
        <div>
            <div className= {styles.main_container}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Image src={logo} width={270} height={95}/>
                    </div>
                    <div className={styles.navbar_items}>
                        <ul>
                            <li><Link href={"/"}><a>home  </a></Link></li>
                            <li><Link href={"/confirma-usuario"}><a>Cadastro</a></Link></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className={styles.row}>
                    <form action="Cadastro.html">
                        <div className={styles.aluno}>
                         <Link href={"/cadastro"}>
                            <a>
                                <input className={styles.botao} type="submit" value="ALUNO" name="aluno"/>
                            </a>
                        </Link>
                        </div>
                        <div className={styles.professor}>
                        <Link href={"/cadastro-prof"}>
                            <a>
                                <input className={styles.botao} type="submit" value="PROFESSOR" name="professor"/>
                            </a>
                        </Link>
                        </div>
                    </form>
                    

                </div>

            </div>

    </>

  )
}
