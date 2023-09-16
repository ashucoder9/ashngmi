---
external: false
title: "Launching Custom Tokens With HyperSDK By Avalanche"
description: Building on the Anything Virtual Machine.
date: 2023-06-12
---

![](/images/blog/2.webp)

*Welcome back, everyone!*

It’s been some time since I last wrote an article on this Hashnode blog. But today, I have found something cool that’ll blow your mind. The world of blockchains is really vast and the future is deemed to be multichain with interoperability and scalability leading the charge.

Various L1s and L2s are building the ecosystem to handle the explosive growth and process transactions at the scale of Web2 companies while maintaining security and decentralization. One such L1 is **Avalanche** and their **Head of Engineering, Patrick O’Grady**, recently introduced the **HyperSDK** to ease the process of launching blockchains with a fully-customizable VM.

**Yes, you heard it right!** Launch your native token, on top of your own execution machine, secured by the Avalanche consensus, and scalable with over 50k+ TPS.

To demonstrate the potential of the **HyperSDK**, the team has launched an example ***TokenVM*** that simulates the subnet environment where you can mint and trade your tokens.

And to help you understand this better, I will break down this seemingly complex topic into simple, easily digestible chunks. So let's dive in!

## Introduction to TokenVM

***TokenVM*** is an innovative subnet launcher boilerplate designed to let anyone create their own unique digital assets. With ***TokenVM***, you can:

1. Mint your tokens (without any parent blockchain network)
    
2. Modify the metadata of your asset (given that you disclose some information)
    
3. Burn your asset whenever you want.
    

Moreover, ***TokenVM*** comes equipped with an integrated on-chain exchange, enabling you to create and fulfil (either entirely or partially) others' orders.

The team has developed a command line interface (CLI) tool that allows you to interact directly with the platform through your command line, making the overall experience much smoother and user-friendly.

***TokenVM*** also possesses the capability to handle *Remote Procedure Call (RPC)* requests for trades.

## Getting Started

