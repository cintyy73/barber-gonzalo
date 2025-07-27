import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, HStack, Button, Link } from '@chakra-ui/react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => (
  <Box id="contacto" py={20} bg="gray.900" color="white">
    <VStack spacing={8} maxW="7xl" mx="auto" px={4}>
      <Heading size="xl">Contacto</Heading>
      <Text fontSize="lg" color="gray.300">Reserva tu turno o consulta cualquier duda</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="full">
        <VStack align="start" spacing={6}>
          <Heading size="md">Información de Contacto</Heading>
          <HStack spacing={4}>
            <Box bg="red.600" p={3} rounded="full"><Phone size={24} color="#fff" /></Box>
            <Box>
              <Text fontWeight="bold">Teléfonos</Text>
              <Text color="gray.300">11 2651-8160 / 11 2651-7056</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Box bg="blue.600" p={3} rounded="full"><MapPin size={24} color="#fff" /></Box>
            <Box>
              <Text fontWeight="bold">Ubicación</Text>
              <Text color="gray.300">Verdi N°88, Torcuato</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Box bg="green.600" p={3} rounded="full"><Clock size={24} color="#fff" /></Box>
            <Box>
              <Text fontWeight="bold">Horarios</Text>
              <Text color="gray.300">Lun - Sáb: 9:00 - 19:00</Text>
              <Text color="gray.300">Dom: Solo con turno</Text>
            </Box>
          </HStack>
        </VStack>
        <VStack align="start" spacing={6} bg="gray.800" p={8} rounded="xl">
          <Heading size="md">Reserva tu Turno</Heading>
          <Text color="gray.300">Contactanos por WhatsApp para reservar tu turno o realizar consultas. Te responderemos a la brevedad.</Text>
          <VStack spacing={4} w="full">
            <Button as={Link} href="https://wa.me/5491126518160" target="_blank" leftIcon={<Phone />} colorScheme="green" w="full">WhatsApp: 11 2651-8160</Button>
            <Button as={Link} href="https://wa.me/5491126517056" target="_blank" leftIcon={<Phone />} colorScheme="green" w="full">WhatsApp: 11 2651-7056</Button>
          </VStack>
        </VStack>
      </SimpleGrid>
    </VStack>
  </Box>
);

export default Contact;
