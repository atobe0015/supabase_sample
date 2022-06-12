import { InferGetStaticPropsType } from 'next'

export type GetStaticPropsReturn = InferGetStaticPropsType<typeof getStaticProps>
export const getStaticProps = () => {
  return {
    props: {},
  }
}

export type UseHookReturn = ReturnType<typeof useHook>
export const useHook = (props: GetStaticPropsReturn) => {
  return { ...props }
}
