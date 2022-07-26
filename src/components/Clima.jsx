import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API } from "../Api_Key";

const Clima = ({ clima }) => {
  const [climaResultado, guardarClimaResultado] = useState([]);

  const fetchClima = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${clima}&appid=${API}`;
    const resultado = await fetch(url);
    const climaJSON = await resultado.json();
    console.log(climaJSON);
    guardarClimaResultado([climaJSON]);
  };

  useEffect(() => {
    fetchClima();
  }, [clima]);

  return (
    <Box>
      <Heading my="1rem" align="center">
        Datos Climas
      </Heading>
      <Box>
        {climaResultado.map((el) => (
          <>
            <Text align="center">La temperatura en {clima} es: </Text>
            <Heading as="h3" mt="1rem" size="2xl" align="center">
              Clima: {(el.main.temp - 273.15).toFixed(2)} C°
            </Heading>
            <Heading as="h4" mt="1rem" size="xl" align="center">
              Maximo: {(el.main.temp_max - 273.15).toFixed(2)} C°
            </Heading>
            <Heading as="h4" mt="1rem" size="xl" align="center">
              Minimo: {(el.main.temp_min - 273.15).toFixed(2)} C°
            </Heading>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Clima;
