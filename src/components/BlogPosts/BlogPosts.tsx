import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { BlogPost } from "App";
import { BlogPostModal } from "components/BlogPostModal";
import { useState } from "react";

type BlogPostProps = {
  setSelectedBlogPost: (blogPosts: BlogPost) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (blogPost: BlogPost[]) => void;
};

export const BlogPosts = ({
  setSelectedBlogPost,
  blogPosts,
  setBlogPosts,
}: BlogPostProps) => {
  const [blogPostToEdit, setBlogPostToEdit] = useState<BlogPost>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addBlogPost = (blogPost: BlogPost) => {
    setBlogPosts([blogPost, ...blogPosts]);
  };

  const editBlogPost = (updatedBlogPost: BlogPost) => {
    const newBlogPosts = blogPosts.map((blogPost) =>
      blogPost.id === updatedBlogPost.id ? updatedBlogPost : blogPost
    );
    setBlogPosts(newBlogPosts);
  };

  const deleteBlogPost = (removeBlogPostId: string) => {
    setBlogPosts(
      blogPosts.filter((blogPost) => blogPost.id !== removeBlogPostId)
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setModalIsOpen(true)}
        sx={{ mb: 2 }}
      >
        Skapa blogginlägg
      </Button>
      <Grid container spacing={2}>
        {blogPosts.map((blogPost) => (
          <Grid key={blogPost.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography>{blogPost.title}</Typography>
                <Typography>{blogPost.leadParagraph}</Typography>
                <Typography>
                  {blogPost.date.toLocaleDateString("sv-SE")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => setSelectedBlogPost(blogPost)}
                >
                  Läs
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    setBlogPostToEdit(blogPost);
                    setModalIsOpen(true);
                  }}
                >
                  Redigera
                </Button>
                <Button
                  size="small"
                  onClick={() => deleteBlogPost(blogPost.id)}
                >
                  Radera
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {modalIsOpen && (
        <BlogPostModal
          isOpen={modalIsOpen}
          onClose={() => {
            setModalIsOpen(false);
            setBlogPostToEdit(undefined);
          }}
          blogPostToEdit={blogPostToEdit}
          submitHandler={blogPostToEdit ? editBlogPost : addBlogPost}
        />
      )}
    </div>
  );
};
