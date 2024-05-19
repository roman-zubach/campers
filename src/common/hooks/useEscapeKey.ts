import { useCallback, useEffect } from 'react';

export const useEscapeKey = (callback: () => void) => {
  const handleEsc = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code === 'Escape') callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);
};
