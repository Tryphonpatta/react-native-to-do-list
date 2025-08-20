import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "twrnc";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const user = "pattad";

  const addTask = async () => {
    if (task.trim() !== "") {
      setTodos([...todos, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>To-Do List 📝</Text>

      <View style={tw`flex-row mb-4`}>
        <TextInput
          style={tw`flex-1 border border-gray-400 rounded px-3 py-2 bg-white`}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity
          style={tw`ml-2 bg-blue-500 px-4 py-2 rounded`}
          onPress={addTask}
        >
          <Text style={tw`text-white font-bold`}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => removeTask(index)}
            style={tw`bg-white px-4 py-3 rounded mb-2 shadow`}
          >
            <Text style={tw`text-gray-800`}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
