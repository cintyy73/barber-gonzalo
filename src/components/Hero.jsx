import React from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";


import heroBg from '../assets/local.jpg';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Box
      as={motion.section}
      id="inicio"
      minH="100vh"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.900, gray.800, black)"
    >
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        zIndex={0}
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        bgImage={`url(${heroBg})`}

        bgSize="cover"
        bgPosition="center"
        filter="blur(1px)"
        opacity={0.5}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "full",
          h: "full",
          bg: "linear-gradient(to-br, rgba(0,0,0,0.7), rgba(30,30,30,0.6))",
        }}
      />
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        zIndex={1}
        w="full"
        px={{ base: 4, md: 12 }}
        py={{ base: 24, md: 32 }}
        maxW="7xl"
        mx="auto"
      >
        <VStack align="start" spacing={8} maxW="lg">
          <Heading
            as={motion.h1}
            size="2xl"
            bgGradient="linear(to-r, red.400, blue.400)"
            bgClip="text"
            fontWeight="extrabold"
            lineHeight="short"
            mb={2}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Gonzalo Barbería
          </Heading>
          <Text fontWeight={'extrabold'} fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} color="white" textShadow="0 2px 8px rgba(0,0,0,0.8)">
            Estilo clásico con técnicas modernas.
            <br />
            Creando looks únicos en Torcuato.
          </Text>
          <HStack spacing={4}>
            <Button
              as={motion.a}
              href="https://wa.me/5491126518160"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="red"
              size="lg"
              fontWeight="bold"
              whileHover={{ scale: 1.05 }}
              shadow="lg"
            >
              Reservar Turno
            </Button>
            <Button
              as="a"
              href="#galeria"
              colorScheme="gray"
              size="lg"
              fontWeight="bold"
            >
              Ver Trabajos
            </Button>
          </HStack>
        </VStack>
        <Box position="relative" display={{ base: "none", lg: "block" }}>
          <MotionBox
            w="80"
            h="80"
            bgGradient="linear(to-r, red.600, blue.600)"
            rounded="full"
            opacity={0.2}
            position="absolute"
            top={-4}
            left={-4}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
