import React, { useState, useEffect, FC } from 'react' 
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import * as web3 from '@solana/web3.js'
import { info } from 'console'


export const BalanceDisplay : FC = () => {

    const [balance, setBalance] = useState(0)

    const { connection } = useConnection()
    const { publicKey } = useWallet()

    useEffect(() => {
        if (!connection || !publicKey) {
            return
        }
    
        connection.getAccountInfo(publicKey).then(balance => {
            setBalance(balance.lamports)
        })
    }, [connection, publicKey])

    
  return (
    <>
        <div>
            {publicKey ? `Address : ${publicKey}` : ''}
        </div>
        <div>
            {publicKey ? `Balance : ${balance / web3.LAMPORTS_PER_SOL}` : ''}
        </div>
        <br />
    </>
  )
}