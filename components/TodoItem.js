import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, removeTodo }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => removeTodo(item.key)}>
      <MaterialIcons name="delete" size={24} color="black" />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 20,
  },
});
export default TodoItem;
