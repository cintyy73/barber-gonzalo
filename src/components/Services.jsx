import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const services = [
  { name: "Corte Clásico", price: "$3.000", description: "Corte tradicional con acabado perfecto" },
  { name: "Barba + Corte", price: "$4.500", description: "Servicio completo de corte y arreglo de barba" },
  { name: "Afeitado", price: "$2.000", description: "Afeitado tradicional con navaja" },

];

const MotionBox = motion(Box);

const Services = () => (
  <Box id="servicios" py={20} bg="white">
    <VStack spacing={8} maxW="7xl" mx="auto" px={4}>
      <Heading size="xl" color="gray.900">Servicios</Heading>
      <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
        Ofrecemos servicios de calidad con las mejores técnicas.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
        {services.map((service, idx) => (
          <MotionBox
            key={idx}
            bg="gray.50"
            rounded="xl"
            p={6}
            whileHover={{ y: -8, boxShadow: 'xl' }}
            transition={{ duration: 0.3 }}
            textAlign="center"
          >
            <Box bgGradient="linear(to-r, red.600, blue.600)" w={16} h={16} rounded="full" display="flex" alignItems="center" justifyContent="center" mx="auto" mb={4}>
              <Scissors size={32} color="#fff" />
            </Box>
            <Heading size="md" color="gray.900" mb={2}>{service.name}</Heading>
            <Text fontSize="2xl" color="red.600" fontWeight="bold" mb={3}>{service.price}</Text>
            <Text color="gray.600">{service.description}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  </Box>
);

export default Services;
