import React from 'react';
import { Box, Flex, Heading, HStack, Button, IconButton, Drawer, DrawerContent, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { useDisclosure } from '@chakra-ui/react';

const HeaderNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNav = (section) => {
    if (section === '/galery') {
      window.location.href = '/galery';
      onClose();
      return;
    }
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <Box as="header" bg="black" boxShadow="lg" position="fixed" w="full" top={0} zIndex={100} borderBottom="none">
      <Box maxW="7xl" mx="auto">
        <Flex px={4} py={4} align="center" justify="space-between">
          <Flex align="center" gap={3}>
            <Box bgGradient="linear(to-r, red.400, blue.400)" p={4} rounded="full" display="flex" alignItems="center" justifyContent="center">
              <img src="/assets/logo.png" alt="Logo Gonzalo" style={{ width: 56, height: 56, borderRadius: '50%' }} />
            </Box>
            <Heading size="lg" fontWeight="bold" bgGradient="linear(to-r, red.400, blue.400)" bgClip="text" color="white">Gonzalo Barbería</Heading>
          </Flex>
          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Button as="a" href="#inicio" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Inicio</Button>
            <Button as="a" href="#servicios" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Servicios</Button>
            <Button as="a" href="#galeria" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Galería</Button>
            <Button as="a" href="#contacto" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Contacto</Button>
          </HStack>
          {/* Mobile menu button */}
          <IconButton
            aria-label="Abrir menú"
            icon={isOpen ? <X /> : <Menu />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            colorScheme="red"
          />
        </Flex>
      </Box>
      {/* Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="xs">
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('inicio')}>Inicio</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('servicios')}>Servicios</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('galeria')}>Galería</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('contacto')}>Contacto</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderNav;
