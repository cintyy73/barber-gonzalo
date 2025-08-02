import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { Avatar } from '@chakra-ui/react';

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
            <Box bgGradient="linear(to-r, red.400, blue.400)" p={1} rounded="full" display="flex" alignItems="center" justifyContent="center">
              <Avatar src="/assets/logo_01.jpg" name="Logo Gonzalo" boxSize={"80px"} />
            </Box>
            <Heading size="lg" fontWeight="bold" bgGradient="linear(to-r, red.400, blue.400)" bgClip="text">Gonzalo Barbería</Heading>
            
          </Flex>
          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Button as="a" href="#inicio" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Inicio</Button>
            <Button as="a" href="#servicios" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Servicios</Button>
            <Button as="a" href="#galeria" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Galería</Button>
            <Button as="a" href="#contacto" variant="ghost" color="white" fontWeight="bold" _hover={{ color: 'red.400' }}>Contacto</Button>
            <IconButton
              as="a"
              href="https://www.instagram.com/gonza.barber333?igsh=NGsxMGEzdjh0dnFq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram size={22} />}
              colorScheme="red"
              variant="ghost"
              color="white"
              _hover={{ color: 'red.400', bg: 'whiteAlpha.200' }}
            />
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
          <DrawerHeader>Gonzalo Barbería</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('inicio')}>Inicio</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('servicios')}>Servicios</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('galeria')}>Galería</Button>
              <Button variant="ghost" colorScheme="red" w="full" onClick={() => handleNav('contacto')}>Contacto</Button>
              <IconButton
                as="a"
                href="https://www.instagram.com/gonza.barber333?igsh=NGsxMGEzdjh0dnFq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                icon={<FaInstagram size={22} />}
                colorScheme="red"
                variant="ghost"
                color="red.400"
                _hover={{ color: 'red.500', bg: 'whiteAlpha.200' }}
                w="full"
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderNav;
