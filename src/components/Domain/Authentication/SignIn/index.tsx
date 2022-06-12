import { Button, FormControl, Box, Input, SimpleGrid, FormLabel } from '@chakra-ui/react'
import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { ErrorMessages } from '@/components/UIParts/Form/ErrorMessages'

import { useSignInForm } from './hook'

export const SignInForm = memo(() => {
  const signIn = useSignInForm()
  return (
    <FormProvider {...signIn.methods}>
      {signIn.SignUpUserMutation.error && (
        <ErrorMessages message={signIn.SignUpUserMutation.error.message} />
      )}
      <SimpleGrid as="form" onSubmit={signIn.onSubmit} rowGap={4}>
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input {...signIn.fields.email} />
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input {...signIn.fields.password} />
        </FormControl>
        <Button type="submit" disabled={signIn.isDisabled}>
          ログイン
        </Button>
      </SimpleGrid>
    </FormProvider>
  )
})
