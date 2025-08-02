import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';


// Importar todas las imágenes de la galería usando import.meta.glob (Vite)
const images = import.meta.glob('../assets/img_*.jpg', { eager: true });
const allImages = Object.values(images).map((mod) => mod.default).sort();

const MotionBox = motion(Box);

const GalleryFull = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
    <ModalOverlay bg="blackAlpha.800" />
    <ModalContent bg="gray.50" p={0}>
      <ModalHeader textAlign="center" fontSize="2xl" color="gray.900">Todos los Trabajos</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack spacing={8} px={4}>
          <Text fontSize="lg" color="gray.600">Galería de cortes realizados</Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} w="full">
            {allImages.map((img, idx) => (
              <MotionBox
                key={idx}
                position="relative"
                rounded="lg"
                overflow="hidden"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={img} alt={`Trabajo ${idx + 1}`} w="full" h={64} objectFit="cover" transition="all 0.3s" />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default GalleryFull;
