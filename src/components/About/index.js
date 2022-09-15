import React from "react";
import { AboutContainer, AboutWrapper, AboutH1, AboutP } from "./AboutElements";

export default function About() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutH1>Providing Over 20 Years of Expertise & Experience</AboutH1>
        <AboutP>
          Joel & Co. Construction is a premier general contracting company
          located in Los Angeles, California serving the San Fernando Valley as
          well as the greater Los Angeles region. Specializing in new
          construction, custom home building, residential renovations, and
          commercial construction, Joel & Co. always strives toward sustainable,
          eco-friendly construction, and best practices. The company thrives on
          making the difficult, delightful and is particularly passionate about
          kitchen and bathroom remodeling and room additions.
        </AboutP>
        <AboutP>
          Joel & Co. takes pride in quality craftsmanship, attention to detail,
          and provides full and open communication with each and every client.
          With each project, it is understood that this is not about simply
          putting up walls or tile — it is about manifesting the vision of the
          client and keeping that vision the central focus throughout the
          construction process. For these reasons, the company is among the most
          trusted and fastest-growing renovation specialists and custom home
          builders in Los Angeles.
        </AboutP>
      </AboutWrapper>
    </AboutContainer>
  );
}
