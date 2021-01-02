export interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

export interface FormProps {
  hasError: boolean;
}
