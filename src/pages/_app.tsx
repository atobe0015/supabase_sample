import '@/styles/global.scss'
import { QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { queryClient } from '@/libs/react-query'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
