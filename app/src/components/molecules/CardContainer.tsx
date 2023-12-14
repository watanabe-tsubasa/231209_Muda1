import { useBonnouContext } from "../../Hooks/contextHooks";
import { BonnouCard } from "./BonnouCard";
import { Flex } from "@chakra-ui/react";


export const CardContainer = () => {
  const context = useBonnouContext();
  const { bonnouList } = context;

  return (
    <Flex
     justify='center'
     align='center'
     py='2'
     width='100%'
     wrap='wrap'
    >
      {bonnouList.map((elem, idx) => (
         <BonnouCard title={elem} key={idx} />
      ))}
    </Flex>
  )
}