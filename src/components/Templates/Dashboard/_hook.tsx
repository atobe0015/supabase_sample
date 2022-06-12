import { useAuthUserState } from '@/stores/authUser'

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = () => {
  const authUser = useAuthUserState()
  return { authUser }
}
