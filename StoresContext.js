import React, { useState, createContext, useEffect, useMemo } from "react";
import { storesrequest, storesTransform } from "./StoresService";

export const StoresContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [stores, setStores] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  const [error, setError] = useState(null);

  const recuperarStores = () => {
    setisLoading(true);
    setTimeout(() => {
      storesrequest()
        .then(storesTransform)
        .then((results) => {
          setisLoading(false);
          setStores(results);
        })
        .catch((err) => {
          setisLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    recuperarStores();
  }, []);

  return (
    <StoresContext.Provider value={{ stores, isLoading, error }}>
      {children}
    </StoresContext.Provider>
  );
};
