import React, {useState, useContext, useEffect, useCallback} from 'react'
import {useWeb3Contract, useMoralisWeb3Api, useNFTBalances , useMoralis, useChain } from 'react-moralis';
import {CapsuleFactoryABI, CapsuleFactoryContractAddress, contractCrateABI} from '../ContractInfo/ContractInfo.jsx';
import '../styles/grid.css';
import {useNavigate, useLocation, Link, Navigate   } from 'react-router-dom'
import { NftMoreInfoContext } from '../App.js';
import TopNavBar from './TopNavBar.jsx';
import CapsuleIconInventory from './snippet-components/CapsuleIconInventory.jsx';
import CapsuleIconCreateMachine from './snippet-components/CapsuleIconCreateMachine.jsx';
import {getEllipsisTxt} from "../helpers/formatters";
import { ethers } from 'ethers';
import SlotProbabilitySlider from './snippet-components/SlotProbabilitySlider.jsx';

const CreateMachine = (props, context) => {
    const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();
    const { switchNetwork, chainId, chain, account } = useChain();

    const location = useLocation();

    const [createMachineStatusMsg, setcreateMachineStatusMsg]           = useState('Create Machine');

    const [MachineNameBytes32, setMachineNameBytes32]                   = useState();
    const [MachineTokenQtyCost, setMachineTokenQtyCost]                 = useState();
    const [SelectedMachineToken, setSelectedMachineToken]               = useState();
    const [UserUniqueContractArr, setUserUniqueContractArr]             = useState();
    const [searchFilterValue, setsearchFilterValue]                     = useState();
    const [SelectedLookupNftAddress, setSelectedLookupNftAddress]       = useState(); 
    const [NftConfigureSlot, setNftConfigureSlot]                       = useState();
    
    const [Balancing, setBalancing] = useState(false);

    
    const [GoToNewMachine, setGoToNewMachine]                           = useState();

    const [Input1Selection, setInput1Selection]                         = useState();
    const [Input2Selection, setInput2Selection]                         = useState();
    const [Input3Selection, setInput3Selection]                         = useState();
    const [Input4Selection, setInput4Selection]                         = useState();
    const [Input5Selection, setInput5Selection]                         = useState();
    const [Input6Selection, setInput6Selection]                         = useState();
    const [Input7Selection, setInput7Selection]                         = useState();
    const [Input8Selection, setInput8Selection]                         = useState();
    const [Input9Selection, setInput9Selection]                         = useState();
    const [Input10Selection, setInput10Selection]                         = useState();


    const {slot1isExplicit, setslot1isExplicit}     = useContext(NftMoreInfoContext);
    const {slot2isExplicit, setslot2isExplicit}     = useContext(NftMoreInfoContext);
    const {slot3isExplicit, setslot3isExplicit}     = useContext(NftMoreInfoContext);
    const {slot4isExplicit, setslot4isExplicit}     = useContext(NftMoreInfoContext);
    const {slot5isExplicit, setslot5isExplicit}     = useContext(NftMoreInfoContext);
    const {slot6isExplicit, setslot6isExplicit}     = useContext(NftMoreInfoContext);
    const {slot7isExplicit, setslot7isExplicit}     = useContext(NftMoreInfoContext);
    const {slot8isExplicit, setslot8isExplicit}     = useContext(NftMoreInfoContext);
    const {slot9isExplicit, setslot9isExplicit}     = useContext(NftMoreInfoContext);
    const {slot10isExplicit, setslot10isExplicit}     = useContext(NftMoreInfoContext);

    const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
    const {creatingNewMachine, setcreatingNewMachine} = useContext(NftMoreInfoContext);
    const {userErc20TokenBalance, setuserErc20TokenBalance} = useContext(NftMoreInfoContext);
    const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter}         = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
    const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
    const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
    
    const {TotalPercentageProbabilities, setTotalPercentageProbabilities}   = useContext(NftMoreInfoContext);
    
    const {slot1ProbabilityValue, setslot1ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot2ProbabilityValue, setslot2ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot3ProbabilityValue, setslot3ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot4ProbabilityValue, setslot4ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot5ProbabilityValue, setslot5ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot6ProbabilityValue, setslot6ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot7ProbabilityValue, setslot7ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot8ProbabilityValue, setslot8ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot9ProbabilityValue, setslot9ProbabilityValue}   = useContext(NftMoreInfoContext);
    const {slot10ProbabilityValue, setslot10ProbabilityValue} = useContext(NftMoreInfoContext);

    function updatePercProbs(){
        setTotalPercentageProbabilities(slot1ProbabilityValue + slot2ProbabilityValue+ slot3ProbabilityValue+ slot4ProbabilityValue+ slot5ProbabilityValue+ slot6ProbabilityValue+ slot7ProbabilityValue+ slot8ProbabilityValue+ slot9ProbabilityValue+ slot10ProbabilityValue)
    }

    useEffect(()=>{
        if(slot1ProbabilityValue){
            // balanceProbabilities(1);
            updatePercProbs();
        }
    },[slot1ProbabilityValue]);

    useEffect(()=>{
        if(slot2ProbabilityValue){
            // balanceProbabilities(2);
            updatePercProbs();
        }
    },[slot2ProbabilityValue]);

    useEffect(()=>{
        if(slot3ProbabilityValue){
            // balanceProbabilities(3);
            updatePercProbs();
        }
    },[slot3ProbabilityValue]);

    useEffect(()=>{
        if(slot4ProbabilityValue){
            // balanceProbabilities(4);
            updatePercProbs();
        }
    },[slot4ProbabilityValue]);

    useEffect(()=>{
        if(slot5ProbabilityValue){
            // balanceProbabilities(5);
            updatePercProbs();
        }
    },[slot5ProbabilityValue]);

    useEffect(()=>{
        if(slot6ProbabilityValue){
            // balanceProbabilities(6);
            updatePercProbs();
        }
    },[slot6ProbabilityValue]);

    useEffect(()=>{
        if(slot7ProbabilityValue){
            // balanceProbabilities(7);
            updatePercProbs();
        }
    },[slot7ProbabilityValue]);

    useEffect(()=>{
        if(slot8ProbabilityValue){
            // balanceProbabilities(8);
            updatePercProbs();
        }
    },[slot8ProbabilityValue]);

    useEffect(()=>{
        if(slot9ProbabilityValue){
            // balanceProbabilities(9);
            updatePercProbs();
        }
    },[slot9ProbabilityValue]);

    useEffect(()=>{
        if(slot10ProbabilityValue){
            // balanceProbabilities(10);
            updatePercProbs();
        }
    },[slot10ProbabilityValue]);


    function calcSlotsExplicit(){
        let activeSlotsExplicit = 0;
        if (slot1isExplicit){activeSlotsExplicit++} 
        if (slot2isExplicit){activeSlotsExplicit++}
        if (slot3isExplicit){activeSlotsExplicit++}
        if (slot4isExplicit){activeSlotsExplicit++}
        if (slot5isExplicit){activeSlotsExplicit++}
        if (slot6isExplicit){activeSlotsExplicit++}
        if (slot7isExplicit){activeSlotsExplicit++}
        if (slot8isExplicit){activeSlotsExplicit++}
        if (slot9isExplicit){activeSlotsExplicit++}
        if (slot10isExplicit){activeSlotsExplicit++}
        // console.log('explicit slots: ',activeSlotsExplicit);
        return activeSlotsExplicit;
    }
    function calcSlotsActive(){
        let activeSlots = 0;
        if (slot1ProbabilityValue  != 0){activeSlots++}
        if (slot2ProbabilityValue  != 0){activeSlots++}
        if (slot3ProbabilityValue  != 0){activeSlots++}
        if (slot4ProbabilityValue  != 0){activeSlots++}
        if (slot5ProbabilityValue  != 0){activeSlots++}
        if (slot6ProbabilityValue  != 0){activeSlots++}
        if (slot7ProbabilityValue  != 0){activeSlots++}
        if (slot8ProbabilityValue  != 0){activeSlots++}
        if (slot9ProbabilityValue  != 0){activeSlots++}
        if (slot10ProbabilityValue != 0){activeSlots++}
        // console.log('active slots: ',activeSlots);
        return activeSlots;
    }


    useEffect(()=>{
        console.log('EXPLICITS: ', slot1isExplicit, slot2isExplicit, slot3isExplicit, slot4isExplicit, slot5isExplicit, slot6isExplicit, slot7isExplicit, slot8isExplicit, slot9isExplicit, slot10isExplicit )
    },[slot1isExplicit, slot2isExplicit, slot3isExplicit, slot4isExplicit, slot5isExplicit, slot6isExplicit, slot7isExplicit, slot8isExplicit, slot9isExplicit, slot10isExplicit, ])
    
    function balanceProbabilities(slotToIgnore){
        let percentageLeft = 1;
        let slotsExplict = calcSlotsExplicit();
        let slotsActive = calcSlotsActive();
        switch(slotToIgnore){
            case 1:
                percentageLeft = percentageLeft - slot1ProbabilityValue;
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 2:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 3:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 4:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 5:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 6:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 7:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 8:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 9:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 9 && !slot10isExplicit){setslot10ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;
            case 10:
                if (slotsActive> 0 && !slot1isExplicit){setslot1ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 1 && !slot2isExplicit){setslot2ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 2 && !slot3isExplicit){setslot3ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 3 && !slot4isExplicit){setslot4ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 4 && !slot5isExplicit){setslot5ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 5 && !slot6isExplicit){setslot6ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 6 && !slot7isExplicit){setslot7ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 7 && !slot8isExplicit){setslot8ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}
                if (slotsActive> 8 && !slot9isExplicit){setslot9ProbabilityValue(parseInt(percentageLeft / (slotsActive-slotsExplict)));}

                break;

        }
    }

    
    const navigate = useNavigate();
    const goBackToMachinePage = useCallback(() => 
        navigate('/manage/', {replace: true}), [navigate]
    );

    const LookedUpContractInfoSymbol = useWeb3Contract({
        abi: contractCrateABI,
        contractAddress: SelectedLookupNftAddress,
        functionName: "symbol",
      });
    const LookedUpContractInfoName = useWeb3Contract({
        abi: contractCrateABI,
        contractAddress: SelectedLookupNftAddress,
        functionName: "name",
      });
     
      useEffect(()=>{
        if (SelectedLookupNftAddress){
            LookedUpContractInfoName.runContractFunction({
                onError: (error) =>{
                  console.log('ERC721 name lookup ERROR: ',error);
                },
              });
              LookedUpContractInfoSymbol.runContractFunction({
                onError: (error) =>{
                  console.log('ERC721 symbol lookup ERROR: ',error);
                },
              });
        }
      },[SelectedLookupNftAddress]);


     useEffect(() => {

     },[LookedUpContractInfoName]);

     useEffect(() => {
        if (!isWeb3Enabled) {
        // console.log('enabling web3...'); 
        enableWeb3();
        }else {
            console.log('\t\t\t%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  getAllUserNfts.getNFTBalances()',)
            getAllUserNfts.getNFTBalances({
                onError: (error) =>{
                    console.log('some weird getBalances lookup ERROR: ',error);
                },
            });

        }
    }, [isWeb3Enabled]);
     
    useEffect(() => {
        if (!web3) {
            enableWeb3();
        }
    }, [web3]);

    //{ getNFTBalances, data, error, isLoading, isFetching }
    const getAllUserNfts = useNFTBalances({
        params:{
            chain:'rinkeby',
            address: account ? account : ''
        }
    });

    useEffect(()=>{
        if (getAllUserNfts.data){
            console.log('getAllUserNfts.data: \t\t', getAllUserNfts.data);
        if (getAllUserNfts.data.result){
        if (getAllUserNfts.data.result.length >  0){
            console.log('\t\t\t-------------- got all NFTs owned by account [ '+account+' ]', getAllUserNfts.data.result);
            let tempArr = [];
            for (let i = 0; i < getAllUserNfts.data.result.length; i++){
                console.log(getAllUserNfts.data.result[i]);
                tempArr.push({address: getAllUserNfts.data.result[i].token_address, name: getAllUserNfts.data.result[i].name, symbol: getAllUserNfts.data.result[i].symbol, });
            }
            const uniqueArr = tempArr.filter((value, index) => {
                const _value = JSON.stringify(value);
                return index === tempArr.findIndex(obj => {
                    return JSON.stringify(obj) === _value;
                });
            });

            setUserUniqueContractArr(uniqueArr);
            console.log('unique contracts: ',uniqueArr);
        }
        }
        }
    },[getAllUserNfts.data]);



    
    const [slot1Unlocked, setslot1Unlocked] = useState(true);
    const [slot2Unlocked, setslot2Unlocked] = useState(true);
    const [slot3Unlocked, setslot3Unlocked] = useState(true);
    const [slot4Unlocked, setslot4Unlocked] = useState(true);
    const [slot5Unlocked, setslot5Unlocked] = useState(true);
    const [slot6Unlocked, setslot6Unlocked] = useState(true);
    const [slot7Unlocked, setslot7Unlocked] = useState(true);
    const [slot8Unlocked, setslot8Unlocked] = useState(true);
    const [slot9Unlocked, setslot9Unlocked] = useState(true);
    const [slot10Unlocked, setslot10Unlocked] = useState(true);
    
    const [DisplayTokenSelectWindow, setDisplayTokenSelectWindow] = useState(false);
    
    
    const [slotsLockedObj, setslotsLockedObj] = useState(
        {
            1:  false,
            2:  false,
            3:  false,
            4:  false,
            5:  false,
            6:  false,
            7:  false,
            8:  false,
            9:  false,
            10: false,
        });
    const [slotsDisabledObj, setslotsDisabledObj] = useState(
        {
            1:  false,
            2:  false,
            3:  false,
            4:  false,
            5:  false,
            6:  false,
            7:  false,
            8:  false,
            9:  false,
            10: false,
        });

        
    const [HideListOfUserNfts,  setHideListOfUserNfts] = useState(false);
    
    
    const [totalPercentageOfSlots,  settotalPercentageOfSlots] = useState(0);
        

    const [createButtonDisabled,  setcreateButtonDisabled] = useState(true);


    const [toggleSelectingNftDiv,  settoggleSelectingNftDiv] = useState(false);


    const [percentSlot1,  setpercentSlot1] = useState(0);
    const [percentSlot2,  setpercentSlot2] = useState(0);
    const [percentSlot3,  setpercentSlot3] = useState(0);
    const [percentSlot4,  setpercentSlot4] = useState(0);
    const [percentSlot5,  setpercentSlot5] = useState(0);
    const [percentSlot6,  setpercentSlot6] = useState(0);
    const [percentSlot7,  setpercentSlot7] = useState(0);
    const [percentSlot8,  setpercentSlot8] = useState(0);
    const [percentSlot9,  setpercentSlot9] = useState(0);
    const [percentSlot10, setpercentSlot10] = useState(0);
    
    const [factoryTupleAddresses, setfactoryTupleAddresses] = useState(0);
    const [factoryTupleProbabilities, setfactoryTupleProbabilities] = useState(0);
        

    function createNewMachine(){
        console.log('creating new machine with specified settings..........');
        createNewMachineFromFactory.runContractFunction({
            onSuccess : async (tx)=>tx.wait().then(newTx => {
                console.log('new machine successfully created!',newTx)
                
              }),
            onError: (error) =>{
            console.log('123123123 big ERROR: ',error); 
            console.log(factoryTupleAddresses,factoryTupleProbabilities,MachineNameBytes32)
            
            },
        });
    }

    const createNewMachineFromFactory = useWeb3Contract({
        abi: CapsuleFactoryABI,  
        contractAddress: CapsuleFactoryContractAddress,
        functionName: "createMachine",
        params:{
            slots1: factoryTupleAddresses,
            odds1: factoryTupleProbabilities,
            MachineName: MachineNameBytes32? MachineNameBytes32: "blank placeholder",
            CapsuleCost: MachineTokenQtyCost? Moralis.Units.ETH(MachineTokenQtyCost) : null,
            CapsuleTokenAddress: SelectedMachineToken? SelectedMachineToken.token_address : "0x0000000000000000000000000000000000000000" //address for the ERC20 token taken as payment.
        }
        
    });
    
    useEffect(()=>{
        if (factoryTupleProbabilities){
 
        }
    },[factoryTupleProbabilities])

    const getUserRegisteredMachines = useWeb3Contract({
        abi: CapsuleFactoryABI,  
        contractAddress: CapsuleFactoryContractAddress,
        functionName: "getMyMachines",    
      });


    useEffect(()=>{
        if (getUserRegisteredMachines.data){
            console.log('~~~~~ got user registered machines: ',getUserRegisteredMachines.data);
            let temp = "/machine/"+getUserRegisteredMachines.data[getUserRegisteredMachines.data.length-1];
            setGoToNewMachine(temp);

        }
    },[getUserRegisteredMachines.data]);


    useEffect(()=>{
        if (factoryTupleAddresses && factoryTupleProbabilities){
            console.log('creating new machine with specified settings...');
            createNewMachineFromFactory.runContractFunction({
                onSuccess : async (tx)=>tx.wait().then(newTx => {
                    console.log('new machine successfully created!',newTx)
                    setcreateMachineStatusMsg('Success!')
                    //call getUserMachines() and navigate to the last one in the list
                    getUserRegisteredMachines.runContractFunction();
                }),
                onComplete : async (tx) => {
                    console.log('Awaiting chain confirmation...',tx)
                    setcreateMachineStatusMsg('Awaiting chain confirmation...')
                },
                onError: (error) =>{
                console.log('123123123 big ERROR: ',error); 
                console.log(factoryTupleAddresses,factoryTupleProbabilities,MachineNameBytes32, MachineTokenQtyCost, SelectedMachineToken)
                
                },
            });
        }
    },[factoryTupleAddresses, factoryTupleProbabilities])

    function newCreateMachine(){
        // if (TotalPercentageProbabilities == 100){

            let preparedAddressTuple = [slot1NewContractLookup, slot2NewContractLookup, slot3NewContractLookup, slot4NewContractLookup, slot5NewContractLookup, slot6NewContractLookup, slot7NewContractLookup, slot8NewContractLookup, slot9NewContractLookup, slot10NewContractLookup];
            // let preparedProbabilityTuple = [((slot2ProbabilityValue/100)*1000000), ((percentSlot2/100)*1000000), ((percentSlot3/100)*1000000), ((percentSlot4/100)*1000000), ((percentSlot5/100)*1000000), ((percentSlot6/100)*1000000), ((percentSlot7/100)*1000000), ((percentSlot8/100)*1000000), ((percentSlot9/100)*1000000), ((percentSlot10/100)*1000000)]
            let preparedProbabilityTuple = [((slot1ProbabilityValue/100)*1000000), ((slot2ProbabilityValue/100)*1000000), ((slot3ProbabilityValue/100)*1000000), ((slot4ProbabilityValue/100)*1000000), ((slot5ProbabilityValue/100)*1000000), ((slot6ProbabilityValue/100)*1000000), ((slot7ProbabilityValue/100)*1000000), ((slot8ProbabilityValue/100)*1000000), ((slot9ProbabilityValue/100)*1000000), ((slot10ProbabilityValue/100)*1000000), ]
            console.log('*******************\t',preparedAddressTuple);
            console.log('*******************\t',preparedProbabilityTuple);
            setfactoryTupleAddresses    (preparedAddressTuple);
            setfactoryTupleProbabilities(preparedProbabilityTuple);
            
            //[250000, 250000, 250000, 250000, 0,0,0,0,0,0]    
        // }
    }

    // useEffect(()=>{
    //     // if ((percentSlot1)&&(percentSlot2)&&(percentSlot3)&&(percentSlot4)&&(percentSlot5)&&(percentSlot6)&&(percentSlot7)&&(percentSlot8)&&(percentSlot9)&&(percentSlot10)){
    //     //     console.log('updating total percentages...');
    //         settotalPercentageOfSlots(parseFloat(percentSlot1) + parseFloat(percentSlot2) + parseFloat(percentSlot3) + parseFloat(percentSlot4) + parseFloat(percentSlot5) + parseFloat(percentSlot6) + parseFloat(percentSlot7) + parseFloat(percentSlot8) + parseFloat(percentSlot9) + parseFloat(percentSlot10));
    //     // }
        
    // },[percentSlot1, percentSlot2, percentSlot3, percentSlot4, percentSlot5, percentSlot6, percentSlot7, percentSlot8, percentSlot9, percentSlot10])

    
    const {slot1NewContractTokenName, setslot1NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot2NewContractTokenName, setslot2NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot3NewContractTokenName, setslot3NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot4NewContractTokenName, setslot4NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot5NewContractTokenName, setslot5NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot6NewContractTokenName, setslot6NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot7NewContractTokenName, setslot7NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot8NewContractTokenName, setslot8NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot9NewContractTokenName, setslot9NewContractTokenName}   = useContext(NftMoreInfoContext);
    const {slot10NewContractTokenName, setslot10NewContractTokenName} = useContext(NftMoreInfoContext);

    
