import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SiteMapRoutes from "../../components/SiteMapRoutes";
import { SiteMapContainer } from "./SiteMapElements";
import { Link } from "react-router-dom";

export default function SiteMap() {
  return <SiteMapContainer to="/sitemaproutes">Site Map</SiteMapContainer>;
}
