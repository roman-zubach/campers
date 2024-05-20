import { useState, useEffect } from 'react';

type Timeout = ReturnType<typeof setTimeout>;

export const useSuccessMessage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let timeout: Timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isSubmitted]);

  return {
    isSubmitted,
    setIsSubmitted,
  };
};
