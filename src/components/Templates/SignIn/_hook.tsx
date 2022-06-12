import { useForm } from 'react-hook-form'

import { useSignIn } from '@/hooks/useAuthUser'

const useSignInForm = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const SignUpUserMutation = useSignIn({})

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
  const signIn = useSignInForm()
  return { signIn }
}
