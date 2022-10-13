import React from "react";
import { SiteMapRoutesContainer } from "./SiteMapElements";
import { Link } from "react-router-dom";

export default function SiteMapRoutes() {
  return (
    <>
      <SiteMapRoutesContainer to="/">Home</SiteMapRoutesContainer>
      <SiteMapRoutesContainer to="/company">Company</SiteMapRoutesContainer>
      <SiteMapRoutesContainer to="/services">Services</SiteMapRoutesContainer>
      <SiteMapRoutesContainer to="/gallery">Gallery</SiteMapRoutesContainer>
      <SiteMapRoutesContainer to="/contact">Contact</SiteMapRoutesContainer>
    </>
  );
}
