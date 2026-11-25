# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/messbiily273-jpg/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/messbiily273-jpg/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty ["Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post of my own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and make.fun and my play code in its text, and this repository hands in the post's address. The posts with the most replies, reposts and quotes at the deadline take the rewards: the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The post is the entry

The post: https://x.com/Lina_grzr/status/2125419486648111410

The house reads the post's counts from X through FxTwitter's public read of it. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read and shown, and move nothing. During the bounty the board shows each post's latest score, read again from time to time (every 15 minutes at the most often), and at the deadline the house reads every post once more; that reading decides the places.

## What the post has

- It is one post of my own, a quote of make.fun's post (X's Repost button, then Quote), with a photo of its own attached.
- Its text carries make.fun and the tag of make.fun's account on X, `@makefunai`, plus the line: "Make your own bounty on @makefunai: https://make.fun/sponsor/new".
- Its text also carries my play code, `makefun-candle-cricket-estuary`.
- It was posted at or after the bounty opened and before the deadline, from a public X account (@Lina_grzr), and is kept up and public until the results are out.

## What this repository does

`POST.json` holds the post's address:

    {"url": "https://x.com/Lina_grzr/status/2125419486648111410"}

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do. Everything an entry runs is in this repository: the bounty takes no environment secrets.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
