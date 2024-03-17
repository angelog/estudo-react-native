import '@/styles/global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import { Loading } from '@/components/loading'

import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto'
export default function Layout() {
    const [loadFont] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })
    if (!loadFont) {
        return <Loading />
    }
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style='light' />
            <Slot />
        </GestureHandlerRootView>
    )
}