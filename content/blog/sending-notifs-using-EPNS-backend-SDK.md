---
external: false
title: "Sending Notifications Using EPNS Backend SDK"
description: In this tutorial, I will show you how to use the EPNS backend SDK and send notifications from your dApp.
date: 2022-08-06
---

![](/images/blog/5.webp)

Gm folks ✨

In my last tutorial, I demonstrated the complete mechanism of [sending notifications from the EPNS dApp](https://pythontony.hashnode.dev/how-to-send-decentralized-notifications-using-epns). It’s very useful for sending out broadcast notifications. However, most of the time, we are generating user-specific notifications.

So how do you deliver multiple notifications (on the scale of hundreds and thousands) at the same time?

The answer is pretty much obvious. You have to utilize your dApp backend to deliver these custom-tailored notifications. In order to send notifications directly from your backend, EPNS provides you with a backend SDK. This SDK provides a simple and easy-to-implement JavaScript library to send notifications from your dApp to the users.

Today, I will show you exactly how to use the EPNS backend SDK and send notifications from your dApp. The SDK is very easy to use and widely available on [this GitHub repository](https://github.com/ethereum-push-notification-service/epns-backend-sdk-staging).

## Setting up the backend SDK

To start sending notifications using the EPNS backend SDK, you first need to install its npm package. You need to have Node Package Manager installed in order to accomplish this task.

Open up your terminal and type the following command:

```bash
npm install @epnsproject/backend-sdk-staging
```

We are using the **Staging SDK** for now. Prod is very similar, the only difference lies in the environments of execution. Make sure you have already created a channel. In case you haven’t, check out [this tutorial](https://pythontony.hashnode.dev/getting-started-with-web3-notifications-using-epns).

## Initializing the SDK

To start utilizing the Backend SDK, I’d recommend you create a separate JavaScript file. Let’s name it “**notify.js**”. Before initializing the SDK, we must import it into **notify.js** and fetch our **channel private key**.

Import the SDK in notify.js by using this line of code.

```bash
const EpnsSDK = require("@epnsproject/backend-sdk-staging").default;
```

Remember, we also need to establish a connection with our channel. So you have to copy the private key of your channel. In other words, you need the private key of the MetaMask wallet that is linked to your channel. If you face any trouble, check out [this guide to fetch the private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) of your **MetaMask** wallet.

Once you have the private key, **prepend 0x to your private key** and insert this line into notify.js

```bash
const CHANNEL_PK = “0xPrivate_Key_Here”;
```

Now, we can create an instance of the EPNS backend SDK. To do so, we will use the below snippet:

```bash
const epnsSdk = new EpnsSDK(CHANNEL_PK);
```

## Adding notification parameters

Before we send out any notification, we will require certain parameters that will form the notification payload. It includes the **title of notification**, **message**, **call to action link**, and the **type of notification**.

Some of the parameters are optional. You can check out the complete documentation available [here](https://docs.epns.io/developers/developer-tooling/backend-sdk/understanding-and-using-backend-sdk) and customize payloads according to your needs. Also, don’t forget to check out the [types of notifications](https://docs.epns.io/developers/developer-zone/sending-notifications/advanced/notification-payload-types#payload-description).

Once you decide the type of notification and its parameters, store their values in appropriate variables and call the **sendNotification()** function.

I have tried sending a notification to one of my other dummy accounts and entered its address in the **recipientAddress** parameter. Here is the overall code snippet after importing the SDK and inserting parameters:

```bash
// import required packages
const EpnsSDK = require("@epnsproject/backend-sdk-staging").default;

// connecting to the channel using the private key
const CHANNEL_PK = "0x4968b4cd6ea60a132cdef893320c11f9febd374ae3ccf0ede7820668a431acb8"; // the private key of the channel

(async function Main() {
  // initialise the sdk
  const epnsSdk = new EpnsSDK(CHANNEL_PK);

  const pushNotificationTitle = "Hello There!"; //the title which would appear in a push notification
  const pushNotificationBody = "Welcome to EPNS"; //the body which would be displayed in a push notification

  const notificationTitle = "Hello From EPNS"; //the long version of the title which would be displayed in the dApp
  const notificationBody = `Welcome to EPNS, we are glad to have you onboard`; // the long version of the body to be displayed in the dApp

  const recipientAddress = "0x5b22A6D95EDe615a263BC8e6cD214947c9873133";
  const CTA = "https://epns.io"; // the link to be used as your CTA
  const notificationType = 3; // a notification type of 3, means the notification is a direct message to the specified recipient
  
  // send the actual notification
  const response = await epnsSdk.sendNotification(
    recipientAddress, //the recipient of the notification
    pushNotificationTitle, //push notification title
    pushNotificationBody, //push notification body
    notificationTitle, //the title of the notification
    notificationBody, //the body of the notification
    notificationType, //notification type
    CTA); //the CTA link of the notification

  console.log({
    response,
    message: "Your notification has been successfully sent"
  });

})();
```

Save this file as **notify.js** and open the terminal. Navigate to the directory of this file and run the following command:

```bash
node notify.js
```

You will see a similar result as displayed in below screenshot and your notification will be sent to the specified recipient address.

![Screenshot 2022-08-04 at 9.01.29 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659774921762/2ExTW6kxT.png)

If you found this tutorial useful, please mind sharing it in your social circles. It will help us expand our outreach in building the future of communications.

Did you know that you could also **send notifications generated from a subgraph**? No worries, I will show you how to do that in the simplest manner in the next tutorial.

Till then, Sayonara!