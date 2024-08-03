import Navigation, { MainNavigation } from "./src/Navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/Constants/Colors";
import DetailScreen from "./src/Screens/DetailScreen";
import SystemNavigationBar from 'react-native-system-navigation-bar';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ContextState from "./src/GlobalState/ContextState";
import VideoScreen from "./src/Screens/VideoScreen";
import { useEffect } from "react";


export default function App() {




  useEffect(() => {
    const Hiding = async () => {
      await SystemNavigationBar.navigationHide();
    }
    Hiding()

  }, [])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ContextState>
        {/* <MainNavigation /> */}
        <VideoScreen />
        <StatusBar style="light" backgroundColor={Colors.MainColor} />
      </ContextState>
    </GestureHandlerRootView>
  );
}


