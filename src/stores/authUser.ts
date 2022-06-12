import { User } from '@supabase/supabase-js'
import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { localForageEffect } from '@/utils/presistStores'

type AuthUser = Pick<User, 'id' | 'email' | 'role'>

const AuthUserRecoilState = atom<AuthUser | null>({
  key: 'AuthUser',
  default: null,
  effects: [localForageEffect('authUser')],
})

export const useAuthUserState = () => {
  console.log(AuthUserRecoilState)
  return useRecoilValue(AuthUserRecoilState)
}

export const useAuthUserMutators = () => {
  const setState = useSetRecoilState(AuthUserRecoilState)

  const setAuthUser = useCallback((user: AuthUser) => setState(user), [setState])

  const clearAuthUser = useCallback(() => setState(null), [setState])

  return { setAuthUser, clearAuthUser }
}
