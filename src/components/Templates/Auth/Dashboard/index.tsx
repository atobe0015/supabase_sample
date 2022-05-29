import { useHook } from './_hook'
import { View } from './_view'

export const Page = () => {
  const renderProps = useHook()
  return <View {...renderProps} />
}
