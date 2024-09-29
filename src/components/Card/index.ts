import { useContext } from "react";

import { Context } from "@/Context/ContextProvider";

export const Index = () => {
  const { created_at, blog } = useContext(Context);
  const crete_at_date = new Date(created_at);

  const day = crete_at_date.getDate();
  const month = crete_at_date.toLocaleString("default", { month: "short" });
  const year = crete_at_date.getFullYear();

  const CREATE_AT = `${month} ${day}, ${year}`;

  if (blog) {
    blog.replace("https://", "");
  }
  const WEBSITE = blog;

  return { WEBSITE, CREATE_AT };
};
