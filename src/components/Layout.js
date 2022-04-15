import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Button,
  Box,
  Heading,
  ColorModeScript,
} from "@chakra-ui/react";
import { useTheme, useColorMode } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container
        as="header"
        position="relative"
        display="flex"
        justifyContent="center"
        maxW="100%"
        minH="3em"
        mb={6}
        centerContent
      >
        {router.pathname.startsWith("/post/") ? (
          <Link href={"/"}>
            <Button position="absolute" p={0} left={5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </Button>
          </Link>
        ) : null}
        <Link href="/">
          <a rel="noreferrer">
            <Heading as="h1" size="lg" my="3">
              Notas / Ejercicios
            </Heading>
          </a>
        </Link>
        <Button onClick={toggleColorMode} position="absolute" right={5}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Container>
      <Box paddingBottom="5em">{children}</Box>
      <Container
        as="footer"
        position="absolute"
        bottom={0}
        height="3em"
        marginTop="-3em"
      >
        BoxBoxBoxBoxBoxBox
      </Container>
    </>
  );
};
