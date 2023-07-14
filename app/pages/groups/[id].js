import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { GroupDetails, ScreenHeaderLeft, ScreenHeaderRight } from "../../../components";
import { COLORS } from "../../../constants";
import { groups } from "../../../constants/groups";

const Group = () => {
  const params = useSearchParams();
  const [group, setGroup] = useState({});
  const searchGroupDetails = () => {
    const groupDetails = groups.find((group) => group.id == params.id);
    setGroup(groupDetails);
  };
  useEffect(() => {
    searchGroupDetails();
  }, []);

  return (
    <SafeAreaView >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            headerBackVisible: true,
          },
          headerShadowVisible: false,
          // headerLeft: () => ,
          // headerRight: () => <ScreenHeaderLeft />,
          headerTitle: `${group.title}`,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
          {group ? (
            <GroupDetails group={group} />
          ) : (
            <Text>No group found</Text>
          )}
        </View>
      </ScrollView>
      {/* <NewPostButton /> */}
    </SafeAreaView>
  );
};

export default Group;

const styles = StyleSheet.create({});
