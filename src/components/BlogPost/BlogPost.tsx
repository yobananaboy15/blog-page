import { Box, Button, Typography } from "@mui/material";
import { BlogPost as BlogPostType } from "App";

type BlogPostProps = {
  blogPost: BlogPostType;
  goBackCallback: () => void;
};

export const BlogPost = ({ blogPost, goBackCallback }: BlogPostProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button onClick={goBackCallback}>Gå tillbaka</Button>
      <div>
        <Typography variant="h3">{blogPost.title}</Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          {blogPost.leadParagraph}
        </Typography>
        <Typography variant="body1">{blogPost.text}</Typography>
        <Typography variant="body2">
          {blogPost.date.toLocaleDateString("sv-SE")}
        </Typography>
        <Typography variant="body2">{blogPost.author}</Typography>
        <Typography variant="body2">{blogPost.authorEmail}</Typography>
      </div>
    </Box>
  );
};
