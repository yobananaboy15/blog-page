import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { BlogPost } from "../../App";

type BlogPostProps = {
  blogPosts: BlogPost[];
};

export const BlogPosts = ({ blogPosts }: BlogPostProps) => {
  return (
    <div>
      {blogPosts.map(({ title, leadParagraph, date }) => (
        <Card>
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
          <Typography>{leadParagraph}</Typography>
          <Typography>{date.toLocaleDateString()}</Typography>
          <CardActions>
            <Button size="small">Läs blogginlägg</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
