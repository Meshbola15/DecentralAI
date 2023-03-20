import React, { useContext, useRef } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <AppContext.Provider
      value={{
        homeRef,
        aboutRef,
        tokenomicsRef,
        roadmapRef,
        faqRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
