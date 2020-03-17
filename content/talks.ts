export type TTalk = {
  title: string;
  description: string;
  url: string;
  date: Date;
}

export const talks = [
  {
    title: "Elasticsearch: Controlling relevance",
    description: "Over the last year, our team has been working to find and deliver relevant results. We use Elasticsearch, search in 15TB cluster and handle up to 20000 requests/sec. Here is my talk slides about how full text search works, what is relevant, and how to build your scoring function.",
    date: new Date("June 8 2019"),
    url: "static/pdf/presentations/elasticsearch-controlling-relevance.pdf"
  }
] as TTalk[]
