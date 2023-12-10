import { useContext } from "react"
import { BonnouContext } from "../Contexts/BonnouContext"
import { BonnouCard } from "./BonnouCard";
import { Flex } from "@chakra-ui/react";


export const CardContainer = () => {
  const context = useContext(BonnouContext);
  if (!context) {
    return <div>Loading...</div>;
  }
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