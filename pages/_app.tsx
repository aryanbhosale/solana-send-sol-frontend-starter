import React, { useMemo } from "react" // useMemo() is a hook that loads stuff only if one of the dependencies changes. In this case, if the network the user is connected to doesn't change, the value of clusterApiUrl won't change either
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base" // This is just an enumerable object for the available networks
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui" // it's a fancy React component that will prompt the user to select their wallet
/* 
  ConnectionProvider takes an RPC endpoint in and lets us talk directly to the nodes on the Solana blockchain. Will be using this throughout our app to send transactions
  WalletProvider gives us a standard interface for connecting to all sorts of wallets, so we don't have to bother reading docs for each wallet.
*/
import { WalletProvider, ConnectionProvider } from "@solana/wallet-adapter-react" 
import { PhantomWalletAdapter, GlowWalletAdapter } from "@solana/wallet-adapter-wallets" // We'll use the imports from this to create a list of wallets we'll feed the WalletProvider
import { clusterApiUrl } from "@solana/web3.js" // a function that generates an RPC endpoint for us based on the network we give it
import '../styles/globals.css'

require("@solana/wallet-adapter-react-ui/styles.css")
require("../styles/globals.css")
require("../styles/Home.module.css")


function App({ Component, pageProps }) {
  // Can be set to 'devnet', 'testnet' or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet

  // Can provide a custom RPC endpoint here
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  /* @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
     Only the wallets we configure here will be compiled into our application, and only the dependencies
     of wallets that our users connect to will be loaded
  */
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new GlowWalletAdapter()], [network])

  return (
    <>
      {/* Code available on wallet-adapter NextJS template */}
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
    
  )
}

export default App
