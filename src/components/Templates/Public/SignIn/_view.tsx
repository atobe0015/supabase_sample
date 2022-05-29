import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(({ signIn }) => {
  return (
    <FormProvider {...signIn.methods}>
      <form onSubmit={signIn.onSubmit}>
        <div>
          メールアドレス：
          <input type="text" {...signIn.fields.email} />
        </div>
        <div>
          パスワード
          <input type="password" {...signIn.fields.password} />
        </div>
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  )
})
