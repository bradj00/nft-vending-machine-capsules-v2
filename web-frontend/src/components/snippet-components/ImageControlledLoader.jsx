import React, {useContext} from 'react'
import { useEffect } from 'react';
import { NftMoreInfoContext } from '../../App';


const ImageControlledLoader = () => {
    const {imageUrlToCachedBlobObject, setimageUrlToCachedBlobObject} = useContext(NftMoreInfoContext); 
    const {domainThrottleSettings, setdomainThrottleSettings} = useContext(NftMoreInfoContext); 

    function fetchThisUrl(thisUrl, domain){
        setdomainThrottleSettings({
            ...domainThrottleSettings, [domain]: {
                provisioned: domainThrottleSettings[domain].provisioned,
                used: (domainThrottleSettings[domain].used)+1
            }
        });
        fetch(thisUrl)
        .then(response => {
            if (!response.ok) {
            imageUrlToCachedBlobObject[thisUrl].status = 'general error';
            throw new Error('Network response was not OK');
            }
            return response.blob();
        })
        .then(myBlob => {
            myBlob = URL.createObjectURL(myBlob);
            imageUrlToCachedBlobObject[thisUrl].blob = myBlob;
            imageUrlToCachedBlobObject[thisUrl].status = 'success';
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            imageUrlToCachedBlobObject[thisUrl].status = error;
        });


    }


    // useEffect(() => {
    //     setTimeout(() => {
    //     for (var domain in domainThrottleSettings) {
    //         if (domainThrottleSettings[domain].provisioned == domainThrottleSettings[domain].used){
    //             for (var key in imageUrlToCachedBlobObject) {
    //                 if (imageUrlToCachedBlobObject[key].blob == 'nothing'){
    //                     console.log('we need to fetch ',key)
                        
    //                     let domain = (new URL(key));
    //                     domain = domain.hostname;
                        
    //                     if (domainThrottleSettings[domain]){
    //                         console.log('request limit /sec for [ '+domain+' ]: ',domainThrottleSettings[domain] )
    //                         if (domainThrottleSettings[domain].provisioned > domainThrottleSettings[domain].used){
    //                             // fetchThisUrl(key, domain);
    //                             console.log('fetching: ',key);
    //                             setdomainThrottleSettings({
    //                                 ...domainThrottleSettings, [domain]: {
    //                                     provisioned: domainThrottleSettings[domain].provisioned,
    //                                     used: (domainThrottleSettings[domain].used)+1
    //                                 }
    //                             });
    //                             setTimeout(() => {
    //                                 setdomainThrottleSettings({
    //                                     ...domainThrottleSettings, [domain]: {
    //                                         provisioned: domainThrottleSettings[domain].provisioned,
    //                                         used: (domainThrottleSettings[domain].used)-1
    //                                     }
    //                                 });
    //                             },1000);

    //                             fetch(key)
    //                             .then(response => {
    //                                 if (!response.ok) {
    //                                 imageUrlToCachedBlobObject[key].status = 'general error';
    //                                 throw new Error('Network response was not OK');
    //                                 }
    //                                 return response.blob();
    //                             })
    //                             .then(myBlob => {
    //                                 imageUrlToCachedBlobObject[key].blob = myBlob;
    //                                 imageUrlToCachedBlobObject[key].status = 'success';
    //                                 // myImage.src = URL.createObjectURL(myBlob);
    //                             })
    //                             .catch(error => {
    //                                 console.error('There has been a problem with your fetch operation:', error);
    //                                 imageUrlToCachedBlobObject[key].status = error;
    //                             });


    //                         }else {
    //                             console.log('qqq throttle limit reached for this domain. Backing off');
    //                         }
    //                     }else {
    //                         console.log('no throttle limitations set for  [ '+domain+' ]'); 
    //                     }
    //                 }
    
    
    //                 // console.log('domain is: ',domain);
    //             }

    //         }
    //     }
    //     },10000);
    // },[domainThrottleSettings]);
    
    
    useEffect(()=>{
        // if (imageUrlToCachedBlobObject){
        //     // console.log('imageUrlToCachedBlobObject: ',imageUrlToCachedBlobObject);
        // }
    },[imageUrlToCachedBlobObject]);

    useEffect(() => {

            if (imageUrlToCachedBlobObject){
                console.log('checking through imageUrlToCachedBlobObject list of URLs to load', imageUrlToCachedBlobObject);
    
                for (var key in imageUrlToCachedBlobObject) {
                    if (imageUrlToCachedBlobObject[key].blob == 'nothing'){
                        console.log('we need to fetch ',key)
                        
                        let domain = (new URL(key));
                        domain = domain.hostname;
                        
                        if (domainThrottleSettings[domain]){
                            console.log('request limit /sec for [ '+domain+' ]: ',domainThrottleSettings[domain] )
                            if (domainThrottleSettings[domain].provisioned > domainThrottleSettings[domain].used){
                                console.log('fetching: ',key);
                                fetchThisUrl(key, domain);
                            }else {
                                let p = domainThrottleSettings[domain].used - domainThrottleSettings[domain].provisioned;

                                setTimeout(() => {
                                    console.log(p,'     DELAYED fetching: ',key);
                                    fetchThisUrl(key, domain);
                                },p*5000);
                                // console.log('throttle limit reached for this domain. Backing off');
                            }
                        }else {
                            console.log('no throttle limitations set for  [ '+domain+' ]'); 
                        }
                    }
    
    
                    // console.log('domain is: ',domain);
                }
    
            }

    },[imageUrlToCachedBlobObject]);

   
    return (
        <div>

        </div>
    )
}

export default ImageControlledLoader