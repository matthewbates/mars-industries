import React, { useEffect } from "react";
import Philosophy from "../../components/Philosophy";
import { CompanyH3 } from "./companyElements";

export default function Company() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <CompanyH3>Company</CompanyH3>
      <Philosophy />
    </>
  );
}
