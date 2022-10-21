import React, { FormEvent } from "react";
import Head from 'next/head'
import logo from '../../../public/logo.png'
import styles from '../../../styles/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {usuario} from '../../contexts/AuthContext'



export default function PortalAluno() {
  return (
    <>
    <Head>
      <title>Portal do Aluno</title>
    </Head>
      
        <div className= {styles.main_container}>
              <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Image src={logo} width={270} height={95}/>
                    </div>
                    <div className={styles.navbar_items}>
                        <ul>
                            <li><Link href={"/"}><a>home  </a></Link></li>
                            <li><Link href={"/confirma-usuario"}><a>Disciplinas</a></Link></li>
                        </ul>
                    </div>
                    
              <div className={styles.listra3}>
                Nome:{usuario.nome} &emsp;
                CPF:{usuario.cpf} &emsp;
              </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div>
              <article className={styles.card}>
                  <header className={styles.cardThumb}>
                      <a href="#">
                          <img src="https://unsplash.it/370/235/?random"/>
                      </a>
                  </header>
                  <div className={styles.cardDate}>
                      <span className={styles.cardDateDay}>1</span>
                      <span className={styles.cardDateMonth}>Janv</span>
                  </div>
                  <div className={styles.cardBody}>
                      <div className={styles.cardCategory}><a href="#">Notícias</a></div>
                      <h2 className={styles.cardTitle}><a href="#">Lorem Ipsum</a></h2>
                      <div className={styles.cardSubtitle}>dolor sit amet, consectetur adipiscing elit</div>
                      <p className={styles.cardDescription}>
                          In ut quam quis magna pulvinar tempor at non elit. Ut lacinia elit vestibulum nulla accumsan, et fringilla mi accumsan. Etiam urna justo, luctus non porta eget, interdum quis tellus.
                      </p>
                  </div>
                  <footer className={styles.cardFooter}>
                      <span className={styles['icon--time']}></span>33 min
                      <span className={styles['icon--comment']}></span><a href="#">1 comments</a>
                  </footer>
              </article>

              <article className={styles.card2}>
              <header className={styles.cardThumb}>
                      <a href="#">
                          <img src="https://picsum.photos/536/354"/>
                      </a>
                  </header>
                  <div className={styles.cardDate}>
                      <span className={styles.cardDateDay}>1</span>
                      <span className={styles.cardDateMonth}>Janv</span>
                  </div>
                  <div className={styles.cardBody}>
                  <div className={styles.cardCategory}><a href="#">Atalhos</a></div>
                      <h2 className={styles.cardTitle2}><a href="#">Disciplinas</a></h2>
                      <p className={styles.cardDescription}>
                          In ut quam quis magna pulvinar tempor at non elit. Ut lacinia elit vestibulum nulla accumsan, et fringilla mi accumsan. Etiam urna justo, luctus non porta eget, interdum quis tellus.
                      </p>
                  </div>
                  <footer className={styles.cardFooter}>
                      <span className={styles['icon--time']}></span>33 min
                      <span className={styles['icon--comment']}></span><a href="#">1 comments</a>
                  </footer>
              </article>

        </div>

            
        </div>

    </>

  )
}
