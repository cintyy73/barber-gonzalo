import React from 'react';
import { Box, Flex, Text, Avatar, Link } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { Scissors } from 'lucide-react';

const Footer = () => (
  <Box bg="black" color="white" py={8} textAlign="center">
    <Flex align="center" justify="center" mb={4} gap={3}>
      <Box bgGradient="linear(to-r, red.400, blue.400)" p={1} rounded="full" display="flex" alignItems="center" justifyContent="center">
        <Avatar src="/assets/logo_01.jpg" name="Logo Gonzalo" boxSize={"100px"} />
      </Box>
      <Text fontSize="2xl" fontWeight="bold" bgGradient="linear(to-r, red.400, blue.400)" bgClip="text">Gonzalo Barbería</Text>
    </Flex>
    {/* Footer Navigation */}
    <Flex as="nav" justify="center" gap={6} mb={4}>
      <Text as="a" href="#inicio" fontWeight="bold" color="gray.200" _hover={{ color: 'red.400' }}>Inicio</Text>
      <Text as="a" href="#servicios" fontWeight="bold" color="gray.200" _hover={{ color: 'red.400' }}>Servicios</Text>
      <Text as="a" href="#galeria" fontWeight="bold" color="gray.200" _hover={{ color: 'red.400' }}>Galería</Text>
      <Text as="a" href="#contacto" fontWeight="bold" color="gray.200" _hover={{ color: 'red.400' }}>Contacto</Text>
    </Flex>
    <Flex justify="center" align="center" gap={2} mt={2}>
      <FaInstagram color="#E1306C" />
      <Link href="https://www.instagram.com/gonza.barber333?igsh=NGsxMGEzdjh0dnFq" target="_blank" color="gray.200" _hover={{ color: 'pink.400' }} fontWeight="bold">Instagram</Link>
    </Flex>
    <Text color="gray.400" mt={2}>© 2025 Gonzalo Barbería. Todos los derechos reservados.</Text>
  </Box>
);

export default Footer;
