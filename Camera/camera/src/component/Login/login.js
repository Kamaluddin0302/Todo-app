import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Modal from "./../modal/modal";
export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>This Is Login Page</Text>
      <View style={styles.buttonView}>
        <Button
          style={styles.LoginButton}
          onPress={() => props.Login()}
          title="Login To Camera"
        />

        
        {/* <Modal /> */}
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
    fontFamily: "serif",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20
  },
  buttonView: {
    width: "70%",
    borderRadius: 70
  },
  LoginButton: {
    fontFamily: "serif",
    fontSize: 55,
    fontWeight: "bold"
  }
});
