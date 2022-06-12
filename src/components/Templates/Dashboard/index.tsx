import { AuthGuard } from '@/components/Domain/Authentication/AuthGuard'

import { useHook } from './_hook'
import { View } from './_view'

export const Page = () => {
  const renderProps = useHook()
  return (
    <AuthGuard>
      <View {...renderProps} />
    </AuthGuard>
  )
}
