import { Heading, Container, SimpleGrid } from '@chakra-ui/react'
import { memo } from 'react'

import { SignInForm } from '@/components/Domain/Authentication/SignIn'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(() => {
  return (
    <SimpleGrid minH="100vh" placeItems="center">
      <Container>
        <Heading textAlign="center" mb={8}>
          備品チェックシステム
        </Heading>
        <SignInForm />
      </Container>
    </SimpleGrid>
  )
})
