import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(({ signUp }) => {
  return (
    <FormProvider {...signUp.methods}>
      <form onSubmit={signUp.onSubmit}>
        <div>
          メールアドレス：
          <input type="text" {...signUp.fields.email} />
        </div>
        <div>
          パスワード
          <input type="password" {...signUp.fields.password} />
        </div>
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  )
})
