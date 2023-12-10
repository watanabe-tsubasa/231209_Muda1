import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface BonnouContextType {
  bonnouList: string[];
  setBonnouList: Dispatch<SetStateAction<string[]>>;
}

interface BonnouProviderProps {
  children: ReactNode;
}

export const BonnouContext = createContext<BonnouContextType | null>(null);

export const BonnouProvider: React.FC<BonnouProviderProps> = ({ children }) => {
  const [bonnouList, setBonnouList] = useState<string[]>([]);
  const contextValue: BonnouContextType = { bonnouList, setBonnouList};

  return (
    <BonnouContext.Provider value={contextValue}>
      {children}
    </BonnouContext.Provider>
  )
}