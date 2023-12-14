import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useDeviceMotion } from "../Hooks/useDeviceMotion";
import { useBonnouContext, useJoyaBellContext } from "../Hooks/contextHooks";


export const JoyaBellModal = () => {

  const { acceleration } = useDeviceMotion();
  console.log(acceleration);

  const jContext = useJoyaBellContext();
  const bContext = useBonnouContext();
  const { 
    selectedBonnou,
    isOpen,
    onClose,
  } = jContext

  const{ bonnouList, setBonnouList } = bContext;
  const clearMind = () => {
    const newBonnouList = bonnouList.filter(bonnou => (bonnou !== selectedBonnou))
    setBonnouList(newBonnouList);
  }
  const onClickTestButton = () => {
    clearMind();
    onClose?.();
  }

  return (
    <>
      <Modal isOpen={isOpen ?? false} onClose={onClose ?? (() => {})}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='x-large'>{selectedBonnou}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
             fontSize='x-large'
             color='orangered'
            >
              Hit the Bell with your Phone !!
            </Text>
            <Image src='./joya_bell.png' />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme='blue' w='200px' onClick={onClickTestButton}>
              払うのをやめる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}