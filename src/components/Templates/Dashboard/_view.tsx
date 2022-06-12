import { memo } from 'react'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(({ authUser }) => {
  return (
    <div>
      <div>
        <p>ID：</p>
        <p>{authUser?.id}</p>
      </div>
      <div>
        <p>メールアドレス：</p>
        <p>{authUser?.email}</p>
      </div>
    </div>
  )
})
