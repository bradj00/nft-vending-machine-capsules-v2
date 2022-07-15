import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { NftMoreInfoContext } from '../App';
import "../styles/grid.css"
import {useWeb3Contract, useMoralisWeb3Api, useMoralis, useChain } from 'react-moralis';
import {MachineFactoryABI, MachineFactoryContractAddress, MachineABI} from '../ContractInfo/ContractInfo.jsx';
import {getEllipsisTxt} from "../helpers/formatters";
import { FaBeer, FaDiscord,FaBars, FaBroom } from 'react-icons/fa';



const DisplayContractInfo = () => {
  const {contractAddressTreasureChest, setcontractAddressTreasureChest} = useContext(NftMoreInfoContext);
  const {contractAddressTreasureChestLC, setcontractAddressTreasureChestLC} = useContext(NftMoreInfoContext);

  const [showContractMenuDropDown, setshowContractMenuDropDown] = useState(false);
  const [UserMachinesArray, setUserMachinesArray] = useState();
  const {creatingNewMachine, setcreatingNewMachine} = useContext(NftMoreInfoContext);
  const {showManager, setshowManager} = useContext(NftMoreInfoContext);
    
  const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();   

  const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
  const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);


  useEffect(() => {
    if (!isWeb3Enabled) {
    // console.log('enabling web3...'); 
    enableWeb3();
    }else {
      getUserRegisteredMachines.runContractFunction({
        onError: (error) =>{
          console.log('aaaaa big ERROR: ',error); 
        }
      });
    }
  }, [isWeb3Enabled]);

  const getUserRegisteredMachines = useWeb3Contract({
    abi: MachineFactoryABI,  
    contractAddress: MachineFactoryContractAddress,
    functionName: "getMyMachines",    
  });

  useEffect(()=>{

      

  },[])

  useEffect(()=>{
    if (getUserRegisteredMachines.data){
        // console.log('...zomg here are our registered machines: ',getUserRegisteredMachines.data);
        setUserMachinesArray(getUserRegisteredMachines.data);
    }
  },[getUserRegisteredMachines.data])





  function openMenuDropDown () {
    //set some state variable
    setshowContractMenuDropDown(!showContractMenuDropDown);
  }

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if (UserMachinesArray){

    }
  },[UserMachinesArray]);

  useEffect(()=>{
      let temp = location.pathname.replace('/machine/', '');
      temp  = temp.replace('/', '');
      setcontractAddressTreasureChest(temp);


      setcontractAddressTreasureChestLC(temp.toLowerCase() );
      // console.log('new: ',contractAddressTreasureChest);
  },[contractAddressTreasureChest])

  const goToSpecificMachinePage = useCallback((targetPath) =>
    navigate('/machine/'+targetPath, {replace: true}), [navigate]
    
  );

  return (
    <>
      <div className={showContractMenuDropDown ? 'menuDropdownExpanded':'menuDropdownCollapsed'} onClick={()=>{openMenuDropDown()}} style={{display:'flex', justifyContent:'center', zIndex:'4', position:'absolute', top:'2%', left:'10%',width:'10%',backgroundColor:'rgba(40,40,40,1)', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'1px solid rgba(90,90,90,1)', color:'#fff', borderRadius:'5px', }}>
        <div style={{position:'fixed',top:'0vh',left:'28vw', marginLeft:'-15%',   color:'#fff',fontSize:'0.8vw'}}>My Machines</div>
        <div className='' style={{position:'absolute', display:'flex', justifyContent:'center', alignItems:'center',left:'0%', backgroundColor:'rgba(30,30,60,1)',minHeight:'3.5vh', height:'17%',width:'100%',border:showContractMenuDropDown? ActiveNetworkBorderColor:'0px solid #000',}}>
          <div style={{fontSize:'1vw',paddingLeft:'5px',position:'absolute',left:'0%',}}>
            <FaBars />
          </div>
          <div style={{fontSize:'1vw',position:'absolute',left:'20%'}}>
            {getEllipsisTxt(location.pathname.replace('/machine/', ''), 6)}
          </div>
        </div> 

        {showContractMenuDropDown ?
          <>
            <div  onClick={()=>{ setshowManager(false); setcreatingNewMachine(true) }} className="myMachineHover" style={{fontSize:'0.8vw',padding:'0.5vh 1vh 0.5vh 1vh',fontWeight:'bold', color:'#fff', display:'flex', justifyContent:'center', borderRadius:'10px 10px 0 0', alignItems:'center', position:'absolute',bottom:'0%', width:'80%', height:'12%',}}>
              <FaBroom /> &nbsp;New Machine
            </div>
            
            {UserMachinesArray? 
              <div style={{  width:'100%', height:'70%', overflowY:'scroll',display:'inline-block', textAlign:'center', marginTop:'4.1vh',  justifyContent:'center',  }}>
                {UserMachinesArray.map((machineAddress, index)=>{
                  return(
                    <div key={index} onClick={()=>{ goToSpecificMachinePage(machineAddress);window.location.reload(false); }} className="myMachineHover" style={{position:'relative',  transition:'none',  marginLeft:'0.2vw',marginBottom:'3px',  width:'98%', height:'15%',}}>
                      <div style={{fontSize:'1vw',position:'relative',height:'100%', width:'95%',left:'-40%',}}>
                        {index+1}
                      </div>
                      <div style={{zIndex:'9999', fontSize:'1vw',position:'relative',height:'100%', width:'88%',top:'-100%', left:'10%',}}>
                        {getEllipsisTxt(machineAddress,6)}
                      </div>

                    </div>
                  )
                })}
              </div>
            :<></>
            }
            
            </>

          :<></>
          } 
      
      </div>
    </>
  )
}

export default DisplayContractInfo