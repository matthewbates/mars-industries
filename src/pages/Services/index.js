import React, { useEffect } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH3,
  ValuesH1,
} from "./ServiceElements";
import { servicesObjOne, servicesObjTwo } from "../../components/Info/data";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Info from "../../components/Info";
import ServiceCardItem from "../../components/ServiceCardItem";
import ValuesCardItem from "../../components/ValuesCardItem";
import Footer from "../../components/Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ServicesContainer>
      <Header />
      <Navbar />
      <Info {...servicesObjOne} />
      <ServicesH1>Primary Services</ServicesH1>
      <ServicesH3>
        Offering all construction services, from conception to completion.
      </ServicesH3>
      <ServiceCardItem />
      <ValuesH1>Our Values</ValuesH1>
      <ValuesCardItem />
      <Info {...servicesObjTwo} />
      <Footer />
    </ServicesContainer>
  );
}
