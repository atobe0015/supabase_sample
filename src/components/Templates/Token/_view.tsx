import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(({ form }) => {
  return (
    <FormProvider {...form.methods}>
      <form onSubmit={form.onSubmit}>
        <div>
          メールアドレス：
          <input type="text" {...form.fields.email} />
        </div>
        <div>
          パスワード
          <input type="password" {...form.fields.password} />
        </div>
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  )
})
