import React from "react";
import { AuthorContainer } from "./AuthorElements";

export default function Author() {
  return (
    <AuthorContainer>
      <a
        href="https://www.matthewbates.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by Matthew Bates
      </a>
    </AuthorContainer>
  );
}
