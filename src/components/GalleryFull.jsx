import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// Importar todas las imágenes de la galería usando import.meta.glob (Vite)
const images = import.meta.glob("../assets/img_*.jpg", { eager: true });
const allImages = Object.values(images)
  .map((mod) => mod.default)
  .sort();

const MotionBox = motion(Box);

const GalleryFull = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
    <ModalOverlay bg="blackAlpha.800" />
    <ModalContent
      p={0}
      bgGradient="linear(to-r, red.400, blue.400)"
      boxShadow="2xl"
      borderRadius="2xl"
      borderWidth="2px"
      borderColor="blue.100"
    >
      <ModalHeader textAlign="center" fontSize="2xl" color="gray.900">
       Trabajos realizados
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack spacing={8} px={4}>
        
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} w="full">
            {allImages.map((img, idx) => (
              <MotionBox
                key={idx}
                position="relative"
                rounded="2xl"
                overflow="hidden"
                shadow="2xl"
                borderWidth="2px"
                borderColor="gray.200"
                whileHover={{ scale: 1.2 }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Image
                  src={img}
                  alt={`Trabajo ${idx + 1}`}
                  w="full"
                  h={64}
                  objectFit="cover"
                  transition="all 0.3s"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, blackAlpha.700 60%, transparent 100%)"
                  opacity={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s"
                ></Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default GalleryFull;
