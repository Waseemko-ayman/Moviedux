import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container/inedx";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
