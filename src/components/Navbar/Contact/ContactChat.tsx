import {Box, GridItem, Button, FormControl, Textarea, FormLabel, Input, SimpleGrid, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { MessageText, Messages, Call, ArrowRight } from "iconsax-react";

const contacts = [
  {
    icon: <MessageText size="28" color="#00C2FF" variant="Bulk" />,
    title: "Email",
    description: "Our support team is always ready to help with technical or business enquiries.",
    linkText: "support@1funnel.ng",
    href: "mailto:support@1funnel.ng",
  },
  {
    icon: <Call size="28" color="#00C2FF" variant="Bulk" />,
    title: "Phone",
    description: "Available Monday to Friday, 9 AM - 5 PM.",
    linkText: "+234 201 700 1723",
    href: "tel:+234 201 700 1723",
  },
  {
    icon: <Messages size="28" color="#00C2FF" variant="Bulk" />,
    title: "Visit Us",
    description: "41, Industrial Avenue, Sabo, Yaba, Lagos State. Available for visits on Monday, Tuesday & Thursday.",
  },
];

const ContactChat = () => {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="40px" alignItems="flex-start" p={{base: 2, lg: 10}}>
        <GridItem>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px"  alignItems="center">
            {contacts.map((contact, index) => (
              <Flex
                key={index}
                flexDirection="column"
                gap={3}
                bg="transparent"
                p={2}
                borderRadius="lg"
              >
                <Flex
                  align="center"
                  justify="center"
                  bg="rgba(255, 255, 255, 0.05)"
                  width="60px"
                  height="60px"
                  borderRadius="xl"
                  boxShadow="0 0 20px rgba(0, 194, 255, 0.15)"
                >
                  {contact.icon}
                </Flex>

                <Text fontWeight="bold" fontSize="lg">
                  {contact.title}
                </Text>
                <Text color="gray.400" fontSize="sm">
                  {contact.description}
                </Text>

                <Link
                  href={contact.href}
                  color="brand.primary700"
                  fontWeight="medium"
                  display="inline-flex"
                  alignItems="center"
                  _hover={{ textDecoration: "none", color: "brand.primary600" }}
                  gap={2}
                >
                  <Text>{contact.linkText}</Text>
                  <ArrowRight size={iconSize} color="currentColor" style={{ marginLeft: "1px" }} />
                </Link>
              </Flex>
            ))}
          </SimpleGrid>
        </GridItem>

        <GridItem>
          <Box
            bg="#091224ff"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            color="white"
            border="1px solid #17243eff"
          >
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              Get in Touch
            </Text>
            <Text color="gray.400" mb={8}>
              Have questions or need assistance? Fill out the form below, and our team will reach out as soon as possible.
            </Text>

            <form>
              <FormControl mb={5} isRequired>
                <FormLabel color="gray.300">Name</FormLabel>
                <Input
                  placeholder="Onefunnel"
                  bg="#FFEFE9"
                  color="black"
                />
              </FormControl>

              <FormControl mb={5} isRequired>
                <FormLabel color="gray.300">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="john.osborne@mail.com"
                  bg="#FFEFE9"
                  color="black"
                />
              </FormControl>

              <FormControl mb={6}>
                <FormLabel color="gray.300">Message</FormLabel>
                <Textarea
                  placeholder="Message goes in here"
                  bg="#FFEFE9"
                  color="black"
                  rows={5}
                />
              </FormControl>

              <Button
                type="submit"
                w="full"
                bgGradient="brand.primary700"
                color="white"
                size="lg"
                borderRadius="full"
                _hover={{ opacity: 0.9 }}
              >
                Send
              </Button>
            </form>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ContactChat;
