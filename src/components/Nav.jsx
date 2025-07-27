import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

const Nav = ({ onNav }) => (
  <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
    <Button variant="ghost" colorScheme="red" onClick={() => onNav('inicio')}>Inicio</Button>
    <Button variant="ghost" colorScheme="red" onClick={() => onNav('servicios')}>Servicios</Button>
    <Button variant="ghost" colorScheme="red" onClick={() => onNav('galeria')}>Galería</Button>
    <Button variant="ghost" colorScheme="red" onClick={() => onNav('contacto')}>Contacto</Button>
  </HStack>
);

export default Nav;
