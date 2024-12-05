import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function BackToTopButton() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 200);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 50000 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <IconButton
        onClick={scrollToTop}
        aria-label="Back to Top"
        icon={<ArrowUpIcon />}
        colorScheme="yellow"
        borderRadius="full"
        size="lg"
      />
    </motion.div>
  );
}
