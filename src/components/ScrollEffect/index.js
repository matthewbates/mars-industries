import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export default function ScrollEffect({ children }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div ref={ref} variants={variant} initial="hidden" animate={control} displayOnce={true}>
      {children}
    </motion.div>
  );
}
