import React, { useEffect } from "react";
import ServicesCard from "../ServicesCard";
import { ServiceCardItemContainer } from "./ServiceCardItemElements.js";
import { services } from "./data";
import gsap from "gsap";

export default function ServiceCardItem() {
  useEffect(() => {
    gsap.from(".service-card", {
      x: 100,
      delay: 0.5,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.35,
    });
  }, []);

  return (
    <ServiceCardItemContainer>
      {services.map((item, index) => (
        <ServicesCard
          className="service-card"
          key={index}
          title={item.title}
          description={item.description}
          image={item.img}
          alt={item.alt}
          style={item.style}
        />
      ))}
    </ServiceCardItemContainer>
  );
}
