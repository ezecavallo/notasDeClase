import { Container, Grid, Heading } from "@chakra-ui/react";

import { AnimatePresence } from "framer-motion";
import { _mapProps } from "../_mapMarkdownProps";
import fs from "fs";
import matter from "gray-matter";
import { useState } from "react";
import CardArticle from "../components/CardArticle";

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
  const [post, setPosts] = useState(posts);
  const [isVisible, setIsVisible] = useState(true);

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
      {post.length ? (
        <Grid templateColumns="repeat(3, 1fr)" gap="2em">
          <AnimatePresence>
            {isVisible &&
              post.map((data, i) => (
                <CardArticle {...data} key={data.frontmatter.title} />
              ))}
          </AnimatePresence>
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
