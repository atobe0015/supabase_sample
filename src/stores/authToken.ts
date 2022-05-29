import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { localForageEffect } from '@/utils/presistStores'

type AuthToken = string

const AuthTokenRecoilState = atom<AuthToken | null>({
  key: 'AuthToken',
  default: null,
  effects: [localForageEffect('authToken')],
})

export const useAuthTokenState = () => {
  return useRecoilValue(AuthTokenRecoilState)
}

export const useAuthTokenMutators = () => {
  const setState = useSetRecoilState(AuthTokenRecoilState)

  const setAuthToken = useCallback((authToken: AuthToken) => setState(authToken), [setState])

  const clearAuthToken = useCallback(() => setState(null), [setState])

  return { setAuthToken, clearAuthToken }
}
