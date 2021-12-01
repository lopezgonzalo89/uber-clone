import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "",
    screen: "MapScreen",
  },
  {
    id: "123",
    title: "Get a ride",
    image: "",
    screen: "MapScreen",
  },
  {
    id: "123",
    title: "Get a ride",
    image: "",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title } }) => (
        <TouchableOpacity>
          <Text>{title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
