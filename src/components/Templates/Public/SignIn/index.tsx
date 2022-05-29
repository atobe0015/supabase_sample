import { useHook } from './_hook'
import { View } from './_view'

export const Page = () => {
  const overrideProps = useHook()
  return <View {...overrideProps} />
}
