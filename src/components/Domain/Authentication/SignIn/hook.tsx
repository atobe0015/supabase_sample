import { useForm } from 'react-hook-form'

import { useSignInMutation } from '@/hooks/useAuthUser'

export const useSignInForm = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const SignUpUserMutation = useSignInMutation()

  const onSubmit = methods.handleSubmit(async () => {
    const reqBody = methods.getValues()
    await SignUpUserMutation.mutateAsync(reqBody)
  })

  const fields = {
    email: methods.register('email', {
      required: true,
    }),
    password: methods.register('password', {
      required: true,
    }),
  }

  const isDisabled = !methods.formState.isValid

  return { methods, fields, isDisabled, SignUpUserMutation, onSubmit }
}
