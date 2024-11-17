import React from "react";
import { View, StyleSheet } from "react-native";
import OpportunityWheel from "../../components/OpportunityWheel";

const OpportunityWheelScreen = () => {
  return (
    <View style={styles.container}>
      <OpportunityWheel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
});

export default OpportunityWheelScreen;
