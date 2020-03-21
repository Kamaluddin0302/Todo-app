import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Camera from "./src/component/Camera/camera";
import Login from "./src/component/Login/login";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
  }

  Login = () => {
    this.setState({
      login: false
    });
  };

  Logout = () => {
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
        {this.state.login ? (
          <Login Login={this.Login} />
        ) : (
          <Camera Logout={this.Logout} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
