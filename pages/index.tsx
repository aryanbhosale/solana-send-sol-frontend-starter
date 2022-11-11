import { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'
import { BalanceDisplay } from '../components/BalanceDisplay'
import * as web3 from '@solana/web3.js'

const Home: NextPage = (props) => {

  

  return (
    <div className={styles.App}>
      <Head>
        <title>SOL Transfer</title>
        <meta
          name="description"
          content="Wallet Adapter"
        />
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