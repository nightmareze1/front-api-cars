import Link from "next/link";

import {
  Link as LinkChackra,
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  IntialCompanyLinksHref,
  IntialSuportLinksHref,
} from "../constantes/constantes";
import Logo from "./Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  //Estado del Company Links
  const [linksCompanyHref, setLinksCompanyHref] = useState(
    IntialCompanyLinksHref
  );

  return (
    <Box
      bg={useColorModeValue(500, "gray.900")}
      color={useColorModeValue(300, "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo></Logo>
            </Box>

            <Text fontSize={"sm"}>© 2022 EKing. All rights reserved</Text>

            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://twitter.com/home"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"http://youtube.com/"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>

            {linksCompanyHref?.map((item) => (
              <Link href={item.href} key={item.link}>
                <LinkChackra
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Text
                    px={1}
                    py={1}
                    rounded={"md"}
                    fontWeight={"semibold"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {item.link}
                  </Text>
                </LinkChackra>
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
