import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Card() {
  return (
    <div className="card text-textColor w-headerWidth">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;
