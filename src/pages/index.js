import Link from "next/link";
import {
  Container,
  Grid,
  GridItem,
  Box,
  Tag,
  Text,
  Heading,
} from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import { _mapProps } from "../_mapMarkdownProps";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content: content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Summary = ({ posts }) => {
  return (
    <Container
      as="section"
      maxW="100%"
      pb={10}
      centerContent
      className="summary"
    >
      {/* <Heading as="h1" mt="1em" mb="2em">
        Notas / Ejercicios
      </Heading> */}
      {posts.length ? (
        <Grid templateColumns="repeat(3, 1fr)" gap="2em">
          {posts.map(({ slug, frontmatter, content }, i) => (
            <GridItem as={Link} href={`/post/${slug}`} key={i}>
              <Box
                as="article"
                boxShadow="xl"
                borderTopRadius="lg"
                borderBottomRadius="lg"
                className="summary_card"
              >
                <Box
                  bg="#273037"
                  width="18.75em"
                  height="12.5em"
                  p="1.5em"
                  m="auto"
                  lineHeight={2}
                  position="relative"
                  borderTopRadius="lg"
                  className="summary_card__container"
                >
                  <Box maxH="100%" overflow="hidden">
                    <ReactMarkdown {..._mapProps({})} children={content} />
                  </Box>
                </Box>
                <Box
                  bg="#F6F6F6"
                  px={4}
                  py={3}
                  color="black"
                  borderBottomRadius="lg"
                >
                  <Box
                    mt="1"
                    fontSize="lg"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    className="summary_card__detail"
                  >
                    {frontmatter.title}
                  </Box>
                  <Box className="summary_card__tags">
                    <Text className="summary_card__tag">
                      {frontmatter.tags.join(" - ")}
                    </Text>
                  </Box>
                  <Tag borderRadius="full" bg="#E7E7E7" color="#565656" px="4">
                    {frontmatter.matter}
                  </Tag>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Heading as="h1" size="md" margin="auto">
          No hay ninguna nota para mostrar
        </Heading>
      )}
    </Container>
  );
};

export default Summary;
