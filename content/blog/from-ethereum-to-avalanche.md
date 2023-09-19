---
external: false
title: "From Ethereum to Avalanche: Understanding the Fundamentals"
description: A sneak peek into the Avalanche ecosystem.
date: 2023-08-28
ogImagePath: https://ashngmi.xyz/images/blog/1.webp
---

![](/images/blog/1.webp)

Gm folks ✨

Last week, **I joined Ava Labs officially as a Developer Relations Engineer**. I will primarily work on helping developers build on the Avalanche blockchain and foster ecosystem growth.

Coming from Polygon Labs, I would credibly refer to Ethereum as my genesis block, the start of my blockchain journey. Ethereum was the school where I learned the fundamentals of blockchain technology.

**But what about Avalanche?**

I have the impression that I am witnessing the next evolutionary step in decentralized technology. My first week at Ava Labs blurred the lines between student and explorer. Here's a sneak peek into my learnings about the Avalanche ecosystem as I settle into my new work at Ava Labs.

## Current Blockchain Ecosystem

In my lens, blockchain technology has a bright future and it is not a zero-sum game. There are more than enough assets to digitize on this planet than we can imagine at the moment.

I have worked for over a year in the Ethereum ecosystem with notable protocols and I'd agree that maxis are everywhere - *be it Bitcoin, Ethereum, Solana, or even Avalanche*.

**AND IT IS GOOD!** Supporting the technology, and preaching decentralization, everything is justified. What we fail to recognize as a community is that there is **no** **one-solution-fits-all** approach.

