import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GalleryFull from './GalleryFull';

const galleryImages = [
  "/src/assets/img_08.jpg",
  "/src/assets/img_02.jpg",
  "/src/assets/img_03.jpg",
  "/src/assets/img_04.jpg",
  "/src/assets/img_05.jpg",
  "/src/assets/img_06.jpg"
];

const MotionBox = motion(Box);

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Box id="galeria" py={20} bg="gray.100">
      <VStack spacing={8} maxW="7xl" mx="auto" px={4}>
        <Heading size="xl" color="gray.900">Galería de Trabajos</Heading>
        <Text fontSize="lg" color="gray.600">Algunos de nuestros trabajos más destacados</Text>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} w="full">
          {galleryImages.map((img, idx) => (
            <MotionBox
              key={idx}
              position="relative"
              rounded="lg"
              overflow="hidden"
              shadow="lg"
              cursor="pointer"
              whileHover={{ scale: 1.05 }}
              onClick={openModal}
            >
              <Image src={img} alt={`Trabajo ${idx + 1}`} w="full" h={64} objectFit="cover" transition="all 0.3s" />
              <Box position="absolute" inset={0} bg="blackAlpha.300" opacity={0} _hover={{ opacity: 1 }} display="flex" alignItems="center" justifyContent="center">
                <Text color="white" fontWeight="semibold">Ver más</Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
        <GalleryFull isOpen={isOpen} onClose={closeModal} />
      </VStack>
    </Box>
  );
};

export default Gallery;
