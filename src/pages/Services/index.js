import React from "react";
import { ServicesContainer } from "./ServiceElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardItem from "../../components/CardItem";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <ServicesContainer>
      <Header />
      <Navbar />
      <h1 style={{ textAlign: "center", fontFamily: "Poppins" }}>
        Core Services
      </h1>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        Offering all construction services, from conception to completion!
      </h3>
      <CardItem />
      <Footer />
    </ServicesContainer>
  );
}
