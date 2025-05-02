import React from "react";
import Header from "../../components/Header/Header";
import Carusel from "../../components/Carusel/Carusel";
import BodyMain from "../../components/BodyMain/BodyMain";
import About from "../../components/About/About";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Carusel />
        <BodyMain />
        <About />
        <Post />
      </main>
      <Footer />
    </div>
  );
}
