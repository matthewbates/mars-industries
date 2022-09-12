import React from "react";
import { ServicesContainer } from "./ServiceElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ServiceCardItem from "../../components/ServiceCardItem";
import ValuesCardItem from "../../components/ValuesCardItem";
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
      <ServiceCardItem />
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        Our Values
      </h1>
      <ValuesCardItem />
      {/* <Footer /> */}
    </ServicesContainer>
  );
}
