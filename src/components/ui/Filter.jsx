import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Filter({
  searchQuery,
  setSearchQuery,
  dietFilter,
  setDietFilter,
}) {
  const diets = [
    "Vegan",
    "Vegetarian",
    "Pescatarian",
    "Gluten-Free",
    "Alcohol-Free",
    "Low-Carb",
    "Low-Fat",
    "Egg-Free",
    "Peanut-Free",
    "Soy-Free",
    "Paleo",
    "Keto-Friendly",
  ];

  return (
    <Flex
      w="full"
      flexDirection="column"
      alignItems="left"
      mb={6}
      p={{ base: 4, md: 8 }}
      gap={2}
      bg="white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <InputGroup maxW="500px" mb={4}>
          <Input
            placeholder="Search recipes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outline"
            size="lg"
            bg="white"
            borderColor="yellow.400"
            focusBorderColor="yellow.500"
            borderRadius="lg"
            _hover={{
              borderColor: "yellow.600",
            }}
            _focus={{
              borderColor: "yellow.500",
            }}
            _placeholder={{
              color: "yellow.400",
            }}
          />
          <InputLeftElement>
            <SearchIcon fontSize="1.5rem" mt={2} ml={2} color="yellow.400" />
          </InputLeftElement>
        </InputGroup>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        // animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Flex
          w="full"
          overflowX="auto"
          gap={4}
          pb={2}
          css={{
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "yellow.400",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "yellow.100",
            },
          }}
        >
          {diets.map((diet) => (
            <Button
              key={diet}
              color="black"
              fontWeight={100}
              textAlign="center"
              fontSize="1rem"
              size={["lg"]}
              variant="surface"
              onClick={() => setDietFilter(diet === dietFilter ? "" : diet)}
              bgColor={dietFilter === diet ? "yellow.500" : "yellow.300"}
              _hover={{
                bgColor: dietFilter === diet ? "yellow.300" : "yellow.200",
              }}
              _active={{
                bgColor: "yellow.600",
              }}
              _focus={{
                boxShadow: "0 0 0 1px yellow.500",
              }}
              borderRadius="lg"
              px={4}
              minW="120px"
            >
              {diet}
            </Button>
          ))}
        </Flex>
      </motion.div>
    </Flex>
  );
}
