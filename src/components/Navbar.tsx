import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HambergerMenu } from "iconsax-react";
import Container from "./Container";
import GetStartedBtn from "./GetStartedBtn";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links: string[] = ["Products", "About", "Contact"];

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
            {links.map((link) => (
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

            <GetStartedBtn />
          </HStack>

          {/* Mobile Hamburger with Iconsax */}
          <IconButton
            size="md"
            background="transparent"
            icon={
              isOpen ? (
                <HambergerMenu color="red" size="30px" />
              ) : (
                <Image
                  src="/images/hamburger.svg"
                  width="40px"
                  alt="hamburger icon"
                />
              )
            }
            aria-label="Open menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {/* Mobile Menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded="md"
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
