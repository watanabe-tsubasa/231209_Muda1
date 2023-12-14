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
  const [bonnouList, setBonnouList] = useState<string[]>([
    'test_Bonnnou18',
    'test_Bonnnou17',
    'test_Bonnnou16',
    'test_Bonnnou15',
    'test_Bonnnou14',
    'test_Bonnnou13',
    'test_Bonnnou12',
    'test_Bonnnou11',
    'test_Bonnnou10',
    'test_Bonnnou9',
    'test_Bonnnou8',
    'test_Bonnnou7',
    'test_Bonnnou6',
    'test_Bonnnou5',
    'test_Bonnnou4',
    'test_Bonnnou3',
    'test_Bonnnou2',
    'test_Bonnnou1',
    'test_Bonnnou0',
  ]);
  const contextValue: BonnouContextType = { bonnouList, setBonnouList};

  return (
    <BonnouContext.Provider value={contextValue}>
      {children}
    </BonnouContext.Provider>
  )
}