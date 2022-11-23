import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { BlogPost } from "App";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { validateEmail } from "utils/validateEmail";

type BlogPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  submitHandler: (blogPost: BlogPost) => void;
  blogPostToEdit?: BlogPost;
};

type FormState = Omit<BlogPost, "id" | "date">;

export const BlogPostModal = ({
  blogPostToEdit,
  submitHandler,
  isOpen,
  onClose,
}: BlogPostModalProps) => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    leadParagraph: "",
    text: "",
    author: "",
    authorEmail: "",
  });

  const handleChange = <K extends keyof FormState>(
    value: FormState[K],
    key: K
  ) => {
    setFormState({ ...formState, [key]: value });
  };

  const onSubmit = () => {
    if (!validateEmail(formState.authorEmail)) {
      return;
    }
    if (blogPostToEdit) {
      submitHandler({ ...formState, id: blogPostToEdit.id, date: new Date() });
    } else {
      //Add a new blog post
      submitHandler({ ...formState, id: uuidv4(), date: new Date() });
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen && blogPostToEdit) {
      //Destructure only the part needed for the form
      const { id, date, ...formState } = blogPostToEdit;
      setFormState(formState);
    }
  }, [isOpen, blogPostToEdit]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{`${
        blogPostToEdit ? "Redigera" : "Skapa"
      } blogginlägg`}</DialogTitle>
      <DialogContent>
        <TextField
          value={formState.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          margin="dense"
          fullWidth
          name="title"
          label="Rubrik"
          type="text"
          inputProps={{ maxLength: 50 }}
        />
        <TextField
          value={formState.leadParagraph}
          onChange={(e) => handleChange(e.target.value, "leadParagraph")}
          margin="dense"
          fullWidth
          name="leadParagraph"
          label="Ingress"
          type="text"
          inputProps={{ maxLength: 250 }}
          multiline
          rows={2}
        />
        <TextField
          value={formState.text}
          onChange={(e) => handleChange(e.target.value, "text")}
          margin="dense"
          fullWidth
          name="text"
          label="Innehåll"
          type="text"
          multiline
          rows={3}
        />
        <TextField
          value={formState.author}
          onChange={(e) => handleChange(e.target.value, "author")}
          margin="dense"
          fullWidth
          name="author"
          label="Författare"
          type="text"
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          value={formState.authorEmail}
          onChange={(e) => handleChange(e.target.value, "authorEmail")}
          margin="dense"
          fullWidth
          name="email"
          label="E-post"
          type="email"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          Avbryt
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {blogPostToEdit ? "Uppdatera" : "Skapa"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
