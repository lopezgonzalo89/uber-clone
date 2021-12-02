import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import uberLogo from "../assets/uber-logo.png";
import NavOptions from "../components/NavOptions";
const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: uberLogo }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
