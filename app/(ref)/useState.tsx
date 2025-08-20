import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import tw from "twrnc";

export default function TodoList() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, `${items.length + 1}`]);
  };
  const clearItems = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log("useState items", items);
    setItems(["1", "2"]);
  }, []);

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Use State</Text>
      {items.map((item, index) => (
        <Text key={index} style={tw`text-gray-800 mb-2`}>
          {item}
        </Text>
      ))}
      <View style={tw`flex-row gap-2 mt-4`}>
        <TouchableOpacity
          style={tw`border w-20 flex items-center rounded`}
          onPress={addItem}
        >
          <Text>add item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`border w-20 flex items-center rounded`}
          onPress={clearItems}
        >
          <Text>clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
