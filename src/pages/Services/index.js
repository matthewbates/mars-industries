import React from "react";
import { ServicesContainer } from "./ServiceElements";
import { services } from "./data";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import CardItem from "../../components/CardItem";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <ServicesContainer>
      <Header />
      <Navbar />
      <h1>Services</h1>
      {services.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
      <Footer />
    </ServicesContainer>
  );
}
