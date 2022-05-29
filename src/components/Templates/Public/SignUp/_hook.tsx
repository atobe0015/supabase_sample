import { useForm } from 'react-hook-form'

import { useSignUp } from '@/hooks/useAuthUser'

const useSignUpForm = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const SignUpUserMutation = useSignUp({})

  const onSubmit = methods.handleSubmit(async () => {
    const reqBody = methods.getValues()
    await SignUpUserMutation.mutateAsync(reqBody)
  })

  const fields = {
    email: methods.register('email'),
    password: methods.register('password'),
  }

  return { methods, fields, onSubmit }
}

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = () => {
  const signUp = useSignUpForm()
  return { signUp }
}
