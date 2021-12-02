import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import tw from "tailwind-react-native-classnames";

import uberX from "../assets/UberX.webp";
import food from "../assets/food.png";
import { Icon } from "react-native-elements";

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

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title, image } }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
          </View>
          <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
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

const styles = StyleSheet.create({});
