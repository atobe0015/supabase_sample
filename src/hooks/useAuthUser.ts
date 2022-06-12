import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { MutationConfig } from '@/libs/react-query'
import { supabase } from '@/libs/supabase'

import { useAuthTokenMutators, useAuthTokenState } from '@/stores/authToken'
import { useAuthUserMutators } from '@/stores/authUser'

const getAuthUser = async (jwtToken: string) => {
  return await supabase.auth.api.getUser(jwtToken)
}

export const useGetAuthUser = (config: MutationConfig<typeof getAuthUser>) => {
  return useMutation({
    mutationFn: getAuthUser,
    ...config,
  })
}

type CreateUserDTO = {
  email: string
  password: string
}

const signUpFn = async ({ email, password }: CreateUserDTO) => {
  return await supabase.auth.api.signUpWithEmail(email, password)
}

export const useSignUp = (config: MutationConfig<typeof signUpFn>) => {
  return useMutation({
    mutationFn: signUpFn,
    ...config,
  })
}

type SignInUserDTO = {
  email: string
  password: string
}
const signInFn = async ({ email, password }: SignInUserDTO) => {
  return await supabase.auth.api.signInWithEmail(email, password)
}

export const useSignIn = (config: MutationConfig<typeof signInFn>) => {
  const { setAuthToken } = useAuthTokenMutators()
  const { setAuthUser } = useAuthUserMutators()
  const Router = useRouter()
  return useMutation({
    mutationFn: signInFn,
    onSuccess: (response) => {
      if (response.data?.user) {
        setAuthToken(response.data.access_token)
        const { role, id, email } = response.data.user
        setAuthUser({
          role,
          id,
          email,
        })
        Router.push('/dashboard')
      }
    },
    ...config,
  })
}

const signOutFn = async (authToken: string | null) => {
  if (!authToken) return false
  return await supabase.auth.api.signOut(authToken)
}

export const useSignOut = (config: MutationConfig<typeof signOutFn>) => {
  const authToken = useAuthTokenState()

  return useMutation({
    mutationFn: () => signOutFn(authToken),
    ...config,
    onSuccess: () => {},
  })
}
