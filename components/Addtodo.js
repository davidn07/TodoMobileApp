import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button, Alert } from "react-native";

const Addtodo = ({ AddTodo }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo ..."
        onChangeText={changeHandler}
      />
      <Button title="Add Todo" onPress={() => AddTodo(text)} color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
export default Addtodo;
