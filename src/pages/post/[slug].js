import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { _mapProps } from "../../_mapMarkdownProps";
import fs from "fs";
import matter from "gray-matter";

export function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export const Post = ({ frontmatter, content }) => {
  return (
    <Box width={["100%", "90%", "80%", "62em"]} margin="auto">
      <div>
        <ReactMarkdown {..._mapProps({})} children={content} />
      </div>
    </Box>
  );
};

export default Post;
