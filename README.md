## Inspiration

I have spent a few years participating in web3 communities utilizing a wide variety of token standards and I saw an opportunity to provide a useful service to empower users to market and sell their tokens to others. Using modern tools like Moralis SDK and Chainlink VRF the groundwork is laid for micro-services to promote engagement in smaller retail communities as well as avenues for targeting b2b commerce.

## What it does

Nifty Wheel allows anyone to create a new "Machine" where they can define up to 10 slots to be filled with NFTs by the Machine Owner. The Machine Owner defines the price and token accepted as payment for their NFT Capsules. Users may visit the Machine and purchase Capsules. The Capsules may be "opened" which triggers a Chainlink VRF request. 

The Chainlink VRF response determines the "winning slot" based on probabilities defined by the Machine Owner upon creation and the NFT is automatically transferred to the Capsule opener. 

## How we built it

The contracts are written in Solidity, whereas the frontend is written in ReactJS and uses Moralis SDK to interact with the blockchain nodes as well as rich indexing queries displayed in the UI. 

I used Rinkeby and Mumbai testnets as well as Ganache and Hardhat for contract testing and dev. 

## Challenges we ran into

Challenges included designing a UI and UX that fit the service as well as creating a performant and secure design end to end. I was really impressed how robust modern tools are becoming to create rich on-chain experiences that will empower web3 communities. 

I chose to create around 5,000 test ERC721 tokens for use in developing this project and I hosted the token metadata on IPFS for all tokens, including the PNG images. I found interesting opportunities to build robustly around this IPFS framework, such as a handler to automatically hop between IPFS nodes to spread out resource loads. (roadmap)

## Accomplishments that we're proud of

This project has a broad vision that has the potential to tap many novel web3 innovations, while building it has been an opportunity to personally contribute using these tools. In the past years I have been an observing participant in web3 and I intend to mark this as my pivot toward full-time value creation in web3 communities.

## What we learned

Building in the web3 space has been immensely rewarding and the future is bright for those with vision and the ability to create in this space!

## What's next for Nifty Wheel

A full roadmap and business plan is being finalized but coming features that I can discuss include:
* Mobile-first smartphone UI
* Support for additional token standards (ERC1155, ERC20, etc.) in Machine slots
* Partnerships with Metaverse communities to integrate Nifty Wheel directly in their UX
* Add support for a User to open many capsules at once
* Nifty Wheel analytics site showing top-level and machine-level realtime data
* Using AMM route contracts to automatically pay for Capsules with other tokens
* QOL improvements for Machine Owner admin tools, such as depositing multiple tokens at once
* Chainlink VRF v2 implementation (optimizing VRF calls)
* QOL improvements for Machine users including "Service Status" indicator
* Tools for Machine Owners to conduct sales and engage on social media platforms (Discord, Twitter, etc.)
* Expand service to multiple chains
* Expand custom views for NFT project token displays
* Automatically balance between IPFS nodes to spread out resource loading
* Smoke testing, QA testing, Contract audits
