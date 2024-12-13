import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container/inedx";
import MovieGrids from "../../components/MovieGrids";

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <MovieGrids />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
