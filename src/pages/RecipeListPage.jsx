import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Box,
  Center,
  Grid,
  Image,
  Tag,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import Filter from "../components/ui/Filter";
import { data } from "../utils/data";

export default function RecipeList({ onClick }) {
  const MotionBox = motion(Box);
  const MotionDiv = motion.div;

  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("");

  const filteredRecipes = data.hits.filter((item) => {
    const recipe = item.recipe;
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      recipe.label.toLowerCase().includes(query) ||
      recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(query)
      ) ||
      recipe.dietLabels.some((label) => label.toLowerCase().includes(query));

    const matchesDiet =
      !dietFilter ||
      (dietFilter === "Vegetarian" &&
        recipe.healthLabels.includes("Vegetarian")) ||
      (dietFilter === "Vegan" && recipe.healthLabels.includes("Vegan")) ||
      (dietFilter === "Pescatarian" &&
        recipe.healthLabels.includes("Pescatarian")) ||
      (dietFilter === "Sugar-Conscious" &&
        recipe.healthLabels.includes("Sugar-Conscious")) ||
      (dietFilter === "Keto-Friendly" &&
        recipe.healthLabels.includes("Keto-Friendly")) ||
      (dietFilter === "Paleo" && recipe.healthLabels.includes("Paleo")) ||
      (dietFilter === "Gluten-Free" &&
        recipe.healthLabels.includes("Gluten-Free")) ||
      (dietFilter === "Egg-Free" && recipe.healthLabels.includes("Egg-Free")) ||
      (dietFilter === "Peanut-Free" &&
        recipe.healthLabels.includes("Peanut-Free")) ||
      (dietFilter === "Alcohol-Free" &&
        recipe.healthLabels.includes("Alcohol-Free")) ||
      (dietFilter === "Soy-Free" && recipe.healthLabels.includes("Soy-Free")) ||
      (dietFilter === "Low-Carb" && recipe.dietLabels.includes("Low-Carb")) ||
      (dietFilter === "Low-Fat" && recipe.dietLabels.includes("Low-Fat"));

    return matchesDiet && matchesSearch;
  });

  function SmoothScroll({ children }) {
    const { scrollYProgress } = useScroll();
    const smoothScroll = useSpring(scrollYProgress, {
      stiffness: 50,
      damping: 600,
      restDelta: 0.001,
    });

    return (
      <MotionDiv
        style={{
          transform: smoothScroll,
        }}
      >
        {children}
      </MotionDiv>
    );
  }

  return (
    <Box overflow="hidden" bg="yellow.300">
      <SmoothScroll>
        <Filter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dietFilter={dietFilter}
          setDietFilter={setDietFilter}
        />
        <Center
          minH="100vh"
          w="full"
          maxW="100vw"
          overflowX="hidden"
          flexDirection="column"
          justifyContent="flex-start"
          p={{ base: 4, md: 8 }}
        >
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["4", "6", "8"]}
            p={{ base: 1, md: 8 }}
            overflow="hidden"
          >
            {filteredRecipes.map((item, index) => (
              <MotionBox
                key={item.recipe.label}
                w="full"
                borderRadius="xl"
                overflow="hidden"
                h="auto"
                bg="white"
                fontFamily="Inter"
                shadow="sm"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                cursor="pointer"
                onClick={() => onClick(item)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
              >
                <Container
                  bg="transparent"
                  position="relative"
                  display="flex"
                  w="full"
                  m={0}
                  p={0}
                  flexDirection="column"
                  justifyContent="flex-end"
                >
                  <Image
                    src={item.recipe.image}
                    height={{ base: "200px", md: "300px" }}
                    w="100%"
                    objectFit="cover"
                    borderRadius="xl"
                  />
                  <Flex
                    wrap="wrap"
                    gap="2"
                    position="absolute"
                    top="10px"
                    left="10px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                    fontFamily="Inter"
                  >
                    {item.recipe.healthLabels.includes("Vegetarian") && (
                      <Tag
                        size={{ base: "sm", md: "md" }}
                        fontSize="xs"
                        colorScheme="green"
                        textTransform="uppercase"
                        w="fit-content"
                      >
                        Vegetarian
                      </Tag>
                    )}
                    {item.recipe.healthLabels.includes("Vegan") && (
                      <Tag
                        size={{ base: "sm", md: "md" }}
                        fontSize="xs"
                        colorScheme="green"
                        textTransform="uppercase"
                        w="fit-content"
                      >
                        Vegan
                      </Tag>
                    )}
                    {item.recipe.healthLabels.includes("Pescatarian") && (
                      <Tag
                        size={{ base: "sm", md: "md" }}
                        fontSize="xs"
                        colorScheme="green"
                        textTransform="uppercase"
                        w="fit-content"
                      >
                        Pescatarian
                      </Tag>
                    )}

                    {item.recipe.dietLabels.length > 0 &&
                      item.recipe.dietLabels.map((label, index) => (
                        <Tag
                          key={index}
                          size={{ base: "sm", md: "md" }}
                          fontSize="xs"
                          colorScheme="orange"
                          textTransform="uppercase"
                          w="fit-content"
                        >
                          {label}
                        </Tag>
                      ))}
                  </Flex>
                </Container>

                <Flex
                  direction="column"
                  justify="space-between"
                  flexGrow="1"
                  p={4}
                >
                  <Box>
                    <Text as="span" fontSize="sm">
                      {item.recipe.mealType}
                    </Text>
                    <br />
                    <Text as="span" mb={2} fontSize="xs" fontStyle={"italic"}>
                      {item.recipe.dishType}
                    </Text>
                    <Text
                      as="h2"
                      fontWeight="bold"
                      fontSize={{ base: "l", md: "xl" }}
                      mb={2}
                    >
                      {item.recipe.label}
                    </Text>
                  </Box>

                  {item.recipe.cautions.length > 0 && (
                    <Box mt="auto">
                      <Text
                        as="span"
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.600"
                        fontFamily="Inter"
                      >
                        Cautions: <br />
                        <Flex wrap="wrap" gap={1} mt={1}>
                          {item.recipe.cautions.map((caution, index) => (
                            <Tag
                              key={index}
                              w="fit-content"
                              colorScheme="red"
                              textTransform="uppercase"
                              fontSize="xs"
                            >
                              {caution}
                            </Tag>
                          ))}
                        </Flex>
                      </Text>
                    </Box>
                  )}
                </Flex>
              </MotionBox>
            ))}
          </Grid>
        </Center>
      </SmoothScroll>
    </Box>
  );
}
