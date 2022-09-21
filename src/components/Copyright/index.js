import React from "react";
import { CopyrightText } from "./CopyrightElements";

export default function Copyright() {
  return (
    <CopyrightText>
      Copyright © {new Date().getFullYear()} MARS Industries. All rights
      reserved.
    </CopyrightText>
  );
}
