---
title: How to Optimize Images for Web and Performance
date: 22 Oct 2021
description: Images are really underestimated on their impact over web performance. There are a few few steps that each team can do to make web faster without hours spent.
---

It's been mostly a year from my switch to the full-time Performance job. I like performance from all aspects, no matter is it capacity testing, servers benchmarking or user centric metrics.

Last month, I bought **[Image Optimization](https://www.smashingmagazine.com/printed-books/image-optimization/)** by Addy Osmani to help other team render images efficiently. It took me 200 pages and I couldn't wait to try the difference
and how much you loose by choosing wrong image format or uploading image without any compressing.

This where **[https://imagesperf.vercel.app](https://imagesperf.vercel.app)** was born!

## Always have a checklist!

Checklist is great tool to improve your daily routine by introducing things that you have never done before. Having it before your changes go live will lead for continuous improvements.

Slowly loaded images impact your users the same as bad quality images. Our users want to have their content fast even if the internet connect not so fast. By following a few techniques we can achieve great results without getting users disappointment.

Let's go with one for improving images performance by going from what I think, most important points to the one that can be skipped or addressed at the end.

- Resolution
- Quality
- Format (jpg, png, wepb)
- Screen resolution based rendering
- Preview low quality image

## How resolution impacts your users?

I think, image resolution is the first thing everyone should consider to improve performance. By choosing right image resolution we would decrease the size and also decoding image time by browser. Smaller - faster!

If you open [https://imagesperf.vercel.app](https://imagesperf.vercel.app) you can see list of images that are lazy loaded. I did it just show basic page with images listing, it can be whatever you can think of from products listing to blog post about your monthly books. At the top, there is list of filters that directly connected to URL.

For testing I am going to use[www.webpagetest.org](www.webpagetest.org) and use the same parameters for simplicity:

- _Location_: Virginia
- _Device_: Browser
- _Connection_: 3G
- _Number of tests to run_: 5

### Not optimized images

For the first test I selected the following configuration:

[https://imagesperf.vercel.app/?quality=100&format=jpg&width=2048&height=1536&fit=clip](https://imagesperf.vercel.app/?quality=100&format=jpg&width=2048&height=1536&fit=clip)

- _Quality:_ 100
- _Fit:_ clip
- _Width:_ 2048
- _Height:_ 1536
- _Format:_ jpg
