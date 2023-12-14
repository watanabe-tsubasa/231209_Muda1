import { useContext } from "react";
import { JoyaBellContext } from "../Contexts/JoyaBellContext";
import { BonnouContext } from "../Contexts/BonnouContext";

export const useJoyaBellContext = () => {
  const context = useContext(JoyaBellContext);
  if (context === null) {
      throw new Error('useJoyaBellContext must be used within a MyContextProvider');
  }
  return context;
}

export const useBonnouContext = () => {
  const context = useContext(BonnouContext);
  if (context === null) {
      throw new Error('useJoyaBellContext must be used within a MyContextProvider');
  }
  return context;
}
