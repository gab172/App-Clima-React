import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useState } from "react";

const Formulario = ({ guardarClima }) => {
  const [clima, actualizarClima] = useState("");

  const validarClima = (e) => {
    e.preventDefault();

    clima.trim() === ""
      ? alert("No puedes dejar el campo vacio")
      : guardarClima(clima);
  };

  return (
    <>
      <FormControl
        display="flex"
        flexDirection="column"
        w={{ base: "80%", md: "45%" }}
        m={{ base: "5rem", md: "0" }}
      >
        <Heading my="1rem">Formulario Clima</Heading>
        <FormLabel my="1rem">Ciudad</FormLabel>
        <Input type="text" onChange={(e) => actualizarClima(e.target.value)} />
        <Button
          type="submit"
          colorScheme="blackAlpha"
          variant="outline"
          mt="3rem"
          onClick={validarClima}
        >
          Enviar
        </Button>
      </FormControl>
    </>
  );
};

export default Formulario;
