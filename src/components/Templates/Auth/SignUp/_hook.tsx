import { useForm } from 'react-hook-form'

import { useSignUpUserUser } from '@/hooks/useAuthUser'

const useSignUpForm = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const SignUpUserMutation = useSignUpUserUser({})

  const onSubmit = methods.handleSubmit(async () => {
    const reqBody = methods.getValues()
    const response = await SignUpUserMutation.mutateAsync(reqBody)
  })

  const fields = {
    email: methods.register('email'),
    password: methods.register('password'),
  }

  return { methods, fields, onSubmit }
}

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = () => {
  const form = useSignUpForm()
  return { form }
}
