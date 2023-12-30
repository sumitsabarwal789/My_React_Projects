import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Next from "./components/Page";
import Errorr from "./components/Errorr";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [usePage, setUsePage] = useState(1);
  const [useCountry, setUseCountry] = useState("in");

  const changeCountryUSA = () => {
    setUseCountry("us");
    setUsePage(1);
  };

  const changeCountryCanada = () => {
    setUseCountry("ca");
    setUsePage(1);
  };

  const changeCountryJapan = () => {
    setUseCountry("jp");
    setUsePage(1);
  };

  const changeCountryGermany = () => {
    setUseCountry("de");
    setUsePage(1);
  };

  const changeCategoryBusiness = () => {
    setCategory("business");
    setUsePage(1);
  };

  const changeCategoryGeneral = () => {
    setCategory("general");
    setUsePage(1);
  };

  const changeCategoryScience = () => {
    setCategory("science");
    setUsePage(1);
  };

  const changeCategorySports = () => {
    setCategory("sports");
    setUsePage(1);
  };

  const changeCategoryHealth = () => {
    setCategory("health");
    setUsePage(1);
  };

  async function fetchAPI() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${useCountry}&category=${category}&apiKey=50dbcaf1cf82434f87008aff6040fbd2&pageSize=5&page=${usePage}`
      );
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [category, usePage, useCountry]);

  const handleNext = () => {
    async function fetchAPI2() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${useCountry}&category=${category}&apiKey=50dbcaf1cf82434f87008aff6040fbd2&pageSize=5&page=${usePage}`
        );
        const data = await response.json();
        setArticles(data.articles);
        setUsePage(usePage + 1);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchAPI2();
  };
  const handlePrev = () => {
    async function fetchAPI3() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${useCountry}&category=${category}&apiKey=50dbcaf1cf82434f87008aff6040fbd2&pageSize=5&page=${usePage}`
        );
        const data = await response.json();
        setArticles(data.articles);
        setUsePage(usePage - 1);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchAPI3();
  };

  return (
    <>
      <Navbar
        business={changeCategoryBusiness}
        science={changeCategoryScience}
        sports={changeCategorySports}
        health={changeCategoryHealth}
        general={changeCategoryGeneral}
      />
      <Jumbotron />
      {articles.length === 0 && <Errorr />}
      {loading === true ? <Loader /> : false}
      <section className="mx-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 sm:gap-x-10 place-items-center ">
          {articles.map((article, index) => (
            <Card
              key={index}
              image={article.urlToImage}
              author={article.author}
              title={article.title}
              content={article.content}
              url={article.url}
            />
          ))}
        </div>
      </section>
      <Next next={handleNext} prev={handlePrev} />
      <Footer
        usa={changeCountryUSA}
        canada={changeCountryCanada}
        japan={changeCountryJapan}
        germany={changeCountryGermany}
      />
    </>
  );
}

export default App;
