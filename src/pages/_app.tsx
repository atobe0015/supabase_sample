import '@/styles/global.scss'
import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/libs/react-query'

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
