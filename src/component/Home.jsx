import React from "react";
import Banner from "./Banner";
import Footer from "./footer";
import GropItem from "./GropItem";
import IntrolductCompany from "./introlductCompany";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <IntrolductCompany/>
      <GropItem/>
    </div>
  );
}
