---
title: How to Optimize Images for Web and Performance
date: 22 Oct 2021
description: Images are really underestimated on their impact on web performance. There are a few steps that each team can do to make the web faster without hours spent.
---

It's been a year since my switch to the full-time Performance job. I like performance from all aspects, no matter if it is capacity testing, server benchmarking, or user-centric metrics.

Last month, I bought **[Image Optimization](https://www.smashingmagazine.com/printed-books/image-optimization/)** by Addy Osmani to help other teams render images efficiently. It took me 200 pages and I couldn't wait to try the difference
and how much you lose by choosing the wrong image format or uploading an image without any compressing.

This is where **[https://imagesperf.vercel.app](https://imagesperf.vercel.app)** was born!

Fork [https://github.com/vitaliimelnychuk/images-performance](https://github.com/vitaliimelnychuk/images-performance) and change  images list in `components/ImageList/data.js` if you want to compare your own images.

## Always have a checklist!

The checklist is a great tool to improve your daily routine by introducing things that you have never done before. Having it before your changes go live will lead to continuous improvements.

Slowly loaded images impact your users the same as bad quality images. Our users want to have their content fast even if the internet connection is not so fast. By following a few techniques we can achieve great results without getting users disappointment.

Let's go with one for improving images performance by going from what I think, most important points to the one that can be skipped or addressed at the end.

- Resolution
- Quality
- Format (jpg, png, WebP)
- Screen resolution based rendering
- Preview low-quality image

## How does resolution impact your users?

I think image resolution is the first thing everyone should consider to improve performance. By choosing the right image resolution we would decrease the size and also decode image time by the browser. Smaller - faster!

If you open [https://imagesperf.vercel.app](https://imagesperf.vercel.app) you can see a list of images that are lazy-loaded. I did it just to show a basic page with images listing, it can be whatever you can think of from product listing to blog post about your monthly books. At the top, there is a list of filters that are directly connected to the URL.

For testing I am going to use [www.webpagetest.org](www.webpagetest.org) and use the same parameters for simplicity:

- _Location_: Virginia
- _Device_: Browser
- _Connection_: 3G
- _Number of tests to run_: 5

There are a few things you could do in a few minutes that could easily make your page faster **10 times** without noticeable difference.

### Not optimized images

For the first test I selected the following configuration:

[https://imagesperf.vercel.app/?quality=100&format=jpg&width=2048&height=1536&fit=clip](https://imagesperf.vercel.app/?quality=100&format=jpg&width=2048&height=1536&fit=clip)

- _Quality:_ 100
- _Fit:_ clip
- _Width:_ 2048
- _Height:_ 1536
- _Format:_ jpg

On the image below, you can see the original page load for 16 images without any optimizations. It just loads all images from `unsplash.com` and renders them asynchronisly.

![webpagetest-not-optimized-run](/static/img/articles/2021-10-22/webpagetest-not-optimized-run.png)

### Enabling compression

There is a huge amount of improvements that could be done, let's focus on the most important ones.

#### Set images quality to 70

[https://imagesperf.vercel.app/?quality=70&format=jpg&width=2048&height=1536&fit=clip](https://imagesperf.vercel.app/?quality=70&format=jpg&width=2048&height=1536&fit=clip)

- _Quality:_ 70
- _Fit:_ clip
- _Width:_ 2048
- _Height:_ 1536
- _Format:_ jpg

By decreasing quality, page size drops to ~3.8 Mb which is more than twice less original one!

![webpagetest-q70](/static/img/articles/2021-10-22/webpagetest-q70.png)

#### Set lower image resolution

[https://imagesperf.vercel.app/?quality=70&format=jpg&width=1024&height=756&fit=clip](https://imagesperf.vercel.app/?quality=70&format=jpg&width=2048&height=1536&fit=clip)

- _Quality:_ 70
- _Fit:_ clip
- _Width:_ 1024
- _Height:_ 756
- _Format:_ jpg

![webpagetest-q70-w1024](/static/img/articles/2021-10-22/webpagetest-q70-w1024.png)

#### Use WebP image format

[https://imagesperf.vercel.app/?quality=70&format=webp&width=1024&height=756&fit=clip](https://imagesperf.vercel.app/?quality=70&format=webp&width=2048&height=1536&fit=clip)

- _Quality:_ 70
- _Fit:_ clip
- _Width:_ 1024
- _Height:_ 756
- _Format:_ webp

![webpagetest-q70-w1024-webp](/static/img/articles/2021-10-22/webpagetest-q70-w1024-webp.png)

#### Use AVIF image format

[https://imagesperf.vercel.app/?quality=70&format=avif&width=1024&height=756&fit=clip](https://imagesperf.vercel.app/?quality=70&format=avif&width=2048&height=1536&fit=clip)

- _Quality:_ 70
- _Fit:_ clip
- _Width:_ 1024
- _Height:_ 756
- _Format:_ avif

![webpagetest-q70-w1024-avif](/static/img/articles/2021-10-22/webpagetest-q70-w1024-avif.png)

## Do Analysis

Web pages consist of a lot of images. We rely on images a lot to improve users experience. No one wants to throw low-quality images but what if we just make them good enough?

Looking back to the results of changing resolution and image format you can see huge differences in page size without actually changing the code. There is some incompatibility of using `webp` and `avif` formats but still, they can be used for some browsers.

- https://caniuse.com/avif
- https://caniuse.com/webp

## Checklist

The first step of automation is to create a checklist to do it manually. This is something I usually use to check `critical` issues with images performance. There is great feature in Github to have a [PR template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) to start with. 

- Is compression for images enabled?
- Do we have different image resolutions(Mobile, tablet, laptop)?
- Do we use the best image format based on the user device?


As a note, take a look at https://github.com/calibreapp/image-actions to make images optimization as part of your build process.

## Conclusion

Images are not as easy as we could think! I just wanted to get some attention over simple optimizations you always can do, even if you can you're working on something alone and don't have time to do things perfectly.

I am also sharing some articles to get more knowledge about image performance and get further steps to improve.

- [https://github.com/calibreapp/image-actions ](https://github.com/calibreapp/image-actions)- Github action to automatically compress your images as part of CI process.
- Performance budget
- [https://github.com/tkadlec/grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget)
- [https://web.dev/use-lighthouse-for-performance-budgets/](https://web.dev/use-lighthouse-for-performance-budgets/)
- [https://developers.google.com/web/tools/lighthouse](https://developers.google.com/web/tools/lighthouse)
- Books
  - [https://www.oreilly.com/library/view/using-webpagetest/9781491902783/](https://www.oreilly.com/library/view/using-webpagetest/9781491902783/)
  - [https://www.smashingmagazine.com/2021/04/image-optimization-pre-release/](https://www.smashingmagazine.com/2021/04/image-optimization-pre-release/)
