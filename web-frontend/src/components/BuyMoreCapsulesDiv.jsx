import React, {useContext, useEffect, useState } from 'react'
import CapsuleIconInventory from './snippet-components/CapsuleIconInventory'
import { NftMoreInfoContext } from '../App'
import {useMoralis, useWeb3Contract, useMoralisWeb3Api} from "react-moralis"
import {  contractAddressChainLinkTokenABI, BuyCapsuleContractABI } from '../ContractInfo/ContractInfo'
import {BigNumber} from 'ethers'
import BuyCapsulesUserTokenRoutediv from './snippet-components/BuyCapsulesUserTokenRoutediv'


const BuyMoreCapsulesDiv = () => {

  const {contractAddressTreasureChest, setcontractAddressTreasureChest} = useContext(NftMoreInfoContext);
  const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, account, logout} = useMoralis();   
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const [capsuleTokenPaymentContract, setcapsuleTokenPaymentContract] = useState();
  const [CapsuleCostInGivenToken, setCapsuleCostInGivenToken] = useState(1);
  const [ChestNftTokenId, setChestNftTokenId]     = useState('');
  const [buyCapsuleQty, setbuyCapsuleQty] = useState(1);
  const [UserTokenSpendAllowanceForContract, setUserTokenSpendAllowanceForContract] = useState(-1);
  
  const [buyCapsuleButtonMsg, setbuyCapsuleButtonMsg] = useState('BUY');
  const {RinkebyNFTsState, setRinkebyNFTsState}   = useContext(NftMoreInfoContext);
  
  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
  
  const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}           = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter}         = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
  const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
   
  const {showTokenSelector, setshowTokenSelector} = useContext(NftMoreInfoContext);

  const Web3Api = useMoralisWeb3Api();
  const [TokenNameForPayment, setTokenNameForPayment] = useState();
  const [userBalanceForTokenPayment, setuserBalanceForTokenPayment] = useState(1);
  
  const [buyButtonDisable, setbuyButtonDisable] = useState(true);

  const fetchCapsuleInfo = useWeb3Contract({
    abi: BuyCapsuleContractABI,
    contractAddress: BuyCapsuleContract, //this is fetched dynamically from reading the Machine contract
    functionName: "GetCapsuleInfo",
  }); 

  const approveTokenSpend = useWeb3Contract({ //approve contract to spend erc20 tokens in transaction
    abi: contractAddressChainLinkTokenABI,
    contractAddress: capsuleTokenPaymentContract, //this is fetched dynamically from reading the Machine contract
    functionName: "approve",
    params:{
      _spender: BuyCapsuleContract, //BuyCapsules contract address
      _value: Moralis.Units.ETH(CapsuleCostInGivenToken * buyCapsuleQty)    //cost of a capsule*qty
    }
  });

  const getAllowanceOfTokenSpend = useWeb3Contract({  //get Machine user's allowance given to contract (for capsule purchase)
    abi: BuyCapsuleContractABI,
    contractAddress: BuyCapsuleContract, //this is fetched dynamically from reading the Machine contract
    functionName: "GetAllowance",
    // params:{
    //   _owner: account, 
    //   _spender: BuyCapsuleContract    
    // }
  });

  const spendTokenToBuyCapsule = useWeb3Contract({ //approve contract to spend erc20 tokens in transaction
    abi: BuyCapsuleContractABI,
    contractAddress: BuyCapsuleContract, //this is fetched dynamically from reading the Machine contract
    functionName: "buyCapsule",
    params:{
      _tokenamount: Moralis.Units.ETH(CapsuleCostInGivenToken * buyCapsuleQty),    //cost of a capsule
      _capsuleQty: buyCapsuleQty
    }
  });  

  
  const fetchCapsuleTokenPaymentContract = useWeb3Contract({
    abi: contractAddressChainLinkTokenABI, //re-using for this logic since it is just a standard ERC20 ABI
    contractAddress: capsuleTokenPaymentContract, 
    functionName: "symbol",
  });

  const fetchUserBalanceOfTokenPayment = useWeb3Contract({
    abi: contractAddressChainLinkTokenABI, //re-using for this logic since it is just a standard ERC20 ABI
    contractAddress: capsuleTokenPaymentContract, 
    functionName: "balanceOf",
    params:{
      _owner: account
    }
  });

  
  useEffect(() => {
    if (!isWeb3Enabled) {
    // console.log('enabling web3...'); 
    enableWeb3();
    }
    if (web3){
      console.log('account: ',account);
    }
  }, [web3]);

  useEffect(()=>{
    if (BuyCapsuleContract){
      fetchCapsuleInfo.runContractFunction({
        onError: (error) =>{
          console.log('big ERROR111: ',error);
          setContractErrorMessage(error.error.message);
        },
      });
      
    }
  },[BuyCapsuleContract])


  useEffect(()=>{
    if (fetchCapsuleInfo.data){
      console.log('\t\tbuyCapsule info: ',fetchCapsuleInfo.data);
      setcapsuleTokenPaymentContract(fetchCapsuleInfo.data[2]);
      let temp = BigNumber.from(fetchCapsuleInfo.data[0]._hex);
      temp = Moralis.Units.FromWei(temp._hex);

      setCapsuleCostInGivenToken(temp );
    }
  },[fetchCapsuleInfo.data]);
  
  useEffect(()=>{
    if (capsuleTokenPaymentContract){

      fetchUserBalanceOfTokenPayment.runContractFunction({
        onError: (error) =>{
          console.log('bbbbbbig ERROR: ',error);
          setContractErrorMessage(error.error.message);
        },
      });

      fetchCapsuleTokenPaymentContract.runContractFunction({
        onError: (error) =>{
          console.log('big ERROR222: ',error);
          setContractErrorMessage(error.error.message);
        },
      });
      
    }
  },[capsuleTokenPaymentContract]);

  useEffect(()=>{
    if (fetchCapsuleTokenPaymentContract.data){
      console.log('\t\ttoken accepted for capsule purchase: ',fetchCapsuleTokenPaymentContract.data);
      setTokenNameForPayment(fetchCapsuleTokenPaymentContract.data);
    }
  },[fetchCapsuleTokenPaymentContract.data]);

  
  useEffect(()=>{
    if (fetchUserBalanceOfTokenPayment.data){
       
        
      let temp = BigNumber.from(fetchUserBalanceOfTokenPayment.data._hex);
      temp = Moralis.Units.FromWei(temp._hex);
      console.log('\t\t[ ',TokenNameForPayment,' ] user balance: ',temp  );
      setuserBalanceForTokenPayment(temp);
    }
  },[fetchUserBalanceOfTokenPayment.data]);

  useEffect(()=>{
    if (getAllowanceOfTokenSpend.data){
      console.log('contract approved to spend: ',Moralis.Units.FromWei(getAllowanceOfTokenSpend.data._hex), ' ',TokenNameForPayment)
      console.log(parseInt(getAllowanceOfTokenSpend.data._hex, 16),UserTokenSpendAllowanceForContract); 
      setUserTokenSpendAllowanceForContract(Moralis.Units.FromWei(getAllowanceOfTokenSpend.data._hex));
      
    }
  },[getAllowanceOfTokenSpend.data]);

  useEffect(()=>{
    // console.log('yeahhh raw: ',UserTokenSpendAllowanceForContract);
    if (UserTokenSpendAllowanceForContract>=0){ 
      console.log('approved to spend:  \t',UserTokenSpendAllowanceForContract);
      console.log('total capsules cost:\t',(CapsuleCostInGivenToken * buyCapsuleQty));
      if (UserTokenSpendAllowanceForContract < (CapsuleCostInGivenToken * buyCapsuleQty)){
        console.log('allowance is TOO LOW. Approving larger allowance, then spending')
        approveTokenSpend.runContractFunction({
          onError: (error) =>{
            console.log('ggggg big ERROR: ',error);
            setContractErrorMessage(error.error.message);
          },
          onComplete: () => {
            setbuyCapsuleButtonMsg('Approving spend...');
          },
          onSuccess: async (tx)=>tx.wait().then(newTx => {
            console.log('[ approval ] tx confirmed: ',newTx)

            spendTokenToBuyCapsule.runContractFunction({
              onSuccess:(tx2)=>tx2.wait().then(newTx2 => {
                console.log('[ spend ] tx confirmed: ',newTx2)
                setbuyCapsuleButtonMsg('Success!');
              }),
              onComplete: ()=>{
                setbuyCapsuleButtonMsg('Awaiting chain confirmation...');
              }
            })
          })
        });
      }else {
        console.log('allowance is ACCEPTABLE. spending. ', Moralis.Units.ETH(CapsuleCostInGivenToken*buyCapsuleQty), buyCapsuleQty)
        spendTokenToBuyCapsule.runContractFunction({
          onError: (error) =>{
            console.log('zzzz big ERROR: ',error);
            setContractErrorMessage(error.error.message);
          },
          onSuccess:(tx2)=>tx2.wait().then(newTx2 => {
            console.log('[ spend ] tx confirmed: ',newTx2)
          })
        })

      }
    }
  },[UserTokenSpendAllowanceForContract]);
  

  const fetchOwnedCrates = async () => { 
    const options = {
        chain: "rinkeby",
        address: account? account: '0x0000000000000000000000000000000000000000', //make this whoever is signed in to Moralis.auth()
        token_address: contractAddressTreasureChest, //treasure chest
    };

    console.log("Requesting Capsule inventory [ "+contractAddressTreasureChest+" ] from Moralis DB..");
    const rinkebyNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('CAPSULE NFT LIST: ',account,rinkebyNFTs);
    setRinkebyNFTsState(rinkebyNFTs); 
    rinkebyNFTs.result.reverse(); 

    if (rinkebyNFTs.result[0]){ //set the first tokenId as the one that will be opened upon clicking the main icon
        setChestNftTokenId(parseInt(rinkebyNFTs.result[0].token_id) + 0);
    } 
} 






  
  useEffect(()=>{
    if (buyCapsuleButtonMsg == 'Success!'){
      setTimeout(()=>{
        setbuyCapsuleButtonMsg('BUY');
        
        
        //get user capsule count from Moralis
        fetchOwnedCrates();

      },10000)
    }
  },[buyCapsuleButtonMsg])

  async function buyCapsules(){
    getAllowanceOfTokenSpend.runContractFunction({
      onError: (error) =>{
        console.log('qqqq big ERROR: ',error);
        setContractErrorMessage(error.error.message);
      },
      // onSuccess: async (tx)=>tx.wait().then(newTx => {
      //   console.log('[ check approval balance ] tx confirmed: ',newTx)
      // })
    });
   
  }
  function increaseQtyBuy(){
    setbuyCapsuleQty(buyCapsuleQty+1);
  }
  function decreaseQtyBuy(){
    if (buyCapsuleQty > 1){
      setbuyCapsuleQty(buyCapsuleQty-1);
    }
  }
  function assignMaxQty(){
    let userWalletBalance = userBalanceForTokenPayment;
    let CapsuleCost       = CapsuleCostInGivenToken;
    let maxQuantity = Math.floor(userWalletBalance / CapsuleCost);
    console.log(userWalletBalance,CapsuleCost, maxQuantity);
    setbuyCapsuleQty(maxQuantity);
  }


  
    
    
    
    
    
    

  return (
    <div style={{ borderRadius:'10px',top:'3vh',right:'1vw',color: "#fff",height: '25vh',width: '20vw',position:'absolute',backgroundColor: ActiveNetworkThemeColor? ActiveNetworkThemeColor:'rgba(165, 221, 255 ,0.15)', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'2px solid rgba(100,100,100,.2)', fontSize:'1.5vw'}}>

        {showTokenSelector? <BuyCapsulesUserTokenRoutediv /> :


        <div style={{padding:'10px', display:'flex',justifyContent:'center'}}>
          
          <div style={{position:'fixed',right:"34vw",top:"-3vh",   }}>
            <CapsuleIconInventory />
          </div>

          <div style={{color:'#fff', position:'absolute',top:"3%", width:'50%',right:'0%', fontSize:'1.6vw' }}>
            Buy Capsules
          </div>

          <div style={{float:'right',position:'absolute', top:'23%',left:'25%',fontSize:'2vw'}}><div style={{position:'fixed',fontSize:'1vw',right:'16.2%', top:'11%',}}>x </div> {buyCapsuleQty?buyCapsuleQty:'?'} </div>
          <div className="backButton" onClick={()=>{increaseQtyBuy()}} style={{cursor:'pointer',float:'right',position:'absolute', top:'0%',left:'38%',fontSize:'2.5vw',}}>▲</div>
          <div className="backButton"  onClick={()=>{decreaseQtyBuy()}}style={{cursor:'pointer',float:'right',position:'absolute', top:'20%',left:'38%',fontSize:'2.5vw'}}>▼</div>

          <div style={{position:'absolute',left:'0%', bottom:'-10vh',width:'90%',height:'20vh',}}>
            <div onClick={()=>{setshowTokenSelector(!showTokenSelector)}}className="buttonHover" style={{zIndex:'9999', display:'flex', alignItems:'center', position:'absolute',right:'-1vw',height:'4vh', fontSize:'1vw',fontStyle:'italic',borderRadius:'25px', paddingLeft:'1.3vw',paddingRight:'1.3vw', }} >
              {TokenNameForPayment? TokenNameForPayment : "loading..."}
            </div>
            <div style={{position:'absolute',top:'0vh',left:'2vw',fontSize:'1.3vw' ,width:'94.5%',height:'4vh',display:'flex',alignItems:'center',paddingLeft:'2vw', borderRadius:'25px',border:'1px solid #0066ff'}}>
              {CapsuleCostInGivenToken? (CapsuleCostInGivenToken*buyCapsuleQty) : <></>}    
            </div>
          </div>

          

          {buyCapsuleButtonMsg == 'BUY'?
            <div style={{display:'flex', justifyContent:'center',position:'absolute',bottom:'3%',width:'100%', height:'18%', }}>
              <button className="backButton" onClick={()=>{buyCapsules()}} style={{cursor:'pointer',width:'25%', height:'100%',borderRadius:'5px', fontSize:'1.3vw'}}>{buyCapsuleButtonMsg}</button>
            </div>
          :<></>}
          {buyCapsuleButtonMsg == 'Approving spend...'?
            <div className="breathingText" style={{display:'flex', justifyContent:'center',position:'absolute',bottom:'3%',width:'100%', height:'18%',color:'#ffff00', fontSize:'1.2vw',}}>
              {buyCapsuleButtonMsg}
            </div>
          :<></>}
          {buyCapsuleButtonMsg == 'Awaiting chain confirmation...'?
            <div className="breathingText" style={{display:'flex', justifyContent:'center',position:'absolute',bottom:'3%',width:'100%', height:'18%',color:'#ffff00', fontSize:'1.2vw',}}>
              {buyCapsuleButtonMsg}
            </div>
          :<></>}
          {buyCapsuleButtonMsg == 'Success!'?
            <div className="breathingText" style={{display:'flex', justifyContent:'center',position:'absolute',bottom:'3%',width:'100%', height:'18%',color:'#00ff00', fontSize:'1.2vw',}}>
              {buyCapsuleButtonMsg}
            </div>
          :<></>}




          <div style={{borderRadius:'10px',padding:'0.2vw',  position:'absolute',bottom:'53%', right:'1%', color:'#bbb',fontSize:'0.6vw', fontStyle:'italic', width:'50%',}}>
            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',}}>
                <div style={{}}>
                  Each Capsule Costs: 
                </div>

                <div style={{fontStyle:'normal',fontSize:'1.2vw',padding:'0.3vw',color:'#00ff00'}}>
                  {CapsuleCostInGivenToken?CapsuleCostInGivenToken: "???" }
                </div>

                <div style={{fontStyle:'normal',fontSize:'0.7vw',color:'#ffff44'}}>
                  <a href={capsuleTokenPaymentContract?'https://rinkeby.etherscan.io/address/'+capsuleTokenPaymentContract:<></>} style={{color:'#ffff44',textDecoration:'none'}} target="blank">{TokenNameForPayment ? TokenNameForPayment : <></>}</a>
                </div>
                
            </div>
          </div>

          <div style={{position:'absolute',bottom:'42%',  color:'#bbb',fontSize:'0.8vw',  }}>
            <div style={{display:'flex',width:'100%'}}>
              Buy with 
              
                <div style={{color:'#ffff44',fontWeight:'bold',fontStyle:'normal', paddingLeft:'0.1vw',paddingRight:'0.1vw', width:'100',  }}>
                &nbsp;<a href={capsuleTokenPaymentContract?'https://rinkeby.etherscan.io/address/'+capsuleTokenPaymentContract:<></>} style={{color:'#ffff44',textDecoration:'none'}} target="blank">{TokenNameForPayment ? TokenNameForPayment : <></>}</a>&nbsp;
                </div>
              
              or select a token from your wallet 
            </div>
          </div>

          {/* <div style={{position:'absolute',bottom:'45%', left:'0%', color:'#bbb',fontSize:'0.6vw', fontStyle:'italic', width:'50%',}}>
            You Have: 
            <div style={{color:'lightblue',top:'0%',right:'30%',position:'absolute',height:'3vh',width:'20%', }}>
              <div style={{position:'absolute',left:'-110%',}}>
                {userBalanceForTokenPayment? userBalanceForTokenPayment: <>loading..</>}&nbsp;  
              </div>
              {TokenNameForPayment ? TokenNameForPayment : <></>}
              <div onClick={()=>{assignMaxQty()}} style={{cursor:'pointer', position:'absolute',right:'-70%',top:'-15%', backgroundColor:ActiveNetworkThemeColor? ActiveNetworkThemeColor: "#fff", borderRadius:'5px',padding:'0.5vh', }}>
                max
              </div>
            </div> 
          </div> */}




        </div>
        }
    </div>
  )
}

export default BuyMoreCapsulesDiv