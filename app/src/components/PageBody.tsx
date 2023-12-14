import { Box, Image, Text, VStack } from "@chakra-ui/react"
import { useBonnouContext } from "../Hooks/contextHooks"
import { CardContainer } from "./molecules/CardContainer"
import { JoyaBellModal } from "./molecules/JoyaBellModal"
import { RecordButton } from "./molecules/RecordButton"


export const PageBody = () => {

  const context = useBonnouContext();
  const { bonnouCount } = context;

  return ( (bonnouCount >= 108) ? 
    <VStack
     width='100%'
     height='85vH'
     justify='center'
     align='center'
    >
      <Text fontSize='larger'>108の煩悩を払ったあなたは解脱し</Text>
      <Image src='./monk.png' />
      <Text fontSize='larger'>僧として生涯を仏に尽くしました</Text>
    </VStack>:
    <Box>
      <RecordButton />
      <CardContainer />
      <JoyaBellModal />
    </Box>
  )
}