
import { Box, Flex, Heading, Text, Avatar } from '@chakra-ui/react';
// Usar el logo nuevo
const logo = '/assets/logo_01.jpg';

const Header = () => (
  <Flex align="center" gap={3}>
    <Box display="flex" alignItems="center" gap={3}>
      <Avatar src={logo} name="Logo Gonzalo" boxSize={"80px"} />
      <Box>
        <Heading size="md" color="gray.900">Gonzalo</Heading>
        <Text fontSize="sm" color="gray.600" fontWeight="medium">BARBERÍA</Text>
      </Box>
    </Box>
  </Flex>
);

export default Header;
