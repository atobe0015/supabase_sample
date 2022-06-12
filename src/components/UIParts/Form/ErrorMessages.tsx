import { Box } from '@chakra-ui/react'
import { memo } from 'react'

type ErrorMessagesProps = {
  message?: string
}
export const ErrorMessages = memo<ErrorMessagesProps>(({ message = '' }) => {
  return (
    <Box p={2} bgColor="red.100">
      {message}
    </Box>
  )
})
