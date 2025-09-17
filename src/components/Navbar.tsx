import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu, CloseSquare } from "iconsax-react";
import Container from "./Container";
import GetStartedBtn from "./GetStartedBtn";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links: string[] = ["Products", "About", "Contact"];

  return (
    <Box color="white" px={4} className="navbar">
      <Container fluid>
        <Flex h={100} alignItems="center" justifyContent="space-between">
          <HStack spacing={2} alignItems="center">
            <Box
              as="img"
              src="/images/app-logo-light.svg"
              alt="OneFunnel Logo"
              h="50"
            />
            ƒ
          </HStack>

          {/* Desktop Navigation */}
          <HStack
            as="nav"
            spacing={6}
            display={{ base: "none", md: "flex" }}
            fontWeight="medium"
          >
            {Links.map((link) => (
              <Link
                key={link}
                px={2}
                py={1}
                rounded="md"
                _hover={{ color: "orange.400" }}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </Link>
            ))}
          </HStack>

          <GetStartedBtn />

          {/* Mobile Hamburger with Iconsax */}
          <IconButton
            size="md"
            icon={
              isOpen ? (
                <CloseSquare size="24" color="#fff" />
              ) : (
                <Menu size="24" color="#fff" />
              )
            }
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Flex>

        {/* Mobile Menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ color: "brand.primary400" }}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              ))}

              <GetStartedBtn />
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
