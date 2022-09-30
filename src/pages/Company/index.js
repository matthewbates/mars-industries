import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Philosophy from "../../components/Philosophy";
import Footer from "../../components/Footer";
import { CompanyH3 } from "./companyElements";

export default function Company() {
  return (
    <>
      <Header />
      <Navbar />
      <CompanyH3>Company</CompanyH3>
      <Philosophy />
      <Footer />
    </>
  );
}
