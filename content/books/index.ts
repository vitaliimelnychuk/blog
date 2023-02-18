import blackHolesImage from './black-holes-and-baby-universes-and-other-essays.jpg'
import imageOptimizationImage from './image-optimization.png'
import systemsPerformanceImage from './systems-performance-brendan-gregg.jpg'
import theoryOfEverythingImage from './the-illustrated-theory-of-everything.jpg'
import theArtOfNotGivingAFuckImage from './the-subtle-art-of-not-giving-a-f*ck.jpg'

export const books = [
  {
    title: 'Image Optimization',
    description:
      'Great book that explains core techniques for images optimizations along with tech details how images rendered by browser.',
    author: 'Addy Osmani',
    amazonUrl:
      'https://www.amazon.com/Image-Optimization-Addy-Osmani-ebook/dp/B096XDTH5P',
    imageSrc: imageOptimizationImage,
    date: new Date('22 Oct 2021'),
  },
  {
    title: 'Systems Performance',
    description:
      "I used this book to feel in the gaps between Engineering and Performance. If you're like me doing a transition from another area to Performance this book would be great start and gives you understanding of systems performance analysis approaches and tools you can use daily",
    author: 'Brendan Gregg',
    amazonUrl:
      'https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158',
    imageSrc: systemsPerformanceImage,
    date: new Date('31 Jul 2021,'),
  },
  {
    title: 'The Illustrated Theory of Everything',
    description: `Do you know your place in Universe? You definitely will make big step in understanding theory of relativity, black holes, quantum theory and timing.`,
    author: 'Stephen Hawking',
    amazonUrl:
      'https://www.amazon.com/Illustrated-Theory-Everything-Universe-2003-10-24-dp-B01NH01CUL/dp/B01NH01CUL',
    imageSrc: theoryOfEverythingImage,
    date: new Date('25 Jan 2020,'),
  },
  {
    title: 'Black Holes and Baby Universes and Other Essays',
    description:
      'I have spent a lot of evenings by watching The Big Bang Theory. This book reminds me all Sheldon jokes around String theory and black holes. It is a great book to understand the basics of the universe and the most important questions about it.',
    author: 'Stephen Hawking',
    amazonUrl:
      'https://www.amazon.com/Black-Holes-Universes-Other-Essays-ebook/dp/B004JHYRXQ',
    imageSrc: blackHolesImage,
    date: new Date('24 Mar 2020'),
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    description: `I like how enjoyable this book is. Sometimes, we just need to look around and enjoy what we have done and what's going to happened. Enjoying your journey is much better then waiting for success.`,
    author: 'Mark Manson',
    amazonUrl:
      'https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713',
    imageSrc: theArtOfNotGivingAFuckImage,
    date: new Date('03 Jan 2020'),
  },
]
