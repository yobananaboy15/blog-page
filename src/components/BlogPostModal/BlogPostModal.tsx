import { BlogPost } from "App";

type SharedProps = {
  isOpen: boolean;
  onClose: () => void;
  submitHandler: (blogPost: BlogPost) => void;
};
type ConditionalProps =
  | { mode: "EDIT"; blogPost: BlogPost }
  | { mode: "ADD"; blogPost?: never };
type BlogPostModalProps = SharedProps & ConditionalProps;

export const BlogPostModal = ({
  blogPost,
  mode,
  isOpen,
  onClose,
}: BlogPostModalProps) => {
  return <div>BlogPostModal</div>;
};
