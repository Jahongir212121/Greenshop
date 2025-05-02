import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import View from "../../components/View/View";
import Handout from "../../components/Handout/Handout";
import Related from "../../components/Related/Related";

export default function Shop() {
  return (
    <div>
      <Header />
      <main>
        <View />
        <Handout />
        <Related />
      </main>
      <Footer />
    </div>
  );
}
