import '@/styles/global.scss'
import { QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { ChakraProvider } from '@/libs/chakraUI'
import { queryClient } from '@/libs/react-query'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
