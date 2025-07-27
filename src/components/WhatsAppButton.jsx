import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícono oficial de WhatsApp

const WhatsAppButton = () => (
  <IconButton
    as={Link}
    href="https://wa.me/5491126518160"
    target="_blank"
    aria-label="WhatsApp"
    icon={<FaWhatsapp size={28} color="white" />} // Ícono oficial
    bg="#25D366" // Color oficial de WhatsApp
    _hover={{ bg: '#20b957', transform: 'scale(1.1)', boxShadow: '0 0 12px #20b957' }}
    size="lg"
    isRound
    position="fixed"
    bottom={6}
    right={6}
    boxShadow="lg"
    zIndex={50}
  />
);

export default WhatsAppButton;
