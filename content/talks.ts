export type TTalk = {
  title: string;
  description: string;
  url: string;
  date: Date;
}

export const talks = [
  {
    title: "Deployment process as Code",
    description: "It started when we decided to move on with k8s cluster. We have changed and reconsidered in infrastructure a lot since September. And now, we have different level of managing servers and how we handle every day deployments.",
    date: new Date("5 Mar 2020"),
    url: "static/pdf/deployment-process-as-code.pdf"
  },
  {
    title: "30ms. How much does it cost?",
    description: "When we are working on the infrastructure especially on the network performance. We are facing with issue that is not clear from the first view. Here is my small talk how we've found network performance issue between our clusters that were hosted in different regions.",
    date: new Date("14 Feb 2020"),
    url: "static/pdf/30ms_how-much-does-it-cost.pdf"
  },
  {
    title: "The Importance of Good Software Architecture",
    description: "This talk for 'Ternopil Ivan Puluj National Technical University' students where I describe how architecture design is important. We've made software architecture decisions every day and we always try to get away from 'Technical doubts'. Architecture design patterns are essential to make these decisions.",
    date: new Date("11 Nov 2019"),
    url: "static/pdf/the-importance-of-good-software-architecture.pdf"
  },
  {
    title: "VS Code Remote Debugging",
    description: "If you have everything run in containers you also have to develop by using them. VS Code remote debugging is awesome feature that makes amazing developer experience. It gives you ability to use linters, formatters, code navigation from containers without any additional installation on your host.",
    date: new Date("16 Aug 2019"),
    url: "static/pdf/vs-code-remote-debugging.pdf"
  },
  {
    title: "Elasticsearch: Controlling relevance",
    description: "Over the last year, our team has been working to find and deliver relevant results. We use Elasticsearch, search in 15TB cluster and handle up to 20000 requests/sec. Here is my talk slides about how full text search works, what is relevant, and how to build your scoring function.",
    date: new Date("8 June 2019"),
    url: "static/pdf/elasticsearch-controlling-relevance.pdf"
  },
  {
    title: "Cache Strategies",
    description: "Every system facing with performance issues starts from adding cache. Sometimes, we easily add new cache but forget about cache life time and things are getting worse. Here is my overview approaches that might be helpful in the time you are considering to add cache in your system.",
    date: new Date("20 Oct 2018"),
    url: "static/pdf/cache-strategies.pdf"
  },
  {
    title: "Node.js Microservices and testing",
    description: "My team has been working on the moving to Microservices for last year. It's getting complicated when count of microservices is moving over one hundred. I've shared our approach how we write tests, document code, create specs and support communication between services.",
    date: new Date("12 Feb 2018"),
    url: "static/pdf/nodejs-microservices-and-testing.pdf"
  },
  {
    title: "Data aggregation. Real time analytics",
    description: "We had faced some performance issues with aggregating data and building real time reports. We've started using ClickHouse to handle all of these issues. We use it to build real time reports through 1 billion data sets and we are happy how it's going on there. Let's take a look what sort of comparisons we've made.",
    date: new Date("2 Aug 2017"),
    url: "static/pdf/nodejs-microservices-and-testing.pdf"
  }
] as TTalk[]
