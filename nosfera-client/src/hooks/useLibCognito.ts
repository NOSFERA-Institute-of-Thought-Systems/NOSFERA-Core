import { useState, useEffect } from 'react';

// TypeScript interface for our C++ module
interface CognitoModule {
  get_version: () => string;
  // We will add more functions here later
}

// This is a global variable created by libcognito.js
declare const Module: () => Promise<CognitoModule>;

export const useLibCognito = () => {
  const [module, setModule] = useState<CognitoModule | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // When the component mounts, we call the global 'Module' function
    // which returns a Promise that resolves with our C++ functions.
    Module().then((instance) => {
      setModule(instance);
      setIsLoaded(true);
    });
  }, []); // The empty array ensures this runs only once.

  return { module, isLoaded };
};