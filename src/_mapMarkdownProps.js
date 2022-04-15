import TeX from "@matejmazur/react-katex";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Heading, Text, Code } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// function customNotesPlugin() {
//   return (tree) => {
//     visit(tree, (node) => {
//       // console.log(node);
//       if (node.type === "math") {
//         const data = node.data || (node.data = {});
//         console.log(node);
//         const hast = h(node.type, node.attributes);
//         data.hName = hast.tagName;
//         data.hProperties = hast.properties;
//         console.log(data);
//       }
//     });
//   };
// }

export const _mapProps = ({}) => ({
  // escapeHtml: false,
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
  components: {
    h1: (props) => (
      <Heading
        my={3}
        as="h1"
        size="xl"
        paddingY={".75rem"}
        borderBottom="1px"
        borderColor="rgba(255,255,255, 0.5)"
      >
        {props.children}
      </Heading>
    ),
    h2: (props) => (
      <Heading
        my={3}
        as="h2"
        size="lg"
        fontWeight="600"
        paddingY={".75rem"}
        borderBottom="1px"
        borderColor="rgba(255,255,255, 0.5)"
      >
        {props.children}
      </Heading>
    ),
    h3: (props) => (
      <Heading my={3} size="md" as="h3" fontWeight="600">
        {props.children}
      </Heading>
    ),
    h4: (props) => (
      <Heading my={3} as="h4" size="sm" fontWeight="600">
        {props.children}
      </Heading>
    ),
    h5: (props) => (
      <Heading my={3} as="h5" size="xs" fontWeight="600">
        {props.children}
      </Heading>
    ),
    h6: (props) => (
      <Heading my={3} as="h6" size="xs" fontWeight="600">
        {props.children}
      </Heading>
    ),
    p: ({ children }) => <Text lineHeight="2">{children}</Text>,
    code: ({ children }) => (
      <Code
        bg="#273037"
        p={1}
        pr={4}
        width={"100%"}
        boxSizing="border-box"
        borderRadius={"lg"}
      >
        <SyntaxHighlighter
          showLineNumbers={true}
          language="haskell"
          style={atomOneDark}
          children={String(children).replace(/\n$/, "")}
          customStyle={{ background: "transparent" }}
        />
      </Code>
    ),
    math: (props) => {
      return <TeX>{props.children[0]}</TeX>;
    },
    inlineMath: (props) => {
      return { children };
    },
  },
});
