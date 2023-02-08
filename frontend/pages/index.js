import { useWallet } from '@solana/wallet-adapter-react'
import MainView from '../components/mainview'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from "next/image";
import logo from "../assets/musicsplash.png";

export default function Home() {
  const { connected } = useWallet()

  return (
    <div className='app'>
      {connected ? (
        <MainView />
      ) : (
        <div className='loginContainer'>
        <Image src={logo} alt="logo" className='mic' />
          <div className='loginTitle'>Log in to SolMusika</div>
          <div className='loginSubTitle'>
            Manage your account, Upload videos check notifications, comment on videos, and
            more
          </div>
          <WalletMultiButton />
        </div>
      )}
    </div>
  )
}
