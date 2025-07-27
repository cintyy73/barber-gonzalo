
import React from 'react';
import { Box, Drawer, DrawerContent, DrawerHeader, DrawerBody, Flex, Heading, Text, HStack, Button, IconButton, VStack } from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import HeaderNav from './HeaderNav';


const Landing = () => {
  return (
    <Box bg="gray.50" w="full">
      {/* Header/Navigation */}
      <HeaderNav />
      <Box pt={{ base: 24, md: 28 }}>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </Box>
     
    </Box>
  );
};

export default Landing;
