import { memo } from 'react'

import { GetCurrentUserQueryFactory } from '@/hooks/useAuthUser'
import { useAuthTokenState } from '@/stores/authToken'

export const AuthGuard = ({ children }) => {
  const token = useAuthTokenState()

  const getMeQuery = GetCurrentUserQueryFactory({
    token: token ?? '',
  })

  if (getMeQuery.isSuccess) return <>{children}</>
  if (getMeQuery.isError) return <>ログインしてください</>
  return <>loading...</>
}
