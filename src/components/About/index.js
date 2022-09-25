import React from "react";

import { AboutContainer, AboutWrapper, AboutH2, AboutP } from "./AboutElements";

export default function About() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutH2>Providing Over 20 Years of Experience & Expertise</AboutH2>
        <AboutP>
          Mars Construction is a premier, general contracting company based out
          of Colorado Springs, Colorado serving communities along the front
          range of the Rocky Mountains. Specializing anywhere between
          excavations and dirt work to framing, custom stairwells, and water
          features, we obsess with the logistics that go into making sure your
          project goes above and beyond expectations. We constantly strive to
          make the difficult, delightful.
        </AboutP>
        <AboutP>
          We takes pride in attention to detail and quality craftsmanship.
          Providing open and honest communication with each and every client is
          something we truly take pride in. While each project is individual to
          the clients' needs, we aim to make it understood that each end product
          is about manifesting the vision of the client. We look forward to
          making your ideas come to life.
        </AboutP>
      </AboutWrapper>
    </AboutContainer>
  );
}
