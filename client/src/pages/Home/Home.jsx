import React from "react";
import Blog from "../../components/Blog/Blog";
import Card from "../../components/Card/Card";
import MySlider from "../../components/MySlider/MySlider";
import Team from "../../components/Team/Team";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state)=>state.wishlist.items)
  console.log(items)
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <MySlider />
      <Card />
      <Team />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