I know of various teams that are heads-down building various solutions on Ethereum, Solana, Avalanche, Bitcoin (yes! for example, [Trust Machines](https://twitter.com/trustmachinesco)), and many more Layer 1 and Layer 2 protocols out there. Each with its purpose.

Choosing which blockchain to build upon should not be treated as a question of integrity. Instead, we should effectively gauge them based on our requirements.

In further posts, I'll summarize the potential use cases where building on Avalanche can be useful. But first, let's take a quick dive into the Consensus mechanism.

## The Avalanche Consensus

I have read about the Classical and Nakamoto consensus protocols in the past but diving into Avalanche's family of protocols left me awestruck. For those who are curious to know what a consensus mechanism is, I'll quote the following definition from [this](https://medium.com/avalanche-hub/avalanche-consensus-the-biggest-breakthrough-since-nakamoto-66e9917fd656) article:

> Consensus is the means by which a series of independent voters (often called “validators”) come to an agreement on a decision, ensuring that the network has a synchronized view on the data, referred to as “state”.

The below image is a comparison of various consensus mechanisms with Avalanche and their offerings.

![](https://miro.medium.com/v2/resize:fit:2000/format:webp/0*wPqq05jLp1qFtTZY.png)

I would recommend anyone reading this blog to go out and run a subnet using [SubnetEVM](https://github.com/ava-labs/subnet-evm), or use the [HyperSDK](https://github.com/ava-labs/hypersdk) to launch a custom VM, document their results, and then only believe in performance-based claims.

If you need any help or support with running any of the above, please check out the [documentation](https://docs.avax.network/) and [Ava Labs GitHub](https://github.com/ava-labs) org to raise issues. You can also reach out to me on [Twitter](https://twitter.com/ashngmi) (sorry, [X](https://x.com/ashngmi)).

### Enough of benchmarking and comparisons, let's understand how it works!

Imagine being at a lively party where there's a delightful game centered around a big bowl filled with blue 🔵 and yellow 🟡 jelly beans. **Our goal is to guess the crowd's favorite jelly bean color.** Let's get it 🔥

We have decided to jump into the game with a *simple yet effective* strategy:

1. **Survey Small Groups:** Instead of shouting over the loud music to ask everyone, we go to 5 friends and ask, "Which color do you think is the crowd's favorite?"
    
2. **Go with the Majority:** If 3 out of our 5 friends lean towards "blue 🔵", we will start agreeing on "blue 🔵" as the popular choice.
    
3. **Keep Checking:** We then continue to mingle, asking different groups of 5 friends. The more "blue 🔵" answers we get, the more convinced we become.
    

Now, here's where it gets fascinating. We are not the only ones playing this game. **Everyone at the party is doing the same thing** – asking, matching, and adjusting their guesses.

**The Magic of the Crowd:** After a short time, even though not everyone has asked every other person, the majority at the party seems to agree on one color—let's say "blue 🔵".

This scenario mirrors the Avalanche consensus mechanism where we utilize random subsampling to arrive at a consensus among validating nodes.

Each validator in the network behaves similarly to the attendees of the party. They don't survey everyone; they sample opinions from a select few. Still, in **a short span**, the entire system reaches a consistent decision, much like the favorite jelly bean color at the party.

The above explanation is a very high-level overview of the technology behind Avalanche Consensus. If you want to explore more, I'd recommend checking out these resources:

* [Avalanche Consensus | Avalanche Dev Docs](https://docs.avax.network/learn/avalanche/avalanche-consensus)
    
* [Avalanche Consensus, The Biggest Breakthrough since Nakamoto](https://medium.com/avalanche-hub/avalanche-consensus-the-biggest-breakthrough-since-nakamoto-66e9917fd656)
    
* [Nakamoto(Bitcoin) vs. Snow(Avalanche): consensus](https://gyuho.dev/nakamoto-bitcoin-vs-snow-avalanche-consensus.html#nakamotobitcoin-vs-snowavalanche-consensus)
    
* [Snowball BFT Demo](https://tedyin.com/archive/snow-bft-demo/#/snow)
    

## What are Subnets?

Subnetworks or simply Subnets refer to the independent subset of Avalanche validators who collaborate to achieve consensus on the state of one or more blockchains. All Subnets (other than the Primary Network) run a single blockchain and validators are incentivized according to Subnet rulesets.

![](https://docs.avax.network/assets/images/subnet-validators-0667a8ef05ae5dc26a545d2f52333208.png)

Each blockchain is validated by exactly one subnet and has the freedom to define its Virtual Machine. It can choose to operate the Ethereum Virtual Machine or utilize an entirely new VM (like Solana VM or Move VM).

On top of that, there is great flexibility to configure and customize your EVM-based Subnet. You can introduce new precompiles and even implement Stateful Precompiles ([what?](https://medium.com/avalancheavax/customizing-the-evm-with-stateful-precompiles-f44a34f39efd)) which we'll learn in the upcoming blog posts.

As of today, there are 69 subnets reported on the [Avalanche Explorer](https://subnets.avax.network/subnets). Any application/solution that you wish to launch as a separate blockchain, you can do it using Subnets on Avalanche.

There are several compelling reasons why someone might choose to launch an Avalanche subnet:

1. **Customization:** Tailor-made blockchains that let you define your own rules, validators, and even the underlying VM
    
2. **Interoperability:** Seamless communication with other Avalanche subnets using [Avalanche Warp Messaging](https://docs.avax.network/learn/avalanche/awm)
    
3. **Regulatory Fit:** Adapt to jurisdiction-specific requirements (KYC, age restriction, compliance with location restrictions, etc.)
    
4. **Performance Tuning:** Easily optimize for distinct applications like speed and robustness (an HFT platform might prioritize speed, while a data storage solution might emphasize robustness)
    
5. **Avoiding Congestion:** Bypass issues like rising transaction fees on main networks (launch [$PEPE](https://twitter.com/pepecoineth) as an Avalanche Subnet?)
    

I would like to dive a bit more into Subnets and their capabilities but will stop here for now. I have a full day ahead of me to explore and learn more about the Subnet architecture and how to customize the EVM.

Primarily, I wanted to keep this blog limited to **Subnets** and **Avalanche Consensus**. There are a lot more interesting avenues to explore like the HyperSDK, the Core Wallet, or Evergreen Subnets. I would probably write another blog to explain the Primary network as well.

---

*Please share this blog in your community if you find it useful. Also, if you are someone who is building on Avalanche, let me know and our team will be happy to help you out with any technical issue.*

*I’ll be back with another awesome blog very soon. Till then, keep building and keep hustling 🚀*

*Sayonara!!*
