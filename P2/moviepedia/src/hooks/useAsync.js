import { useState } from "react";

function useAsync(asyncFuction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFuction = async (...args) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFuction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };
  return [pending, error, wrappedFuction];
}

export default useAsync;
