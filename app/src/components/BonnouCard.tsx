import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Skeleton } from "@chakra-ui/react"

interface BonnouCardProps {
  title: string
}

export const BonnouCard: React.FC<BonnouCardProps> = ({ title }) => {

  return (
    <Box p='2'>
      <Card>
        <CardHeader>
          <Heading size='md'>
            {title}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Skeleton height='200px' />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button>払う</Button>
        </CardFooter>
      </Card>
    </Box>
  )
}