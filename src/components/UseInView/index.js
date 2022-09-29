import React from "react";
import { useInView } from "react-intersection-observer";

export default function UseInView({ children }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    <div ref={ref} className={inView ? "listItem animate" : "listItem"}>
      {children}
    </div>
  );
}
