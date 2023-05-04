import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Home, ScreenHeaderLeft, ScreenHeaderRight } from "../components";
import { FontAwesome } from "@expo/vector-icons";

const Index = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const NewPostButton = () => {
    return (
      <TouchableOpacity style={styles.NewPostBtn}>
        <FontAwesome name="plus" size={18} color="white" />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderLeft />,
          headerRight: () => <ScreenHeaderRight />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Home />
        </View>
      </ScrollView>
      <NewPostButton />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  NewPostBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height:50,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 32,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
