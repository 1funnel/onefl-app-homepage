import {
  Box,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
// import Container from "./Container";
import GetStartedBtn from "./GetStartedBtn";

const footerMenu = [
  {
    header: "Company",
    links: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    header: "Resources",
    links: [
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Platform Status",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
    ],
  },
  {
    header: "Legal",
    links: [
      {
        title: "Terms of Service",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Cookie Policy",
        href: "#",
      },
    ],
  },
  {
    header: "Contact",
    links: [
      {
        title: "Support +2349057468624",
        href: "tel:2349057468624",
      },
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        <SimpleGrid columns={{ base: 1, sm: 5 }} gap="20px">
          {footerMenu.map((menu) => {
            return (
              <GridItem key={menu.header}>
                <Box className="menu-header">{menu.header}</Box>
                <Box className="links">
                  {menu.links.map((link) => {
                    return (
                      <Box
                        key={`${menu.header}-${link.title}`}
                        className="link"
                      >
                        <a href={link.href}>{link.title}</a>
                      </Box>
                    );
                  })}
                </Box>
              </GridItem>
            );
          })}

          <GridItem>
            <Box className="app-title">
              Simplifying Access to {" "}
              <Box as="span" className="special-highlight">
                Financial
              </Box>{" "}
              Services with{" "}
              <Box as="span" className="special-highlight">
                ease.
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px" className="social-footer">
          <GridItem alignItems="center">
            <Flex gap="20px" align="center">
              <Box>Try us out</Box>
              <GetStartedBtn />
            </Flex>
          </GridItem>

          <GridItem alignItems="center" justifyItems={{ base: "unset", sm: "flex-end"}}>
            <Flex gap="15px">
              <Image src="/images/facebook.svg" alt="facebook icon" />
              <Image src="/images/linkedin.svg" alt="linkedin icon" />
              <Image src="/images/x-twitter.svg" alt="x-twitter icon" />
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Box className="copyright">
          <Box className="text">
            &copy; {new Date().getFullYear()} OneFunnel. All rights reserved.
          </Box>
        </Box>

        <Box className="post-footer">
          We use cookies and similar technologies to enhance your interactions
          with our website and Services, including when you reach out to us on
          chat. This comprises traffic analysis, delivering personalized
          content, and supporting our marketing efforts. By accessing our
          website, interacting with our Services, you agree to let us and our
          partners employ cookies and related technologies on your computer or
          devices.
          <br />
          <br />
          Click the{" "}
          <a href="#" className="link-text">
            Cookies Policy
          </a>{" "}
          to check how you can control the use of cookies through your device.
          To understand how we process your data, including through cookies, and
          interactions with us, please read our Privacy Policy.
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
