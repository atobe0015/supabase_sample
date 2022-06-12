import { Box, FormControl, Input } from '@chakra-ui/react'
import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(({ signIn }) => {
  return (
    <FormProvider {...signIn.methods}>
      <Box as="form" onSubmit={signIn.onSubmit}>
        <FormControl>
          <Input {...signIn.fields.email} />
        </FormControl>
        <FormControl>
          <Input {...signIn.fields.password} />
        </FormControl>
      </Box>
    </FormProvider>
  )
})
