import Home from "./src/Screens/Home";
import Navigation, { MainNavigation } from "./src/Navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/Constants/Colors";
import DetailScreen from "./src/Screens/DetailScreen";
import DetailsScreens from "./src/Screens/DetailsScreens";

export default function App() {

  return (
    <>
      {/* <DetailsScreens /> */}
      <DetailScreen  />
      {/* <MainNavigation /> */}
      <StatusBar style="light" backgroundColor={Colors.MainColor} />
    </>
  );
}


