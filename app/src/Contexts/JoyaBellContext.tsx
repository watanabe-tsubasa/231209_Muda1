import { UseDisclosureProps, useDisclosure } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface JoyabellContextType extends UseDisclosureProps {
  selectedBonnou: string;
  setSelectedBonnou: Dispatch<SetStateAction<string>>;
}

interface JoyaBellProviderProps {
  children: ReactNode;
}

export const JoyaBellContext = createContext<JoyabellContextType | null>(null);

export const JoyaBellProvider: React.FC<JoyaBellProviderProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedBonnou, setSelectedBonnou] = useState<string>('');
  const contextValue: JoyabellContextType = {
    selectedBonnou,
    setSelectedBonnou,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <JoyaBellContext.Provider value={contextValue}>
      {children}
    </JoyaBellContext.Provider>
  )
}