import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { HeaderLinks } from "../constantes/constantes";
import { ReactNode, useState } from "react";

const Logo = (props) => {
  return (
    <svg
      width="63"
      height="55"
      viewBox="0 0 63 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19272 37.7024L1.86402 12.7013C1.86402 6.23885 7.10287 1 13.5653 1H29.7103C32.9415 1 35.5609 3.61943 35.5609 6.85065C35.5609 10.0819 32.9415 12.7013 29.7103 12.7013H25.3654C19.7346 12.7013 15.17 17.266 15.17 22.8968V37.89C15.17 41.7504 12.0405 44.8799 8.18009 44.8799C4.2462 44.8799 1.08713 41.6348 1.19272 37.7024Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <path
        d="M61.8073 17.2976L61.136 42.2987C61.136 48.7611 55.8971 54 49.4347 54H33.2897C30.0585 54 27.4391 51.3806 27.4391 48.1494C27.4391 44.9181 30.0585 42.2987 33.2897 42.2987H37.6346C43.2654 42.2987 47.83 37.734 47.83 32.1032L47.83 17.11C47.83 13.2496 50.9595 10.1201 54.8199 10.1201C58.7538 10.1201 61.9129 13.3652 61.8073 17.2976Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <ellipse
        cx="31.5864"
        cy="27.9302"
        rx="10.7139"
        ry="9.89448"
        fill="#32DDF4"
        fill-opacity="0.42"
      />
      <path
        d="M33.7237 53.8934L14.3751 53.445C9.56503 53.445 5.66573 49.5457 5.66573 44.7357V36.1566C5.66573 33.7516 7.61538 31.8019 10.0204 31.8019C12.4254 31.8019 14.3751 33.7516 14.3751 36.1566V38.3504C14.3751 41.967 17.3069 44.8988 20.9235 44.8988H33.8279C36.312 44.8988 38.3258 46.9126 38.3258 49.3967C38.3258 51.9216 36.2479 53.9519 33.7237 53.8934Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <path
        d="M32.0412 2.48325L51.3898 2.93157C56.1998 2.93157 60.0992 6.83087 60.0992 11.6409V20.22C60.0992 22.625 58.1495 24.5747 55.7445 24.5747C53.3395 24.5747 51.3898 22.625 51.3898 20.22V18.0262C51.3898 14.4097 48.458 11.4778 44.8414 11.4778L31.937 11.4778C29.4529 11.4778 27.4391 9.46404 27.4391 6.97993C27.4391 4.45503 29.5169 2.42476 32.0412 2.48325Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
    </svg>
  );
};

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo></Logo>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={100}
            href={"#"}
            _hover={{
              bg: 200,
              transform: "translateY(5px)",
              transition: " all 1s ease-out",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const [linksHeader, setlinksHeader] = useState(HeaderLinks);
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("200", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {linksHeader?.map((navItem, index) => (
        <Box key={`${navItem.label}${index}`}>
          <Popover trigger={"hover"} placement={"auto"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"large"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  fontWeight: 900,
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              ></PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const [linksHeader, setlinksHeader] = useState(HeaderLinks);

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {linksHeader?.map((navItem, index) => (
        <MobileNavItem key={`${navItem.label}${index}`} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const linkHoverColor = useColorModeValue("200", "white");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-around"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          fontWeight: 900,
          color: linkHoverColor,
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "2!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
