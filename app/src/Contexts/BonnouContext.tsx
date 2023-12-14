import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface BonnouContextType {
  bonnouList: string[];
  setBonnouList: Dispatch<SetStateAction<string[]>>;
  bonnouCount: number;
  setBonnouCount: Dispatch<SetStateAction<number>>;
}

interface BonnouProviderProps {
  children: ReactNode;
}

export const BonnouContext = createContext<BonnouContextType | null>(null);

export const BonnouProvider: React.FC<BonnouProviderProps> = ({ children }) => {
  const [bonnouList, setBonnouList] = useState<string[]>([
    'test_Bonnnou1',
    'test_Bonnnou0',
  ]);
  const [bonnouCount, setBonnouCount] = useState(0);
  const contextValue: BonnouContextType = { bonnouList, setBonnouList, bonnouCount, setBonnouCount};

  return (
    <BonnouContext.Provider value={contextValue}>
      {children}
    </BonnouContext.Provider>
  )
}