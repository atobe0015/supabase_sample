import { ChakraProvider as _ChakraProvider } from '@chakra-ui/react'
import { memo } from 'react'

import { ChakraTheme } from './_theme'

export const ChakraProvider = memo(({ children }) => {
  return <_ChakraProvider theme={ChakraTheme}>{children}</_ChakraProvider>
})
