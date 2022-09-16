import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH3,
  ValuesH1,
} from "./ServiceElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ServiceCardItem from "../../components/ServiceCardItem";
import ValuesCardItem from "../../components/ValuesCardItem";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import { servicesObjOne, servicesObjTwo } from "../../components/Info/data";

export default function Services() {
  return (
    <ServicesContainer>
      <Header />
      <Navbar />
      <Info {...servicesObjOne} />
      <ServicesH1>Core Services</ServicesH1>
      <ServicesH3>
        Offering all construction services, from conception to completion!
      </ServicesH3>
      <ServiceCardItem />
      <ValuesH1>MARS Construction Values</ValuesH1>
      <ValuesCardItem />
      <Info {...servicesObjTwo} />
      <Footer />
    </ServicesContainer>
  );
}
