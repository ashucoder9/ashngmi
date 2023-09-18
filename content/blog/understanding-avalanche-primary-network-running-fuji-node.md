---
external: false
title: "Exploring the Avalanche Primary Network: Your Ultimate Guide to Getting Started"
description: In this blog, we'll try to understand the Avalanche Primary Network, its various chains, and their use cases.
date: 2023-09-18
---

![](/images/blog/8.jpg)

GM explorers!

Welcome back to another blog focused on Avalanche.

In this blog, we'll try to **understand the Avalanche Primary Network**, its various chains, and their use cases. Towards the end, there is a small tutorial where we'll try and **run the Avalanche Fuji Testnet node** locally.

This blog will be a perfect guide for those who are starting to build on Avalanche. Without further ado, let’s lay the foundations and build up your knowledge base in the fascinating world of Avalanche ❄️

## Understanding the Avalanche Primary Network

Before we get our hands dirty with the technicalities, it's crucial to understand the Avalanche Primary Network. The groundbreaking Avalanche consensus mechanism implemented in the Primary Network is designed for scalability, interoperability, and security.

It is a special Subnet which runs three different interoperable blockchains:

* **Platform Chain** (P-Chain)
    
* **Contract Chain** (C-Chain), I bet you know this one!
    
* **Exchange Chain** (X-Chain)
    

**Why is this Subnet special?** Each of the above chains is validated and secured by all the Avalanche validators, referred to as the Primary Network Subnet. Thus, all Subnet validators must also validate the Avalanche Primary Network.

**The design choice by Avalanche Team is brilliant**: rather than centralizing all responsibilities onto a single blockchain, each chain is designed to excel in a specific function. This distribution of roles across various chains ensures that the Avalanche platform remains efficient while achieving decentralization, security, and scalability.

Now, let's understand how each of the above chains functions in harmony to offer seamless performance.

### X-Chain: The Exchange Chain

Let's consider a hypothetical digital exchange in the Avalanche network where users can trade digital assets such as art pieces, real estate tokens, or company shares.

To run such an exchange, you will need to figure out three operations:

1. **Creation of Assets:** Imagine a company decides to tokenize a portion of its shares, converting them into digital assets available on the Avalanche network. These assets are known as **Avalanche Native Tokens (ANT)** and each represents a share in the company.
    
    The company **owners can even define rules governing the behaviour of these tokens**, like certain holding periods before the tokens can be traded, or setting up voting rights equivalent to the number of tokens held.
    
2. **Trading Assets:** Users on the exchange can buy or sell these assets in the form of ANTs (in our case, company shares). Each [transaction is recorded](https://subnets.avax.network/x-chain/transactions) on the X-Chain, providing a transparent history of ownership and trades.
    
    For each transaction that occurs (like buying a share), a small fee denominated in **$AVAX** is charged to compensate for the network resources used to process the transaction.
    
3. **Application Layer:** X-Chain runs an instance of the **Avalanche Virtual Machine (AVM)** which serves as an application layer for creating and trading these smart assets on the platform.
    

At its core, the X-Chain functions as both the rules and organizers of this exchange, ensuring a safe and fair trading environment.

### C-Chain: The Contract Chain

Now, let's suppose we decide to launch a smart contract to govern the entire digital assets exchange. Solidity and EVM are the go-to development environments for any blockchain developer and Avalanche understands those requirements very well.

The **C-Chain is an EVM-compatible blockchain on Avalanche** that enables developers to deploy Solidity-based contracts and leverage the network's scalability. **It operates independently and settles transactions on the Avalanche Primary Network.**

### P-Chain: The Platform Chain

A few days later, you notice extreme congestion on the C-Chain network. You are worried that the network traffic might spike gas fees resulting in failed transactions and poor user experience.

> This happened recently when I was trying to trade the **$PEPE coin** (an ERC-20 token on Ethereum) at its highs and my transaction was stuck for too long. I lost patience and moved funds to Binance resulting in the obvious loss of my gas fees.

**What's the Solution?** You can create an EVM-compatible Subnet and launch your digital exchange on your Subnet. Now, even if the C-Chain is congested, it won't affect your Subnet.

The **Platform Chain** helps in **setting up new blockchains and Subnets** on the Avalanche network. It also manages the **addition of validators to these Subnets**, who are essential for securing and verifying transactions on the exchange.

Furthermore, the P-Chain **governs staking operations**, a process where validators commit AVAX tokens to maintain network integrity while earning rewards. This mechanism encourages the validators to operate honestly, enhancing the network's security.

Operating as an instance of the Platform Virtual Machine, the P-Chain constantly monitors the network's health, ensuring the seamless and secure functioning of the Subnets and Validator operations.

## Hands-On Exercise: Setting Up the Fuji Testnet Node

Fuji Testnet is the official testing network for Avalanche, mirroring the structure of Avalanche Mainnet. It includes the Primary Network with X, C, and P-Chains, along with various test subnets.

In this hands-on exercise, we will launch the Fuji node locally on our computers and run RPC calls. Make sure you have pre-installed Git and Golang.

* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    
* [Install Golang](https://go.dev/doc/install)
    

1. Download the official **AvalancheGo** release.
    
    ```bash
    git clone https://github.com/ava-labs/avalanchego
    ```
    
2. After the download completes, navigate to the `avalanchego` directory.
    
    ```bash
    cd avalanchego
    ```
    
3. Build the **AvalancheGo** from the source code by running the build script.
    
    ```bash
    ./scripts/build.sh
    ```
    
4. Now, run the following command to start the Fuji Testnet node.
    
    ```bash
    ./build/avalanchego --network-id=fuji
    ```
    

If you see something like the below picture in your terminal, it means the node has started syncing with the official Testnet. It usually takes around ~24 hours to completely sync with the Fuji network.

![fuji testnet running](/images/blog/content/fuji-running.png)

You may also run the following script in another Terminal instance to find the node bootstrapping status:

```bash
curl -X POST --data '{ 
   "jsonrpc": "2.0", 
   "method": "info.isBootstrapped", 
   "params":{ 
    "chain":"X" 
   }, 
   "id": 1 
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info 
```

When finished bootstrapping, the X, P, and C-Chain RPC endpoints will be:

```bash
localhost:9650/ext/bc/P
localhost:9650/ext/bc/X
localhost:9650/ext/bc/C/rpc
```

### Sending RPC Requests to Fuji Node

You can run the following script to fetch the current base fee using the JSON-RPC endpoint on C-Chain.

```bash
curl -X POST --data '{                               
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"eth_baseFee",
    "params" :[]
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/C/rpc
```

## Towards the End

Whether you are a budding developer, a blockchain enthusiast, or someone just starting their journey in the Avalanche ecosystem, this blog aims to be your stepping stone into the vibrant and promising world of Avalanche.

In the next blog, I'll provide a clear and simplified explanation of the Subnet Architecture, making it easy for you to grasp.

Stay tuned, as there's so much to explore and even more to learn. Happy reading!

---

***Smol Request:*** *Please share this blog in your community if you find it useful. Also, if you are someone who is building on Avalanche, let me know and our team will be happy to help you out with any technical issue.*

*Sayonara!!*