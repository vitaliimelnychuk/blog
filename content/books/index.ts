import imageOptimizationImage from './image-optimization.png'
import systemsPerformanceImage from './systems-performance-brendan-gregg.jpg'
import softwareEngineersGuidebookImage from './the-software-engineers-guidebook.png'
import artificialIntelligenceImage from './artificial-intelligence-a-modern-approach.jpg'
import learningJavaScriptDesignPatternsImage from './learning-javascript-design-patterns.jpg'

export const books = [
  {
    title: "The Software Engineer's Guidebook",
    description:
      'Gergely Orosz, author of The Pragmatic Engineer, maps how software engineering careers actually work: from writing your first production code to leading teams. It is a practical reference for growing as an engineer and for understanding how strong engineering organizations operate.',
    author: 'Gergely Orosz',
    amazonUrl: 'https://www.amazon.com/dp/908338182X',
    imageSrc: softwareEngineersGuidebookImage,
    date: new Date('12 Mar 2024'),
  },
  {
    title: 'Artificial Intelligence: A Modern Approach',
    description:
      'The standard engineering textbook on artificial intelligence. Russell and Norvig cover search, knowledge representation, machine learning, and the ideas behind modern AI systems in a way that stays useful when you are building software, not only reading papers.',
    author: 'Stuart Russell and Peter Norvig',
    amazonUrl:
      'https://www.amazon.com/Artificial-Intelligence-Modern-Approach-4th/dp/0134610997',
    imageSrc: artificialIntelligenceImage,
    date: new Date('18 Jun 2024'),
  },
  {
    title: 'Learning JavaScript Design Patterns',
    description:
      'Addy Osmani explains the patterns that show up in real JavaScript codebases: modules, observers, and the structures that keep large front-end applications understandable. A second Osmani book worth keeping next to Image Optimization when you care about how the code is shaped, not only how fast the page loads.',
    author: 'Addy Osmani',
    amazonUrl:
      'https://www.amazon.com/Learning-JavaScript-Design-Patterns-Developers/dp/1449331815',
    imageSrc: learningJavaScriptDesignPatternsImage,
    date: new Date('9 Sep 2023'),
  },
  {
    title: 'Image Optimization',
    description:
      'A clear guide to the techniques behind image optimization, including how browsers decode and render images. It is the book I reach for when a page is slow because of pictures rather than JavaScript.',
    author: 'Addy Osmani',
    amazonUrl:
      'https://www.amazon.com/Image-Optimization-Addy-Osmani-ebook/dp/B096XDTH5P',
    imageSrc: imageOptimizationImage,
    date: new Date('22 Oct 2021'),
  },
  {
    title: 'Systems Performance',
    description:
      'I used this book to fill the gaps between software engineering and performance work. If you are moving into performance from another area, it is a strong start: it explains how to analyze systems and which tools to use day to day.',
    author: 'Brendan Gregg',
    amazonUrl:
      'https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158',
    imageSrc: systemsPerformanceImage,
    date: new Date('31 Jul 2021'),
  },
]
