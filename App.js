import Home from "./src/Screens/Home";
import Navigation, { MainNavigation } from "./src/Navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/Constants/Colors";
import DetailScreen from "./src/Screens/DetailScreen";
import Cetegory from "./src/Screens/Cetegory";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ContextState from "./src/GlobalState/ContextState";
import VideoScreen from "./src/Screens/VideoScreen";

export default function App() {

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


