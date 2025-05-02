import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Payment from "../../components/Payment/Payment";
import Related from "../../components/Related/Related";

export default function ShopCard() {
  return (
    <>
      <Header />
      <main>
        <Payment />
        <Related />
      </main>
      <Footer />
    </>
  );
}
