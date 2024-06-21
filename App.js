import Home from "./src/Screens/Home";
import Navigation from "./src/Navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/Constants/Colors";
import DetailScreen from "./src/Screens/DetailScreen";

export default function App() {

  return (
    <>
      {/* <DetailScreen /> */}
      <Navigation />
      <StatusBar style="light" backgroundColor={Colors.MainColor} />
    </>
  );
}


