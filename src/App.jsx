import { Box, Flex, Mark, Text, Center } from "@chakra-ui/react";
import "./App.css";
import RecipePage from "./pages/RecipePage";
import RecipeList from "./pages/RecipeListPage";
import { useState } from "react";
import { motion } from "framer-motion";
import { BackToTopButton } from "./components/BackToToButton";
import HomeIconButton from "./components/HomeIconButton";

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const handleClick = (item) => {
    setSelectedRecipe(item);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="white"
      w="full"
      maxW="100%"
      boxSizing="border-box"
    >
      <BackToTopButton />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Center
          letterSpacing="-0.3em"
          w="fit-content"
          textAlign="left"
          lineHeight={1}
          display="flex"
          p={5}
          mb={{ base: 6, md: 8 }}
          mt={{ base: 10, md: 8 }}
        >
          <Text
            color="black"
            m={1}
            fontWeight="medium"
            fontFamily="Inter"
            fontSize={{ base: "3.7rem", md: "4.5rem", lg: "7.5rem" }}
            maxW="80%"
          >
            <Mark fontWeight="700" color="yellow.400">
              Winc
            </Mark>{" "}
            your way to a delicious{" "}
            <Mark fontWeight="700" color="yellow.400">
              meal
            </Mark>
          </Text>

          <Text
            fontSize={{ base: "1.75em", md: "3.5rem" }}
            fontWeight={5400}
            textAlign="right"
            fontFamily="Inter"
            letterSpacing="-0.04em"
          >
            <br /> Winc <br /> Recipe <br /> Checker
          </Text>
        </Center>
      </motion.div>
      <Box>
        <HomeIconButton
          onBack={handleBack}
          h="100%"
          w="100%"
          alignItems="flex-end"
          justifyContent="flex-end"
          boxSizing="border-box"
        />
      </Box>
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} onBack={handleBack} />
      ) : (
        <>
          <RecipeList onClick={handleClick} />
        </>
      )}
    </Flex>
  );
}
