import { useEffect, useState } from "react";

export const useProfileFetch = (url: string, name: string) => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: "", message: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}${name}`);
        const data = await response.json();

        setProfile(data);
        if (data.status === "404") {
          setError({ ...error, status: data.status, message: data.message });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [url, name]);

  return { profile, isLoading, error };
};
