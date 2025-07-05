import { Redirect, Slot } from 'expo-router'

const TabLayout = () => {
  const isAuthenticated = false
  if(!isAuthenticated) return <Redirect href="/(auth)/sign-in"/>
  return (
    <Slot />
  )
}

export default TabLayout