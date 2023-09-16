---
external: false
title: "Simple ELI5 Explanation of Zero Knowledge Proofs"
description: An article to build your mental model around Zero-Knowledge Proofs.
date: 2023-03-08
---

![](/images/blog/3.webp)

Let’s start with a simple analogy. Suppose you have two persons: Patrick and Virginia. Take a look at the picture now. There is a tunnel that divides into two paths marked as A and B.  
  
A and B are separated by a magic door which opens only when the magic spell is whispered near the door.

Patrick wants to prove to Virginia that he has "the" magical spell. But Virginia won’t trust him until he proves his powers. Patrick is unwilling to tell Virginia about this magical spell, so **they decide to work on a challenge**.

![image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fcc622a77-392c-49ea-a9c7-6c5db998ce44_1200x837.jpeg)

Virginia tells Patrick to go inside the tunnel from the main entrance. Choose any of the paths which he likes: A or B. After Patrick goes in, Virginia will wait for him at the V-point. Virginia will shout either ‘A’ or ‘B’ and Patrick has to come out from that path.

> Suppose Patrick goes on Path A, and Virginia asks him to come from Path B, he can do so by opening the magic door. So he should be knowing the spell.
> 
> ***OR MAYBE,***  
>   
> Patrick goes on Path A, and Virginia asks him to come from Path A, he can do that without knowing the spell.

At any given call by Virginia, Patrick can either come from that path or he can’t.

If Patrick doesn’t know the magical spell, the probability of him coming out through the right pathway is 1/2 or 0.5 here. Therefore, if only one round of testing is done by Virginia, Patrick may fool her half of the time without even knowing the spell.  
  
So Virginia decides to take this test multiple times. Let’s say 20 times. If she takes this same test 20 times simultaneously, Patrick has to come out from the path mentioned above 20 times correctly.  
  
Mathematically, there can be **2^20 possibilities** or **1,048, 576** outcomes. Only 1 out of these ~1 million ways will have Patrick coming out on the right pathway every time.

Chances of Fooling Virginia: 9.53e-7 or Negligible 😲

## Outcome of this Challenge 🦄

Patrick successfully proved to Virginia if he has the magical spell or not without even telling her. Virginia authenticated if Patrick has the spell or not. Voila!! You now have the basic mental model of zK Proofs.

As you know, traditional proofing algorithms expose crucial data to Verifier systems, which causes significant risk in the future.  
  
zK-Proofing gives a method to prove to the Verifier that you have performed some computation or operation without exposing the internal details.

## Interesting Usecases 😉

This technique will be used someday for the Nuclear Disarmament of countries without them exposing any detail related to their Nuclear Missile systems. It will also become an integral part of blockchain networks to improve privacy on-chain.

Implementation of zK-Proofs has been extended using technologies that could also help in scaling blockchain networks like [Ethereum](https://threadreaderapp.com/hashtag/Ethereum). Example: zK-SNARK, zK-Rollups & zK-STARK.  
  
I will be covering them in upcoming articles and threads on my [Twitter](https://x.com/ashngmi) profile.

**Here are some resources I would recommend you check out:**

* [*Zero-knowledge proof - Wikipedia*](https://en.m.wikipedia.org/wiki/Zero-knowledge_proof)
    
* [*Zero-Knowledge Blog*](http://www.zeroknowledgeblog.com/)

If you enjoyed reading this content, don't forget to share it with your friends. It encourages me to write more such lucid explanations 😉

*Till next time, Sayonara!*