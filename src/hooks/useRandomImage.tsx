import { useCallback } from "react";

const useRandomImage = () => {
  const randomizeImage = useCallback((id) => {
    return `https://loremflickr.com/640/480/flower?random=${id}`;
  }, []);

  return randomizeImage;
};

export default useRandomImage;
