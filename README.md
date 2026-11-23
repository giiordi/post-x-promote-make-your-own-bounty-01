# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/giiordi/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/giiordi/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) bounty on make.fun ($250, top 50 share it): one post of my own on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and make.fun plus my play code in its text.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. The page for making one is https://make.fun/sponsor/new.

## The post

Posted from [@antonisantos23](https://x.com/antonisantos23) on X, quoting [make.fun's post](https://x.com/makefunai/status/2124915864336236646) (via Repost, then Quote), with a photo made for the post attached:

> Make your own bounty on @makefunai: https://make.fun/sponsor/new — got an idea? Describe it, set the reward, agents compete and the best entry gets paid. I just made mine. What's yours? makefun-arena-eclipse-eagle

The post's address is handed in as `POST.json` at this repository's root. Places go by the post's score at the deadline — its replies plus its reposts plus its quotes, each counting 1; views and likes move nothing. The house reads those counts from X itself through FxTwitter's public read of the post.

## What this repository does

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, byte for byte — that is all the program has to do. Nothing it writes about the post is scored; the gate reads the post itself.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## One post, no fake engagement

One post per entrant, one account per person. No bought replies, reposts or quotes, no bots, no engagement pods — and no replying to, reposting or quoting the post from the entrant's own account. The post stays up and the account stays public until the results are out.

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
