---
external: false
title: "How to Send Decentralized Notifications Using EPNS"
description: In this tutorial, I will show you the easiest way to send decentralized notifications using EPNS via the channel dashboard.
date: 2022-07-28
ogImagePath: https://ashngmi.xyz/images/blog/6.webp
---

![](/images/blog/6.webp)

Gm folks ✨

It’s a new wonderful week and I am back again with another quick tutorial. In [the last blog](https://pythontony.hashnode.dev/getting-started-with-web3-notifications-using-epns), I shared how to create channels using the [**EPNS staging dApp**](https://staging.epns.io/). Today, I will show you the easiest way to send decentralized notifications using EPNS via the channel dashboard. We will use staging dApp (https://staging.epns.io) for this purpose.

The staging environment provides channel testing services on the **Kovan testnet**. It is completely free to use. In case you run out of Kovan ETH, **Paradigm** has an amazing [faucet](https://faucet.paradigm.xyz/) that drops 1 Kovan ETH per day.

Okay Ashutosh, sounds great! Let’s begin 🚀

## Sending Notifications From Your Channel

To start sending decentralized notifications to wallets, you would be required to set up a channel on EPNS. In case you missed the last tutorial, check it out [here](https://pythontony.hashnode.dev/getting-started-with-web3-notifications-using-epns).

After you create a channel, you are redirected to the **channel profile page**. Over there, you can see multiple details associated with your channel that is linked to your wallet.

![Screenshot 2022-07-28 at 10.43.16 AM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658985212305/JHUa5Zp45.png)

You would also see some subscribers already opted-in to your channel. They are **EPNS microservices** that are automatically subscribed when you create a channel.

In fact, one of the subscribers is your own wallet itself. This helps you in keeping track of all the notifications that have been sent out from your channel.

At the bottom of your channel profile, you will see a **Send Notification** section. Here you would find the **Select Type of Notification to Send** dropdown menu.

Click on the dropdown button and it shows three options:
1. **Broadcast** (IPFS Payload)
2. **Targeted** (IPFS Payload)
3. **Subset** (IPFS Payload)

I will now demonstrate sending notifications in all these types directly from the dApp. Btw, it would be really cool if you try out sending notifs on your own 🛠

## Broadcast Notifications Using EPNS

Imagine you are the owner of an EPNS channel that sends notifications to your community about the latest updates. You can utilize broadcast notifications to communicate info to all of your subscribers at once.

In order to send broadcast notifications, click the drop-down menu next to Send Notifications and choose **Broadcast**. New input fields similar to the one below will appear (I have included some dummy text in the input areas for your convenience. You can customize the details to fit your needs).

![Screenshot 2022-07-12 at 1.41.47 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658985284609/es7V2i3iM.png)

You can also see the real-time **Notification Preview** and check out how the notification would appear once delivered to your subscribers.

![2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658985315596/BPINiaZtA.png)

By pressing the **Send Notification** button, a gasless transaction will start on the Kovan Network. The notification will be delivered after you click on the **Sign button in MetaMask**.

## Targeted Notifications

If you’re building a dApp, this is the most important type. It helps you deliver **personalized notifications to your users**. Many official EPNS channels, such as Uniswap, MakerDAO, and many others, use this type in combination with **[backend SDK](https://docs.epns.io/developers/developer-tooling/backend-sdk) and [Showrunners](https://docs.epns.io/developers/developer-tooling/showrunners-framework)** to send wallet-specific notifications.

Simply select the **Targeted** option from the Send Notification panel to send Targeted notifications. Fill in the details and **specify the wallet address** you want to notify. Consider the following example:

![4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658985421977/YYzn4ga3n.png)

Hit the Send Notification button, **Sign the Payload**, and your customized notification will be delivered to the specified wallet's inbox.

## Subset Notifications

Now let’s assume you only want to **notify a group of wallet addresses**. Probably you need to distribute membership rewards or send notifications only to those with special access, or maybe something secret 🤓

For such purposes, EPNS allows you to send decentralized notifications to a subset of users. All you need are the wallet addresses of everyone you want to notify.

Select **Subset** (IPFS Payload) from the Send Notifications dropdown list. You would see input fields similar to Broadcast notifications. The only difference is that a new field asks for wallet addresses. Note that multiple wallets can be added by entering comma-separated addresses or pressing the enter key.

![3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658985397287/-Fpr4hjbh.png)

Once done, click on the Send Notification button, and it will initiate a gasless signing transaction. Your notification will be sent to the respective wallet addresses upon successful delivery.

---
So far, we’ve learned how to create channels and send Web3-native notifications using EPNS. In the next tutorial, I will guide you on how to **set up the Backend SDK** and send notifications using the same.

If you found this tutorial useful, I would really appreciate it if you could share it in your social circles. It will help us expand our outreach in building the future of communications.

If you’d like to know more about EPNS and decentralized communications, feel free to check out our [Docs](https://docs.epns.io/) or join our [Discord](https://discord.com/invite/YVPB99F9W5).

Until next time!
