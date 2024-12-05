import {
  Box,
  Button,
  Text,
  Tag,
  Image,
  List,
  ListItem,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
  Stack,
  Heading,
  Flex,
} from "@chakra-ui/react";

function RecipePage({ item, onBack }) {
  const containerWidth = useBreakpointValue({
    base: "90%",
    md: "80%",
    lg: "3xl",
  });
  const imageHeight = useBreakpointValue({ base: "auto", md: "400px" });
  return (
    <Center
      bg="yellow.300"
      minH="100vh"
      w="100%"
      flexDirection="column"
      p={4}
      fontFamily="Inter"
    >
      <Box
        borderRadius="xl"
        w={containerWidth}
        bg="white"
        boxShadow="lg"
        p={{ base: 4, md: 6 }}
      >
        <Image
          w="100%"
          h={imageHeight}
          objectFit="cover"
          src={item.recipe.image}
          alt={item.recipe.label}
          borderRadius="xl"
          mb={4}
        />
        <Button
          onClick={onBack}
          w={{ base: "full", md: "fit-content" }}
          colorScheme="yellow"
          alignSelf={{ base: "stretch", md: "start" }}
          mt={3}
          mb={3}
          color="black"
          fontWeight={100}
          textAlign="center"
          fontSize="1rem"
          variant="surface"
          bgColor="yellow.400"
          _hover={{
            bgColor: "yellow.500",
          }}
          _focus={{
            boxShadow: "0 0 0 1px yellow.500",
          }}
          px={4}
          minW="120px"
        >
          Back to overview
        </Button>
        <Stack spacing={2.5}>
          <Heading size={{ base: "lg", md: "xl" }}>
            {" "}
            {item.recipe.label}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} colorScheme="grey">
            <strong>Meal Type:</strong> {item.recipe.mealType}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} colorScheme="grey">
            <strong>Dish Type:</strong> {item.recipe.dishType}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} colorScheme="grey">
            <strong>Cooking Time:</strong> {item.recipe.totalTime} minutes
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} colorScheme="grey">
            <strong>Servings:</strong> {item.recipe.yield}
          </Text>

          <Flex
            w={["100%", "95%", "80%"]}
            flexDir={["column", "row", "row"]}
            gap="10%"
            justifyContent={"space-between"}
          >
            {/* Health Labels */}
            {item.recipe.healthLabels.length > 0 && (
              <Box mb="1">
                <Text fontSize="xl" mb="2">
                  <strong>Health Labels:</strong>
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap="2">
                  {item.recipe.healthLabels.map((label, index) => (
                    <GridItem key={index}>
                      <Tag
                        w={"fit-content"}
                        alignSelf={"stretch"}
                        colorScheme="green"
                        textTransform="uppercase"
                        fontSize="xs"
                      >
                        {label}
                      </Tag>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            )}
            <Flex flexDir={"column"}>
              {item.recipe.dietLabels.length > 0 && (
                <Box mb="4">
                  <Text fontSize="xl" mb="2">
                    <strong>Diet Labels:</strong>
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap="2">
                    {item.recipe.dietLabels.map((label, index) => (
                      <GridItem key={index}>
                        <Tag
                          w={"fit-content"}
                          alignSelf={"stretch"}
                          colorScheme="orange"
                          textTransform="uppercase"
                          fontSize="xs"
                        >
                          {label}
                        </Tag>
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Cautions */}
              {item.recipe.cautions.length > 0 && (
                <Box mb="2">
                  <Text fontSize="xl" mb="2">
                    <strong>Cautions:</strong>
                  </Text>
                  {item.recipe.cautions.map((caution, index) => (
                    <Tag
                      key={index}
                      w={"fit-content"}
                      alignSelf={"stretch"}
                      colorScheme="red"
                      textTransform="uppercase"
                      fontSize="xs"
                    >
                      {caution}
                    </Tag>
                  ))}
                </Box>
              )}
            </Flex>
          </Flex>

          {/* Ingredients */}
          <Box>
            <Text fontSize="xl" mb="2">
              <strong>Ingredients:</strong>
            </Text>
            <List spacing={1}>
              {item.recipe.ingredientLines.map((ingredient, index) => (
                <ListItem
                  key={index}
                  fontSize={{ base: "sm", md: "md" }}
                  colorScheme="grey"
                >
                  - {ingredient}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Total Nutrients */}
          <Box mb="4">
            <Text fontSize="xl" mb="2">
              <strong> Total Nutrients: </strong>
            </Text>
            <List
              spacing={1}
              fontSize={{ base: "sm", md: "md" }}
              colorScheme="grey"
            >
              <ListItem>
                - Energy:{" "}
                {item.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} kcal
              </ListItem>
              <ListItem>
                - Protein:{" "}
                {item.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g
              </ListItem>
              <ListItem>
                - Fat: {item.recipe.totalNutrients.FAT.quantity.toFixed(2)} g
              </ListItem>
              <ListItem>
                - Carbs: {item.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{" "}
                g
              </ListItem>
              <ListItem>
                - Cholesterol:
                {item.recipe.totalNutrients.CHOLE.quantity.toFixed(2)} mg
              </ListItem>
              <ListItem>
                - Sodium: {item.recipe.totalNutrients.NA.quantity.toFixed(2)} mg
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}

export default RecipePage;
