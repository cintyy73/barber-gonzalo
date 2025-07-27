
import { ChakraProvider, Box } from '@chakra-ui/react';
import Landing from './components/Landing';

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <Landing />
      </Box>
    </ChakraProvider>
  );
}

export default App;
