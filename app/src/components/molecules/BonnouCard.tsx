import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Skeleton } from "@chakra-ui/react"
import { useJoyaBellContext } from "../../Hooks/contextHooks";

interface BonnouCardProps {
  title: string
}

export const BonnouCard: React.FC<BonnouCardProps> = ({ title }) => {

  const jContext = useJoyaBellContext();
  const { setSelectedBonnou, onOpen } = jContext;
  const onClickClearMind = () => {
    setSelectedBonnou(title);
    onOpen?.();
  }

  return (
    <Box p='2'>
      <Card minW='300px' align='center'>
        <CardHeader>
          <Heading size='md'>
            {title}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody justifyContent='center'>
          <Skeleton w='200px' h='200px' />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
           onClick={onClickClearMind}
           colorScheme='blue'
           w='200px'
          >
            払  う
          </Button>
        </CardFooter>
      </Card>
    </Box>
  )
}