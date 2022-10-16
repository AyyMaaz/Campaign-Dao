import styled from "styled-components"
import {ethers} from "ethers";
import { useState } from "react";


const networks={
    polygon:{
    chainId:`0x${Number(80001).toString(16)}`,
    chainName:"polygon testnet",
    nativecurrency:{
        name:"Matic",
        symbol:"Matic",
        decimal:"18"
    },
     rpcUrls:["https://rpc-mumbai.maticvigil.com/"],
     blockExplorerUrls:["https://polygonscan.com/"]

},
}
const Wallet = () => {
    const [address,setAddress]=useState();
    const [balance,setBalance]=useState();
    const [walletconnect,setwalletconnect]=useState(false);
    const connectWallet=async()=>{
        await window.ethereum.request({method:"eth_requestAccounts"});
        const provider=new ethers.providers.Web3Provider(window.ethereum)
   
            const signer=provider.getSigner();
            const account=await signer.getAddress();
            const balance=ethers.utils.formatEther(await signer.getBalance());
            setAddress(account.slice(0,9));
            setBalance(balance);
            setwalletconnect(true)


    }
  return (
    <Wrapper>
    <Address>Wallet {address}...</Address>
    <ConnectButton onClick={connectWallet}>
        {walletconnect ? 'connected' :'connect'}
    </ConnectButton>
    </Wrapper>
  
  )
}

const ConnectButton=styled.div`
border:4px solid ${(props) => props.theme.color} ;
border-radius:10px;
font-size: 14px;
padding:10px;
margin: 20px;
color:white;
font-weight: bolder;
background-color:${(props) => props.theme.color} ;
font-family: 'Space Grotesk', sans-serif;
cursor: pointer;
`
const Address=styled.div`
margin: 12px;
font-weight: bolder;
font-family: 'Space Grotesk', sans-serif;
`
const Wrapper=styled.div`
display:flex;
justify-content:space-between;
align-items:center
`
export default Wallet