import { GetStaticPropsReturn, useHook } from './_hook'
import { View } from './_view'

export const Page = (props: GetStaticPropsReturn) => {
  const overrideProps = useHook(props)
  return <View {...overrideProps} />
}
