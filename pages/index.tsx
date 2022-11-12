import { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'
import { BalanceDisplay } from '../components/BalanceDisplay'

const Home: NextPage = (props) => {

  

  return (
    <div className={styles.App}>
      <Head>
        <title>SOL Transfer</title>
        <meta
          name="description"
          content="Wallet Adapter"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        <BalanceDisplay />
        <SendSolForm />
      </div>
    </div>
  );
}

export default Home;