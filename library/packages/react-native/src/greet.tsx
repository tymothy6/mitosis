import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useState } from "react";

function Greet(props: any) {
  const [name, setName] = useState(() => "");

  return (
    <View>
      <View
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <View>
        <Text>Hello, </Text>
        <Text>{name}</Text>
        <Text>!</Text>
      </View>
    </View>
  );
}

export default Greet;
