import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH3,
  ValuesH1,
} from "./ServiceElements";
import CONSTANTS from "../../utils/constants";
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
      <ServicesH1>Core Services</ServicesH1>
      <ServicesH3>
        Offering all construction services, from conception to completion!
      </ServicesH3>
      <ServiceCardItem />
      <ValuesH1>MARS Construction Values</ValuesH1>
      <ValuesCardItem />
      <Footer />
    </ServicesContainer>
  );
}
