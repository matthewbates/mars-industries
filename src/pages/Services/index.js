import React, { useEffect } from "react";
import {
  ServicesContainer,
  ServicesH3,
  ServicesSubText,
  ValuesH1,
} from "./ServiceElements";
import { servicesObjTwo } from "../../components/Info/data";
import Info from "../../components/Info";
import ServiceCardItem from "../../components/ServiceCardItem";
import ValuesCardItem from "../../components/ValuesCardItem";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ServicesContainer>
      <ServicesH3>Services</ServicesH3>
      <ServicesSubText>
        Offering all construction services, from conception to completion.
      </ServicesSubText>
      <ServiceCardItem />
      <ValuesH1>Our Values</ValuesH1>
      <ValuesCardItem />
      <Info {...servicesObjTwo} />
    </ServicesContainer>
  );
}
