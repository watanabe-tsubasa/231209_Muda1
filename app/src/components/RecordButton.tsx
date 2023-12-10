import { Box, Button, ButtonGroup, Text, VStack } from "@chakra-ui/react"
import { useSpeechRecognition } from "../Hooks/useSpeechRecognition";
import { useContext } from "react";
import { BonnouContext } from "../Contexts/BonnouContext";

export const RecordButton = () => {
  const {
    transcript,
    isListening,
    error,
    startListening,
    stopListening,
    resetTrascript
  } = useSpeechRecognition();

  const context = useContext(BonnouContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { setBonnouList } = context;

  const sender = () => {
    setBonnouList(currentBonnou => ([...currentBonnou, transcript]))
    resetTrascript();
  }

  return(
    <Box>
      <VStack justify='center' align='center'>
        <ButtonGroup>
          <Button onClick={startListening} disabled={isListening}>
            煩悩を呟く
          </Button>
          <Button onClick={stopListening} disabled={!isListening}>
            煩悩を止める
          </Button>
          <Button onClick={sender} disabled={!isListening}>
            リセット
          </Button>
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