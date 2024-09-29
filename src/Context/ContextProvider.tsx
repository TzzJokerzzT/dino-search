import { createContext, useRef, useState } from "react";

import { useProfileFetch } from "@/hooks/useProfileFetch";
import { BASE_URL } from "@/utils/Constant";
import { ContextType, ProfileProps, ProviderProps } from "@/types";

export const Context = createContext<ContextType>({
  isLoading: false,
  error: { status: "", message: "" },
  login: "",
  id: 0,
  avatar_url: "",
  html_url: "",
  name: "",
  blog: "",
  location: "",
  bio: "",
  twitter_username: "",
  public_repos: 0,
  followers: 0,
  following: 0,
  created_at: "",
  CardHeaderBannerRef: { current: null },
  CardHeaderBannerPreviewRef: { current: null },
  GitHubUserCardRef: { current: null },
  BannerGradientOneRef: { current: null },
  BannerGradientTwoRef: { current: null },
  CompanyIconRef: { current: null },
  handleSubmit: () => {},
  handleChange: () => {},
  onDelete: () => {},
  theme: "dark",
  setTheme: () => {},
  inputValue: "TzzJokerzzT",
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("dark" || "light");
  const { profile, isLoading, error } = useProfileFetch(
    BASE_URL,
    userName === "" ? "TzzJokerzzT" : userName
  );

  const {
    login,
    id,
    avatar_url,
    html_url,
    name,
    blog,
    location,
    bio,
    twitter_username,
    public_repos,
    followers,
    following,
    created_at,
  } = profile as ProfileProps;

  const CardHeaderBannerRef = useRef(null);
  const CardHeaderBannerPreviewRef = useRef(null);
  const GitHubUserCardRef = useRef(null);
  const BannerGradientOneRef = useRef(null);
  const BannerGradientTwoRef = useRef(null);
  const CompanyIconRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = () => {
    setInputValue("");
  };

  return (
    <Context.Provider
      value={{
        inputValue,
        isLoading,
        error,
        login,
        id,
        avatar_url,
        html_url,
        name,
        blog,
        location,
        bio,
        twitter_username,
        public_repos,
        followers,
        following,
        created_at,
        CardHeaderBannerRef,
        CardHeaderBannerPreviewRef,
        GitHubUserCardRef,
        BannerGradientOneRef,
        BannerGradientTwoRef,
        CompanyIconRef,
        handleSubmit,
        handleChange,
        onDelete: handleDelete,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
