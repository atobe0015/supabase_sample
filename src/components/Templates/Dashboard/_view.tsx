import { memo } from 'react'

import { useGetCurrentUserData } from '@/hooks/useAuthUser'

import { UseHookReturn } from './_hook'

export const View = memo<UseHookReturn>(() => {
  const currentUser = useGetCurrentUserData()

  return (
    <div>
      <div>
        <p>ID：</p>
        <p>{currentUser?.id}</p>
      </div>
      <div>
        <p>メールアドレス：</p>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  )
})
