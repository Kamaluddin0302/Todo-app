import React from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
  }
  showModal = () => {
    Alert.alert(
      "Are You sure To Logout",
      "",
      [
        {
          text: "No",
          onPress: () => this.setState({ login: false }),
          style: "cancel"
        },
        { text: "Yes", onPress: () => this.setState({ login: true }) }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>This Is Modal box Page</Text>
        <View style={styles.buttonView}>
          <Button
            style={styles.LoginButton}
            onPress={() => this.showModal()}
            title="Show modal box"
          />
        </View>
      </View>
    );
  }
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
