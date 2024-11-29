export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  name: string;
  confirmPassword: string;
}

export interface AuthProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  onSubmit: (values: LoginFormData | SignupFormData) => Promise<void>;
}

export interface SocialLoginProps {
  isLoading: boolean;
  isLogin: boolean;
  onGoogleLogin: () => Promise<void>;
  // onGithubLogin: () => Promise<void>;
}

export interface PostData {
  id: string;
  title: string;
  description: string;
  location: string;
  created_at: string;
  likes_count: number;
  liked: boolean;
  comments: number;
  user: {
    first_name: string;
    last_name: string;
    name: string;
    avatar: string;
    email: string;
  };
  tags: string[];
}

export interface CreatePostData {
  title: string;
  description: string;
  location?: string; // Optional location for the post
  userId: string; // User ID from auth.users in Supabase
}

export interface FormValues {
  title: string;
  description: string;
  location: string;
  tags?: any;
}

export enum TabTypes {
  Feed = "feed",
  MyPosts = "my-posts",
  CreatePost = "create-post",
};

export type TabType = TabTypes.Feed | TabTypes.MyPosts | TabTypes.CreatePost;