//   const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
//   const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
//   const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
//   const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
    
    const [slot1NewContractLookup, setslot1NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot2NewContractLookup, setslot2NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot3NewContractLookup, setslot3NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot4NewContractLookup, setslot4NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot5NewContractLookup, setslot5NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot6NewContractLookup, setslot6NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot7NewContractLookup, setslot7NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot8NewContractLookup, setslot8NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot9NewContractLookup, setslot9NewContractLookup] =   useState("0x0000000000000000000000000000000000000000");
    const [slot10NewContractLookup, setslot10NewContractLookup] = useState("0x0000000000000000000000000000000000000000");

    //defaults to whatever chain METAMASK is currently set to
    const fetchContractCreateNewInventorySlot1 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot1NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot2 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot2NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot3 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot3NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot4 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot4NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot5 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot5NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot6 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot6NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot7 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot7NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot8 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot8NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot9 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot9NewContractLookup,
        functionName: "name",
    });


    const fetchContractCreateNewInventorySlot10 = useWeb3Contract({
        abi: contractCrateABI,  
        contractAddress: slot10NewContractLookup,
        functionName: "name",
    });

    useEffect(()=>{
        if(SelectedMachineToken){
            console.log('selected token: ',SelectedMachineToken);
            setDisplayTokenSelectWindow(false);
        }
    },[SelectedMachineToken]);


    useEffect(()=>{
        if (slot1NewContractLookup  != '0x0000000000000000000000000000000000000000') {
            fetchContractCreateNewInventorySlot1.runContractFunction({
                onError: (error) =>{
                    console.log('slot 1 lookup big ERROR: ',error); 
                    setslot1NewContractTokenName('error: bad input');

                  },
                  onSuccess : (tx) => {
                    // console.log('finished lookup SUCCESS',tx)
                    setslot1Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [1]: true});


                  },
            });
        }
    },[slot1NewContractLookup]);

    useEffect(()=>{
        if ((slot2NewContractLookup != '0x0') && (slot2NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot2.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot2NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot2Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [2]: true});
                  },
            });
        }
    },[slot2NewContractLookup]);

    useEffect(()=>{
        if ((slot3NewContractLookup != '0x0') && (slot3NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot3.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot3NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot3Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [3]: true});
                  },
            });
        }
    },[slot3NewContractLookup]);

    useEffect(()=>{
        if ((slot4NewContractLookup != '0x0') && (slot4NewContractLookup != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot4.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot4NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot4Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [4]: true});
                  },
            });
        }
    },[slot4NewContractLookup]);

    useEffect(()=>{
        if ((slot5NewContractLookup != '0x0') && (slot5NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot5.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot5NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot5Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [5]: true});
                  },
            });
        }
    },[slot5NewContractLookup]);

    useEffect(()=>{
        if ((slot6NewContractLookup != '0x0') && (slot6NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot6.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error);
                    setslot6NewContractTokenName('error: bad input'); 
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot6Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [6]: true});
                  },
            });
        }
    },[slot6NewContractLookup]);

    useEffect(()=>{
        if ((slot7NewContractLookup != '0x0') && (slot7NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot7.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error);
                    setslot7NewContractTokenName('error: bad input'); 
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot7Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [7]: true});
                  },
            });
        }
    },[slot7NewContractLookup]);

    useEffect(()=>{
        if ((slot8NewContractLookup != '0x0') && (slot8NewContractLookup != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot8.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot8NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot8Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [8]: true});
                  },
            });
        }
    },[slot8NewContractLookup]);

    useEffect(()=>{
        if ((slot9NewContractLookup != '0x0') && (slot9NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot9.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot9NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot9Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [9]: true});
                  },
            });
        }
    },[slot9NewContractLookup]);

    useEffect(()=>{
        if ((slot10NewContractLookup != '0x0') && (slot10NewContractLookup  != '0x0000000000000000000000000000000000000000')) {
            fetchContractCreateNewInventorySlot10.runContractFunction({
                onError: (error) =>{
                    console.log('big ERROR: ',error); 
                    setslot10NewContractTokenName('error: bad input');
                  },
                  onSuccess : (tx) => {
                    console.log('finished lookup SUCCESS',tx)
                    setslot10Unlocked(false);
                    setslotsLockedObj({...slotsLockedObj, [10]: true});
                  },
            });
        }
    },[slot10NewContractLookup]);
   

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot1.data){
          console.log('[1]  name: ',fetchContractCreateNewInventorySlot1.data)
          setslot1NewContractTokenName(fetchContractCreateNewInventorySlot1.data);
      }  
    },[fetchContractCreateNewInventorySlot1.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot2.data){
          console.log('[2]  name: ',fetchContractCreateNewInventorySlot2.data)
          setslot2NewContractTokenName(fetchContractCreateNewInventorySlot2.data);
      }  
    },[fetchContractCreateNewInventorySlot2.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot3.data){
          console.log('[3]  name: ',fetchContractCreateNewInventorySlot3.data)
          setslot3NewContractTokenName(fetchContractCreateNewInventorySlot3.data);
      }  
    },[fetchContractCreateNewInventorySlot3.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot4.data){
          console.log('[4]  name: ',fetchContractCreateNewInventorySlot4.data)
          setslot4NewContractTokenName(fetchContractCreateNewInventorySlot4.data);
      }  
    },[fetchContractCreateNewInventorySlot4.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot5.data){
          console.log('[5]  name: ',fetchContractCreateNewInventorySlot5.data)
          setslot5NewContractTokenName(fetchContractCreateNewInventorySlot5.data);
      }  
    },[fetchContractCreateNewInventorySlot5.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot6.data){
          console.log('[6]  name: ',fetchContractCreateNewInventorySlot6.data)
          setslot6NewContractTokenName(fetchContractCreateNewInventorySlot6.data);
      }  
    },[fetchContractCreateNewInventorySlot6.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot7.data){
          console.log('[7]  name: ',fetchContractCreateNewInventorySlot7.data)
          setslot7NewContractTokenName(fetchContractCreateNewInventorySlot7.data);
      }  
    },[fetchContractCreateNewInventorySlot7.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot8.data){
          console.log('[8]  name: ',fetchContractCreateNewInventorySlot8.data)
          setslot8NewContractTokenName(fetchContractCreateNewInventorySlot8.data);
      }  
    },[fetchContractCreateNewInventorySlot8.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot9.data){
          console.log('[9]  name: ',fetchContractCreateNewInventorySlot9.data)
          setslot9NewContractTokenName(fetchContractCreateNewInventorySlot9.data);
      }  
    },[fetchContractCreateNewInventorySlot9.data])

    useEffect(()=>{
      if (fetchContractCreateNewInventorySlot10.data){
          console.log('[10]  name: ',fetchContractCreateNewInventorySlot1.data)
          setslot10NewContractTokenName(fetchContractCreateNewInventorySlot10.data);
      }  
    },[fetchContractCreateNewInventorySlot10.data])
    
    // useEffect(()=>{
    //   if (slot2NewContractTokenName){
    //     //   console.log('2 updated: ',slot2NewContractTokenName)

    //   }  
    // },[slot2NewContractTokenName])


    function openTokenSelectWindow(){

    }



    function disableSlot1(){
        setslot1NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot1NewContractTokenName('');
        setslotsLockedObj  ({...slotsLockedObj, [1]: true});
        setslotsDisabledObj({...slotsDisabledObj, [1]: true});
        setslot1Unlocked(false);
    }
    function disableSlot2(){
        setslot2NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot2NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [2]: true});
        setslotsDisabledObj({...slotsDisabledObj, [2]: true});
        setslot2Unlocked(false);
    }
    function disableSlot3(){
        setslot3NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot3NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [3]: true});
        setslotsDisabledObj({...slotsDisabledObj, [3]: true});
        setslot3Unlocked(false);
    }
    function disableSlot4(){
        setslot4NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot4NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [4]: true});
        setslotsDisabledObj({...slotsDisabledObj, [4]: true});
        setslot4Unlocked(false);
    }
    function disableSlot5(){
        setslot5NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot5NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [5]: true});
        setslotsDisabledObj({...slotsDisabledObj, [5]: true});
        setslot5Unlocked(false);
    }
    function disableSlot6(){
        setslot6NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot6NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [6]: true});
        setslotsDisabledObj({...slotsDisabledObj, [6]: true});
        setslot6Unlocked(false);
    }
    function disableSlot7(){
        setslot7NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot7NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [7]: true});
        setslotsDisabledObj({...slotsDisabledObj, [7]: true});
        setslot7Unlocked(false);
    }
    function disableSlot8(){
        setslot8NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot8NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [8]: true});
        setslotsDisabledObj({...slotsDisabledObj, [8]: true});
        setslot8Unlocked(false);
    }
    function disableSlot9(){
        setslot9NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot9NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [9]: true});
        setslotsDisabledObj({...slotsDisabledObj, [9]: true});
        setslot9Unlocked(false);
    }
    function disableSlot10(){
        setslot10NewContractLookup('0x0000000000000000000000000000000000000000');
        setslot10NewContractTokenName('< DISABLED SLOT >');
        setslotsLockedObj({...slotsLockedObj, [10]: true});
        setslotsDisabledObj({...slotsDisabledObj, [10]: true});
        setslot10Unlocked(false);
    }


    function checkSlotValue1(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot1(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot1(validatedValue);
        }
    }

    function checkSlotValue2(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot2(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot2(validatedValue);
        }
    }

    function checkSlotValue3(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot3(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot3(validatedValue);
        }
    }

    function checkSlotValue4(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot4(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot4(validatedValue);
        }
    }

    function checkSlotValue5(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot5(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot5(validatedValue);
        }
    }

    function checkSlotValue6(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot6(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot6(validatedValue);
        }
    }

    function checkSlotValue7(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot7(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot7(validatedValue);
        }
    }


    function checkSlotValue8(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot8(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot8(validatedValue);
        }
    }


    function checkSlotValue9(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot9(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot9(validatedValue);
        }
    }

    function checkSlotValue10(percentageToValidate){
        if (percentageToValidate.target.value == ''){setpercentSlot10(0)}
        if ((percentageToValidate.target.value) && ((percentageToValidate.target.value.match(/^\d+\.\d+$/) || (percentageToValidate.target.value.match(/^\d+$/)) || (percentageToValidate.target.value.match(/.+\.$/)) || (percentageToValidate.target.value.match(/^./)) ))){
            let validatedValue = percentageToValidate.target.value;
            if (validatedValue.match(/^\.$/)){
                validatedValue = "0"+validatedValue;
                parseFloat(validatedValue);
            }
            console.log(validatedValue);
            setpercentSlot10(validatedValue);
        }
    }

    function checkMachineName(MachineName){
        if (MachineName.target.value.length <=42){
            setMachineNameBytes32(MachineName.target.value);
        }
    }
    function checkFilterName(FilterValue){
        console.log('new filter value: ',FilterValue.target.value);
        if (FilterValue.target.value == ''){
            setHideListOfUserNfts(false);
        }
        if (ethers.utils.isAddress(FilterValue.target.value)) {
            console.log('GASP! This is an ETH address!');
            setSelectedLookupNftAddress(FilterValue.target.value);
            setHideListOfUserNfts(true);
            

        }
        else {
            if (FilterValue.target.value.length <=42){
                setsearchFilterValue(FilterValue.target.value);
            }
        }
    }


    function checkCapsuleCost(Thing){
        console.log(Thing.target.value);
        //do something with checkCapsuleCost.target.value
        //do some logic checking to make sure it's a number, above zero, etc.
            // setMachineTokenQtyCost(Thing.target.value? Moralis.Units.ETH(Thing.target.value): 0);
            setMachineTokenQtyCost(Thing.target.value? Thing.target.value: 0);

    }

    useEffect(()=>{
        if (MachineNameBytes32){
            console.log('new value: ',MachineNameBytes32);
        }
    },[MachineNameBytes32])

    function checkValue1(addressToValidate){
        if ((addressToValidate.target.value) && ((addressToValidate.target.value.length < 42))){
            console.log('EMPTYING TOKEN NAME');
            setslot1NewContractTokenName('');
        }
        if ((addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[1] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot1NewContractLookup(addressToValidate.target.value);
                        
        }
    
    }
    function checkValue2(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[2] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot2NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue3(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[3] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot3NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue4(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[4] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot4NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue5(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[5] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot5NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue6(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[6] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot6NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue7(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[7] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot7NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue8(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[8] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot8NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue9(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[9 validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot9NewContractLookup(addressToValidate.target.value);
                        
        }
    }
    function checkValue10(addressToValidate){
        if ((addressToValidate.target.value) && (addressToValidate.target.value.length == 42) && (addressToValidate.target.value[0] == "0")&& (addressToValidate.target.value[1] == "x")){
            console.log('[10] validated address: ',addressToValidate.target.value, addressToValidate.target.value.length, )
            setslot10NewContractLookup(addressToValidate.target.value);
                        
        }
    }

    function checkSlotsLocked(){
        //check if each slot is locked and return true. else return false;
        let q = false;
        for (let key in slotsLockedObj){
            if (slotsLockedObj[key] == false){
                // console.log('we got a false [ '+key+' ] : ',slotsLockedObj[key])
                return false;
            }
        }
        console.log('ALL ARE TRUE!!!');
        return(true);
    }


    function configureNftSlot(slotNumber){
        setNftConfigureSlot(slotNumber);
        settoggleSelectingNftDiv(!toggleSelectingNftDiv);
        // open the div dipshit
    }
    
    useEffect(()=>{
        if (Input1Selection){
            console.log('slot 1 selected address: ',Input1Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot1ProbabilityValue(1);
            
        }
    },[Input1Selection])

    useEffect(()=>{
        if (Input2Selection){
            console.log('slot 2 selected address: ',Input2Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot2ProbabilityValue(1);
        }
    },[Input2Selection])

    
    useEffect(()=>{
        if (Input3Selection){
            console.log('slot 3 selected address: ',Input3Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot3ProbabilityValue(1);
        }
    },[Input3Selection])

    
    useEffect(()=>{
        if (Input4Selection){
            console.log('slot 4 selected address: ',Input4Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot4ProbabilityValue(1);
        }
    },[Input4Selection])

    
    useEffect(()=>{
        if (Input5Selection){
            console.log('slot 5 selected address: ',Input5Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot5ProbabilityValue(1);
        }
    },[Input5Selection])

    
    useEffect(()=>{
        if (Input6Selection){
            console.log('slot 6 selected address: ',Input6Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot6ProbabilityValue(1);
        }
    },[Input6Selection])

    
    useEffect(()=>{
        if (Input7Selection){
            console.log('slot 7 selected address: ',Input7Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot7ProbabilityValue(1);
        }
    },[Input7Selection])

    
    useEffect(()=>{
        if (Input8Selection){
            console.log('slot 8 selected address: ',Input8Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot8ProbabilityValue(1);
        }
    },[Input8Selection])

    
    useEffect(()=>{
        if (Input9Selection){
            console.log('slot 9 selected address: ',Input9Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
            setslot9ProbabilityValue(1);
        }
    },[Input9Selection])

    
    useEffect(()=>{
        if (Input10Selection){
            console.log('slot 10 selected address: ',Input10Selection );
            settoggleSelectingNftDiv(!toggleSelectingNftDiv);
        }
    },[Input10Selection])

    
    function determineSelectedSlotAndSet(object) {
        console.log(NftConfigureSlot, object);
        setsearchFilterValue('');
        setHideListOfUserNfts(false);
        switch (NftConfigureSlot) {
            case 1:
                setInput1Selection(object)
                setslot1NewContractLookup(object.address);
                break;
            case 2:
                setInput2Selection(object)
                setslot2NewContractLookup(object.address);
                break;
            case 3:
                setInput3Selection(object)
                setslot3NewContractLookup(object.address);
                break;
            case 4:
                setInput4Selection(object)
                setslot4NewContractLookup(object.address);
                break;
            case 5:
                setInput5Selection(object)
                setslot5NewContractLookup(object.address);
                break;
            case 6:
                setInput6Selection(object)
                setslot6NewContractLookup(object.address);
                break;
            case 7:
                setInput7Selection(object)
                setslot7NewContractLookup(object.address);
                break;
            case 8:
                setInput8Selection(object)
                setslot8NewContractLookup(object.address);
                break;
            case 9:
                setInput9Selection(object)
                setslot9NewContractLookup(object.address);
                break;
            case 10:
                setInput10Selection(object)
                setslot10NewContractLookup(object.address);
                break;
        }
    }


    function setAllSlotsToEqualChance(){
        let activeCount = 0;
        if (slot1ProbabilityValue  != 0){ activeCount++ }
        if (slot2ProbabilityValue  != 0){ activeCount++ }
        if (slot3ProbabilityValue  != 0){ activeCount++ }
        if (slot4ProbabilityValue  != 0){ activeCount++ }
        if (slot5ProbabilityValue  != 0){ activeCount++ }
        if (slot6ProbabilityValue  != 0){ activeCount++ }
        if (slot7ProbabilityValue  != 0){ activeCount++ }
        if (slot8ProbabilityValue  != 0){ activeCount++ }
        if (slot9ProbabilityValue  != 0){ activeCount++ }
        if (slot10ProbabilityValue != 0){ activeCount++ }
        
        console.log('equalizing slot odds for ',activeCount,' slots');
        if (activeCount > 1){  setslot1ProbabilityValue(parseInt(100 / activeCount)) } //set to 1 not 0. Two slot minimum to use the machine.
        if (activeCount > 1){  setslot2ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 2){  setslot3ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 3){  setslot4ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 4){  setslot5ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 5){  setslot6ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 6){  setslot7ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 7){  setslot8ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 8){  setslot9ProbabilityValue(parseInt(100 / activeCount)) }
        if (activeCount > 9){ setslot10ProbabilityValue(parseInt(100 / activeCount)) }


        // setslot1ProbabilityValue(50)
    }

    return (
    <div style={{ display:'flex',justifyContent:'center',alignContent:'center', width:'100vw', height:'100vh', background:'linear-gradient(90deg, rgba(52,0,0,0.26934523809523814) 5%, rgba(100,100,250,0.01) 50%, rgba(52,0,0,0.27494747899159666) 95%)'}}>
        <div style={{position:'absolute', top:'4vh',left:'8vw',width:'10vw', height:'4vh',color:'#fff'}}>
            <TopNavBar />
            {/* <div style={{zIndex:'2', cursor:'pointer', display:'flex', justifyContent:'center', border:'1px solid #888', position:'absolute', top:'4%',left:'16%',height:'30px', background:'#222', borderRadius:'25px',paddingLeft:'13px',paddingRight:'15px', padding:'3px'}} >
            🔗 {ActiveNetworkFriendlyName? ActiveNetworkFriendlyName : <>loading...</>}
            </div> */}
            
        </div>
        
        {GoToNewMachine? 
            <Navigate to={GoToNewMachine} />
        :<></>}

        {!toggleSelectingNftDiv? 
        <div style={{border:ActiveNetworkBorderColor? ActiveNetworkBorderColor : '1px solid rgba(165, 221, 255 ,0.2)', display:'flex',position:'absolute',top:'2%',justifyContent:'center',alignContent:'center',borderRadius:'25px', width:'40vw',height:'95%',color:'#fff', backgroundColor:ActiveNetworkThemeColor? ActiveNetworkThemeColor: 'rgba(165, 221, 255 ,0.25)'}}>
            
            {Balancing? 
            <div onClick={()=>{setAllSlotsToEqualChance()}} className="selectTokenButtonEmpty" style={{display:'flex', justifyContent:'center', textAlign:'center', cursor:'pointer', zIndex:'9999', position:'absolute', right:'3.5vw', paddingLeft:'0.5vw',paddingRight:'0.5vw', top:'24.5vh', width:'5vw',borderRadius:'10px',}}>
                Balance Odds
            </div>: <></>}

            <div style={{display:'flex',justifyContent:'center',position:'absolute',fontSize:'20px', width:'95%',border:'0px dashed #ff00ff'}}>
                    
                    <div style={{display:'flex',justifyContent:'center', color:'#fff', paddingTop:'0.5vh', position:'absolute',top:'0vw',width:'20vw',height:'6vh',backgroundColor:'rgba(50,50,50,0)'}}>
                        {/* <input  autoComplete='off' type="text" maxLength="32" size="32" placeholder="(Max 32 Characters)" style={{ backgroundColor:'#333', color:'#fff', paddingLeft:'8px',paddingTop:'5px',paddingBottom:'5px'}} name="name" /> */}
                        <input autoComplete='off' onChange={checkMachineName} value={MachineNameBytes32? MachineNameBytes32 :""} maxLength="42" size="45" placeholder="Give your Machine a public name" name="name"  style={{height:'5vh', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px',paddingLeft:'1vw', outline:'none'}}></input>
                    </div>
                    <div style={{position:'absolute',top:'20vh',}}>
                        Select up to 10 contracts to use:
                    </div>

                    
                    

                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'30vh', height:'5vh', width:'100%',border:'0px solid #00ffff'}}>
                   
                            {Input1Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot1ProbabilityValue} changeSliderValue={setslot1ProbabilityValue} setSliderExplicit={setslot1isExplicit}/>
                            </div>
                            :<></>}
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                 1.)
                            </div>
                            <div onClick={()=>{Input1Selection? configureNftSlot(1): <></>}} className="" style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input1Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input1Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input1Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input1Selection.symbol}</div>
                                </div>
                                </>
                                :
                                <div className="selectTokenButtonEmpty" onClick={()=>{ configureNftSlot(1)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'10px', position:'absolute',top:'0', width:'5vw',height:'80%',}}>
                                    Select
                                </div>
                                }
                            </div> 
  

                            <CapsuleIconCreateMachine />

                            <div style={{fontSize:'1vw', display:'flex', justifyContent:'center', alignItems:'center', color:'#fff', position:'absolute',top:'-22vh',left:'4.7vw', backgroundColor:'rgba(165, 221, 255 ,0.2)',border:'1px solid rgba(165, 221, 255 ,0.5)', width:'28.5vw',height:'15vh', borderRadius:'15px',}}>
                                
                                <div style={{position:'absolute',left:'5vw'}}>
                                Each Capsule will cost:
                                </div>
                                    {/* <input  autoComplete='off' onChange={checkCapsuleCost} value={MachineTokenQtyCost? Moralis.Units.FromWei(MachineTokenQtyCost):"0"} type="text" maxLength="10" size="5" placeholder="Enter Qty." style={{position:'absolute', right:'8vw',fontSize:'1vw', backgroundColor:'#333', color:'#fff', paddingLeft:'0.2vw',paddingTop:'0.2vh',paddingBottom:'0.2vh'}} name="name" /> */}
                                    <input  autoComplete='off' onChange={checkCapsuleCost} value={MachineTokenQtyCost? MachineTokenQtyCost:"0"} type="text" maxLength="10" size="5" placeholder="Enter Qty." style={{position:'absolute', right:'8vw',fontSize:'1vw', backgroundColor:'#333', color:'#fff', paddingLeft:'0.2vw',paddingTop:'0.2vh',paddingBottom:'0.2vh'}} name="name" />

                                <div className={!SelectedMachineToken?'selectTokenButtonEmpty':'selectTokenButtonFilled'} style={{position:'absolute', width:'7vw',height:'3.5vh', display:'flex',justifyContent:'center',alignItems:'center', fontWeight:'bold', right:'0.5vw', top:'5.5vh',borderRadius:'25px',}}>
                                    {!SelectedMachineToken?
                                        <div onClick={()=>{setDisplayTokenSelectWindow(!DisplayTokenSelectWindow)}} style={{fontSize:'0.8vw',cursor:'pointer'}}>
                                            Select a Token&nbsp;
                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                        </div>
                                        :
                                        <div onClick={()=>{setDisplayTokenSelectWindow(!DisplayTokenSelectWindow)}} style={{fontSize:'0.8vw',cursor:'pointer'}}>
                                            {SelectedMachineToken.symbol}
                                        </div>
                                    }
                                </div>
                                
                            </div>
                    </div>


                    {Input1Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'35.1vh', width:'100%',border:'0px solid #00ffff'}}>
                            {Input2Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot2ProbabilityValue} changeSliderValue={setslot2ProbabilityValue} setSliderExplicit={setslot2isExplicit}/>
                            </div>
                            :<></>}
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    2.)
                            </div>
                            <div onClick={()=>{setBalancing(true); Input2Selection? configureNftSlot(2): <></>}} style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input2Selection? 
                                 <>
                                 <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                    <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input2Selection.name}</div>
                                    <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input2Selection.address, 6)}</div>
                                    <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input2Selection.symbol}</div>
                                 </div>
                                 </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(2)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
 

                        </div>
                    :<></>
                    }

                    {Input2Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'40.2vh', width:'100%',border:'0px solid #00ffff'}}>
                             {Input3Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot3ProbabilityValue} changeSliderValue={setslot3ProbabilityValue} setSliderExplicit={setslot3isExplicit}/>
                            </div>
                            :<></>}                  
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    3.)
                            </div>
                            <div onClick={()=>{Input3Selection? configureNftSlot(3): <></>}}style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input3Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input3Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input3Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input3Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(3)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
   

                        </div>
                    :<></>
                    }

                    {Input3Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'45.3vh', width:'100%',border:'0px solid #00ffff'}}>
                             {Input4Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot4ProbabilityValue} changeSliderValue={setslot4ProbabilityValue} setSliderExplicit={setslot4isExplicit}/>
                            </div>
                            :<></>}                  
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    4.)
                            </div>
                            <div onClick={()=>{Input4Selection? configureNftSlot(4): <></>}}style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input4Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input4Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input4Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input4Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(4)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
  

                        </div>
                    :<></>
                    }


            
                    {Input4Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'50.4vh', width:'100%',border:'0px solid #00ffff'}}>
                             {Input5Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot5ProbabilityValue} changeSliderValue={setslot5ProbabilityValue} setSliderExplicit={setslot6isExplicit}/>
                            </div>
                            :<></>}                  
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    5.)
                            </div>
                            <div onClick={()=>{Input5Selection? configureNftSlot(5): <></>}}style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input5Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input5Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input5Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input5Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(5)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
  

                        </div>
                    :<></>
                    }

                    {Input5Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'55.5vh', width:'100%',border:'0px solid #00ffff'}}>
                            {Input6Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot6ProbabilityValue} changeSliderValue={setslot6ProbabilityValue} setSliderExplicit={setslot6isExplicit}/>
                            </div>
                            :<></>}                   
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    6.)
                            </div>
                            <div onClick={()=>{Input6Selection? configureNftSlot(6): <></>}}style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input6Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input6Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input6Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input6Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(6)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
        

                        </div>
                    :<></>
                    }

                    {Input6Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'60.6vh', width:'100%',border:'0px solid #00ffff'}}>
                             {Input7Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot7ProbabilityValue} changeSliderValue={setslot7ProbabilityValue} setSliderExplicit={setslot7isExplicit}/>
                            </div>
                            :<></>}                  
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    7.)
                            </div>
                            <div onClick={()=>{Input7Selection? configureNftSlot(7): <></>}} style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input7Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input7Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input7Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input7Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(7)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
    
                        </div>
                    :<></>
                    }


            
                    {Input7Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'65.7vh', width:'100%',border:'0px solid #00ffff'}}>
                            {Input8Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot8ProbabilityValue} changeSliderValue={setslot8ProbabilityValue} setSliderExplicit={setslot8isExplicit}/>
                            </div>
                            :<></>}                   
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    8.)
                            </div>
                            <div onClick={()=>{Input8Selection? configureNftSlot(8): <></>}} style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input8Selection? 
                                 <>
                                 <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                    <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input8Selection.name}</div>
                                    <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input8Selection.address, 6)}</div>
                                    <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input8Selection.symbol}</div>
                                 </div>
                                 </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(8)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
        

                        </div>
                    :<></>
                    }

                    {Input8Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'70.8vh', width:'100%',border:'0px solid #00ffff'}}>
                            {Input9Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot9ProbabilityValue} changeSliderValue={setslot9ProbabilityValue} setSliderExplicit={setslot9isExplicit}/>
                            </div>
                            :<></>}                   
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    9.)
                            </div>
                            <div onClick={()=>{Input9Selection? configureNftSlot(9): <></>}}style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input9Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input9Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input9Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input9Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(9)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
           

                        </div>
                    :<></>
                    }
                    {Input9Selection?
                        <div  className="" style={{display:'flex', justifyContent:'center', position:'absolute', top:'75.9vh', width:'100%',border:'0px solid #00ffff'}}>
                            {Input10Selection? <div className="slider" style={{position:'absolute',width:'10vw',top:'0.5vh',  right:'0vw', }}>
                                <SlotProbabilitySlider sliderValue={slot10ProbabilityValue} changeSliderValue={setslot10ProbabilityValue} setSliderExplicit={setslot9isExplicit}/>
                            </div>
                            :<></>}                   
                       
                            <div style={{position:'absolute', left:'0%',}}>
                                    10.)
                            </div>
                            <div onClick={()=>{Input10Selection? configureNftSlot(10): <></>}} style={{display:'flex',justifyContent:'center', position:'absolute',  height:'6vh',width:'40%',  border:'0px solid #00ffff'}}>
                                
                                {Input10Selection? 
                                <>
                                <div style={{lineHeight:'180%', textAlign:'center', height:'5vh',width:'100%', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px', }}>
                                   <div style={{position:'absolute',left:'5%',fontSize:'80%',top:'0',}}> {Input10Selection.name}</div>
                                   <div style={{position:'absolute',left:'5%',bottom:'5%', fontStyle:'italic', color:'#aaa'}}> {getEllipsisTxt(Input10Selection.address, 6)}</div>
                                   <div style={{position:'absolute',right:'5%',fontSize:'100%',top:'0',}}> {Input10Selection.symbol}</div>
                                </div>
                                </>:
                                <div className="selectTokenButtonEmpty" onClick={()=>{configureNftSlot(10)}} style={{cursor:'pointer', fontSize:'1.2vw', position:'absolute',display:'flex',marginTop:'1vh', justifyContent:'center', alignItems:'center', borderRadius:'25px', position:'absolute',top:'0', width:'5vw',height:'100%',}}>
                                    Select
                                </div>
                                }
                            </div> 
                            {/* <div style={{position:'absolute', top:'1vh', right:'0vw', filter:'hue-rotate(0deg)', cursor:'pointer'}}>
                                &nbsp;🔓 &nbsp;
                            </div>  */}
                            {/* {slotsLockedObj[1]? <></>:<div style={{position:'absolute', top:'0%',right:'12vw',cursor:'pointer'}} onClick={ ()=>{ disableSlot1() } }>
                                Disable
                            </div> 
                            } */}
      
                        </div>
                    :<></>
                    }



            </div>
        </div>






        :
        <div style={{alignItems:'center',zIndex:'9999', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor : '1px solid rgba(165, 221, 255 ,0.2)', display:'flex',position:'absolute',top:'2%',justifyContent:'center',alignContent:'center',borderRadius:'25px', width:'40vw',height:'95%',color:'#fff', backgroundColor:ActiveNetworkThemeColor? ActiveNetworkThemeColor: 'rgba(165, 221, 255 ,0.25)'}}>
            <div onClick={()=>{settoggleSelectingNftDiv(!toggleSelectingNftDiv);  }} style={{cursor:'pointer', position:'absolute',right:'1vw',top:'0vh',fontSize:'60px',color:'#fff'}}>
                ×
            </div>
           
                    <div style={{position:'absolute', top:'1vh', left:'2vw', fontSize:'45px',}}>
                        {NftConfigureSlot? NftConfigureSlot: <></>}
                    </div>
                    <div style={{display:'flex',justifyContent:'center', color:'#fff', paddingTop:'0.5vh', position:'absolute',top:'1vw',width:'20vw',height:'6vh',backgroundColor:'rgba(50,50,50,0)'}}>
                        {/* <input  autoComplete='off' type="text" maxLength="32" size="32" placeholder="(Max 32 Characters)" style={{ backgroundColor:'#333', color:'#fff', paddingLeft:'8px',paddingTop:'5px',paddingBottom:'5px'}} name="name" /> */}
                        {/* <input autoComplete='off' onChange={checkMachineName} maxLength="42" size="45" placeholder="Search to filter or paste contract address" name="name"  style={{height:'5vh', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px',paddingLeft:'1vw', outline:'none'}}></input> */}
                        <input autoComplete='off' onChange={checkFilterName} maxLength="42" size="45" placeholder="Search to filter or paste contract address" name="name"  style={{height:'5vh', fontSize:'1vw',color:'#fff',backgroundColor:ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(0,0,0,0)',border:'0.5px solid #ccc', borderRadius:'15px',paddingLeft:'1vw', outline:'none'}}></input>
                    </div>

                    <div style={{ overflowY:'scroll', paddingTop:'0.5vh', paddingBottom:'0.5vh', paddingLeft:'5%',paddingRight:'5%', position:'absolute',width:'90%',height:'85%',top:'10vh', borderRadius:'25px', }}>
                        
                        {!HideListOfUserNfts && UserUniqueContractArr? UserUniqueContractArr.map((object, index)=>{
                            if(searchFilterValue){
                                if (object.name.toUpperCase().includes(searchFilterValue.toUpperCase()) ){
                                return(
                                    <div onClick={()=>{ determineSelectedSlotAndSet(object) }} className="contractListItem" key={index} style={{border:'3px solid #00ffff', position:'relative',alignItems:'center', width:'100%',backgroundColor:ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter:'rgba(50,50,50,1)',height:'5vh', marginBottom:'1vh'}}>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',}}>
                                            <a href = {'https://rinkeby.etherscan.io/address/'+object.address} target="blank" style={{color: '#8ebf42'}}> {getEllipsisTxt(object.address, 6)} </a>
                                        </div>
                                        <div style={{fontSize:'3.5vw', position:'absolute', left:'1vw',top:'0%'}}>
                                            {object.name}
                                        </div>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',bottom:'0%'}}>
                                            {object.symbol}
                                        </div>
                                    </div>
                                )
                                }
                                else {
                                    return(
                                    <div key={index}>
                                        {/* result is filtered by chat */}
                                    </div>   
                                    )
                                }
                            }else {
                                return(
                                    <div onClick={()=>{ determineSelectedSlotAndSet(object) }} className="contractListItem" key={index} style={{border:'0px solid #00ffff', position:'relative',alignItems:'center', width:'100%',backgroundColor:ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter:'rgba(50,50,50,1)',height:'5vh', marginBottom:'1vh'}}>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',}}>
                                            <a href = {'https://rinkeby.etherscan.io/address/'+object.address} target="blank" style={{color: '#8ebf42'}}> {getEllipsisTxt(object.address, 6)} </a>
                                        </div>
                                        <div style={{fontSize:'1.5vw', position:'absolute', left:'1vw',top:'0%'}}>
                                            {object.name}
                                        </div>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',bottom:'0%'}}>
                                            {object.symbol}
                                        </div>
                                    </div>
                                )
                            }
                        }):
                         <div>
                            <div style={{}}>
                                {LookedUpContractInfoSymbol.data && LookedUpContractInfoName.data? 
                                
                                    
                                    <div onClick={()=>{ determineSelectedSlotAndSet({address: SelectedLookupNftAddress, name: LookedUpContractInfoName.data, symbol:LookedUpContractInfoSymbol.data}) }} className="contractListItem" style={{cursor:'pointer', position:'relative',alignItems:'center', width:'100%',backgroundColor:ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter:'rgba(50,50,50,1)',filter:'brightness(1.5)',height:'5vh', marginBottom:'1vh'}}>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',}}>
                                            <a href = {'https://rinkeby.etherscan.io/address/'+SelectedLookupNftAddress} target="blank" style={{color: '#8ebf42'}}> {getEllipsisTxt(SelectedLookupNftAddress, 6)} </a>
                                        </div>
                                        <div style={{fontSize:'1.5vw', position:'absolute', left:'1vw',top:'0%'}}>
                                            {LookedUpContractInfoName.data}
                                        </div>
                                        <div style={{fontSize:'1vw', position:'absolute', right:'0%',bottom:'0%'}}>
                                            {LookedUpContractInfoSymbol.data}
                                        </div>
                                    </div>
                                
                                :   <>Not Found</>}
                            </div>
                           
                         </div>
                        }
                        
                    </div>
        
        </div>
        }

            {TotalPercentageProbabilities < 100 ? 
                <div style={{width:'15vw', display:'flex',justifyContent:'center',position:'absolute',bottom:'6vh',color:'#ffff00',fontSize:'1vw'}}>
                    <div style={{position:'absolute',top:'0'}}>
                        Slot Percents Must Equal 100%
                    </div>
                    <div style={{position:'absolute',bottom:'0', fontSize:'2vw'}}>
                        {TotalPercentageProbabilities} %
                    </div>
                </div>
        
            :<></>}
            {TotalPercentageProbabilities > 100 ? 
            <div style={{width:'15vw', display:'flex',justifyContent:'center',position:'absolute',bottom:'6vh',color:'#ff0000',fontSize:'1vw'}}>
                <div style={{position:'absolute',top:'0'}}>
                    Slot Percents Must Equal 100%
                </div>
                <div style={{position:'absolute',bottom:'0', fontSize:'2vw'}}>
                    {TotalPercentageProbabilities} %
                </div>
            </div>
            :<></>}
            {TotalPercentageProbabilities == 100 ? 
                <div style={{display:'flex', justifyContent:'center', position:'absolute',bottom:'4vh',color:'#00ff00',fontSize:'1.5vw'}}>
                    
                    {createMachineStatusMsg =='Create Machine'?
                    <div style={{width:'100%',position:'absolute',top:'-7vh', color:'#00ff00', fontSize:'2vw'}}>
                        {TotalPercentageProbabilities} %
                    </div>: <></>}


                    {createMachineStatusMsg =='Create Machine'?
                        <div className="buttonHover" onClick={()=>{newCreateMachine()}} style={{zIndex:'9999', color:'#fff',cursor:'pointer', fontSize:'1.2vw', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'25px', width:'10vw',height:'4vh',}}>
                            {createMachineStatusMsg}
                        </div>
                    :<></>}    
                    {createMachineStatusMsg =='Awaiting chain confirmation...'?
                        <div className="breathingText"  style={{width:'100%', position:'fixed',bottom:'2vh',left:'37vw',fontSize:'2vw',color:'#ffff00', padding:'0.3vw'}}>
                            {createMachineStatusMsg}
                        </div>
                    :<></>}    
                    {createMachineStatusMsg =='Success!'?
                        <div className="breathingText"  style={{position:'fixed',bottom:'2vh',left:'43vw',fontSize:'2vw',color:'#00ff00', padding:'0.3vw'}}>
                            {createMachineStatusMsg}
                        </div>
                    :<></>}    



                </div>
        
        
            :<></>}

            {DisplayTokenSelectWindow? 
            <div style={{ border:'0.5px solid #777',display:'flex',justifyContent:'center',color:'#fff',position:'absolute',bottom:'18vh',zIndex:'50000',width:'20vw',height:'60vh',backgroundColor:ActiveNetworkThemeColorOpaque? ActiveNetworkThemeColorOpaque:'rgba(100,100,100,1)', borderRadius:'25px'}}>
                <div style={{position:'absolute',top:'1vh',left:'1vw',fontWeight:'bolder',fontSize:'2vh'}}>
                    Select a Token
                </div>
                
                <div style={{position:'absolute',top:'5vh',fontWeight:'bolder',width:'95%',height:'10%',borderRadius:'25px',border:'1px solid #0066ff'}}>
                    <input placeholder="Search name or paste address" style={{position:'absolute',width:'98%',height:'5vh',left:'0.3vw',top:'0.5vh',fontSize:'1vw',color:'#fff',backgroundColor:'rgba(0,0,0,0)',border:'rgba(0,0,0,0)', outline:'none'}}></input>
                </div>
                <div style={{position:'absolute',top:'13vh',border:'0.5px solid #777',width:'100%'}}>
                </div>

                <div style={{position:'absolute',top:'16vh',width:'99%'}}>
                    <div style={{position:'relative',top:'-2vh',fontSize:'2vh',left:'1vw',fontWeight:'bolder',}}>
                        Suggested from your wallet
                    </div>
                    {userErc20TokenBalance? 
                        userErc20TokenBalance.map((item, index)=>{
                            return(
                                <div key={index} className="selectATokenEntry" onClick={()=>{setSelectedMachineToken(item); setDisplayTokenSelectWindow(false)}} style={{cursor:'pointer',display:'flex', alignItems:'center', fontSize:'1vw',position:'relative',width:'100%',height:'6vh',marginTop:'1vh',marginBottom:'0.5vh',left:'0.5vw'}}>
                                    <div  style={{position:'absolute',left:'1vw',paddingTop:'0.5vh'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="5vh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  ><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                    </div>
                                    <div  style={{position:'absolute',left:'4vw', }}>
                                        {item.symbol}
                                    </div>
                                </div>
                            )
                        })

                    :<></>}
                </div>

            </div>
        
            : <></>}

            {createButtonDisabled? 
            <></>
        :
            <button onClick={()=>{createNewMachine();}} className="buttonHover" style={{position:'absolute', bottom:'7%',right:'23%', width:'150px',height:'60px',fontSize:'20px',color:'#fff',  borderRadius:'15px'}}>CREATE</button>
        }

{/* userErc20TokenBalance */}
        <div className="backButton"  onClick={()=>{setcreatingNewMachine(false); goBackToMachinePage()}} style={{cursor:'pointer', position:'absolute', top:'2%', left:'2%', fontSize:'80px', color:'#ddd'}}>↩ </div>           

            
        </div>
    )
}

export default CreateMachine