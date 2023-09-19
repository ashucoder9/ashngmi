---
external: false
title: "Getting Started With Web3 Notifications Using EPNS"
description: This is a quickstart tutorial for developers to start integrating Web3 notifications in their projects using Ethereum Push Notification Service (EPNS).
date: 2022-07-20
ogImagePath: https://ashngmi.xyz/images/blog/7.webp
---

![](/images/blog/7.webp)

Gm folks ✨

This is a quickstart tutorial for developers to start integrating Web3 notifications in their projects using **[Ethereum Push Notification Service (EPNS)](https://epns.io/)**, which is the first decentralized protocol to send push notifications for decentralized apps (**dApps**), **NFTs**, and **DAOs** like **Uniswap, MakerDAO, ENS**, and many more.

This tutorial will show you all about channels, subscribers, and notifications. You don’t need to have some fancy developer tag to be here. Just your coffee ☕️ and an inquisitive mind 🚀

## Decentralized Push Notifications

Push notifications have become an integral part of our lives, with nearly **[3 billion active users](https://blog.avada.io/resources/push-notification-statistics.html)** worldwide in 2021. These notifications are like messages. You can send them to all subscribers or specific users.

Their arrival on blockchains like **Ethereum** is imminent and will be extremely beneficial for the growth of the ecosystem.

At EPNS, we are building the communication layer for Web3, starting out with decentralized push notifications. Any wallet, dApp, smart contract, or backend can create a channel on EPNS.

Channels are further able to send **gasless notifications** tied to user wallets. Users can receive these notifications via the Android/iOS app or browser extension.

## What Are Channels?

To start sending push notifications in Web3, the easiest way is to set up a channel on EPNS. Channels are a lot like telephone numbers. They're used to **route notifications** to the right wallets. Your **wallet address** becomes the destination for receiving those push notifications.

You must have watched videos from your favorite channels on YouTube. You receive notifications for the latest content when you press the “Subscribe” button on their channel. YouTube uses channels to route these notifications to its subscribers, but these are **centralized** (i.e. owned by Google) and can be shut down at any time 😨

**EPNS allows you to create your own channels** leveraging our protocol on decentralized networks. These channels can be subscribed to by users of your dApp and receive push notifications. It creates a secure and verified communication medium for decentralized apps and their users.

**Channels are decentralized** and can not be shut down. And above all, it’s extremely easy to use, with a user-friendly interface and simple tools for developers.

With a channel linked to your wallet on EPNS, you can send out **broadcasts**, **targeted**, **subset**, and even **secret** notifications. And above all, our dApp makes it super easy to send push notifications. You don't need to know the ins and outs of how it works 😉

## 5 Steps To Create Your Channel

To start with, you can create channels on **[Prod](https://app.epns.io)** and **[Staging](https://staging.epns.io) dApp**. If you want to try out how channels work and send notifications, it’s highly recommended for you to try the Staging dApp. All you need is a **[MetaMask wallet](https://metamask.io/)** and the **logo of your channel**.

For those who are not aware of Metamask, it’s a decentralized wallet provider used to interact with Ethereum. You can download the [browser extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) or their Android/iOS application to connect with EPNS dApp.

Creating a channel takes only a few clicks and you are up and running. And I’ll show you exactly how to do that in 5 easy steps 😉

**1 →** Go to the EPNS Staging dApp available on https://staging.epns.io/
![Screenshot 2022-06-30 at 5.12.24 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658329709829/RLpSvCpT0.png)
**2 →** Connect your Metamask Wallet with the dApp

**3 →** Once Connected, go to Create Channel option in the Developer tab. Upload your Channel Logo and don't forget to click on Get Free DAI for Channel. By the way, you won't get the Free DAI option on Prod dApp. You will have to stake real DAI 🙂
![Screenshot 2022-06-30 at 5.26.05 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658329686614/7BhxF5XQw.png)
**4 →** Fill in all relevant Channel Details. Keep the Alias network fields blank 😉 We'll need it only when we create a Channel Alias (Polygon is live on Staging 💜)
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658329626192/qvg68fN-D.png)
**5 →** Once all the details are filled, click on Setup Channel. This will initiate two important transactions

- **Approval of DAI** → This transaction ensures that your wallet address has successfully approved the EPNSCore contract to use 50 DAI on your behalf.

- **Channel Creation on EPNS Core** → Once approved, the 2nd transaction calls the channel creation function on EPNSCore smart contract to create the channel.

![image (1).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658329499668/DWI8GsRQr.png)

And you are all set up!

## Opt-In To Push Notifications

Any user who owns a Web3 wallet like MetaMask can opt-in to receive notifications from channels. Opting in to any channel is **gasless** and does not require any fee.

Once connected, you will see a similar list to the one below 👇🏼
![Screenshot 2022-07-19 at 6.12.26 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658329787318/kh6IlsZPF.png)
You can choose to opt-in for channels that can send you push notifications. And by the way, these notifications can be received via our [browser extension](https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg) (which works only on Chrome), or native [Android](https://play.google.com/store/apps/details?id=io.epns.epns&hl=en_IN&gl=US)/[iOS](https://apps.apple.com/us/app/ethereum-push-service-epns/id1528614910) apps. You can also choose to view the notifications in your **Inbox on EPNS dApp**.

---

In the next tutorial, we will teach you how to send different types of notifications from the EPNS dApp. We will also cover the integration of EPNS SDK, please stay tuned!

If you found this tutorial useful, please mind sharing it in your social circles. It will help us expand our outreach in building the future of communications.

If you’d like to know more about EPNS and decentralized communications, feel free to check out our [Docs](https://docs.epns.io) or join our [Discord](https://discord.com/invite/YVPB99F9W5).

Until next time!


