import { Box, Button, Typography } from "@mui/material";
import { BlogPost } from "App";

type BlogPostProps = {
  blogPost: BlogPost;
  goBackCallback: () => void;
};

export const BlogPostView = ({ blogPost, goBackCallback }: BlogPostProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button onClick={goBackCallback}>Gå tillbaka</Button>
      <Box sx={{ maxWidth: 400, overflowWrap: "break-word" }}>
        <Typography variant="h3">{blogPost.title}</Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          {blogPost.leadParagraph}
        </Typography>
        <Typography variant="body1">{blogPost.text}</Typography>
        <Typography variant="body2">{blogPost.author}</Typography>
        <Typography variant="body2">{blogPost.authorEmail}</Typography>
        <Typography variant="body2">
          {blogPost.date.toLocaleDateString("sv-SE")}
        </Typography>
      </Box>
    </Box>
  );
};
