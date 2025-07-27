import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606227015674-c2fb0e4e2ee8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop"
];

const MotionBox = motion(Box);

const Gallery = ({ onImageClick }) => (
  <Box id="galeria" py={20} bg="gray.50">
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
            onClick={() => onImageClick(img)}
          >
            <Image src={img} alt={`Trabajo ${idx + 1}`} w="full" h={64} objectFit="cover" transition="all 0.3s" />
            <Box position="absolute" inset={0} bg="blackAlpha.300" opacity={0} _hover={{ opacity: 1 }} display="flex" alignItems="center" justifyContent="center">
              <Text color="white" fontWeight="semibold">Ver imagen</Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  </Box>
);

export default Gallery;
