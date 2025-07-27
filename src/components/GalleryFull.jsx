import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

// Importa las imágenes correctamente
import img02 from '../assets/img_02.jpg';
import img03 from '../assets/img_03.jpg';
import img04 from '../assets/img_04.jpg';
import img05 from '../assets/img_05.jpg';
import img06 from '../assets/img_06.jpg';
import img07 from '../assets/img_07.jpg';
import img08 from '../assets/img_08.jpg';
import img09 from '../assets/img_09.jpg';
import img10 from '../assets/img_10.jpg';
import img11 from '../assets/img_11.jpg';

const allImages = [
  img02, img03, img04, img05, img06,
  img07, img08, img09, img10, img11
];

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
