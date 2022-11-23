import { Container, Typography } from "@mui/material";
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
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Bloggsida
      </Typography>
      {selectedBlogPost ? (
        <div>Blogginlägg</div>
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
