import { useRouter } from 'next/router'
import { useEffect } from 'react'

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = () => {
  const Router = useRouter()
  useEffect(() => {
    console.log(Router)
  }, [])

  return {}
}
