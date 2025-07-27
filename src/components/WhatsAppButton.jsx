import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { MessageCircle } from 'lucide-react';


const WhatsAppButton = () => (
  <IconButton
    as={Link}
    href="https://wa.me/5491126518160"
    target="_blank"
    aria-label="WhatsApp"
    icon={<MessageCircle size={40} />}
    colorScheme="green"
    size="lg"
    isRound
    position="fixed"
    bottom={6}
    right={6}
    shadow="lg"
    zIndex={50}
    _hover={{ transform: 'scale(1.1)', shadow: 'xl' }}
  />
);

export default WhatsAppButton;
