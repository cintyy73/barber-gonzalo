import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícono oficial de WhatsApp

const WhatsAppButton = () => (
  <IconButton
    as={Link}
    href="https://wa.me/5491126517056"
    target="_blank"
    aria-label="WhatsApp"
    icon={<FaWhatsapp size={40} color="white" />} // Ícono oficial más grande
    bg="#25D366" // Color oficial de WhatsApp
    _hover={{ bg: '#20b957', transform: 'scale(1.12)', boxShadow: '0 0 18px #20b957' }}
    height="72px"
    width="72px"
    minW="72px"
    isRound
    position="fixed"
    bottom={8}
    right={8}
    boxShadow="2xl"
    zIndex={50}
  />
);

export default WhatsAppButton;
