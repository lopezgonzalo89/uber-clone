import React from "react";
import { View, SafeAreaView, Image } from "react-native";

import tw from "tailwind-react-native-classnames";

import NavOptions from "../components/NavOptions";
import uberLogo from "../assets/uber-logo.png";

const styles = {
  safeAreaVIew: tw`bg-white h-full`,
  view: tw`p-5`,
  image: { width: 100, height: 100, resizeMode: "contain" },
};

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaVIew}>
      <View style={styles.view}>
        <Image style={styles.image} source={uberLogo} />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
