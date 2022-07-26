import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";

function App() {
  const [clima, guardarClima] = useState("");

  return (
    <Box w="100%">
      <Heading
        as="h1"
        backgroundColor="#000"
        align="center"
        p="1rem"
        mb="2rem"
        color="#fff"
      >
        Clima React
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        w={{ base: "80%", md: "100%" }}
        alignContent={{ base: "center", md: "none" }}
      >
        <Formulario guardarClima={guardarClima} />
        {clima ? <Clima clima={clima} /> : null}
      </Flex>
    </Box>
  );
}

export default App;
