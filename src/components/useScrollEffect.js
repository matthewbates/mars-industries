import React, { useEffect } from "react";

export default function useScrollEffect() {
  const scrollEffect = useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <div>{children}</div>;
}
