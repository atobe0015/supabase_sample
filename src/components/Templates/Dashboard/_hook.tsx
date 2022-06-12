import { SupabaseClient } from '@supabase/supabase-js'

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = () => {
  return { authUser: null }
}
