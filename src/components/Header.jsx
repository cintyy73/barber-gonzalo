import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Flex align="center" gap={3}>
    <Box display="flex" alignItems="center" gap={3}>
      <img src="/assets/logo.png" alt="Logo Gonzalo" style={{ width: 60, height: 60, borderRadius: '50%' }} />
      <Box>
        <Heading size="md" color="gray.900">Gonzalo</Heading>
        <Text fontSize="sm" color="gray.600" fontWeight="medium">BARBERÍA</Text>
      </Box>
    </Box>
  </Flex>
);

export default Header;