Now that you're familiar with ***TokenVM*** and its features, it's time to set up and run your local blockchain network. I’ve only included the steps to spin up the blockchain network and minting tokens. In case you are interested in exploring the trading and burn features, please refer to this [GitHub repository](https://github.com/ava-labs/hypersdk/tree/main/examples/tokenvm).

Before you start, make sure you have installed the **latest version of Golang**. If not already, head over to [this link](https://go.dev/doc/install) and download the package.

> Make sure that the Golang bin folder is in your PATH. If not, you can set this for the current terminal session by running: `export PATH=$PATH:$(go env GOPATH)/bin`

### Spinning up the Subnets

In this section, we'll set up and launch our local subnets & CLI. First off, **clone the HyperSDK repository** by using the following command.

```bash
git clone https://github.com/ava-labs/hypersdk.git
```

Next, navigate to the `tokenvm` directory and run the below command in your terminal window. We'll be using two terminals so let's call the first one T1.

```bash
./scripts/run.sh
```

By default, **the run script launches two blockchain networks: A and B**. You can configure the command to launch only one chain by prefixing `MODE="run-single"` to the above command.

```bash
MODE="run-single" ./scripts/run.sh
```

Next, you need to build your ***TokenVM*** and ***TokenCLI*** executables to interact with the subnets. Open another terminal window (T2) and go to the same `tokenvm` directory and run the following command.

```bash
./scripts/build.sh
```

Make sure to give local network access permissions on the popup windows opening from the T1 terminal (don't panic, there will be only 5 popups 😉).

Upon successful completion, you will receive a message like this on your T1 terminal.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686511169059/7acd9ace-5034-4c5a-bd25-252fe52c8224.png)

### Configuring the TokenCLI

Once you have received the confirmation message, you can jump straight into configuring the CLI with the appropriate details.

The TokenCLI executable lives in the `build` folder and it is unaware of the developments happening in the background (aka the blockchain networks you launched recently). Let's import your blockchains (or subnets, if you prefer) into the CLI by using the below command.

```bash
./build/token-cli chain import-anr
```

In the above command, `chain import-anr` connects with the ANR (Avalanche Network Runner) server running in the background and pulls the URIs of all nodes tracking each chain you created.

You can also view the information related to your blockchains using this command.

```bash
./build/token-cli chain info
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686512014460/877eb64b-15bf-40be-9a3a-0c472411f659.png)

### Launching Block Explorer

One of the most crucial components of a blockchain network is the block explorer. It lets you access relevant information about blocks and transactions happening on the network.

To launch the block explorer for your chain, open Terminal 1 and run the following command. Enter the `chainID` you want to track.

```bash
./build/token-cli chain watch
```

### Creating Your Assets On-Chain

Before you start creating assets or, in general, performing any transaction, you’ll need to import the default account with its private key. The example ***TokenVM*** is configured in a manner such that all the funds are stored by default at the following address:

```plaintext
Address: token1rvzhmceq997zntgvravfagsks6w0ryud3rylh4cdvayry0dl97nsjzf3yp
Private Key: 0x323b1d8f4eed5f0da9da93071b034f2dce9d2d22692c172f3cb252a64ddfafd01b057de320297c29ad0c1f589ea216869cf1938d88c9fbd70d6748323dbf2fa7
```

For your convenience, the private key is also stored in the `demo.pk` file in the `tokenvm` folder. You can import your keys by following the below command.

```bash
./build/token-cli key import demo.pk
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686514359063/23152638-0863-418f-b016-94bd38e863be.png)

Now is your time to *send some transactions on-chain*.

As the name suggests, we’ll start our chain by creating a **Genesis token creation transaction** with the following command.

```bash
./build/token-cli action create-asset
```

You will be asked to choose metadata for your token (a nickname? 🤓). Enter the details and enter `y` and your transaction will be processed.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686512848614/7dc04e90-598f-40b9-bfbd-e8f5ec8e8bc2.png)

As depicted in the picture above, the above command generates a token with the `assetID` equivalent to the `txID`. All the tokens are loaded up in the default address and you will use the private key of the default address to authorize all interactions with the ***TokenVM.***

Here is a screenshot of the transaction as shown in the block explorer window.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686513369077/b68e1073-b944-4e1f-bad9-2f2d98e1f1af.png)

Next, you will mint your digital tokens by specifying the `assetID`, `recipient` and `amount` of the token to mint after running the below command.

```bash
./build/token-cli action mint-asset
```

For example, I entered the following details while creating this tutorial:

* **assetID**: *2smHvCvuUnFrz5PRaaGLJVWo33PqqXzRKmxPjN6M37doip1wmd*
    
* **recipient**: *token1rvzhmceq997zntgvravfagsks6w0ryud3rylh4cdvayry0dl97nsjzf3yp*
    
* **amount**: *1,000,000,000*
    

Upon confirmation, your tokens will be minted and delivered to the recipient's address.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686514437420/3af23ea3-5116-499a-a45a-587cef89dc59.png)

You can further check your balance by running this command.

```bash
./build/token-cli key balance
```

PS: TKN is the default token of the ***TokenVM.*** *For any asset that you have created, enter the* `assetID` to check the balance.

## Towards the End!

**HyperSDK is a novel product that greatly reduces the friction of launching a customized blockchain network**. Imagine not having to launch your digital asset as an ERC-20 token on the Ethereum network.

By the way, someone told me **you could also run custom execution environment blockchains like Solana on top of the HyperSDK**. That'd be badass if anyone of you tries that out and succeeds. Let me know on Twitter or LinkedIn if you try that out.

Overall, I'd highly recommend everyone to test out the HyperSDK and release their developments on the Devnet. Let's keep building towards a better and interoperable future of blockchains.

Till the next post, *Sayonara!*