import { Box, Button, ButtonGroup, Text, VStack } from "@chakra-ui/react"
import { useSpeechRecognition } from "../../Hooks/useSpeechRecognition";
import { useBonnouContext } from "../../Hooks/contextHooks";

export const RecordButton = () => {
  
  const {
    transcript,
    isListening,
    error,
    startListening,
    stopListening,
    resetTrascript
  } = useSpeechRecognition();

  const context = useBonnouContext();
  const { setBonnouList, bonnouCount } = context;

  const sender = () => {
    if(transcript === '') { return }
    setBonnouList(currentBonnou => ([...currentBonnou, transcript]))
    resetTrascript();
  }

  return(
    <Box>
      <VStack justify='center' align='center'>
        <Box p={4}>
          <Text fontSize='x-large'>
              払った煩悩：<span style={{
                fontSize: 'xx-large',
                fontWeight: 'bolder'
                }}>{bonnouCount}</span>
          </Text>
        </Box>
        <ButtonGroup>
          <Button
           onClick={!isListening? startListening: stopListening}
          //  disabled={isListening}
           style={{
            backgroundColor: !isListening ? '#3182CE': '',
            color: !isListening ? 'whitesmoke': 'black',
           }}
          >
            {!isListening? '煩悩を吐き出す': '休憩する'}
          </Button>
          {(transcript !== '') ? 
          <Button
           onClick={sender}
           disabled={!isListening}
           style={{
            backgroundColor: '#3182CE',
            color: 'whitesmoke'
           }}
          >
            煩悩を神に捧げる
          </Button>: <div></div>}
        </ButtonGroup>
        <Box py={2}>
          <Text>
            {error && <p>Error: {error}</p>}
            {transcript || '煩悩を数えろ'}
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}