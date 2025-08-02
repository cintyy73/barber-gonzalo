import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GalleryFull from './GalleryFull';

import img2 from '../assets/img_02.jpg';
import img1 from '../assets/img_14.jpg';
import img3 from '../assets/img_13.jpg';
import img4 from '../assets/img_17.jpg';
import img5 from '../assets/img_18.jpg';
import img6 from '../assets/img_21.jpg';

const galleryImages = [img1, img2, img3, img4, img5, img6];

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
