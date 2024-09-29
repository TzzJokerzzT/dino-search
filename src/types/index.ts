import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ProviderProps {
  children: React.ReactNode;
}

export interface ProfileProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export type ContextType = {
  inputValue: string;
  isLoading: boolean;
  error: { status: string; message: string };
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  CardHeaderBannerRef: React.MutableRefObject<any>;
  CardHeaderBannerPreviewRef: React.MutableRefObject<any>;
  GitHubUserCardRef: React.MutableRefObject<any>;
  BannerGradientOneRef: React.MutableRefObject<any>;
  BannerGradientTwoRef: React.MutableRefObject<any>;
  CompanyIconRef: React.MutableRefObject<any>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
