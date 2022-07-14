
import React, { useEffect, useState, useCallback, useContext } from 'react';
import {useNavigate, useLocation, Link } from 'react-router-dom'
import "../styles/grid.css"
import {useWeb3Contract, useMoralisWeb3Api, useMoralis, useChain } from 'react-moralis';
import {CapsuleFactoryABI, CapsuleFactoryContractAddress, contractCrateABI} from '../ContractInfo/ContractInfo.jsx';
import { NftMoreInfoContext } from '../App';
import TopNavBar from './TopNavBar';

const Manager = () => {

  // const {UserMachinesArray, setUserMachinesArray} = useContext(NftMoreInfoContext);
  const [UserMachinesArray, setUserMachinesArray]                           = useState();
  const {creatingNewMachine, setcreatingNewMachine}                         = useContext(NftMoreInfoContext);
  const {showManager, setshowManager}                                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}             = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque}   = useContext(NftMoreInfoContext);
  const {displayNetworkSwitchPrompt,setdisplayNetworkSwitchPrompt}          = useContext(NftMoreInfoContext);

  const navigate = useNavigate();
  const { switchNetwork, chainId, chain, account } = useChain();
  const goBackToMachinePage = useCallback(() => 
    navigate('/machine/'+location.pathname.replace('/manage/', ''), {replace: true}), [navigate]
    
    );
  const goToSpecificMachinePage = useCallback((targetPath) => 
    navigate('/machine/'+targetPath, {replace: true}), [navigate]
  );

  const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();   
  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
  useEffect(()=>{
    if (web3){
      getUserRegisteredMachines.runContractFunction({
        onComplete : (tx) => {
          console.log('got user machines',tx)
        },
        onError: (error) =>{
        console.log('gggg big ERROR: ',error); 
        },
      });
    }
    if (!isWeb3Enabled) {
      // console.log('enabling web3...'); 
      enableWeb3();
    }
  },[web3]);


  const location = useLocation();


  const getUserRegisteredMachines = useWeb3Contract({
    abi: CapsuleFactoryABI,  
    contractAddress: CapsuleFactoryContractAddress,
    functionName: "getMyMachines",    
  });

  useEffect(()=>{

    
  },[])
  useEffect(()=>{
    if (getUserRegisteredMachines.data){
        // console.log('qqqqq zomg here are our registered machines: ',getUserRegisteredMachines.data);
        
        //next make this match layout of topNavBar layout for room picker
        setUserMachinesArray(getUserRegisteredMachines.data);
    }
  },[getUserRegisteredMachines.data])

  return (
    <div style={{ background:'linear-gradient(90deg, rgba(52,0,0,0.26934523809523814) 5%, rgba(100,100,250,0.01) 50%, rgba(52,0,0,0.27494747899159666) 95%)' ,position:'absolute', width:'100vw',height:'100vh',  display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{position:'absolute', top:'4vh',left:'8vw',width:'10vw', height:'4vh',color:'#fff'}}>
            <TopNavBar />            
        </div>
        
        <div style={{backgroundColor:'rgba(200,200,200,0.1)',borderRadius:'10px', position:'absolute', top:'25vh',left:'13vw',width:'20vw', border:'1px solid #fff',padding:'0.2vw', display:'flex', justifyContent:'center', height:'15vh',color:'#fff', fontSize:'1.2vw'}}>
            <div style={{textAlign:'center'}}>
              Are you a Hackathon Judge? 
              <div style={{position:'absolute',bottom:'10%',left:'0'}}>
                <a href ="/judgePanel" target="blank2">Click here</a> to open the Helper Panel for best experience
              </div>
            </div>
        </div>
        
        
        {displayNetworkSwitchPrompt? 
        <div style={{fontSize:'1.2vw', textAlign:'center', borderRadius:'10px', color:'#fff', zIndex:'9999', width:'25vw', height:'57vh', position:'fixed', top:'25%',left:'38%',border:'1px dashed #ffcc00', backgroundColor:ActiveNetworkThemeColorOpaque?ActiveNetworkThemeColorOpaque: 'rgba(100,100,100,1)',display:'flex',justifyContent:'center',alignItems:'center'}}>
          This demo is on Rinkeby Ethereum testnet!
          <div onClick={() => switchNetwork("0x4")} className="selectTokenButtonEmpty" style={{cursor:'pointer', borderRadius:'10px', padding:'0.3vw', border:'1px solid #ccc', position:'absolute', bottom:'35%',}}>
            Switch to Rinkeby
          </div>
        </div>
        
        :<></>}

        <div style={{border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'1px solid #00ff00',position:'absolute',width:'30%',height:'65%',backgroundColor:'rgba(50,50,50,0.4)',top:'20%',borderRadius:'20px'}}>
            <Link to={"/create/"}>
            <div onClick={()=>{}} className="menuItemControlPanel" style={{fontSize:'1.3vw', cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center', color:'#fff', position:'fixed', top:'25%',left:'38%', width:'25%', height:'6%',borderRadius:'20px'}}>
            Create a new Machine
            </div>
            </Link>
            <div style={{backgroundColor:'rgba(50,50,50,0.3)',display:'flex', color:'#fff', position:'fixed', top:'37%',left:'38%', width:'25%', height:'45%',borderRadius:'20px',}}>
              <div>
                <div style={{position:'absolute', top:'-6%',left:'38%'}}>My Machines</div>

                {
                  UserMachinesArray? UserMachinesArray.map((machineAddress, index)=>{
                    return(
                      <Link key={index} style={{color:'#ccc', textDecoration:'none'}} to={"/machine/"+machineAddress}>
                        <div   className="myMachineHover" style={{display:'flex', justifyContent:'center', borderRadius:'10px', alignItems:'center', position:'absolute',top:(index*45), width:'100%', height:'10%',}}>
                          {machineAddress}
                        </div>
                      </Link>
                    )
                  })
                  : <></>
                  
                }
            </div>
            </div>

        </div>


        {/* <div className="backButton"  onClick={()=>{goBackToMachinePage()}} style={{cursor:'pointer', position:'absolute', top:'5%', left:'5%', fontSize:'40px'}}>↪ Back To Machine</div> */}
    </div>
)
}

export default Manager