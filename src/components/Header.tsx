import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import React from "react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center" textAlign="right">
          <Box mr="4">
            <Text>Jeferson Peter</Text>
            <Text color="gray.300" fontSize="small">
              jeferson.peter@protonmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Jeferson Peter"
            src="https://avatars.githubusercontent.com/u/55209572?s=400&u=bde93917cf8fb9178411dacc07ece50ab2be0011&v=4"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
