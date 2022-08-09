import React, {useState, useEffect} from 'react'
import "../styles/grid.css"
import {fillMachinewith5TestTokenABI, erc20FaucetContractABI} from '../ContractInfo/ContractInfo.jsx';
import {useWeb3Contract, useMoralisWeb3Api, useNFTBalances , useMoralis, useChain } from 'react-moralis';
import {useNavigate, useLocation, Link } from 'react-router-dom'


const JudgePanel = () => {
  const [mintAddress, setmintAddress]                   = useState('');
  const [testTokensReceipient, settestTokensReceipient] = useState('');
  const Moralis = useMoralis();

  useEffect(()=>{
    Moralis.enableWeb3()
    document.title = 'Helper Panel';
  },[]);

  useEffect(()=>{
    if (mintAddress){
        console.log('mint address changed: ',mintAddress);
        // console.log(Web3.utils.checkAddressChecksum(mintAddress) );
    }
  },[mintAddress])

  useEffect(()=>{
    if (testTokensReceipient){
        console.log('receipient changed: ',testTokensReceipient)
    }
  },[testTokensReceipient])

  function checkInputForMint(thing){
    if (thing.target.value.length <=42){
      setmintAddress(thing.target.value);
    }
  }
  function checkInputForERC20Tokens(thing){
    if (thing.target.value.length <=42){
      settestTokensReceipient(thing.target.value);
    }
  }
  function mintTheTokens(){
    mintTestTokensIntoMachine.runContractFunction({
        onSuccess : async (tx)=>tx.wait().then(newTx => {
            console.log('minted tokens. Check machine un-registered inventory!',newTx)
            
          }),
        onError: (error) =>{
        console.log('44444 big ERROR: ',error); 
        
        },
    })
  }
  function dripTheFaucet(){
    dripFaucetForEmerald.runContractFunction({
        onSuccess : async (tx)=>tx.wait().then(newTx => {
            console.log('faucet released 500 EMERALD tokens. Check your Metamask balance!',newTx)
            
          }),
        onError: (error) =>{
        console.log('5555 big ERROR: ',error); 
        
        },
    })
  }
  const mintTestTokensIntoMachine = useWeb3Contract({
    abi: fillMachinewith5TestTokenABI,  
    contractAddress: '0x9DA7aa4C375bb40F71Ccb75BC74f47A278d9eCde', //hard coded special ERC721 contract to call looped minting for test purposes
    functionName: "mint5FromAllTestTokens",
    params:{
       MachineAddressTarget: mintAddress 
    }
    
  });

  const dripFaucetForEmerald = useWeb3Contract({
    abi: erc20FaucetContractABI,  
    contractAddress: '0x86FaA55f6F340F226b651DB81887F9f8742C1B81', //hard coded faucet address for Shiny New Emeralds token
    functionName: "faucetDrip",
    params:{
        receipient: testTokensReceipient 
    }
    
  });

  return (
    <div style={{background:'linear-gradient(90deg, rgba(52,0,0,0.26934523809523814) 5%, rgba(100,100,250,0.01) 50%, rgba(52,0,0,0.27494747899159666) 95%)', position:'absolute', width:'100%',height:'100%',color:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{border:'1px solid rgba(200,200,200,0.6)', borderRadius:'10px', fontSize:'2vw',padding:'1vw', width:'40%',height:'95%',backgroundColor:'rgba(200,200,200,0.1)'}}>
            Judging Helper Tools
            <div style={{fontSize:'0.85vw', color:'#aaa'}}>
                Please switch to Rinkeby testnet with Metamask to use these tools.<br></br>
                These tools are not necessary but can be helpful.
            </div>

            <div style={{fontSize:'70%', marginLeft:'5vw',marginTop:'2vw',}}>
                View a pre-configured Machine 
                <div style={{fontSize:'60%', color:'#aaa'}}>
                    Look at a machine that has already been set up and used
                </div>
                <Link style={{ textDecoration: 'none',color:'#fff', }} target="_blank8" to={"/machine/0x6C20721C60bA65C6cAa93A3754376012f35ea21c"}>
                <div className="buttonHover" style={{textDecoration:'', fontSize:'1.2vw',width:'12.5%',textAlign:'center', position:'relative',top:'-2.1vw', left:'-4.8vw',  border:'1px solid rgba(200,200,200,0.3)',}}>
                    View
                </div>
                </Link>
            </div>
            <div style={{fontSize:'70%', marginLeft:'5vw',marginTop:'3vw',}}>
                Mint 5 tokens for each slot directly into a machine
                <div style={{fontSize:'60%', color:'#aaa'}}>
                    50 token deposit transactions with a single click
                </div>
                <input autoComplete='off' onChange={checkInputForMint} value={mintAddress? mintAddress :""} maxLength="42" size="45" placeholder="Paste a machine address" name="name"  style={{height:'5vh', fontSize:'1vw',color:'#fff',backgroundColor:'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px',paddingLeft:'1vw', outline:'none'}}></input>
                <div className="buttonHover" onClick={()=>{mintTheTokens()}} style={{fontSize:'1.2vw', width:'12.5%',textAlign:'center', position:'relative',top:'-2.1vw', left:'-4.8vw',  border:'1px solid rgba(200,200,200,0.3)',}}>
                    Mint
                </div>
            </div>
            
            <div style={{fontSize:'70%', marginLeft:'5vw',marginTop:'2vw',}}>
                Get 500 test ERC-20 tokens
                <div style={{fontSize:'60%', color:'#aaa'}}>
                    Receive 500 <a href="https://rinkeby.etherscan.io/address/0x18d5C20bEa1d40d02642C033bf6C7044Ebd6dFEB" target="blank3">EMERALD</a> tokens, which is a testnet ERC-20 token.<br></br> Please manually add to Metamask.
                </div>                
                <input autoComplete='off' onChange={checkInputForERC20Tokens} value={testTokensReceipient? testTokensReceipient :""} maxLength="42" size="45" placeholder="Paste your wallet address" name="name"  style={{height:'5vh', fontSize:'1vw',color:'#fff',backgroundColor:'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px',paddingLeft:'1vw', outline:'none'}}></input>
                <div onClick={()=>{dripTheFaucet()}} className="buttonHover" style={{fontSize:'1.2vw', width:'13.5%',textAlign:'center', position:'relative',top:'-2.1vw', left:'-4.8vw',  border:'1px solid rgba(200,200,200,0.3)',}}>
                    Transfer
                </div>
            </div>
            
            
            <div style={{fontSize:'70%', marginLeft:'5vw',marginTop:'5vw',}}>
                Capsule purchases pass on a 1% fee to a dev wallet
                <div style={{fontSize:'60%', color:'#aaa'}}>
                    View the contents of that wallet for demo purposes
                </div>
                <div onClick={()=>{ window.open("https://rinkeby.etherscan.io/address/0x40E90d526F76738766beb31162D591d2f0fD85F4#tokentxns")}} className="buttonHover" style={{fontSize:'1.2vw',width:'12.5%',textAlign:'center', position:'relative',top:'-2.1vw', left:'-4.8vw',  border:'1px solid rgba(200,200,200,0.3)',}}>
                    View
                </div>
            </div>

        </div>
    </div>
  )
}

export default JudgePanel