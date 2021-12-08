import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";

import tw from "tailwind-react-native-classnames";

import uberX from "../assets/UberX.webp";
import food from "../assets/food.png";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: uberX,
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: food,
    screen: "EatsScreen",
  },
];

const styles = {
  touchableOpacityStyle: tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`,
  text: tw`mt-2 text-lg font-semibold`,
  icon: tw`p-2 bg-black rounded-full w-10 mt-4`,
  image: { width: 120, height: 120, resizeMode: "contain" },
};

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title, image, screen } }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(screen)}
          style={styles.touchableOpacityStyle}
        >
          <View>
            <Image style={styles.image} source={image} />
          </View>
          <Text style={styles.text}>{title}</Text>
          <Icon
            style={styles.icon}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
