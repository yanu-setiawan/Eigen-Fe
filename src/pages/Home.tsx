import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import CardArticles from "../components/CardArticles";
import axios from "axios";
function Home() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<{ articles: any[] }>(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=994fe4719f464543a090d87321364b53"
        );
        setArticles(response.data.articles);
        console.log(response.data.articles[0].content);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Layout className=" bg-white px-[15%] pt-[7%]">
        <div className=" flex w-full flex-col">
          <p className="font-rubik text-5xl text-left my-4 w-full font-bold text-black">
            Latest News
          </p>
          <div className=" w-full h-1 bg-[#9f9f9f] rounded-sm opacity-30"></div>
        </div>
        <section className=" pt-7 grid-cols-1 grid lg:grid-cols-2 mx-auto gap-7 content-center">
          {articles.map((article, index) => (
            <CardArticles
              key={index}
              index={index}
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              description={article.description}
              content={article.content}
            />
          ))}
        </section>
      </Layout>
    </>
  );
}

export default Home;
