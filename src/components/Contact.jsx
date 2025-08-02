import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <Box id="contacto" py={20} bg="gray.900" color="white">
    <VStack spacing={8} maxW="7xl" mx="auto" px={4}>
      <Heading size="xl">Contacto</Heading>
      <Text fontSize="lg" color="gray.300">
        Reserva tu turno o consulta cualquier duda
      </Text>
      <VStack
        align="center"
        spacing={6}
        bg="gray.800"
        p={8}
        rounded="xl"
        mx="auto"
        minW={'300px'}
      >
        <Heading size="md">Información de Contacto</Heading>
        {/* WhatsApp 1 */}
        <HStack
          as={Link}
          href="https://wa.me/5491126518160"
          target="_blank"
          spacing={4}
          _hover={{ textDecoration: "none", bg: "green.700" }}
          p={3}
          rounded="xl"
          w="full"
          alignItems="center"
        >
          <Box
            bg="green.500"
            p={3}
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Phone size={24} color="#fff" />
          </Box>
          <Box>
            <Text fontWeight="bold">WhatsApp</Text>
            <Text color="gray.300">11 2651-8160</Text>
          </Box>
        </HStack>
        {/* WhatsApp 2 */}
        <HStack
          as={Link}
          href="https://wa.me/5491126517056"
          target="_blank"
          spacing={4}
          _hover={{ textDecoration: "none", bg: "green.700" }}
          p={3}
          rounded="xl"
          w="full"
          alignItems="center"
        >
          <Box
            bg="green.500"
            p={3}
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Phone size={24} color="#fff" />
          </Box>
          <Box>
            <Text fontWeight="bold">WhatsApp</Text>
            <Text color="gray.300">11 2651-7056</Text>
          </Box>
        </HStack>
        {/* Instagram */}
        <HStack
          spacing={4}
          as={Link}
          href="https://www.instagram.com/gonza.barber333?igsh=NGsxMGEzdjh0dnFq"
          target="_blank"
          _hover={{ textDecoration: "none", bg: "pink.500" }}
          p={3}
          rounded="xl"
          w="full"
          alignItems="center"
        >
          <Box
            bgGradient="linear(to-r, pink.400, orange.400)"
            p={3}
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaInstagram size={24} color="#fff" />
          </Box>
          <Box>
            <Text fontWeight="bold">Instagram</Text>
            <Text color="gray.300">@gonza.barber333</Text>
          </Box>
        </HStack>
        {/* Ubicación */}
        <HStack
          spacing={4}
          p={3}
          rounded="xl"
          w="full"
          alignItems="center"
          bg="gray.700"
        >
          <Box bg="blue.600" p={3} rounded="full">
            <MapPin size={24} color="#fff" />
          </Box>
          <Box>
            <Text fontWeight="bold">Ubicación</Text>
            <Text color="gray.300">Verdi N°88, Don Torcuato</Text>
          </Box>
        </HStack>
        {/* Atención solo con reserva previa */}
        <HStack
          spacing={4}
          p={3}
          rounded="xl"
          w="full"
          alignItems="center"
          bg="gray.700"
        >
          <Box bg="green.600" p={3} rounded="full">
            <Clock size={24} color="#fff" />
          </Box>
          <Box>
            <Text fontWeight="bold">Se atiende con turno</Text>
            <Text color="gray.300">con reserva previa</Text>
          </Box>
        </HStack>
      </VStack>
      {/* Se eliminó la segunda columna, toda la info está en la columna de contacto */}
    </VStack>
  </Box>
);

export default Contact;
