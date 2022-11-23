import { Container, Typography } from "@mui/material";
import { BlogPostView } from "components/BlogPostView";
import { BlogPosts } from "components/BlogPosts";
import { useState } from "react";

export type BlogPost = {
  id: string;
  title: string;
  leadParagraph: string;
  text: string;
  author: string;
  authorEmail: string;
  date: Date;
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost>();

  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
        Bloggsida
      </Typography>
      {selectedBlogPost ? (
        <BlogPostView
          goBackCallback={() => setSelectedBlogPost(undefined)}
          blogPost={selectedBlogPost}
        />
      ) : (
        <BlogPosts
          setSelectedBlogPost={setSelectedBlogPost}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </Container>
  );
}

export default App;
