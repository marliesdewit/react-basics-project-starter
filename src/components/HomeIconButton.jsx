import { IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

export default function HomeIconButton({ onBack }) {
  return (
    <IconButton
      icon={<FaHome />}
      aria-label="Go to Home"
      position="fixed"
      top={4}
      right={4}
      size="lg"
      colorScheme="yellow"
      borderRadius="full"
      boxShadow="md"
      zIndex={1000}
      onClick={onBack}
      _hover={{
        bg: "yellow.500",
      }}
      _active={{
        bg: "yellow.600",
      }}
    />
  );
}
