import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

export default function AuthLayout() {
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot />
    </SafeAreaView>
  )
}