import { useMutation } from 'react-query'

import { MutationConfig } from '@/libs/react-query'
import { supabase } from '@/libs/supabase'

const getAuthUser = async (jwt_token: string) => {
  return await supabase.auth.api.getUser(jwt_token)
}

export const useGetAuthUser = (config: MutationConfig<typeof getAuthUser>) => {
  return useMutation({
    mutationFn: getAuthUser,
    ...config,
  })
}

type CreateUserProps = {
  email: string
  password: string
  options?: {
    redirectTo?: string
    data?: object
    captchaToken?: string
  }
}
const signUpUser = async ({ email, password, options }: CreateUserProps) => {
  return await supabase.auth.api.signUpWithEmail(email, password, options)
}

export const useSignUpUserUser = (config: MutationConfig<typeof signUpUser>) => {
  return useMutation({
    mutationFn: signUpUser,
    ...config,
  })
}
