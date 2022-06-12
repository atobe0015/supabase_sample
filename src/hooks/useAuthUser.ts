import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { z } from 'zod'

import { ExtractFnReturnType, MutationConfig, queryClient, QueryConfig } from '@/libs/react-query'
import { supabase } from '@/libs/supabase'

import { useAuthTokenMutators, useAuthTokenState } from '@/stores/authToken'
import { useAuthUserMutators } from '@/stores/authUser'

const getCurrentUser = async (jwtToken: string) => {
  if (!jwtToken) return
  const { data, error } = await supabase.auth.api.getUser(jwtToken)
  if (error) throw error
  return data
}

type UseGetCurrentUser = {
  token: string
  config?: QueryConfig<typeof getCurrentUser>
}
export const GetCurrentUserQueryFactory = (
  { token, config }: UseGetCurrentUser = {
    token: '',
    config: {},
  },
) => {
  return useQuery<ExtractFnReturnType<typeof getCurrentUser>>({
    queryKey: ['getCurrentUser', token],
    queryFn: () => getCurrentUser(token),
    ...config,
  })
}

export const useGetCurrentUserData = () => {
  const token = useAuthTokenState()
  const currentUserData = queryClient.getQueryData<User>(['getCurrentUser', token])
  return currentUserData
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

export const SignInUserDTO = z.object({
  email: z.string(),
  password: z.string(),
})

const signInFn = async (reqBody: z.infer<typeof SignInUserDTO>) => {
  const { email, password } = SignInUserDTO.parse(reqBody)
  const { data, error } = await supabase.auth.api.signInWithEmail(email, password)
  if (error) throw error
  return data
}

export const useSignInMutation = (config: MutationConfig<typeof signInFn> = {}) => {
  const { setAuthToken } = useAuthTokenMutators()
  const { setAuthUser } = useAuthUserMutators()
  const Router = useRouter()
  return useMutation({
    mutationFn: signInFn,
    onSuccess: (response) => {
      if (response?.user) {
        setAuthToken(response.access_token)
        const { role, id, email } = response.user
        setAuthUser({
          role,
          id,
          email,
        })
        Router.push('/dashboard')
      }
    },
    onError: async (error) => {
      return error
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
