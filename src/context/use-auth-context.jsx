"use client";
const { createContext, useState, useContext } = require("react");

const authContext = createContext({
  currentStep: 1,
  setCurrentStep: () => {},
});

const { Provider } = authContext;

export const AuthContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const values = { currentStep, setCurrentStep };
  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContextHook = () => {
  const state = useContext(authContext);
  return state;
};
